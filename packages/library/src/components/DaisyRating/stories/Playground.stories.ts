import { getMeta, type DaisyRatingMeta, type DaisyRatingStory } from './DaisyRatingMeta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyRating'
} as DaisyRatingMeta

export const Playground: DaisyRatingStory = {}
