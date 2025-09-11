import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyTab from '../../DaisyTab/DaisyTab.vue'
import DaisyTabs from '../DaisyTabs.vue'
import { types } from '../config'

export type DaisyTabsArgs = ComponentPropsAndSlots<typeof DaisyTabs> & {
    tabOneText?: string
    tabTwoText?: string
    tabThreeText?: string
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
                    <DaisyTab name="Tab 1" v-html="args.tabOneText"/>
                    <DaisyTab name="Tab 2" v-html="args.tabTwoText"/>
                    <DaisyTab name="Tab 3" v-html="args.tabThreeText"/>
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
                    const { tabOneText, tabTwoText, tabThreeText, type } = context.args

                    const renderedType = type ? ` type="${type}"` : ''
                    return `
                        <template>
                            <DaisyTabs${renderedType}>
                                <DaisyTab name="Tab 1">
                                    ${tabOneText}
                                </DaisyTab>
                                <DaisyTab name="Tab 2">
                                    ${tabTwoText}
                                </DaisyTab>
                                <DaisyTab name="Tab 3">
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
