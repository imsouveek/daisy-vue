import {
    getMeta,
    type DaisyAlertMeta,
    type DaisyAlertStory
} from './DaisyAlertMeta'
import DaisyAlert from '../DaisyAlert.vue'
import { sizes } from '../../../globals'


const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/DaisyAlert',
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
} as DaisyAlertMeta

export const Sizes: DaisyAlertStory = {
    argTypes: {
        ...srcArgTypes,
        size: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyAlert },
        setup() {
            return {
                args,
                sizes
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="size in sizes" :key="size" class="flex flex-col items-center">
                    <DaisyAlert :size="size" v-bind="args">{{ size?.toUpperCase() ?? 'UNDEFINED' }}</DaisyAlert>
                </div>
            </div>
        `
    })
}
