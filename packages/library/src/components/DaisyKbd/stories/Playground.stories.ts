import { getMeta, type DaisyKbdMeta, type DaisyKbdStory } from './DaisyKbdMeta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyKbd'
} as DaisyKbdMeta

export const Playground: DaisyKbdStory = {
    args: {
        label: '24'
    }
}
