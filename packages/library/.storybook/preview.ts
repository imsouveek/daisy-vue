import '../src/assets/main.css'
import type { Preview } from '@storybook/vue3-vite'
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
            codePanel: false
        }
    },
    tags: ['autodocs']
}

export default preview
