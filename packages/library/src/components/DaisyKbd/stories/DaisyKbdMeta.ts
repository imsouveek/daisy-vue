import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyKbd from '../DaisyKbd.vue'
import { sizes } from '../../../globals'

export type DaisyKbdArgs = ComponentPropsAndSlots<typeof DaisyKbd> & {
    label?: string
}

export type DaisyKbdMeta = Meta<DaisyKbdArgs>

export const getMeta = (): DaisyKbdMeta => ({
    title: 'Components/DaisyKbd',
    component: DaisyKbd,
    render: (args) => ({
        components: { DaisyKbd },
        setup() {
            return { args }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyKbd v-bind="args" v-html="args.label" />
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
                    const { label, ...KbdArgs } = context.args

                    const renderedProps = Object.keys(KbdArgs)
                        .map((key) =>
                            typeof KbdArgs[key] === 'boolean'
                                ? KbdArgs[key] === true
                                    ? key
                                    : ''
                                : `${key}="${KbdArgs[key]}"`
                        )
                        .join(' ')
                        .trim()

                    return `
                        <template>
                            <DaisyKbd${renderedProps ? ' ' + renderedProps : ''}>
                                ${label}
                            </DaisyKbd>
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
            description: 'Badge label'
        }
    },
    args: {
        label: 'TEST'
    }
})

export type DaisyKbdStory = StoryObj<DaisyKbdMeta>
