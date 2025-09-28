import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyAvatarGroup from '../DaisyAvatarGroup.vue'
import DaisyAvatar from '../../DaisyAvatar/DaisyAvatar.vue'
import { masks, sizes } from '../../../globals'

export const avatarSettings = [
    {
        placeholder: 'AB',
        class: 'bg-red-500 text-white',
        presence: 'online',
        img: ''
    },
    {
        placeholder: 'AB',
        class: 'bg-red-500 text-white',
        img: 'https://picsum.photos/300/300'
    },
    {
        placeholder: 'CD',
        class: 'bg-green-500 text-white',
        img: ''
    },
    {
        placeholder: 'EF',
        class: 'bg-yellow-500 text-black',
        img: ''
    },
    {
        placeholder: 'AB',
        class: 'bg-red-500 text-white',
        presence: 'away',
        img: 'https://img.daisyui.com/images/profile/demo/distracted1@192.webp'
    }
] as const

export type DaisyAvatarGroupArgs = ComponentPropsAndSlots<typeof DaisyAvatarGroup>

export type DaisyAvatarGroupMeta = Meta<DaisyAvatarGroupArgs>

export const getMeta = (): DaisyAvatarGroupMeta => ({
    title: 'Components/DaisyAvatarGroup',
    component: DaisyAvatarGroup,
    subcomponents: { DaisyAvatar },
    render: (args) => ({
        components: { DaisyAvatarGroup, DaisyAvatar },
        setup() {
            return { args, avatarSettings }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyAvatarGroup v-bind="args">
                    <DaisyAvatar v-for="avatar in avatarSettings" :key="avatar" v-bind="avatar">
                        <img v-if="avatar.img" :src="avatar.img"/>
                    </DaisyAvatar>
                </DaisyAvatarGroup>
            </div>
        `
    }),
    parameters: {
        layout: 'centered',
        docs: {
            codePanel: true,
            source: {
                language: 'ts',
                transform: (_, context) => {
                    const { ...AvatarGroupArgs } = context.args

                    const avatars = avatarSettings.reduce((result, avatarObj) => {
                        const imgSource = avatarObj.img
                            ? `>
                                    <img src="${avatarObj.img}"/>
                                </DaisyAvatar>`
                            : '/>'

                        return `${result}       <DaisyAvatar class="${avatarObj.class}" placeholder="${avatarObj.placeholder}"${imgSource}
                        `
                    }, '')

                    const renderedProps = Object.keys(AvatarGroupArgs)
                        .map((key) =>
                            typeof AvatarGroupArgs[key] === 'boolean'
                                ? AvatarGroupArgs[key] === true
                                    ? key
                                    : ''
                                : `${key}="${AvatarGroupArgs[key]}"`
                        )
                        .join(' ')
                        .trim()

                    return `
                        <template>
                            <DaisyAvatarGroup${renderedProps ? ' ' + renderedProps : ''}>
                        ${avatars}    </DaisyAvatarGroup>
                        </template>
                    `.trim()
                }
            }
        }
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: sizes
        },
        mask: {
            control: { type: 'select' },
            options: masks
        }
    },
    args: {
        mask: 'circle'
    }
})

export type DaisyAvatarGroupStory = StoryObj<DaisyAvatarGroupMeta>
