---
to: packages/docs/components/<%= h.componentNameKebab(name) %>.md
---

<script setup lang="ts">
import {<%= h.componentNameWithPrefix(name) %>, DaisyTab, DaisyTabs} from 'daisy-vue'
import {sizes} from 'daisy-vue/globals'
</script>

# <%= h.componentNameNoPrefix(name) %> Component 

A <%= h.componentNameText(name) %> component. This component
uses the [Daisy UI <%= h.componentNameNoPrefix(name) %> component](https://daisyui.com/components/<%= h.componentNameKebab(name) %>/) 
and exposes most of the available options.

## Without any props

If using <%= h.componentNameWithPrefix(name) %> without any props, it defaults to medium size

<DaisyTabs>
<DaisyTab value="Preview">

:::raw
<<%= h.componentNameWithPrefix(name) %>>TEST</<%= h.componentNameWithPrefix(name) %>>
:::

</DaisyTab>
<DaisyTab value="Code">

```vue
<<%= h.componentNameWithPrefix(name) %>>TEST</<%= h.componentNameWithPrefix(name) %>>
```

</DaisyTab>
</DaisyTabs>

## With different sizes

A size property can be set to determine the size of the <%=h.componentNameNoPrefix(name).toLowerCase() %>

<DaisyTabs>
<DaisyTab value="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<<%= h.componentNameWithPrefix(name) %> v-for="size in sizes" :key="size" :size="size">{{size.toUpperCase()}}</<%= h.componentNameWithPrefix(name) %>>
</div>
:::

</DaisyTab>
<DaisyTab value="Code">

<template v-for="size in sizes" :key="size">

```vue-vue
<<%= h.componentNameWithPrefix(name) %> size="{{size}}">{{size.toUpperCase()}}</<%= h.componentNameWithPrefix(name) %>>
```

</template>

</DaisyTab>
</DaisyTabs>
