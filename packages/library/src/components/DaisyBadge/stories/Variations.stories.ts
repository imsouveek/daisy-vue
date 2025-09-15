import {
    getMeta,
    daisyBadgeColors,
    daisyBadgeSizes,
    type DaisyBadgeMeta,
    type DaisyBadgeStory
} from './DaisyBadgeMeta'
import DaisyBadge from '../DaisyBadge.vue'

const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/DaisyBadge',
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
} as DaisyBadgeMeta

export const Colors: DaisyBadgeStory = {
    argTypes: {
        ...srcArgTypes,
        color: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyBadge },
        setup() {
            return {
                args,
                daisyBadgeColors
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="color in daisyBadgeColors" :key="color" class="flex flex-col items-center">
                    <DaisyBadge :color="color" v-bind="args">{{ color?.toUpperCase() ?? 'UNDEFINED' }}</DaisyBadge>
                </div>
            </div>
        `
    })
}

export const Sizes: DaisyBadgeStory = {
    argTypes: {
        ...srcArgTypes,
        size: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyBadge },
        setup() {
            return {
                args,
                daisyBadgeSizes
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="size in daisyBadgeSizes" :key="size" class="flex flex-col items-center">
                    <DaisyBadge :size="size" v-bind="args">{{ size?.toUpperCase() ?? 'UNDEFINED' }}</DaisyBadge>
                </div>
            </div>
        `
    })
}

export const Variants: DaisyBadgeStory = {
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
        components: { DaisyBadge },
        setup: () => {
            return { args }
        },
        template: `
            <div style="width: 896px;" class=" m-4 flex flex-col items-center">
                <DaisyBadge outline v-bind="args">24</DaisyBadge>
            </div>
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyBadge v-bind="args"/>
            </div>
        `
    })
}
