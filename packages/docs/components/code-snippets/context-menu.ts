export const menuItems = [
    {
        id: 'item_1',
        label: 'Item 1',
        shortcut: 'Ctrl + 1',
        action: () => {
            console.log('Item 1 clicked')
        }
    },
    {
        id: 'item_2',
        label: 'Item 2',
        shortcut: 'Ctrl + 2',
        separator: true,
        action: () => {
            console.log('Item 2 clicked')
        },
        children: [
            {
                id: 'item_2_1',
                label: 'Item 2.1',
                header: 'Item 2 sub menu',
                shortcut: 'Alt + 1',
                action: () => {
                    console.log('Item 2.1 clicked')
                }
            },
            {
                id: 'item_2_2',
                label: 'Item 2.2',
                action: () => {
                    console.log('Item 2.2 clicked')
                },
                children: [
                    {
                        id: 'item_2_2_1',
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
        id: 'item_3',
        label: 'Item 3',
        shortcut: 'Ctrl + 3',
        disabled: true,
        separator: true,
        action: () => {
            console.log('Item 3 clicked')
        }
    },
    {
        id: 'item_4',
        label: 'Item 4',
        shortcut: 'Ctrl + 4',
        action: () => {
            console.log('Item 4 clicked')
        }
    }
]
