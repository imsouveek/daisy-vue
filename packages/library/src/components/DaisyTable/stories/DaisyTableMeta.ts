import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyTable from '../DaisyTable.vue'
import { sizes } from '../../../globals'

export const tableData = [
    {
        name: 'Fern',
        light: 'Low',
        height: '20cm',
        petFriendly: 'Yes',
        price: 20
    },
    {
        name: 'Snake Plant',
        light: 'Low',
        height: '50cm',
        petFriendly: 'No',
        price: 35
    },
    {
        name: 'Monstera',
        light: 'Medium',
        height: '60cm',
        petFriendly: 'No',
        price: 50
    },
    {
        name: 'Pothos',
        light: 'Low to medium',
        height: '40cm',
        petFriendly: 'Yes',
        price: 25
    },
    {
        name: 'ZZ Plant',
        light: 'Low to medium',
        height: '90cm',
        petFriendly: 'Yes',
        price: 30
    },
    {
        name: 'Spider Plant',
        light: 'Bright, indirect',
        height: '30cm',
        petFriendly: 'Yes',
        price: 15
    },
    {
        name: 'Air Plant',
        light: 'Bright, indirect',
        height: '15cm',
        petFriendly: 'Yes',
        price: 10
    },
    {
        name: 'Peperomia',
        light: 'Bright, indirect',
        height: '25cm',
        petFriendly: 'Yes',
        price: 20
    },
    {
        name: 'Aloe Vera',
        light: 'Bright, direct',
        height: '30cm',
        petFriendly: 'Yes',
        price: 15
    },
    {
        name: 'Jade Plant',
        light: 'Bright, direct',
        height: '40cm',
        petFriendly: 'Yes',
        price: 25
    }
]

export const slotTypes = ['Default', 'Header', 'Column Header', 'Row', 'Column', undefined] as const
export type SlotType = (typeof slotTypes)[number]

export type DaisyTableArgs = ComponentPropsAndSlots<typeof DaisyTable> & {
    useSlot?: SlotType
    useHeaderProp?: boolean
}

export const headers = [
    { key: 'name', label: 'Plant Name', align: 'right' },
    { key: 'petFriendly', width: '50%' },
    { key: 'light', label: 'Sunlight' }
]

export const slotStrings = {
    undefined: '',
    Default: `
                        <template #default="{data, headers}">
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
                        </template>`,
    Header: `
                        <template #header="{headers}">
                            <tr>
                                <th v-for="header in headers" :key="header.key">
                                    {{header.label?.toUpperCase()}}
                                </th>
                            </tr>
                        </template>`,
    'Column Header': `
                        <template #header.price>
                            $$
                        </template>`,
    Row: `
                        <template #item="{item}">
                            <td v-for="key in Object.keys(item)" :key="key">
                                {{typeof item[key] === 'string' && key !== 'height'? item[key].toUpperCase(): item[key]}}
                            </td>
                        </template>`,
    Column: `
                        <template #item.price="{itemValue}">
                            {{itemValue > 40? '$$$$$': itemValue < 25? '$': '$$$'}}
                        </template>`
}
export type DaisyTableMeta = Meta<DaisyTableArgs>

export const getMeta = (): DaisyTableMeta => ({
    title: 'Components/DaisyTable',
    component: DaisyTable,
    render: (args) => ({
        components: { DaisyTable },
        setup() {
            return {
                args,
                tableData,
                headers
            }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyTable v-bind="args" v-model="tableData" :headers="args.useHeaderProp? headers: undefined">
                    <template #default="{data, headers}" v-if="args.useSlot=='Default'">
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
                    <template #header="{headers}" v-if="args.useSlot=='Header'">
                        <tr>
                            <th v-for="header in headers" :key="header.key">
                                {{header.label?.toUpperCase()}}
                            </th>
                        </tr>
                    </template>
                    <template #header.price v-if="args.useSlot=='Column Header'">
                        $$
                    </template>
                    <template #item="{item}" v-if="args.useSlot == 'Row'">
                        <td v-for="key in Object.keys(item)" :key="key">
                            {{typeof item[key] === 'string' && key !== 'height'? item[key].toUpperCase(): item[key]}}
                        </td>
                    </template>
                    <template #item.price="{itemValue}" v-if="args.useSlot == 'Column'">
                        {{itemValue > 40? '$$$$$': itemValue < 25? '$': '$$$'}}
                    </template>
                </DaisyTable>
            </div>
        `
    }),
    parameters: {
        layout: 'centered',
        docs: {
            codePanel: true,
            source: {
                language: 'ts',
                transform: (_, context) => {
                    const { useHeaderProp, useSlot, ...TableArgs } = context.args

                    const renderedProps = Object.keys(TableArgs)
                        .map((key) =>
                            typeof TableArgs[key] === 'boolean'
                                ? TableArgs[key] === true
                                    ? key
                                    : ''
                                : `${key}="${TableArgs[key]}"`
                        )
                        .join(' ')
                        .trim()

                    let headersString = ''
                    if (useHeaderProp) {
                        // convert to "pretty Vue-safe" JSON
                        const jsonStr = JSON.stringify(headers, null, 2)
                            .replace(/"([^"]+)":/g, '$1:') // remove quotes around keys
                            .replace(/"/g, `'`) // use single quotes
                            .trim()

                        headersString = ` :headers="${jsonStr}"`
                    }

                    let slotString = slotStrings[useSlot]
                    if (!slotString) {
                        slotString = `/>`
                    } else {
                        slotString = `>${slotString}
                    </DaisyTable>`
                    }
                    return `
                        <template>
                    <DaisyTable v-model="tableData"${renderedProps ? ' ' + renderedProps : ''}${headersString}${slotString}
                </template>
                    `.trim()
                }
            }
        }
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: sizes
        },
        useSlot: {
            control: { type: 'select' },
            description: 'Type of slot used',
            options: slotTypes
        },
        useHeaderProp: {
            control: { type: 'boolean' },
            description: 'Indicate if custom header prop is used'
        }
    },
    args: {
        size: 'md',
        useSlot: undefined
    }
})

export type DaisyTableStory = StoryObj<DaisyTableMeta>
