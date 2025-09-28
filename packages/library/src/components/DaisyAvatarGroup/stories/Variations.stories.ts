import {
    getMeta,
    avatarSettings,
    type DaisyAvatarGroupMeta,
    type DaisyAvatarGroupStory
} from './DaisyAvatarGroupMeta'
import DaisyAvatarGroup from '../DaisyAvatarGroup.vue'
import DaisyAvatar from '../../DaisyAvatar/DaisyAvatar.vue'
import { sizes, masks } from '../../../globals'

const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/DaisyAvatarGroup',
    parameters: {
        ...meta.parameters,
        docs: {
            source: false
        }
    }
} as DaisyAvatarGroupMeta

function renderVariation(kind: 'size' | 'mask', values: string[]) {
    return (args: DaisyAvatarGroupMeta['args']) => ({
        components: { DaisyAvatarGroup, DaisyAvatar },
        setup() {
            return { args, values, kind, avatarSettings }
        },
        template: `
        <div class="grid grid-cols-2 gap-4"  >
            <div v-for="val in values" :key="val" class="flex flex-col items-center">
                <h4 class="my-4">{{val ? val.toUpperCase() : 'UNDEFINED' }}</h4>
                <DaisyAvatarGroup v-bind="{...args, [kind]: val}">
                    <DaisyAvatar v-for="avatar in avatarSettings" :key="avatar" v-bind="avatar">
                        <img v-if="avatar.img" :src="avatar.img"/>
                    </DaisyAvatar>
                </DaisyAvatarGroup> 
            </div>
        </div>
    `
    })
}

/**
 * Sizes variation
 */
export const Sizes: DaisyAvatarGroupStory = {
    argTypes: {
        ...srcArgTypes,
        size: { control: false } // explicitly disable size control
    },
    render: renderVariation('size', [...sizes] as DaisyAvatarGroupMeta['args']['size'][])
}

/**
 * Masks variation
 */
export const Masks: DaisyAvatarGroupStory = {
    argTypes: {
        ...srcArgTypes,
        mask: { control: false } // explicitly disable mask control
    },
    render: renderVariation('mask', [...masks] as DaisyAvatarGroupMeta['args']['mask'][])
}
