import type { StorybookConfig } from '@storybook/vue3-vite'
import remarkGfm from 'remark-gfm'
import { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): ReturnType<typeof dirname> {
    return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        {
            name: getAbsolutePath('@storybook/addon-docs'),
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm]
                    }
                }
            }
        }
    ],
    framework: {
        name: getAbsolutePath('@storybook/vue3-vite'),
        options: {
            docgen: {
                plugin: 'vue-component-meta',
                tsconfig: 'tsconfig.app.json'
            }
        }
    }
}
export default config
