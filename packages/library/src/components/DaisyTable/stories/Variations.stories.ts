import {
    getMeta,
    tableData,
    headers,
    slotTypes,
    type DaisyTableMeta,
    type DaisyTableStory
} from './DaisyTableMeta'
import DaisyTable from '../DaisyTable.vue'
import { sizes } from '../../../globals'

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

function renderVariation(kind: 'size' | 'useSlot' | 'useHeaderProp' | 'sortable', values: any[]) {
    return (args: DaisyTableMeta['args']) => ({
        components: { DaisyTable },
        setup() {
            const smallSample = tableData.slice(0, 4)
            const sample3Cols = smallSample.map((row) => {
                return Object.fromEntries(Object.entries(row).slice(0, 4))
            })
            return {
                args,
                data: sample3Cols,
                headers,
                slotTypes,
                kind,
                values
            }
        },
        template: `
        <div class="grid grid-cols-2 gap-4"  >
            <div v-for="val in values" :key="val" class="flex flex-col items-center bg-base-200 p-2">
                <h4 class="my-4" v-if="kind !== 'sortable'">{{ val ? val.toString().toUpperCase() : 'UNDEFINED' }}</h4>
                <h4 class="my-4" v-else">{{ val.description.toUpperCase() }}</h4>
                <DaisyTable v-bind="{...args, [kind]: val}" v-model="data" :headers="kind === 'useHeaderProp' && val? headers: kind === 'sortable'? val.headers: undefined">
                    <template #default="{data, headers}" v-if="kind === 'useSlot' && val === 'Default'">
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
                    <template #header="{headers}" v-if="kind === 'useSlot' && val === 'Header'">
                        <tr>
                            <th v-for="header in headers" :key="header.key">
                                {{header.label?.toUpperCase()}}
                            </th>
                        </tr>
                    </template>
                    <template #header.light v-if="kind === 'useSlot' && val === 'Column Header'">
                        ☀️
                    </template>
                    <template #item="{item}" v-if="kind === 'useSlot' && val === 'Row'">
                        <td v-for="key in Object.keys(item)" :key="key">
                            {{typeof item[key] === 'string' && key !== 'height'? item[key].toUpperCase(): item[key]}}
                        </td>
                    </template>
                    <template #item.petFriendly="{itemValue}" v-if="kind === 'useSlot' && val === 'Column'">
                        {{itemValue === 'Yes'? '✔️' : '✖️'}}
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
        }
    },
    render: renderVariation('useSlot', [...slotTypes] as DaisyTableMeta['args']['useSlot'][])
}

export const SortFunction: DaisyTableStory = {
    argTypes: {
        ...srcArgTypes,
        useSlot: {
            control: false
        }
    },
    render: renderVariation('sortable', [
        {
            description: 'Pre-sorted',
            headers: [
                {
                    key: 'name',
                    label: 'Plant Name',
                    sort: { order: 'descending', sequence: 1 }
                },
                { key: 'petFriendly', label: 'Pet Friendly' },
                {
                    key: 'light',
                    label: 'Sunlight',
                    sort: { order: 'ascending', sequence: 2 }
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
                    sort: { order: 'descending', sequence: 1 }
                },
                { key: 'petFriendly', label: 'Pet Friendly', sortable: false },
                {
                    key: 'light',
                    label: 'Sunlight',
                    sortable: false,
                    sort: { order: 'ascending', sequence: 2 }
                }
            ]
        }
    ])
}
