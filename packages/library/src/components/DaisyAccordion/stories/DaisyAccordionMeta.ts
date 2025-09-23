import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyAccordion from '../DaisyAccordion.vue'
import DaisyAccordionPanel from '../../DaisyAccordionPanel/DaisyAccordionPanel.vue'
import { iconTypes } from '../config'

export type DaisyAccordionArgs = ComponentPropsAndSlots<typeof DaisyAccordion> & {
    panelOneTitle?: string
    panelOneContent?: string
    panelTwoTitle?: string
    panelTwoContent?: string
    panelThreeTitle?: string
    panelThreeContent?: string
    'update:modelValue': number | string | (number | string)[]
}

export type DaisyAccordionMeta = Meta<DaisyAccordionArgs>

/**
 * Meta factory — re-usable across multiple stories
 */
export const getMeta = (): DaisyAccordionMeta => ({
    title: 'Components/DaisyAccordion',
    component: DaisyAccordion,
    subcomponents: { DaisyAccordionPanel },
    render: (args) => ({
        components: { DaisyAccordion, DaisyAccordionPanel },
        setup() {
            return { args }
        },
        template: `
      <div style="width: 896px;" class="flex flex-col items-center">
        <DaisyAccordion v-bind="args">
          <DaisyAccordionPanel :title="args.panelOneTitle">
            {{ args.panelOneContent }}
          </DaisyAccordionPanel>
          <DaisyAccordionPanel :title="args.panelTwoTitle">
            {{ args.panelTwoContent }}
          </DaisyAccordionPanel>
          <DaisyAccordionPanel :title="args.panelThreeTitle">
            {{ args.panelThreeContent }}
          </DaisyAccordionPanel>
        </DaisyAccordion>
      </div>
    `
    }),
    parameters: {
        layout: 'centered',
        docs: {
            codePanel: true,
            source: {
                language: 'ts',
                transform: (_, context) => {
                    // Strip out our story-only args so we don’t show them as props
                    const {
                        panelOneTitle,
                        panelOneContent,
                        panelTwoTitle,
                        panelTwoContent,
                        panelThreeTitle,
                        panelThreeContent,
                        ...accordionProps
                    } = context.args

                    const renderedProps = Object.entries(accordionProps)
                        .map(([key, val]) =>
                            typeof val === 'boolean' ? (val ? key : '') : `${key}="${val}"`
                        )
                        .filter(Boolean)
                        .join(' ')

                    return `
<template>
  <DaisyAccordion${renderedProps ? ' ' + renderedProps : ''}>
    <DaisyAccordionPanel title="${panelOneTitle}">
      ${panelOneContent}
    </DaisyAccordionPanel>
    <DaisyAccordionPanel title="${panelTwoTitle}">
      ${panelTwoContent}
    </DaisyAccordionPanel>
    <DaisyAccordionPanel title="${panelThreeTitle}">
      ${panelThreeContent}
    </DaisyAccordionPanel>
  </DaisyAccordion>
</template>
          `.trim()
                }
            }
        }
    },
    argTypes: {
        multipleOpen: { control: 'boolean' },
        noneOpen: { control: 'boolean' },
        icon: { control: 'radio', options: iconTypes },
        modelValue: {
            description: 'Currently selected panel(s)',
            control: { type: 'text' }
        },
        'update:modelValue': {
            description: 'Emitted when the active panel changes'
        },
        panelOneTitle: { control: 'text', description: 'Panel one title' },
        panelOneContent: { control: 'text', description: 'Panel one content' },
        panelTwoTitle: { control: 'text', description: 'Panel two title' },
        panelTwoContent: { control: 'text', description: 'Panel two content' },
        panelThreeTitle: { control: 'text', description: 'Panel three title' },
        panelThreeContent: { control: 'text', description: 'Panel three content' }
    },
    args: {
        panelOneTitle: 'Panel 1',
        panelOneContent: 'Panel 1 content',
        panelTwoTitle: 'Panel 2',
        panelTwoContent: 'Panel 2 content',
        panelThreeTitle: 'Panel 3',
        panelThreeContent: 'Panel 3 content'
    }
})

/**
 * Exported story type for re-use
 */
export type DaisyAccordionStory = StoryObj<DaisyAccordionMeta>
