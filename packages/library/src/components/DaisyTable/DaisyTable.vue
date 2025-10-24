<script setup lang="ts">
import type { Sizes } from '../../globals'
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import DaisyBadge from '../DaisyBadge/DaisyBadge.vue'

interface TableHeader {
    key: string
    label?: string
    align?: 'left' | 'center' | 'right'
    width?: string
    sortable?: boolean
    sort?: {
        order?: 'none' | 'ascending' | 'descending'
        sequence?: number
    }
    comparator?: (a: any, b: any) => number
}

const props = withDefaults(defineProps<{
    /** Table size */
    size?: Sizes
    /** Table headers */
    headers?: TableHeader[],
    /** Show striped rows */
    striped?: boolean
}>(), {
    size: 'md',
    headers: undefined,
    striped: false
})

const rawData = defineModel<Record<string, any>[]>({ required: true })
const data = ref(rawData.value ?? [])
const normalizedHeaders = ref<TableHeader[]>([])

/***********************************************************************************/
/* Working with Table Data                                                         */
/***********************************************************************************/
let keyCache = new WeakMap<Record<string, any>, string>()

watch(
    () => rawData.value,
    (newVal) => {
        data.value = newVal ?? []
        keyCache = new WeakMap() // clear cache when array replaced
    }
)

function hashRow(item: Record<string, any>): string {
    if (keyCache.has(item)) return keyCache.get(item)!
    if ('id' in item && typeof item.id !== 'object') return String(item.id)
    if ('key' in item && typeof item.key !== 'object') return String(item.key)

    const json = JSON.stringify(item)
    let hash = 0
    for (let i = 0; i < json.length; i++) hash = (hash << 5) - hash + json.charCodeAt(i)
    const key = hash.toString()
    keyCache.set(item, key)
    return key
}

const getRowKey = (item: Record<string, any>) => hashRow(item)

/***********************************************************************************/
/* Working with Table Headers                                                      */
/***********************************************************************************/
const defaultComparator = (a: any, b: any): number => {
    if (a === b) return 0

    // Handle nullish values gracefully
    if (a == null && b == null) return 0
    if (a == null) return -1
    if (b == null) return 1

    return a > b ? 1 : -1
}

const defaultHeaders = () => {
    // fallback: derive headers from data keys
    const firstRow = data.value?.[0]
    if (!firstRow) return []

    return Object.keys(firstRow).map((key) => ({
        key,
        label: key
            .split(/[^a-zA-Z0-9]+|(?<=[a-z])(?=[A-Z])/)
            .map(part =>
                part === part.toUpperCase()
                    ? part
                    : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
            )
            .join(' '),
        align: 'left',
        width: 'auto',
        sortable: true,
        sort: {
            order: 'none',
            sequence: 0
        },
        comparator: defaultComparator
    })) as TableHeader[]
}

watch(
    [() => props.headers, () => data.value],
    ([headers, rows]) => {
        if (headers?.length) {
            normalizedHeaders.value = headers.map(h => ({
                align: 'left',
                width: 'auto',
                sortable: true,
                sort: { order: 'none', sequence: 0 },
                comparator: defaultComparator,
                ...h
            }))
        } else if (rows?.length) {
            normalizedHeaders.value = defaultHeaders()
        }
    },
    { immediate: true }
)

/***********************************************************************************/
/* Working with Table Styles                                                       */
/***********************************************************************************/
const sizeClass = computed(() => {
    return {
        xs: 'table-xs',
        sm: 'table-sm',
        md: 'table-md',
        lg: 'table-lg'
    }[props.size]
})

const zebraClass = computed(() => props.striped ? 'table-zebra' : '')

const classes = computed(() => {
    return [sizeClass.value, zebraClass.value]
})

/***********************************************************************************/
/* Table Sort Handling                                                             */
/***********************************************************************************/
const sortedData = computed(() => {
    // find all active sorts ordered by sequence
    const active = normalizedHeaders.value
        .filter(c => c.sort?.order && c.sort.order !== 'none')
        .sort((a, b) => (a.sort!.sequence ?? 0) - (b.sort!.sequence ?? 0))

    // nothing active? return as is
    if (!active.length) return data.value

    // otherwise, return sorted copy
    return [...data.value].sort((a, b) => {
        for (const col of active) {
            const key = col.key
            const order = col.sort!.order
            const res = col.comparator(a[key], b[key])
            if (res === 0) continue
            return order === 'ascending' ? res : -res
        }
        return 0
    })
})

