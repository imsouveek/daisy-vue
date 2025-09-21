import {
    getMeta,
    type DaisyKbdMeta,
    type DaisyKbdStory
} from './DaisyKbdMeta'
import DaisyKbd from '../DaisyKbd.vue'
import { sizes } from '../../../globals'


const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/DaisyKbd',
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
} as DaisyKbdMeta

export const Sizes: DaisyKbdStory = {
    argTypes: {
        ...srcArgTypes,
        size: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyKbd },
        setup() {
            return {
                args,
                sizes
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="size in sizes" :key="size" class="flex flex-col items-center">
                    <DaisyKbd :size="size" v-bind="args">{{ size?.toUpperCase() ?? 'UNDEFINED' }}</DaisyKbd>
                </div>
            </div>
        `
    })
}
