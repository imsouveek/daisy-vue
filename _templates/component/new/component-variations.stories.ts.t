---
to: packages/library/src/components/<%= h.componentNameWithPrefix(name) %>/stories/Variations.stories.ts
---
import {
    getMeta,
    type <%= h.componentNameWithPrefix(name) %>Meta,
    type <%= h.componentNameWithPrefix(name) %>Story
} from './<%= h.componentNameWithPrefix(name) %>Meta'
import <%= h.componentNameWithPrefix(name) %> from '../<%= h.componentNameWithPrefix(name) %>.vue'
import { sizes } from '../../../globals'


const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/<%= h.componentNameWithPrefix(name) %>',
    parameters: {
        ...meta.parameters,
        docs: {
            source: false
        }
    },
    argTypes: {
        ...srcArgTypes,
        label: {
            table: {
                disable: true
            }
        }
    }
} as <%= h.componentNameWithPrefix(name) %>Meta

export const Sizes: <%= h.componentNameWithPrefix(name) %>Story = {
    argTypes: {
        ...srcArgTypes,
        size: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { <%= h.componentNameWithPrefix(name) %> },
        setup() {
            return {
                args,
                sizes
            }
        },
        template: `
            <div class="grid grid-cols-5 gap-4">
                <div v-for="size in sizes" :key="size" class="flex flex-col items-center">
                    <<%= h.componentNameWithPrefix(name) %> :size="size" v-bind="args">{{ size?.toUpperCase() ?? 'UNDEFINED' }}</<%= h.componentNameWithPrefix(name) %>>
                </div>
            </div>
        `
    })
}
