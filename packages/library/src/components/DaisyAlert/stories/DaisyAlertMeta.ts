import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyAlert from '../DaisyAlert.vue'
import { sizes } from '../../../globals'

export type DaisyAlertArgs = ComponentPropsAndSlots<typeof DaisyAlert> & {
    label?: string
}

export type DaisyAlertMeta = Meta<DaisyAlertArgs>

export const getMeta = (): DaisyAlertMeta => ({
    title: 'Components/DaisyAlert',
    component: DaisyAlert,
    render: (args) => ({
        components: { DaisyAlert },
        setup() {
            return { args }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyAlert v-bind="args" v-html="args.label" />
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
                    const { label, ...AlertArgs } = context.args

                    const renderedProps = Object.keys(AlertArgs)
                        .map((key) =>
                            typeof AlertArgs[key] === 'boolean'
                                ? AlertArgs[key] === true
                                    ? key
                                    : ''
                                : `${key}="${AlertArgs[key]}"`
                        )
                        .join(' ')
                        .trim()

                    return `
                        <template>
                            <DaisyAlert${renderedProps ? ' ' + renderedProps : ''}>
                                ${label}
                            </DaisyAlert>
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
            description: 'Alert label'
        }
    },
    args: {
        label: 'TEST'
    }
})

export type DaisyAlertStory = StoryObj<DaisyAlertMeta>
