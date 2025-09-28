import { getMeta, type DaisyKbdMeta, type DaisyKbdStory } from './DaisyKbdMeta'
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
    }
} as DaisyKbdMeta

export const Sizes: DaisyKbdStory = {
    argTypes: {
        ...srcArgTypes,
        size: {
            control: false
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
                    {{ size?.toUpperCase() ?? 'UNDEFINED' }}
                    <DaisyKbd :size="size" v-bind="args">{{ args.label }}</DaisyKbd>
                </div>
            </div>
        `
    })
}
