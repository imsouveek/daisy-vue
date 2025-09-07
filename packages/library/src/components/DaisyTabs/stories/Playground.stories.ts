import { getMeta, type DaisyTabsMeta, type DaisyTabsStory } from './DaisyTabsMeta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyTabs'
} as DaisyTabsMeta

export const Playground: DaisyTabsStory = {}
