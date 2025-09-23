import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyTab from '../../DaisyTab/DaisyTab.vue'
import DaisyTabs from '../DaisyTabs.vue'
import { types, positions } from '../config'
import { sizes } from '../../../globals'

export type DaisyTabsArgs = ComponentPropsAndSlots<typeof DaisyTabs> & {
    tabOneText?: string
    tabTwoText?: string
    tabThreeText?: string
    'update:modelValue': string
}

export type DaisyTabsMeta = Meta<DaisyTabsArgs>

export const getMeta = (): DaisyTabsMeta => ({
    title: 'Components/DaisyTabs',
    component: DaisyTabs,
    subcomponents: { DaisyTab },
    render: (args) => ({
        components: { DaisyTabs, DaisyTab },
        setup() {
            return { args }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyTabs v-bind="args">
                    <DaisyTab title="Tab 1">{{args.tabOneText}}</DaisyTab>
                    <DaisyTab title="Tab 2">{{args.tabTwoText}}</DaisyTab>
                    <DaisyTab title="Tab 3">{{args.tabThreeText}}</DaisyTab>
                </DaisyTabs>
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
                    const { tabOneText, tabTwoText, tabThreeText, ...tabArgs } = context.args

                    const renderedProps = Object.keys(tabArgs)
                        .map((key) => `${key}="${tabArgs[key]}"`)
                        .join(' ')
                        .trim()

                    return `
                        <template>
                            <DaisyTabs${renderedProps ? ' ' + renderedProps : ''}>
                                <DaisyTab title="Tab 1">
                                    ${tabOneText}
                                </DaisyTab>
                                <DaisyTab title="Tab 2">
                                    ${tabTwoText}
                                </DaisyTab>
                                <DaisyTab title="Tab 3">
                                    ${tabThreeText}
                                </DaisyTab>
                            </DaisyTabs>
                        </template>
                    `.trim()
                }
            }
        }
    },
    argTypes: {
        type: {
            control: { type: 'select' },
            options: types
        },
        size: {
            control: { type: 'select' },
            options: sizes
        },
        position: {
            control: { type: 'radio' },
            options: positions
        },
        modelValue: {
            description: 'Currently selected tab',
            control: { type: 'text' }
        },
        'update:modelValue': {
            description: 'Emitted when the active tab changes'
        },
        tabOneText: {
            control: { type: 'text' },
            description: 'Tab one text'
        },
        tabTwoText: {
            control: { type: 'text' },
            description: 'Tab two text'
        },
        tabThreeText: {
            control: { type: 'text' },
            description: 'Tab three text'
        }
    },
    args: {
        tabOneText:
            'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Expedita saepe sapiente fugit ' +
            'minus labore quos libero possimus sint molestiae quisquam, optio quam voluptatem veritatis ' +
            'a accusantium, cumque error nam quaerat.',
        tabTwoText:
            'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Quaerat, praesentium ' +
            'accusantium optio soluta eaque quam? Labore libero ratione quam aut natus vitae? Error ' +
            'voluptatum velit voluptatem accusamus ut optio officia!',
        tabThreeText:
            'Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam, deserunt ' +
            'accusantium ex dolores, ducimus aperiam consequatur sint debitis maxime saepe inventore ' +
            'quisquam officiis fuga voluptatem quia odio, recusandae fugit?'
    }
})

export type DaisyTabsStory = StoryObj<DaisyTabsMeta>
