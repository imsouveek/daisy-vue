import {
    getMeta,
    daisyButtonColors,
    daisyButtonSizes,
    type DaisyButtonMeta,
    type DaisyButtonStory
} from './DaisyButtonMeta'
import DaisyButton from '../DaisyButton.vue'

const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/DaisyButton',
    parameters: {
        ...meta.parameters,
        docs: {
            source: false
        }
    },
    argTypes: {
        ...srcArgTypes,
        label: {
            table: {
                disable: true
            }
        }
    }
} as DaisyButtonMeta

export const Colors: DaisyButtonStory = {
    argTypes: {
        ...srcArgTypes,
        color: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyButton },
        setup() {
            return {
                args,
                daisyButtonColors
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="color in daisyButtonColors" :key="color" class="flex flex-col items-center">
                    <DaisyButton :color="color" v-bind="args">{{ color?.toUpperCase() ?? 'UNDEFINED' }}</DaisyButton>
                </div>
            </div>
        `
    })
}

export const Sizes: DaisyButtonStory = {
    argTypes: {
        ...srcArgTypes,
        size: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyButton },
        setup() {
            return {
                args,
                daisyButtonSizes
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="size in daisyButtonSizes" :key="size" class="flex flex-col items-center">
                    <DaisyButton :size="size" v-bind="args">{{ size?.toUpperCase() ?? 'UNDEFINED' }}</DaisyButton>
                </div>
            </div>
        `
    })
}

export const Variants: DaisyButtonStory = {
    argTypes: {
        ...srcArgTypes,
        ...Object.keys(srcArgTypes).reduce((result, key) => {
            if (key !== 'color' && key !== 'size') {
                result[key] = {
                    table: {
                        disable: true
                    }
                }
            }
            return result
        }, {})
    },
    render: (args) => ({
        components: { DaisyButton },
        setup() {
            const variants = [
                { name: 'disabled', disabled: true },
                { name: 'square', square: true },
                { name: 'circle', circle: true },
                { name: 'active', active: true },
                { name: 'soft', soft: true },
                { name: 'outline', outline: true },
                { name: 'dash', dash: true }
            ]
            return { args, variants }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="variant in variants" :key="variant.name" class="flex flex-col items-center">
                    <DaisyButton v-bind="{...args, ...variant}">{{ variant.name.toUpperCase() }}</DaisyButton>
                </div>
            </div>
            <div style="width: 896px;" class=" m-4 flex flex-col items-center">
                <DaisyButton v-bind="args" wide>WIDE</DaisyButton>
            </div>
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyButton v-bind="args" block>BLOCK</DaisyButton>
            </div>
        `
    })
}
