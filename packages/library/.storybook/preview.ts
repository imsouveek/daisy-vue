import '../src/assets/main.css'
import type { Preview } from '@storybook/vue3-vite'
import customTheme from './customTheme'

import DocumentationTemplate from './DocumentationTemplate.mdx'

const preview: Preview = {
    parameters: {
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        docs: {
            page: DocumentationTemplate,
            theme: customTheme,
            codePanel: false,
            controls: {
                exclude: ['ref', 'ref_for', 'key', 'ref_key', 'class', 'style', 'default']
            }
        }
    },
    tags: ['autodocs']
}

export default preview
