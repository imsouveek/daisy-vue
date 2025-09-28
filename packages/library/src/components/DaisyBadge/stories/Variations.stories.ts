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
    }
} as DaisyBadgeMeta

export const Colors: DaisyBadgeStory = {
    argTypes: {
        ...srcArgTypes,
        color: {
            control: false
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
                    {{ color?.toUpperCase() ?? 'UNDEFINED' }}
                    <DaisyBadge :color="color" v-bind="args">{{args.label}}</DaisyBadge>
                </div>
            </div>
        `
    })
}

export const Sizes: DaisyBadgeStory = {
    argTypes: {
        ...srcArgTypes,
        size: {
            control: false
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
                    {{ size?.toUpperCase() ?? 'UNDEFINED' }}
                    <DaisyBadge :size="size" v-bind="args">{{args.label}}</DaisyBadge>
                </div>
            </div>
        `
    })
}

export const Variants: DaisyBadgeStory = {
    argTypes: {
        ...srcArgTypes,
        label: { control: false },
        outline: { control: false }
    },
    render: (args) => ({
        components: { DaisyBadge },
        setup: () => {
            return { args }
        },
        template: `
            <div class="grid grid-cols-2 gap-4">
                <div class=" flex flex-col items-center">
                    OUTLINE
                    <DaisyBadge outline v-bind="args">24</DaisyBadge>
                </div>
                <div class=" flex flex-col items-center">
                    NO CONTENT
                    <DaisyBadge v-bind="args"/>
                </div>
            </div>
            
        `
    })
}
