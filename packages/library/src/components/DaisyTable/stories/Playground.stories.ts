import { getMeta, type DaisyTableMeta, type DaisyTableStory } from './DaisyTableMeta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyTable'
} as DaisyTableMeta

export const Playground: DaisyTableStory = {
    args: {
        label: '24'
    }
}
