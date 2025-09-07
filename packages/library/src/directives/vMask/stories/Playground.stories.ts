import { getMeta, type VMaskMeta, type VMaskStory } from './vMaskMeta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Directives/vMask'
} as VMaskMeta

export const Playground: VMaskStory = {}
