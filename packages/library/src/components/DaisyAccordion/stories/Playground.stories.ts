import { getMeta, type DaisyAccordionMeta, type DaisyAccordionStory } from './DaisyAccordionMeta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyAccordion'
} as DaisyAccordionMeta

export const Playground: DaisyAccordionStory = {
    args: {
        panelOneTitle: 'Panel 1',
        panelOneContent: 'Panel 1 content',
        panelTwoTitle: 'Panel 2',
        panelTwoContent: 'Panel 2 content',
        panelThreeTitle: 'Panel 3',
        panelThreeContent: 'Panel 3 content'
    }
}
