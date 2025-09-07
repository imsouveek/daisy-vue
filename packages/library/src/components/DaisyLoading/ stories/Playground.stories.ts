import { getMeta, type DaisyLoadingMeta, type DaisyLoadingStory } from './DaisyLoadingMeta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyLoading'
} as DaisyLoadingMeta

export const Playground: DaisyLoadingStory = {}
