import {
    getMeta,
    daisyLoadingColors,
    daisyLoadingSizes,
    type DaisyLoadingMeta,
    type DaisyLoadingStory
} from './DaisyLoadingMeta'
import DaisyLoading from '../DaisyLoading.vue'
import { types } from '../config'

const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/DaisyLoading',
    parameters: {
        ...meta.parameters,
        docs: {
            source: false
        }
    }
} as DaisyLoadingMeta

export const Colors: DaisyLoadingStory = {
    argTypes: {
        ...srcArgTypes,
        color: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyLoading },
        setup() {
            return {
                args,
                daisyLoadingColors
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-8">
                <div v-for="color in daisyLoadingColors" :key="color" class="flex flex-col items-center">
                    {{color?.toUpperCase() ?? 'UNDEFINED' }}
                    <DaisyLoading :color="color" v-bind="args"/>
                </div>
            </div>
        `
    })
}

export const Sizes: DaisyLoadingStory = {
    argTypes: {
        ...srcArgTypes,
        size: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyLoading },
        setup() {
            const { size, ...otherArgs } = args
            return {
                otherArgs,
                daisyLoadingSizes
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="size in daisyLoadingSizes" :key="size" class="flex flex-col items-center">
                    {{ size?.toUpperCase() ?? 'UNDEFINED' }}
                    <DaisyLoading :size="size" v-bind="otherArgs"/>
                </div>
            </div>
        `
    })
}

export const Types: DaisyLoadingStory = {
    argTypes: {
        ...srcArgTypes,
        type: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyLoading },
        setup() {
            return {
                args,
                types
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="type in types" :key="type" class="flex flex-col items-center">
                    {{ type?.toUpperCase() ?? 'UNDEFINED' }}
                    <DaisyLoading :type="type" v-bind="args"/>
                </div>
            </div>
        `
    })
}
