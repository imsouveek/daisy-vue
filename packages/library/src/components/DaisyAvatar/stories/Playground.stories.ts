import { getMeta, type DaisyAvatarMeta, type DaisyAvatarStory } from './DaisyAvatarMeta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyAvatar'
} as DaisyAvatarMeta

export const Playground: DaisyAvatarStory = {
    args: {
        size: 'md'
    }
}
