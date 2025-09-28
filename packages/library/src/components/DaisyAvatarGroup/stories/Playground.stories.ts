import {
    getMeta,
    type DaisyAvatarGroupMeta,
    type DaisyAvatarGroupStory
} from './DaisyAvatarGroupMeta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyAvatarGroup'
} as DaisyAvatarGroupMeta

export const Playground: DaisyAvatarGroupStory = {
    args: {
        mask: 'circle'
    }
}
