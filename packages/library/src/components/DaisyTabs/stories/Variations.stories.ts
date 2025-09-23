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
    },
    argTypes: {
        ...srcArgTypes,
        tabOneText: { table: { disable: true } },
        tabTwoText: { table: { disable: true } },
        tabThreeText: { table: { disable: true } }
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
      <div class="grid gap-4">
        <div v-for="val in values" :key="val">
          <h4 class="my-4">Tabs: {{ val ? val.toUpperCase() : 'UNDEFINED' }}</h4>
          <DaisyTabs v-bind="args" v-bind="{ [kind]: val }">
            <DaisyTab title="Tab 1">
              Lorem 1 ipsum dolor sit amet…
            </DaisyTab>
            <DaisyTab title="Tab 2">
              Lorem 2 ipsum dolor sit amet…
            </DaisyTab>
            <DaisyTab title="Tab 3">
              Lorem 3 ipsum dolor sit amet…
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
        size: { table: { disable: true } } // explicitly disable size control
    },
    render: renderVariation('size', [...sizes] as DaisyTabsMeta['args']['size'][])
}

/**
 * Types variation
 */
export const Types: DaisyTabsStory = {
    argTypes: {
        ...srcArgTypes,
        type: { table: { disable: true } } // explicitly disable type control
    },
    render: renderVariation('type', [...types] as DaisyTabsMeta['args']['type'][])
}

/**
 * Positions variation
 */
export const Positions: DaisyTabsStory = {
    argTypes: {
        ...srcArgTypes,
        position: { table: { disable: true } } // explicitly disable position control
    },
    render: renderVariation('position', [...positions] as DaisyTabsMeta['args']['position'][])
}
