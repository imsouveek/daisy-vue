import {
    getMeta,
    tableData,
    slotTypes,
    type DaisyTableMeta,
    type DaisyTableStory
} from './DaisyTableMeta'
import DaisyTable from '../DaisyTable.vue'
import { sizes } from '../../../globals'
import './Variations.stories.css'

const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/DaisyTable',
    parameters: {
        ...meta.parameters,
        docs: {
            source: false
        }
    },
    argTypes: {
        ...srcArgTypes,
        label: {
            table: {
                disable: true
            }
        }
    }
} as DaisyTableMeta

function renderVariation(
    kind: 'size' | 'useSlot' | 'useHeaderProp' | 'sortable' | 'styling' | 'selectable',
    values: any[]
) {
    return (args: DaisyTableMeta['args']) => ({
        components: { DaisyTable },
        setup() {
            const smallSample = tableData.filter((_, i) => [0, 1, 6, 9].includes(i))
            const sample3Cols = smallSample.map((row) => {
                return Object.fromEntries(Object.entries(row).slice(0, 4))
            })

            const demoTitle = (val) => {
                if (kind !== 'styling' && kind !== 'sortable')
                    return val ? val.toString().toUpperCase() : 'UNDEFINED'
                return val.description.toUpperCase()
            }

            const wrapperClasses = (val) => {
                const returnValues = []
                if (args.customHover || (kind === 'styling' && (val.customHover ?? false)))
                    returnValues.push('custom-hover')
                if (args.customSelect || (kind === 'styling' && (val.customSelect ?? false)))
                    returnValues.push('custom-select')
                return returnValues
            }

            const verifySlot = (val, slotName) => {
                return (kind === 'useSlot' && val === slotName) || args.useSlot === slotName
            }

            const headers = (val) => {
                if ((kind === 'useHeaderProp' && val) || args.useHeaderProp) {
                    return [
                        { key: 'name', label: 'Plant Name', align: 'right' },
                        { key: 'petFriendly', width: '50%' },
                        { key: 'light', label: 'Sunlight' }
                    ]
                }

                if (kind === 'sortable') {
                    return val.headers
                }

                return undefined
            }

            const selectMode = (val) => {
                if (kind === 'styling' && val.customSelect) return 'multi'
                if (kind === 'selectable') return val
                if (kind === 'useSlot' && (val === 'Header Select' || val === 'Item Select'))
                    return 'multi'
                return args.selectable
            }

            return {
                args,
                data: sample3Cols,
                slotTypes,
                kind,
                values,
                demoTitle,
                wrapperClasses,
                verifySlot,
                headers,
                selectMode
            }
        },
        template: `
        <div class="grid grid-cols-2 gap-4"  >
            <div
                v-for="val in values"
                :key="val"
                class="flex flex-col items-center border border-dashed rounded border-base-content/20 p-2"
                :class="wrapperClasses(val)"
            >
                <h4 class="my-4">{{ demoTitle(val) }}</h4>
                <DaisyTable v-bind="{...args, [kind]: val, ...(kind === 'styling'? val: {})}" v-model="data" :headers="headers(val)" :selectable="selectMode(val)">
                    <template #default="{data, headers}" v-if="verifySlot(val,'Default')">
                        <tr>
                            <th v-for="header in headers" :key="header.key">
                                {{header.label}}
                            </th>
                        </tr>
                        <tr v-for="item in data" :key="item.name">
                            <td v-for="key in Object.keys(item)" :key="key">
                                {{item[key]}}
                            </td>
                        </tr>
                    </template>
                    <template #header="{headers}" v-if="verifySlot(val,'Header')">
                        <tr>
                            <th v-for="header in headers" :key="header.key">
                                {{header.label?.toUpperCase()}}
                            </th>
                        </tr>
                    </template>
                    <template #header.light v-if="verifySlot(val,'Column Header')">
                        ☀️
                    </template>
                    <template #item="{item}" v-if="verifySlot(val,'Row')">
                        <td v-for="key in Object.keys(item)" :key="key">
                            {{typeof item[key] === 'string' && key !== 'height'? item[key].toUpperCase(): item[key]}}
                        </td>
                    </template>
                    <template #item.petFriendly="{itemValue}" v-if="verifySlot(val,'Column')">
                        {{itemValue === 'Yes'? '✔️' : '✖️'}}
                    </template>
                    <template #header.select="{selectType, selectAllFn, isAll}" v-if="verifySlot(val, 'Header Select')">
                        <button class='btn' @click="selectType === 'multi' && selectAllFn()" :class="isAll? 'btn-primary': 'btn-secondary'">
                            All
                        </button>
                    </template>
                    <template #item.select v-if="verifySlot(val, 'Item Select')">
                        <!-- Intentionally left blank -->
                        <span/>
                    </template>
                </DaisyTable>
            </div>
        </div>
    `
    })
}
export const Sizes: DaisyTableStory = {
    argTypes: {
        ...srcArgTypes,
        size: {
            control: false
        }
    },
    render: renderVariation('size', [...sizes] as DaisyTableMeta['args']['size'][])
}

