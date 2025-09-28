import { getMeta, type DaisyTabsMeta, type DaisyTabsStory } from './DaisyTabsMeta'
import DaisyTabs from '../DaisyTabs.vue'
import DaisyTab from '../../DaisyTab/DaisyTab.vue'
import { types, positions } from '../config'
import { sizes } from '../../../globals'

/**
 * Get base meta from DaisyTabsMeta.ts
 */
const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/DaisyTabs',
    parameters: {
        ...meta.parameters,
        docs: {
            source: false
        }
    }
} as DaisyTabsMeta

/**
 * Helper to render a variation grid
 */
function renderVariation(kind: 'size' | 'type' | 'position', values: string[]) {
    return (args: DaisyTabsMeta['args']) => ({
        components: { DaisyTabs, DaisyTab },
        setup() {
            return { args, values, kind }
        },
        template: `
      <div class="grid grid-cols-1 gap-4" style="width: 896px;" >
        <div v-for="val in values" :key="val">
          <h4 class="my-4">Tabs: {{ val ? val.toUpperCase() : 'UNDEFINED' }}</h4>
          <DaisyTabs  v-bind="{ ...args, [kind]: val }">
            <DaisyTab :title="args.tabOneTitle">
              {{args.tabOneContent}}
            </DaisyTab>
            <DaisyTab :title="args.tabTwoTitle">
              {{args.tabTwoContent}}
            </DaisyTab>
            <DaisyTab :title="args.tabThreeTitle">
              {{args.tabThreeContent}}
            </DaisyTab>
          </DaisyTabs>
        </div>
      </div>
    `
    })
}

/**
 * Sizes variation
 */
export const Sizes: DaisyTabsStory = {
    argTypes: {
        ...srcArgTypes,
        size: { control: false } // explicitly disable size control
    },
    render: renderVariation('size', [...sizes] as DaisyTabsMeta['args']['size'][])
}

/**
 * Types variation
 */
export const Types: DaisyTabsStory = {
    argTypes: {
        ...srcArgTypes,
        type: { control: false } // explicitly disable type control
    },
    render: renderVariation('type', [...types] as DaisyTabsMeta['args']['type'][])
}

/**
 * Positions variation
 */
export const Positions: DaisyTabsStory = {
    argTypes: {
        ...srcArgTypes,
        position: { control: false } // explicitly disable position control
    },
    render: renderVariation('position', [...positions] as DaisyTabsMeta['args']['position'][])
}
