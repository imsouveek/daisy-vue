import { getMeta, type DaisyButtonMeta, type DaisyButtonStory } from './DaisyButtonMeta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyButton'
} as DaisyButtonMeta

export const Playground: DaisyButtonStory = {
    args: {
        label: 'Click Me!',
        disabled: false,
        wide: false,
        block: false,
        square: false,
        circle: false,
        active: false,
        soft: false,
        outline: false,
        dash: false
    }
}
