import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyAvatar from '../DaisyAvatar.vue'
import { masks, sizes } from '../../../globals'
import { presence } from '../config'

export type DaisyAvatarArgs = ComponentPropsAndSlots<typeof DaisyAvatar> & {
    img?: string
    placeholderStyles?: string
}

export type DaisyAvatarMeta = Meta<DaisyAvatarArgs>

export const getMeta = (): DaisyAvatarMeta => ({
    title: 'Components/DaisyAvatar',
    component: DaisyAvatar,
    render: (args) => ({
        components: { DaisyAvatar },
        setup() {
            return { args }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyAvatar v-bind="args" :style="args.placeholderStyles">
                    <img v-if="args.img" :src="args.img" />
                </DaisyAvatar>
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
                    const { img, placeholderStyles, ...avatarArgs } = context.args

                    const renderedProps = (
                        (placeholderStyles ? `style="${placeholderStyles}" ` : '') +
                        Object.keys(avatarArgs)
                            .map((key) =>
                                typeof avatarArgs[key] === 'boolean'
                                    ? avatarArgs[key] === true
                                        ? key
                                        : ''
                                    : `${key}="${avatarArgs[key]}"`
                            )
                            .join(' ')
                    ).trim()

                    const withImageStr = img
                        ? `
                                <img src="${img}" />
                            </DaisyAvatar>`
                        : ''

                    return `
                        <template>
                            <DaisyAvatar ${renderedProps ? ' ' + renderedProps : ''}${img ? '>' : '/>'}${withImageStr}
                        </template>
                    `
                }
            }
        }
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: sizes
        },
        presence: {
            control: { type: 'radio' },
            options: presence
        },
        placeholder: {
            control: { type: 'text' }
        },
        mask: {
            control: { type: 'select' },
            options: masks
        },
        placeholderStyles: {
            control: { type: 'text' }
        }
    },
    args: {
        img: 'https://picsum.photos/300/300',
        placeholderStyles: 'background-color: #fb2c36; color: white;',
        placeholder: 'TEST'
    }
})

export type DaisyAvatarStory = StoryObj<DaisyAvatarMeta>
