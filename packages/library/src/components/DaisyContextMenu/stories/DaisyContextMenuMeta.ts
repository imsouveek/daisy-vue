import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyContextMenu from '../DaisyContextMenu.vue'
import { sizes } from '../../../globals'

export type DaisyContextMenuArgs = ComponentPropsAndSlots<typeof DaisyContextMenu> & {
    label?: string
}

export type DaisyContextMenuMeta = Meta<DaisyContextMenuArgs>

export const getMeta = (): DaisyContextMenuMeta => ({
    title: 'Components/DaisyContextMenu',
    component: DaisyContextMenu,
    render: (args) => ({
        components: { DaisyContextMenu },
        setup() {
            return { args }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyContextMenu v-bind="args" v-html="args.label" />
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
                    const { label, ...ContextMenuArgs } = context.args

                    const renderedProps = Object.keys(ContextMenuArgs)
                        .map((key) =>
                            typeof ContextMenuArgs[key] === 'boolean'
                                ? ContextMenuArgs[key] === true
                                    ? key
                                    : ''
                                : `${key}="${ContextMenuArgs[key]}"`
                        )
                        .join(' ')
                        .trim()

                    return `
                        <template>
                            <DaisyContextMenu${renderedProps ? ' ' + renderedProps : ''}>
                                ${label}
                            </DaisyContextMenu>
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
            description: 'ContextMenu label'
        }
    },
    args: {
        label: 'TEST'
    }
})

export type DaisyContextMenuStory = StoryObj<DaisyContextMenuMeta>
