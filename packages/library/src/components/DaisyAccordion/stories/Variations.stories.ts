import { getMeta, type DaisyAccordionMeta, type DaisyAccordionStory } from './DaisyAccordionMeta'
import DaisyAccordion from '../DaisyAccordion.vue'
import DaisyAccordionPanel from '../../DaisyAccordionPanel/DaisyAccordionPanel.vue'
import { iconTypes } from '../config'

const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/DaisyAccordion',
    parameters: {
        ...meta.parameters,
        docs: { source: false }
    },
    argTypes: {
        ...srcArgTypes
    }
} as DaisyAccordionMeta

/**
 * Icon variations
 */
export const Icons: DaisyAccordionStory = {
    argTypes: {
        ...srcArgTypes,
        icon: { control: false }
    },
    render: (args) => ({
        components: { DaisyAccordion, DaisyAccordionPanel },
        setup() {
            return { args, iconTypes }
        },
        template: `
      <div class="grid grid-cols-3 gap-8" style="width: 896px;">
        <div v-for="icon in iconTypes" :key="icon">
          <h4 class="mb-2">Icon: {{ icon?.toUpperCase() ?? 'UNDEFINED' }}</h4>
          <DaisyAccordion :icon="icon" v-bind="args">
            <DaisyAccordionPanel :title="args.panelOneTitle">{{args.panelOneContent}}</DaisyAccordionPanel>
            <DaisyAccordionPanel :title="args.panelTwoTitle">{{args.panelTwoContent}}</DaisyAccordionPanel>
            <DaisyAccordionPanel :title="args.panelThreeTitle">{{args.panelThreeContent}}</DaisyAccordionPanel>
          </DaisyAccordion>
        </div>
      </div>
    `
    })
}

/**
 * Open mode variations (multipleOpen × noneOpen)
 */
export const OpenModes: DaisyAccordionStory = {
    argTypes: {
        ...srcArgTypes,
        multipleOpen: { control: false },
        noneOpen: { control: false }
    },
    render: (args) => ({
        components: { DaisyAccordion, DaisyAccordionPanel },
        setup() {
            const combos = [
                { label: 'Single, must stay open', multipleOpen: false, noneOpen: false },
                { label: 'Single, all closable', multipleOpen: false, noneOpen: true },
                { label: 'Multiple, must keep one open', multipleOpen: true, noneOpen: false },
                { label: 'Multiple, all closable', multipleOpen: true, noneOpen: true }
            ]
            return { args, combos }
        },
        template: `
      <div class="grid grid-cols-2 gap-8" style="width: 896px;">
        <div v-for="combo in combos" :key="combo.label">
          <h4 class="mb-2">{{ combo.label }}</h4>
          <DaisyAccordion :multipleOpen="combo.multipleOpen" :noneOpen="combo.noneOpen" v-bind="args">
            <DaisyAccordionPanel :title="args.panelOneTitle">{{args.panelOneContent}}</DaisyAccordionPanel>
            <DaisyAccordionPanel :title="args.panelTwoTitle">{{args.panelTwoContent}}</DaisyAccordionPanel>
            <DaisyAccordionPanel :title="args.panelThreeTitle">{{args.panelThreeContent}}</DaisyAccordionPanel>
          </DaisyAccordion>
        </div>
      </div>
    `
    })
}
