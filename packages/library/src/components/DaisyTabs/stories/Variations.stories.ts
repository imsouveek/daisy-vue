import { getMeta, type DaisyTabsMeta, type DaisyTabsStory } from './DaisyTabsMeta'
import DaisyTabs from '../DaisyTabs.vue'
import DaisyTab from '../../DaisyTab/DaisyTab.vue'
import { types } from '../config'

const meta = getMeta()
const srcArgTypes = meta.argTypes
const argTypes = Object.keys(srcArgTypes).reduce((result, key) => {
    result[key] = {
        table: {
            disable: true
        }
    }
    return result
}, {})

export default {
    ...meta,
    title: 'Components/DaisyTabs',
    parameters: {
        ...meta.parameters,
        docs: {
            source: false
        }
    },
    argTypes
} as DaisyTabsMeta

export const Types: DaisyTabsStory = {
    render: () => ({
        components: { DaisyTabs, DaisyTab },
        setup() {
            return {
                types
            }
        },
        template: `
        <div class="grid gap-4">
            <div v-for="type in types" :key="type" class="relative p-4 m-4">
                <h4>Tabs: {{ type }}</h4>
                <div class="bg-white opacity-5 absolute left-0 top-0 right-0 bottom-0 rounded-xl"></div>
                <DaisyTabs :type="type" class="!opacity-100">
                    <DaisyTab name="Tab 1">
                        Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Expedita saepe sapiente fugit
                        minus labore quos libero possimus sint molestiae quisquam, optio quam voluptatem veritatis
                        a accusantium, cumque error nam quaerat.
                    </DaisyTab>
                    <DaisyTab name="Tab 2">
                        Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Quaerat, praesentium
                        accusantium optio soluta eaque quam? Labore libero ratione quam aut natus vitae? Error
                        voluptatum velit voluptatem accusamus ut optio officia!
                    </DaisyTab>
                    <DaisyTab name="Tab 3">
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
