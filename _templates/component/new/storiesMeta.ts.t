---
to: packages/library/src/components/<%= h.componentNameWithPrefix(name) %>/stories/<%= h.componentNameWithPrefix(name) %>Meta.ts
---

import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import <%= h.componentNameWithPrefix(name) %> from '../<%= h.componentNameWithPrefix(name) %>.vue'
import { sizes } from '../../../globals'

export type <%= h.componentNameWithPrefix(name) %>Args = ComponentPropsAndSlots<typeof <%= h.componentNameWithPrefix(name) %>> & {
    label?: string
}

export type <%= h.componentNameWithPrefix(name) %>Meta = Meta<<%= h.componentNameWithPrefix(name) %>Args>

export const getMeta = (): <%= h.componentNameWithPrefix(name) %>Meta => ({
    title: 'Components/<%= h.componentNameWithPrefix(name) %>',
    component: <%= h.componentNameWithPrefix(name) %>,
    render: (args) => ({
        components: { <%= h.componentNameWithPrefix(name) %> },
        setup() {
            return { args }
        },
        template: `
            <div style="width: 896px;" class=" flex flex-col items-center">
                <<%= h.componentNameWithPrefix(name) %> v-bind="args" v-html="args.label" />
            </div>
        `
    }),
    parameters: {
        layout: 'centered',
        docs: {
            codePanel: true,
            source: {
                language: 'ts',
                transform: (_, context) => {
                    const { label, ...<%= h.componentNameNoPrefix(name) %>Args } = context.args

                    const renderedProps = Object.keys(<%= h.componentNameNoPrefix(name) %>Args)
                        .map((key) =>
                            typeof <%= h.componentNameNoPrefix(name) %>Args[key] === 'boolean'
                                ? <%= h.componentNameNoPrefix(name) %>Args[key] === true
                                    ? key
                                    : ''
                                : `${key}="${<%=h.componentNameNoPrefix(name) %>Args[key]}"`
                        )
                        .join(' ')
                        .trim()

                    return `
                        <template>
                            <<%= h.componentNameWithPrefix(name) %>${renderedProps ? ' ' + renderedProps : ''}>
                                ${label}
                            </<%= h.componentNameWithPrefix(name) %>>
                        </template>
                    `.trim()
                }
            }
        }
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: sizes
        },
        label: {
            control: 'text',
            description: 'Badge label'
        }
    },
    args: {
        label: 'TEST'
    }
})

export type <%= h.componentNameWithPrefix(name) %>Story = StoryObj<<%= h.componentNameWithPrefix(name) %>Meta>
