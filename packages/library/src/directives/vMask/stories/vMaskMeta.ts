import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { vMask } from '../VMask'
import { masks, types } from '../../../globals'

export const vMaskTypes = masks
export const vMaskMods = [undefined, ...types]

export type VMaskArgs = {
    mask?: string
    modifier?: string
}

export type VMaskMeta = Meta<VMaskArgs>

export const getMeta = (): VMaskMeta => ({
    title: 'Directives/VMask',
    parameters: {
        layout: 'centered',
        docs: {
            codePanel: true,
            source: {
                language: 'ts',
                transform: (_, context) => {
                    const { mask, modifier } = context.args

                    const maskRender = `v-mask${modifier ? ':' + modifier : ''}="${mask}"`
                    return `
                    <template>
                        <img ${maskRender} src="https://picsum.photos/300/300" />
                    </template>
                    `
                }
            }
        }
    },
    render: (args) => ({
        directives: { mask: vMask },
        setup() {
            return { args }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <img v-mask:[args.modifier]="args.mask" :style="{ width: '300px' }" src="https://picsum.photos/300/300" />
            </div>
        `
    }),
    argTypes: {
        mask: {
            control: { type: 'select' },
            options: vMaskTypes,
            description: 'Daisy UI mask class to apply (e.g., square, circle, hexagon)',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'square' }
            }
        },
        modifier: {
            control: { type: 'select' },
            options: vMaskMods,
            description: 'Optional modifier for partial masks (half-1 or half-2)',
            table: {
                type: { summary: `'half-1' | 'half-2' | undefined` },
                defaultValue: { summary: 'undefined' }
            }
        }
    },
    args: {
        mask: 'square',
        modifier: undefined
    }
})

export type VMaskStory = StoryObj<VMaskMeta>
