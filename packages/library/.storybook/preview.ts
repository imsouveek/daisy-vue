import '../src/assets/main.css'
import type { Preview } from '@storybook/vue3-vite'
import { Globals } from 'storybook/internal/csf'
import '../src/assets/main.css'

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                icon: 'mirror', // toolbar icon
                title: 'Theme',
                items: [
                    { value: 'light', title: 'Light', icon: 'sun' },
                    { value: 'dark', title: 'Dark', icon: 'moon' }
                ]
            },
            hidden: ({ viewMode }) => viewMode === 'docs'
        }
    },
    decorators: [
        (story, context) => {
            const theme = (context.globals as Globals).theme ?? 'light'
            const html = document.documentElement

            html.setAttribute('data-theme', theme)
            html.classList.toggle('dark', theme === 'dark')
            html.classList.toggle('light', theme === 'light')

            return story()
        }
    ],
    parameters: {
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        docs: {
            // page: DocumentationTemplate,
            codePanel: false,
            controls: {
                exclude: ['ref', 'ref_for', 'key', 'ref_key', 'class', 'style', 'default']
            }
        }
    }
    // tags: ['autodocs']
}

export default preview
