import { getMeta, type DaisyBadgeMeta, type DaisyBadgeStory } from './DaisyBadgeMeta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyBadge'
} as DaisyBadgeMeta

export const Playground: DaisyBadgeStory = {
    args: {
        label: '24',
        outline: false
    }
}
