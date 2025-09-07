import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyButton from '../DaisyButton.vue'
import { colorsBrand, colorsState, sizes } from '../../../globals'

export const daisyButtonColors = [...colorsBrand, ...colorsState, undefined, 'ghost', 'link']
export const daisyButtonSizes = sizes

export type DaisyButtonArgs = ComponentPropsAndSlots<typeof DaisyButton> & {
    disabled?: boolean
    label?: string
}

export type DaisyButtonMeta = Meta<DaisyButtonArgs>

export const getMeta = (): DaisyButtonMeta => ({
    title: 'Components/DaisyButton',
    component: DaisyButton,
    render: (args) => ({
        components: { DaisyButton },
        setup() {
            return { args }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyButton v-bind="args" v-html="args.label" />
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
                    const { label, ...buttonArgs } = context.args

                    const renderedProps = Object.keys(buttonArgs)
                        .map((key) =>
                            typeof buttonArgs[key] === 'boolean'
                                ? buttonArgs[key] === true
                                    ? key
                                    : ''
                                : `${key}="${buttonArgs[key]}"`
                        )
                        .join(' ')
                        .trim()

                    return `
                        <template>
                            <DaisyButton${renderedProps ? ' ' + renderedProps : ''}>
                                ${label}
                            </DaisyButton>
                        </template>
                    `.trim()
                }
            }
        }
    },
    argTypes: {
        /** Button color based on visual intent / theme token */
        color: {
            control: { type: 'select' },
            options: daisyButtonColors,
            description: 'Button color based on visual intent / theme token',
            table: {
                defaultValue: { summary: 'primary' }
            }
        },
        size: {
            control: { type: 'select' },
            options: daisyButtonSizes,
            description: 'Button size',
            table: { defaultValue: { summary: 'md' } }
        },
        disabled: {
            control: 'boolean',
            description: 'Disable button',
            table: { defaultValue: { summary: 'false' } }
        },
        label: {
            control: 'text',
            description: 'Button label'
        },
        wide: {
            control: 'boolean',
            description: 'Wide button',
            table: { defaultValue: { summary: 'false' } }
        },
        block: {
            control: 'boolean',
            description: 'Block button',
            table: { defaultValue: { summary: 'false' } }
        },
        square: {
            control: 'boolean',
            description: 'Square button',
            table: { defaultValue: { summary: 'false' } }
        },
        circle: {
            control: 'boolean',
            description: 'Circle button',
            table: { defaultValue: { summary: 'false' } }
        },
        active: {
            control: 'boolean',
            description: 'Active button color',
            table: { defaultValue: { summary: 'false' } }
        },
        soft: {
            control: 'boolean',
            description: 'Soft button',
            table: { defaultValue: { summary: 'false' } }
        },
        outline: {
            control: 'boolean',
            description: 'Outline button',
            table: { defaultValue: { summary: 'false' } }
        },
        dash: {
            control: 'boolean',
            description: 'Dashed outline button',
            table: { defaultValue: { summary: 'false' } }
        }
    },
    args: {
        label: 'Click Me!'
    }
})

export type DaisyButtonStory = StoryObj<DaisyButtonMeta>
