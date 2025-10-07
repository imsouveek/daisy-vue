import {
    getMeta,
    type DaisyTableMeta,
    type DaisyTableStory
} from './DaisyTableMeta'
import DaisyTable from '../DaisyTable.vue'
import { sizes } from '../../../globals'


const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/DaisyTable',
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
} as DaisyTableMeta

export const Sizes: DaisyTableStory = {
    argTypes: {
        ...srcArgTypes,
        size: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyTable },
        setup() {
            return {
                args,
                sizes
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="size in sizes" :key="size" class="flex flex-col items-center">
                    <DaisyTable :size="size" v-bind="args">{{ size?.toUpperCase() ?? 'UNDEFINED' }}</DaisyTable>
                </div>
            </div>
        `
    })
}
