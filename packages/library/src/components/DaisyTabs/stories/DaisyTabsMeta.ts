import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyTab from '../../DaisyTab/DaisyTab.vue'
import DaisyTabs from '../DaisyTabs.vue'
import { types, positions } from '../config'
import { sizes } from '../../../globals'

export type DaisyTabsArgs = ComponentPropsAndSlots<typeof DaisyTabs> & {
    tabOneTitle?: string
    tabOneContent?: string
    tabTwoTitle?: string
    tabTwoContent?: string
    tabThreeTitle?: string
    tabThreeContent?: string
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
                    <DaisyTab :title="args.tabOneTitle">{{args.tabOneContent}}</DaisyTab>
                    <DaisyTab :title="args.tabTwoTitle">{{args.tabTwoContent}}</DaisyTab>
                    <DaisyTab :title="args.tabThreeTitle">{{args.tabThreeContent}}</DaisyTab>
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
                    const {
                        tabOneTitle,
                        tabOneContent,
                        tabTwoTitle,
                        tabTwoContent,
                        tabThreeTitle,
                        tabThreeContent,
                        ...tabArgs
                    } = context.args

                    const renderedProps = Object.keys(tabArgs)
                        .map((key) => `${key}="${tabArgs[key]}"`)
                        .join(' ')
                        .trim()

                    return `
                        <template>
                            <DaisyTabs${renderedProps ? ' ' + renderedProps : ''}>
                                <DaisyTab title="${tabOneTitle}">
                                    ${tabOneContent}
                                </DaisyTab>
                                <DaisyTab title="${tabTwoTitle}">
                                    ${tabTwoContent}
                                </DaisyTab>
                                <DaisyTab title="${tabThreeTitle}">
                                    ${tabThreeContent}
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
        tabOneTitle: {
            content: { type: 'text' },
            description: 'Tab one title'
        },
        tabOneContent: {
            control: { type: 'text' },
            description: 'Tab one text'
        },
        tabTwoTitle: {
            content: { type: 'text' },
            description: 'Tab two title'
        },
        tabTwoContent: {
            control: { type: 'text' },
            description: 'Tab two text'
        },
        tabThreeTitle: {
            content: { type: 'text' },
            description: 'Tab three title'
        },
        tabThreeContent: {
            control: { type: 'text' },
            description: 'Tab three text'
        }
    },
    args: {
        tabOneTitle: 'Tab 1',
        tabOneContent:
            'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Expedita saepe sapiente fugit ' +
            'minus labore quos libero possimus sint molestiae quisquam, optio quam voluptatem veritatis ' +
            'a accusantium, cumque error nam quaerat.',
        tabTwoTitle: 'Tab 2',
        tabTwoContent:
            'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Quaerat, praesentium ' +
            'accusantium optio soluta eaque quam? Labore libero ratione quam aut natus vitae? Error ' +
            'voluptatum velit voluptatem accusamus ut optio officia!',
        tabThreeTitle: 'Tab 3',
        tabThreeContent:
            'Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam, deserunt ' +
            'accusantium ex dolores, ducimus aperiam consequatur sint debitis maxime saepe inventore ' +
            'quisquam officiis fuga voluptatem quia odio, recusandae fugit?'
    }
})

export type DaisyTabsStory = StoryObj<DaisyTabsMeta>
