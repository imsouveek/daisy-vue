import { getMeta, type DaisyRatingMeta, type DaisyRatingStory } from './DaisyRatingMeta'
import DaisyRating from '../DaisyRating.vue'
import { sizes, colorsBrand, colorsState } from '../../../globals'

const meta = getMeta()
const srcArgTypes = meta.argTypes
const colors = [...colorsBrand, ...colorsState]

export default {
    ...meta,
    title: 'Components/DaisyRating',
    parameters: {
        ...meta.parameters,
        docs: {
            source: false
        }
    },
    argTypes: {
        ...srcArgTypes
    }
} as DaisyRatingMeta

export const Sizes: DaisyRatingStory = {
    argTypes: {
        ...srcArgTypes,
        size: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyRating },
        setup() {
            return {
                args,
                sizes
            }
        },
        template: `
            <div class="grid grid-cols-2 gap-4">
                <div v-for="(size, index) in sizes" :key="size" class="flex flex-col items-center">
                    {{size.toUpperCase()}}
                    <DaisyRating :size="size" v-bind="args"/>
                </div>
            </div>
        `
    })
}

export const Colors: DaisyRatingStory = {
    argTypes: {
        ...srcArgTypes,
        color: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyRating },
        setup() {
            return {
                args,
                colors
            }
        },
        template: `
            <div class="grid grid-cols-2 gap-4">
                <div v-for="item in colors" :key="item" class="flex flex-col items-center">
                    {{ item?.toUpperCase() ?? 'UNDEFINED' }}
                    <DaisyRating :color="item" v-bind="args" />
                </div>
            </div>
        `
    })
}

export const Halves: DaisyRatingStory = {
    argTypes: {
        ...srcArgTypes,
        halves: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyRating },
        setup() {
            return {
                args,
                halves: [false, true]
            }
        },
        template: `
            <div class="grid grid-cols-2 gap-4">
                <div v-for="item in halves" :key="item" class="flex flex-col items-center">
                    {{ item? 'ALLOW HALF RATINGS': 'DO NOT ALLOW HALF RATINGS' }}
                    <DaisyRating :halves="item" v-bind="args" />
                </div>
            </div>
        `
    })
}
