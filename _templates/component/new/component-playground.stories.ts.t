---
to: packages/library/src/components/<%= h.componentNameWithPrefix(name) %>/stories/Playground.stories.ts
---
import { getMeta, type <%= h.componentNameWithPrefix(name) %>Meta, type <%= h.componentNameWithPrefix(name) %>Story } from './<%= h.componentNameWithPrefix(name) %>Meta'
const meta = getMeta()
export default {
    ...meta,
    title: 'Components/<%= h.componentNameWithPrefix(name) %>'
} as <%= h.componentNameWithPrefix(name) %>Meta

export const Playground: <%= h.componentNameWithPrefix(name) %>Story = {
    args: {
        label: '24'
    }
}
