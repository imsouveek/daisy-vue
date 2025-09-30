import {
    getMeta,
    type DaisyContextMenuMeta,
    type DaisyContextMenuStory
} from './DaisyContextMenuMeta'
import DaisyContextMenu from '../DaisyContextMenu.vue'
import { sizes } from '../../../globals'


const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/DaisyContextMenu',
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
} as DaisyContextMenuMeta

export const Sizes: DaisyContextMenuStory = {
    argTypes: {
        ...srcArgTypes,
        size: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyContextMenu },
        setup() {
            return {
                args,
                sizes
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="size in sizes" :key="size" class="flex flex-col items-center">
                    <DaisyContextMenu :size="size" v-bind="args">{{ size?.toUpperCase() ?? 'UNDEFINED' }}</DaisyContextMenu>
                </div>
            </div>
        `
    })
}
