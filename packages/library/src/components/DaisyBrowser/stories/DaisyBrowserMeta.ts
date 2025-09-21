import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyBrowser from '../DaisyBrowser.vue'

export type DaisyBrowserArgs = ComponentPropsAndSlots<typeof DaisyBrowser> & {
    label?: string
}

export type DaisyBrowserMeta = Meta<DaisyBrowserArgs>

export const getMeta = (): DaisyBrowserMeta => ({
    title: 'Components/DaisyBrowser',
    component: DaisyBrowser,
    render: (args) => ({
        components: { DaisyBrowser },
        setup() {
            return { args }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyBrowser v-bind="args" >
                    {{args.label}}
                </DaisyBrowser>
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
                    const { label, ...browserArgs } = context.args

                    const renderedProps = Object.keys(browserArgs)
                        .map((key) =>
                            typeof browserArgs[key] === 'boolean'
                                ? browserArgs[key] === true
                                    ? key
                                    : ''
                                : `${key}="${browserArgs[key]}"`
                        )
                        .join(' ')
                        .trim()

                    return `
                        <template>
                            <DaisyBrowser${renderedProps ? ' ' + renderedProps : ''}>
                                ${label}
                            </DaisyBrowser>
                        </template>
                    `.trim()
                }
            }
        }
    },
    argTypes: {
        url: {
            control: { type: 'text' }
        },
        label: {
            control: 'text',
            description: 'Browser content'
        }
    },
    args: {
        label: 'TEST'
    }
})

export type DaisyBrowserStory = StoryObj<DaisyBrowserMeta>
