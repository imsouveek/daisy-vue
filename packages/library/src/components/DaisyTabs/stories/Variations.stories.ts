import { getMeta, type DaisyTabsMeta, type DaisyTabsStory } from './DaisyTabsMeta'
import DaisyTabs from '../DaisyTabs.vue'
import DaisyTab from '../../DaisyTab/DaisyTab.vue'
import { types, positions } from '../config'
import { sizes } from '../../../globals'

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
        tabOneText: {
            table: {
                disable: true
            }
        },
        tabTwoText: {
            table: {
                disable: true
            }
        },
        tabThreeText: {
            table: {
                disable: true
            }
        }
    }
} as DaisyTabsMeta

export const Sizes: DaisyTabsStory = {
    argTypes: {
        ...srcArgTypes,
        size: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyTabs, DaisyTab },
        setup() {
            return {
                args,
                sizes
            }
        },
        template: `
        <div class="grid gap-4">
            <div v-for="size in sizes" :key="size">
                <h4 class="my-4">Tabs: {{ size?.toUpperCase() ?? 'UNDEFINED' }}</h4>
                <DaisyTabs :size="size" v-bind="args">
                    <DaisyTab value="Tab 1">
                        Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Expedita saepe sapiente fugit
                        minus labore quos libero possimus sint molestiae quisquam, optio quam voluptatem veritatis
                        a accusantium, cumque error nam quaerat.
                    </DaisyTab>
                    <DaisyTab value="Tab 2">
                        Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Quaerat, praesentium
                        accusantium optio soluta eaque quam? Labore libero ratione quam aut natus vitae? Error
                        voluptatum velit voluptatem accusamus ut optio officia!
                    </DaisyTab>
                    <DaisyTab value="Tab 3">
                        Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam, deserunt
                        accusantium ex dolores, ducimus aperiam consequatur sint debitis maxime saepe inventore
                        quisquam officiis fuga voluptatem quia odio, recusandae fugit?
                    </DaisyTab>
                </DaisyTabs>
            </div>
        </div>
        `
    })
}

export const Types: DaisyTabsStory = {
    argTypes: {
        ...srcArgTypes,
        type: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyTabs, DaisyTab },
        setup() {
            return {
                args,
                types
            }
        },
        template: `
        <div class="grid gap-4">
            <div v-for="type in types" :key="type">
                <h4 class="my-4">Tabs: {{ type?.toUpperCase() ?? 'UNDEFINED' }}</h4>
                <DaisyTabs :type="type" v-bind="args">
                    <DaisyTab value="Tab 1">
                        Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Expedita saepe sapiente fugit
                        minus labore quos libero possimus sint molestiae quisquam, optio quam voluptatem veritatis
                        a accusantium, cumque error nam quaerat.
                    </DaisyTab>
                    <DaisyTab value="Tab 2">
                        Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Quaerat, praesentium
                        accusantium optio soluta eaque quam? Labore libero ratione quam aut natus vitae? Error
                        voluptatum velit voluptatem accusamus ut optio officia!
                    </DaisyTab>
                    <DaisyTab value="Tab 3">
                        Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam, deserunt
                        accusantium ex dolores, ducimus aperiam consequatur sint debitis maxime saepe inventore
                        quisquam officiis fuga voluptatem quia odio, recusandae fugit?
                    </DaisyTab>
                </DaisyTabs>
            </div>
        </div>
        `
    })
}

export const Positions: DaisyTabsStory = {
    argTypes: {
        ...srcArgTypes,
        position: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyTabs, DaisyTab },
        setup() {
            return {
                args,
                positions
            }
        },
        template: `
        <div class="grid gap-4">
            <div v-for="position in positions" :key="position">
                <h4 class="my-4">Tabs: {{ position?.toUpperCase() ?? 'UNDEFINED' }}</h4>
                <DaisyTabs :position="position" v-bind="args">
                    <DaisyTab value="Tab 1">
                        Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Expedita saepe sapiente fugit
                        minus labore quos libero possimus sint molestiae quisquam, optio quam voluptatem veritatis
                        a accusantium, cumque error nam quaerat.
                    </DaisyTab>
                    <DaisyTab value="Tab 2">
                        Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Quaerat, praesentium
                        accusantium optio soluta eaque quam? Labore libero ratione quam aut natus vitae? Error
                        voluptatum velit voluptatem accusamus ut optio officia!
                    </DaisyTab>
                    <DaisyTab value="Tab 3">
                        Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam, deserunt
                        accusantium ex dolores, ducimus aperiam consequatur sint debitis maxime saepe inventore
                        quisquam officiis fuga voluptatem quia odio, recusandae fugit?
                    </DaisyTab>
                </DaisyTabs>
            </div>
        </div>
        `
    })
}
