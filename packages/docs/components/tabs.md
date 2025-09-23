<script setup lang="ts">
import {DaisyTabs, DaisyTab} from 'daisy-vue'
import {sizes} from 'daisy-vue/globals'

const types = ['bordered', 'boxed', 'lifted'] as const
const positions = ['top', 'bottom'] as const
</script>

# Tabs

A tab component for displaying information in a tabbed format. This component
uses the [Daisy UI Tab component](https://daisyui.com/components/tab/) and exposes most of the
available options.

## Without any props

If using DaisyTabs without any props, it defaults to lifted type, top position and medium size

<DaisyTabs>
<DaisyTab title="Preview">

:::raw
<DaisyTabs>
<DaisyTab title="Tab 1">Tab 1 Content</DaisyTab>
<DaisyTab title="Tab 2">Tab 2 Content</DaisyTab>
<DaisyTab title="Tab 3">Tab 3 Content</DaisyTab>
</DaisyTabs>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue
<DaisyTabs>
    <DaisyTab title="Tab 1">Tab 1 Content</DaisyTab>
    <DaisyTab title="Tab 2">Tab 2 Content</DaisyTab>
    <DaisyTab title="Tab 3">Tab 3 Content</DaisyTab>
</DaisyTabs>
```

</DaisyTab>
</DaisyTabs>

## With different tab types

Tabs can be displayed in different styles depending on the type property

<DaisyTabs type="lifted">
<DaisyTab title="Preview">

:::raw

<div v-for="type in types" :key="type" class="m-4">
<p>{{type.toUpperCase()}}</p>
<DaisyTabs :type="type">
<DaisyTab title="Tab 1">Tab 1 Content</DaisyTab>
<DaisyTab title="Tab 2">Tab 2 Content</DaisyTab>
<DaisyTab title="Tab 3">Tab 3 Content</DaisyTab>
</DaisyTabs>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="type in types" :key="type">

```vue-vue
<DaisyTabs type="{{type}}">
    <DaisyTab title="Tab 1">Tab 1 Content</DaisyTab>
    <DaisyTab title="Tab 2">Tab 2 Content</DaisyTab>
    <DaisyTab title="Tab 3">Tab 3 Content</DaisyTab>
</DaisyTabs>
```

</template>

</DaisyTab>

</DaisyTabs>

## With different tab sizes

Tabs can be in different sizes based on the size property

<DaisyTabs type="lifted">
<DaisyTab title="Preview">

:::raw

<div v-for="size in sizes" :key="size" class="m-4">
<p>{{size.toUpperCase()}}</p>
<DaisyTabs :size="size">
<DaisyTab title="Tab 1">Tab 1 Content</DaisyTab>
<DaisyTab title="Tab 2">Tab 2 Content</DaisyTab>
<DaisyTab title="Tab 3">Tab 3 Content</DaisyTab>
</DaisyTabs>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyTabs size="{{size}}">
    <DaisyTab title="Tab 1">Tab 1 Content</DaisyTab>
    <DaisyTab title="Tab 2">Tab 2 Content</DaisyTab>
    <DaisyTab title="Tab 3">Tab 3 Content</DaisyTab>
</DaisyTabs>
```

</template>

</DaisyTab>

</DaisyTabs>

## With different tab positions

Tabs can be at the top or bottom depending on the position property.

**Note:** It is not supported to have nested tabs
with different positions explicitly defined. However, if outer tabs is not explicitly having position set and inner tabs
have position explicitly set as bottom, then we can have nested tabs with outer tabs positioned at top and inner tabs
positioned at bottom

<DaisyTabs type="lifted">
<DaisyTab title="Preview">

:::raw

<div v-for="position in positions" :key="position" class="m-4">
<p>{{position.toUpperCase()}}</p>
<DaisyTabs :position="position">
<DaisyTab title="Tab 1">Tab 1 Content</DaisyTab>
<DaisyTab title="Tab 2">Tab 2 Content</DaisyTab>
<DaisyTab title="Tab 3">Tab 3 Content</DaisyTab>
</DaisyTabs>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="position in positions" :key="position">

```vue-vue
<DaisyTabs position="{{position}}">
    <DaisyTab title="Tab 1">Tab 1 Content</DaisyTab>
    <DaisyTab title="Tab 2">Tab 2 Content</DaisyTab>
    <DaisyTab title="Tab 3">Tab 3 Content</DaisyTab>
</DaisyTabs>
```

</template>

</DaisyTab>

</DaisyTabs>
