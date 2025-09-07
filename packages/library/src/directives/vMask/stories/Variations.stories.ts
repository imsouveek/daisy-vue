import { getMeta, vMaskMods, vMaskTypes, type VMaskMeta, type VMaskStory } from './vMaskMeta'
import { vMask } from '../VMask'

const meta = getMeta()
const srcArgTypes = meta.argTypes
const argTypes = Object.keys(srcArgTypes).reduce((result, key) => {
    result[key] = {
        table: {
            disable: true
        }
    }
    return result
}, {})

export default {
    ...meta,
    title: 'Directives/vMask',
    parameters: {
        ...meta.parameters,
        docs: {
            source: false
        }
    },
    argTypes
} as VMaskMeta

export const AllMasks: VMaskStory = {
    render: () => ({
        directives: {
            mask: vMask
        },
        setup() {
            return {
                vMaskTypes,
                vMaskMods
            }
        },
        template: `
        <div >
            <div  v-for="mask in vMaskTypes" :key="mask" class="flex gap-4 mb-4">
                <div class="relative" v-for="mod in vMaskMods" :key="mod">
                    <div class="bg-white opacity-5 absolute left-0 right-0 top-0 bottom-0 rounded-xl"/>
                    <div class="m-4 grid grid-cols-2 gap-1">
                        <div class="text-right">Mask Type:</div>
                        <div>{{ mask }}</div>
                        <div  class="text-right">Mask Modifier:</div>
                        <div>{{ mod ?? 'undefined'}}</div>
                        <img v-mask:[mod]="mask" class="col-span-2" src="https://picsum.photos/300/300" />
                    </div>
                </div>                    
            </div>
        </div>
        `
    })
}
