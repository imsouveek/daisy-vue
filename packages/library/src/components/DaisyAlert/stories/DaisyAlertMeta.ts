import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyAlert from '../DaisyAlert.vue'
import { states } from '../../../globals'

export type DaisyAlertArgs = ComponentPropsAndSlots<typeof DaisyAlert> & {
    content?: string
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
                <DaisyAlert v-bind="args">
                    <span>{{args.content}}</span>
                </DaisyAlert>
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
                    const { content, ...AlertArgs } = context.args

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
                                ${content}
                            </DaisyAlert>
                        </template>
                    `.trim()
                }
            }
        }
    },
    argTypes: {
        type: {
            control: 'radio',
            options: states
        },
        dismissible: { control: 'boolean' },
        soft: { control: 'boolean' },
        outline: { control: 'boolean' },
        dash: { control: 'boolean' },
        content: {
            control: 'text',
            description: 'Alert content'
        }
    },
    args: {
        content: 'This is a test alert'
    }
})

export type DaisyAlertStory = StoryObj<DaisyAlertMeta>
