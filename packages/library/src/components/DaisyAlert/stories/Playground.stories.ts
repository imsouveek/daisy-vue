import { getMeta, type DaisyAlertMeta, type DaisyAlertStory } from './DaisyAlertMeta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyAlert'
} as DaisyAlertMeta

export const Playground: DaisyAlertStory = {
    args: {
        content: 'This is a test'
    }
}
