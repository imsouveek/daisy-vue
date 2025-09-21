import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyBadge from '../DaisyBadge.vue'
import { colorsBrand, colorsState, sizes } from '../../../globals'

export const daisyBadgeColors = [...colorsBrand, ...colorsState, undefined, 'ghost']
export const daisyBadgeSizes = sizes

export type DaisyBadgeArgs = ComponentPropsAndSlots<typeof DaisyBadge> & {
    label?: string
}

export type DaisyBadgeMeta = Meta<DaisyBadgeArgs>

export const getMeta = (): DaisyBadgeMeta => ({
    title: 'Components/DaisyBadge',
    component: DaisyBadge,
    render: (args) => ({
        components: { DaisyBadge },
        setup() {
            return { args }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyBadge v-bind="args" v-html="args.label" />
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
                    const { label, ...badgeArgs } = context.args

                    const renderedProps = Object.keys(badgeArgs)
                        .map((key) =>
                            typeof badgeArgs[key] === 'boolean'
                                ? badgeArgs[key] === true
                                    ? key
                                    : ''
                                : `${key}="${badgeArgs[key]}"`
                        )
                        .join(' ')
                        .trim()

                    return `
                        <template>
                            <DaisyBadge${renderedProps ? ' ' + renderedProps : ''}>
                                ${label}
                            </DaisyBadge>
                        </template>
                    `.trim()
                }
            }
        }
    },
    argTypes: {
        color: {
            control: { type: 'select' },
            options: daisyBadgeColors
        },
        size: {
            control: { type: 'select' },
            options: daisyBadgeSizes
        },
        outline: {
            control: 'boolean'
        },
        label: {
            control: 'text',
            description: 'Badge label'
        }
    },
    args: {
        label: '24'
    }
})

export type DaisyBadgeStory = StoryObj<DaisyBadgeMeta>
