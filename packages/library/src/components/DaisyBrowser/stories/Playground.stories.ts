import { getMeta, type DaisyBrowserMeta, type DaisyBrowserStory } from './DaisyBrowserMeta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyBrowser'
} as DaisyBrowserMeta

export const Playground: DaisyBrowserStory = {
    args: {
        label: 'This is a test'
    }
}