export const TableStyling: DaisyTableStory = {
    argTypes: {
        ...srcArgTypes,
        striped: {
            control: false
        },
        hover: {
            control: false
        },
        customHover: {
            control: false
        },
        selectable: {
            control: false
        }
    },
    render: renderVariation('styling', [
        { description: 'None', striped: false, hover: false },
        { description: 'Striped Only', striped: true, hover: false },
        { description: 'Hover Only', striped: false, hover: true },
        { description: 'Both striped and hover', striped: true, hover: true },
        { description: 'Custom hover', striped: true, hover: true, customHover: true },
        { description: 'Custom select', striped: true, hover: true, customSelect: true },
        {
            description: 'Custom hover and select',
            striped: true,
            hover: true,
            customHover: true,
            customSelect: true
        }
    ])
}

export const HeaderProperty: DaisyTableStory = {
    argTypes: {
        ...srcArgTypes,
        useHeaderProp: {
            control: false
        }
    },
    render: renderVariation('useHeaderProp', [
        false,
        true
    ] as DaisyTableMeta['args']['useHeaderProp'][])
}

export const SlotTypes: DaisyTableStory = {
    argTypes: {
        ...srcArgTypes,
        useSlot: {
            control: false
        },
        selectable: {
            control: false
        }
    },
    render: renderVariation('useSlot', [...slotTypes] as DaisyTableMeta['args']['useSlot'][])
}

export const SortFunction: DaisyTableStory = {
    argTypes: {
        ...srcArgTypes
    },
    render: renderVariation('sortable', [
        {
            description: 'Pre-sorted',
            headers: [
                {
                    key: 'name',
                    label: 'Plant Name',
                    sort: { order: 'descending', sequence: 2 }
                },
                { key: 'petFriendly', label: 'Pet Friendly' },
                {
                    key: 'light',
                    label: 'Sunlight',
                    sort: { order: 'ascending', sequence: 1 }
                }
            ]
        },
        {
            description: 'Custom comparator on Sunlight',
            headers: [
                {
                    key: 'name',
                    label: 'Plant Name'
                },
                { key: 'petFriendly', label: 'Pet Friendly' },
                {
                    key: 'light',
                    label: 'Sunlight',
                    comparator: (a: string, b: string): number => {
                        const values = [
                            'Low',
                            'Low to medium',
                            'Medium',
                            'Bright, indirect',
                            'Bright, direct'
                        ]
                        const aPos = values.indexOf(a)
                        const bPos = values.indexOf(b)
                        return aPos - bPos
                    }
                }
            ]
        },
        {
            description: 'Pre-sorted, sorting disabled',
            headers: [
                {
                    key: 'name',
                    label: 'Plant Name',
                    sortable: false,
                    sort: { order: 'descending', sequence: 2 }
                },
                { key: 'petFriendly', label: 'Pet Friendly', sortable: false },
                {
                    key: 'light',
                    label: 'Sunlight',
                    sortable: false,
                    sort: { order: 'ascending', sequence: 1 }
                }
            ]
        }
    ])
}

export const SelectRows: DaisyTableStory = {
    argTypes: {
        ...srcArgTypes,
        selectable: {
            control: false
        }
    },
    render: renderVariation('selectable', [
        'no',
        'one',
        'multi'
    ] as DaisyTableMeta['args']['selectable'][])
}
