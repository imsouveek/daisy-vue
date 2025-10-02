import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import DaisyContextMenu from '../DaisyContextMenu.vue'

export type DaisyContextMenuArgs = ComponentPropsAndSlots<typeof DaisyContextMenu> & {
    label?: string
}

export type DaisyContextMenuMeta = Meta<DaisyContextMenuArgs>

export const menuItems = [
    {
        label: 'Item 1',
        shortcut: 'Ctrl + 1',
        action: () => {
            console.log('Item 1 clicked')
        }
    },
    {
        label: 'Item 2',
        shortcut: 'Ctrl + 2',
        action: () => {
            console.log('Item 2 clicked')
        },
        children: [
            {
                label: 'Item 2.1',
                shortcut: 'Alt + 1',
                action: () => {
                    console.log('Item 2.1 clicked')
                }
            },
            {
                label: 'Item 2.2',
                action: () => {
                    console.log('Item 2.2 clicked')
                },
                children: [
                    {
                        label: 'Item 2.2.1',
                        shortcut: 'Ctrl + Alt + 1',
                        action: () => {
                            console.log('Item 2.2.1 clicked')
                        }
                    }
                ]
            }
        ]
    },
    {
        label: 'Item 3',
        shortcut: 'Ctrl + 3',
        action: () => {
            console.log('Item 3 clicked')
        }
    }
]

export const getMeta = (): DaisyContextMenuMeta => ({
    title: 'Components/DaisyContextMenu',
    component: DaisyContextMenu,
    render: (args) => ({
        components: { DaisyContextMenu },
        setup() {
            return { args, menuItems }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <DaisyContextMenu :items="menuItems" >
                    <div>Some stuff going on here that needs a custom context menu.</div>
                    <div>Right click me to see context menu</div>
                </DaisyContextMenu>
            </div>
        `
    }),
    parameters: {
        layout: 'centered',
        docs: {
            codePanel: true,
            source: {
                language: 'ts',
                transform: () => {
                    return `
                        <template>
                            <DaisyContextMenu
                                :items="[
                                    {
                                        label: 'Item 1',
                                        shortcut: 'Ctrl + 1',
                                        action: () => {
                                            console.log('Item 1 clicked')
                                        }
                                    },
                                    {
                                        label: 'Item 2',
                                        shortcut: 'Ctrl + 2',
                                        action: () => {
                                            console.log('Item 2 clicked')
                                        },
                                        children: [
                                            {
                                                label: 'Item 2.1',
                                                shortcut: 'Alt + 1',
                                                action: () => {
                                                    console.log('Item 2.1 clicked')
                                                }
                                            },
                                            {
                                                label: 'Item 2.2',
                                                action: () => {
                                                    console.log('Item 2.2 clicked')
                                                },
                                                children: [
                                                    {
                                                        label: 'Item 2.2.1',
                                                        shortcut: 'Ctrl + Alt + 1',
                                                        action: () => {
                                                            console.log('Item 2.2.1 clicked')
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        label: 'Item 3',
                                        shortcut: 'Ctrl + 3',
                                        action: () => {
                                            console.log('Item 3 clicked')
                                        }
                                    }
                                ]"
                            >
                                <div>Some stuff going on here that needs a custom context menu.</div>
                                <div>Right click me to see context menu</div>
                            </DaisyContextMenu>
                        </template>
                    `.trim()
                }
            }
        }
    },
    argTypes: {
        items: {
            control: false,
            description: 'An array of menu items with nested child menu items'
        }
    },
    args: {}
})

export type DaisyContextMenuStory = StoryObj<DaisyContextMenuMeta>
