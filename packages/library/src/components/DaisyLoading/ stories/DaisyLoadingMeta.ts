import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyLoading from '../DaisyLoading.vue'
import { colorsBrand, colorsState, sizes } from '../../../globals'
import { types } from '../config'

export const daisyLoadingColors = [...colorsBrand, ...colorsState, undefined]
export const daisyLoadingSizes = sizes

export type DaisyLoadingArgs = ComponentPropsAndSlots<typeof DaisyLoading>

export type DaisyLoadingMeta = Meta<DaisyLoadingArgs>

export const getMeta = (): DaisyLoadingMeta => ({
    title: 'Components/DaisyLoading',
    component: DaisyLoading,

    parameters: {
        layout: 'centered',
        docs: {
            codePanel: true,
            source: {
                language: 'ts'
            }
        }
    },
    argTypes: {
        /** Loader color based on visual intent / theme token */
        color: {
            control: { type: 'select' },
            options: daisyLoadingColors,
            description: 'Loader color based on visual intent / theme token',
            table: {
                type: { summary: daisyLoadingColors.join('|') },
                defaultValue: { summary: 'primary' }
            }
        },
        /** Loader size */
        size: {
            control: { type: 'select' },
            options: daisyLoadingSizes,
            description: 'Loader size',
            table: {
                type: { summary: daisyLoadingSizes.join('|') },
                defaultValue: { summary: 'md' }
            }
        },
        /** Loader type */
        type: {
            control: { type: 'select' },
            options: types,
            description: 'Loader type',
            table: {
                type: { summary: types.join('|') },
                defaultValue: { summary: 'spinner' }
            }
        }
    },
    args: {
        size: 'md'
    }
})

export type DaisyLoadingStory = StoryObj<DaisyLoadingMeta>
