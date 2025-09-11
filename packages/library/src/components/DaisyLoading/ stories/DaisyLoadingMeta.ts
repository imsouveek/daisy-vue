import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyLoading from '../DaisyLoading.vue'
import { colorsBrand, colorsState, sizes } from '../../../globals'
import { types } from '../config'

export const daisyLoadingColors = [...colorsBrand, ...colorsState, undefined]
export const daisyLoadingSizes = sizes
export const daisyLoadingTypes = types

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
        color: {
            control: { type: 'select' },
            options: daisyLoadingColors
        },
        size: {
            control: { type: 'select' },
            options: daisyLoadingSizes
        },
        type: {
            control: { type: 'select' },
            options: daisyLoadingTypes
        }
    },
    args: {
        size: 'md'
    }
})

export type DaisyLoadingStory = StoryObj<DaisyLoadingMeta>
