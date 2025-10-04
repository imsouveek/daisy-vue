import {
    getMeta,
    type DaisyContextMenuMeta,
    type DaisyContextMenuStory
} from './DaisyContextMenuMeta'

const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyContextMenu'
} as DaisyContextMenuMeta

export const Playground: DaisyContextMenuStory = {}
