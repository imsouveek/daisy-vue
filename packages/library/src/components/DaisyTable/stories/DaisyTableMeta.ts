import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyTable from '../DaisyTable.vue'
import { sizes } from '../../../globals'

export type DaisyTableArgs = ComponentPropsAndSlots<typeof DaisyTable> & {
    label?: string
}

export type DaisyTableMeta = Meta<DaisyTableArgs>

export const getMeta = (): DaisyTableMeta => ({
    title: 'Components/DaisyTable',
    component: DaisyTable,
    render: (args) => ({
        components: { DaisyTable },
        setup() {
            return { args }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyTable v-bind="args" v-html="args.label" />
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
                    const { label, ...TableArgs } = context.args

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

                    return `
                        <template>
                            <DaisyTable${renderedProps ? ' ' + renderedProps : ''}>
                                ${label}
                            </DaisyTable>
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
        label: {
            control: 'text',
            description: 'Table label'
        }
    },
    args: {
        label: 'TEST'
    }
})

export type DaisyTableStory = StoryObj<DaisyTableMeta>
