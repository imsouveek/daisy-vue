import { getMeta, type DaisyAvatarMeta, type DaisyAvatarStory } from './DaisyAvatarMeta'
import DaisyAvatar from '../DaisyAvatar.vue'
import { masks, sizes } from '../../../globals'
import { presence } from '../config'

const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/DaisyAvatar',
    parameters: {
        ...meta.parameters,
        docs: {
            source: false
        }
    },
    argTypes: {
        ...srcArgTypes
    }
} as DaisyAvatarMeta

export const Sizes: DaisyAvatarStory = {
    argTypes: {
        ...srcArgTypes,
        size: {
            control: false
        }
    },
    render: (args) => ({
        components: { DaisyAvatar },
        setup() {
            return {
                args,
                sizes
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="size in sizes" :key="size" class="flex flex-col items-center">
                    {{size?.toUpperCase() ?? 'UNDEFINED'}}
                    <DaisyAvatar :size="size" v-bind="args" :style="args.placeholderStyles">
                        <img :src="args.img" v-if="args.img"/>
                    </DaisyAvatar>
                </div>
            </div>
        `
    }),
    args: {
        img: ''
    }
}

export const Presences: DaisyAvatarStory = {
    argTypes: {
        ...srcArgTypes,
        presence: {
            control: false
        }
    },
    render: (args) => ({
        components: { DaisyAvatar },
        setup() {
            return {
                args,
                presence
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="option in presence" :key="option" class="flex flex-col items-center">
                    {{option?.toUpperCase() ?? 'UNDEFINED'}}
                    <DaisyAvatar :presence="option" v-bind="args" :style="args.placeholderStyles" placeholder="TEST">
                        <img :src="args.img" v-if="args.img"/>
                    </DaisyAvatar>
                </div>
            </div>
        `
    }),
    args: {
        img: ''
    }
}

export const Placeholder: DaisyAvatarStory = {
    argTypes: {
        ...srcArgTypes,
        img: {
            control: false
        },
        placeholder: {
            control: false
        }
    },
    render: (args) => ({
        components: { DaisyAvatar },
        setup() {
            return {
                args
            }
        },
        template: `
            <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col items-center">
                    With Placeholder
                    <DaisyAvatar v-bind="args" :style="args.placeholderStyles" placeholder="TEST" />
                </div>
                <div class="flex flex-col items-center">
                    With Image
                    <DaisyAvatar v-bind="args" :style="args.placeholderStyles">
                        <img src="https://picsum.photos/300/300" />
                    </DaisyAvatar>
                </div>
            </div>
        `
    })
}

export const Masks: DaisyAvatarStory = {
    argTypes: {
        ...srcArgTypes,
        mask: {
            control: false
        }
    },
    render: (args) => ({
        components: { DaisyAvatar },
        setup() {
            return {
                args,
                masks
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="option in masks" :key="option" class="flex flex-col items-center">
                    {{option?.toUpperCase() ?? 'UNDEFINED'}}
                    <DaisyAvatar :mask="option" v-bind="args" :style="args.placeholderStyles" :placeholder="args.placeholder">
                        <img :src="args.img" v-if="args.img"/>
                    </DaisyAvatar>
                </div>
            </div>
        `
    }),
    args: {
        img: ''
    }
}
