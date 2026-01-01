import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyRating from '../DaisyRating.vue'
import { sizes, masks, colorsBrand, colorsState } from '../../../globals'
import { ref } from 'vue'

export type DaisyRatingArgs = ComponentPropsAndSlots<typeof DaisyRating>
export type DaisyRatingMeta = Meta<DaisyRatingArgs>

export const getMeta = (): DaisyRatingMeta => ({
    title: 'Components/DaisyRating',
    component: DaisyRating,
    render: (args) => ({
        components: { DaisyRating },
        setup() {
            const value = ref(2)
            return { args, value }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyRating v-bind="args" v-model="value"/>
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
                    const { ...RatingArgs } = context.args

                    const renderedProps = Object.keys(RatingArgs)
                        .map((key) =>
                            typeof RatingArgs[key] === 'boolean'
                                ? RatingArgs[key] === true
                                    ? key
                                    : ''
                                : `${key}="${RatingArgs[key]}"`
                        )
                        .join(' ')
                        .trim()

                    return `
                        <template>
                            <DaisyRating${renderedProps ? ' ' + renderedProps : ''}/>
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
        color: {
            control: { type: 'select' },
            options: [...colorsBrand, ...colorsState]
        },
        halves: {
            control: { type: 'boolean' }
        },
        shape: {
            control: { type: 'select' },
            options: masks
        }
    }
})

export type DaisyRatingStory = StoryObj<DaisyRatingMeta>
