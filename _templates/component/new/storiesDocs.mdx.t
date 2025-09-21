---
to: packages/library/src/components/<%= h.componentNameWithPrefix(name) %>/stories/Docs.mdx
---
import { Meta, Controls, Story, Source } from '@storybook/addon-docs/blocks'
import * as PrimaryStory from './Playground.stories'
import * as VariationsStories from './Variations.stories'

# <%= h.componentNameWithPrefix(name) %>

<Meta of={PrimaryStory} />

A <%= h.componentNameNoPrefix(name).toLowerCase() %> component. This component
uses the [Daisy UI <%=h.capitalize(h.componentNameNoPrefix(name))%> component](https://daisyui.com/components/<%=h.capitalize(h.componentNameNoPrefix(name)).toLowerCase() %>/) 
and exposes most of the available options.

<div className="p-8 border-1 rounded border-gray-200 shadow-sm shadow-gray-200 dark:shadow-none dark:border-gray-800 dark:bg-slate-900">
    <Story of={PrimaryStory.Playground} />
</div>
<Source of={PrimaryStory.Playground} />

<Controls />

## Usage

The style of the <%= h.componentNameNoPrefix(name).toLowerCase() %> can be modified through various properties

### Sizes

Size of the <%= h.componentNameNoPrefix(name).toLowerCase() %> can be controlled through this prop

<div className="p-8 border-1 rounded border-gray-200 shadow-sm shadow-gray-200 dark:shadow-none dark:border-gray-800 dark:bg-slate-900">
    <Story of={VariationsStories.Sizes} />
</div>

