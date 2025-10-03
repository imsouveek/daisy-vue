import {
    getMeta,
    menuItems,
    type DaisyContextMenuMeta,
    type DaisyContextMenuStory
} from './DaisyContextMenuMeta'

import './DaisyContextMenu.stories.css'
import DaisyContextMenu from '../DaisyContextMenu.vue'

const meta = getMeta()
export default {
    ...meta,
    title: 'Components/DaisyContextMenu',
    parameters: {
        ...meta.parameters,
        docs: {
            source: false
        }
    }
} as DaisyContextMenuMeta

export const Styling: DaisyContextMenuStory = {
    render: () => ({
        components: { DaisyContextMenu },
        setup: () => {
            return {
                menuItems,
                demoItems: [
                    {
                        id: 'context_menu_styling_story_all_surfaces',
                        description: 'All Surface styling with [data-context-menu-surface]'
                    },
                    {
                        id: 'context_menu_styling_story_one_surface',
                        description:
                            "Styling specific surfaces with [data-context-menu-surface='item_2']"
                    },
                    {
                        id: 'context_menu_styling_story_all_text',
                        description: 'Styling all text with [data-context-menu-id]'
                    },
                    {
                        id: 'context_menu_styling_story_one_text',
                        description: "Styling specific text with [data-context-menu-id='item_4']"
                    },
                    {
                        id: 'context_menu_styling_story_header',
                        description:
                            "Stying header with [data-context-menu-header] or [data-context-menu-header='item_2_1]"
                    },
                    {
                        id: 'context_menu_styling_story_separator',
                        description:
                            "Stying header with [data-context-menu-separator] or [data-context-menu-separator='item_3]"
                    }
                ]
            }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center gap-4 ">
                <div>
                    <DaisyContextMenu :items="menuItems" style="background-color: oklch(76.9% 0.188 70.08) ; color: white;">
                        <div class="menu-trigger">Directly applying styles on DaisyContextMenu component</div>
                    </DaisyContextMenu>
                </div>
                <div v-for="demo in demoItems" :key="demo.id" >
                    <DaisyContextMenu :items="menuItems" :data-demo-id="demo.id">
                        <div class="menu-trigger">{{demo.description}}</div>
                    </DaisyContextMenu>
                </div>
            </div>

        `
    })
}