const toggleSort = (header: TableHeader, event: MouseEvent) => {
    // determine next order
    const current = header.sort?.order ?? 'none'
    const nextOrder =
        current === 'none'
            ? 'ascending'
            : current === 'ascending'
                ? 'descending'
                : 'none'

    const isMeta = event.metaKey || event.ctrlKey
    if (!isMeta) {
        // clear all existing sorts first
        normalizedHeaders.value.forEach(h => {
            h.sort = { ...h.sort, order: 'none', sequence: 0 }
        })

        // apply new order for this column
        if (nextOrder !== 'none') {
            header.sort = { ...header.sort, order: nextOrder, sequence: 1 }
        } else {
            header.sort = { ...header.sort, order: 'none', sequence: 0 }
        }

        return
    }

    // update order
    header.sort = { ...header.sort, order: nextOrder }

    // when order becomes active, assign or refresh sequence
    if (nextOrder !== 'none') {
        // use the next available sequence number
        const maxSeq = Math.max(
            0,
            ...normalizedHeaders.value.map(c => c.sort?.sequence ?? 0)
        )
        header.sort.sequence =
            header.sort.sequence && header.sort.sequence > 0
                ? header.sort.sequence // keep existing number if already present
                : maxSeq + 1
    } else {
        // reset if user cycles back to "none"
        header.sort.sequence = 0
    }

    // Normalize sequences to always start from 1 sequentially ---
    const active = normalizedHeaders.value
        .filter(h => h.sort?.order && h.sort.order !== 'none')
        .sort((a, b) => (a.sort!.sequence ?? 0) - (b.sort!.sequence ?? 0))

    active.forEach((h, i) => {
        h.sort!.sequence = i + 1
    })
}

</script>

<template>
    <table class="table table-pin-rows rounded-none" :class="classes">
        <slot :data="sortedData" :headers="normalizedHeaders">
            <thead>
                <slot name="header" :headers="normalizedHeaders">
                    <tr>
                        <th v-for="col in normalizedHeaders" :key="col.key" :style="{ width: col.width }">
                            <component :is="col.sortable ? 'button' : 'div'"
                                @click="col.sortable && toggleSort(col, $event)" class="flex gap-1 select-none w-full"
                                :class="[{
                                    'cursor-pointer': col.sortable,
                                    'opacity-80': !col.sortable
                                }, {
                                    'justify-start': col.align === 'left',
                                    'justify-center': col.align === 'center',
                                    'justify-end': col.align === 'right'
                                }]">
                                <slot :name="`header.${col.key}`">
                                    {{ col.label }}
                                    <daisy-badge v-if="col.sort?.order !== 'none'" color="ghost">
                                        <Icon v-if="col.sort?.order === 'ascending'" icon="mdi:chevron-up"
                                            class="w-4 h-4" />
                                        <Icon v-if="col.sort?.order === 'descending'" icon="mdi:chevron-down"
                                            class="w-4 h-4" />
                                    </daisy-badge>
                                    <daisy-badge v-if="col.sort.sequence > 0" color="ghost">
                                        {{ col.sort.sequence }}
                                    </daisy-badge>
                                </slot>
                            </component>
                        </th>
                    </tr>
                </slot>
            </thead>
            <tbody>
                <tr v-for="item in sortedData" :key="getRowKey(item)">
                    <slot name="item" :item="item" :headers="normalizedHeaders" :rowKey="getRowKey(item)">
                        <td v-for="col in normalizedHeaders" :key="col.key" :style="{ width: col.width }" :class="{
                            'text-left': col.align === 'left',
                            'text-center': col.align === 'center',
                            'text-right': col.align === 'right'
                        }">
                            <slot :name="`item.${col.key}`" :rowKey="getRowKey(item)" :itemKey="col.key"
                                :itemValue="item[col.key]">
                                {{ item[col.key] }}
                            </slot>
                        </td>
                    </slot>
                </tr>
            </tbody>
        </slot>
    </table>
</template>
