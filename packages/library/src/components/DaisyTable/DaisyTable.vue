<script setup lang="ts">
import type { Sizes } from '../../globals'
import { computed, shallowRef, watch } from 'vue'

interface TableHeader {
    key: string
    label?: string
    align?: 'left' | 'center' | 'right'
    width?: string
}

const props = withDefaults(defineProps<{
    /** Table size */
    size?: Sizes
    /** Table headers */
    headers?: TableHeader[]
}>(), {
    size: 'md',
    headers: undefined
})

const rawData = defineModel<Record<string, any>[]>({ required: true })
const data = shallowRef(rawData.value ?? [])
const normalizedHeaders = shallowRef<TableHeader[]>([])

let keyCache = new WeakMap<Record<string, any>, string>()

watch(
    () => rawData.value,
    (newVal) => {
        data.value = newVal ?? []
        keyCache = new WeakMap() // clear cache when array replaced
    }
)

watch(
    () => props.headers,
    (newVal) => {
        if (newVal?.length) {
            normalizedHeaders.value = newVal.map(h => ({
                align: 'left',
                width: 'auto',
                ...h
            }))
        } else {
            normalizedHeaders.value = []
        }
    },
    { immediate: true, deep: false }
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

const sizeClass = computed(() => {
    return {
        xs: 'table-xs',
        sm: 'table-sm',
        md: 'table-md',
        lg: 'table-lg'
    }[props.size]
})

const classes = computed(() => {
    return [sizeClass.value]
})

const computedHeaders = computed<TableHeader[]>(() => {
    if (normalizedHeaders.value.length) {
        return normalizedHeaders.value
    }

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
        width: 'auto'
    }))
})
</script>

<template>
    <table class="table" :class="classes">
        <slot :data="data" :headers="computedHeaders">
            <thead>
                <slot name="header" :headers="computedHeaders">
                    <tr>
                        <th v-for="col in computedHeaders" :key="col.key" :style="{ width: col.width }" :class="{
                            'text-left': col.align === 'left',
                            'text-center': col.align === 'center',
                            'text-right': col.align === 'right'
                        }">
                            <slot :name="`header.${col.key}`">
                                {{ col.label }}
                            </slot>
                        </th>
                    </tr>
                </slot>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="getRowKey(item)">
                    <slot name="item" :item="item" :headers="computedHeaders" :rowKey="getRowKey(item)">
                        <td v-for="col in computedHeaders" :key="col.key" :style="{ width: col.width }" :class="{
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
