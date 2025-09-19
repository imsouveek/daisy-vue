<script setup lang="ts">
import {DaisyLoading, DaisyTab, DaisyTabs} from 'daisy-vue'
import {colorsBrand, colorsState, sizes} from 'daisy-vue/globals'

const types = ['spinner', 'dots', 'ring', 'ball', 'bars', 'infinity']
</script>

# Loading Component

A loading component that uses animation to indicate that something is loading. This component
uses the [Daisy UI Loading component](https://daisyui.com/components/loading/) and exposes most of the
available options.

## Without any props

If using DaisyLoading without any props, it defaults to primary color and medium size

<DaisyTabs>
<DaisyTab value="Preview">

:::raw
<DaisyLoading/>
:::

</DaisyTab>
<DaisyTab value="Code">

```vue
<DaisyLoading />
```

</DaisyTab>
</DaisyTabs>

## With Brand and State colors

A color property can be set to determine the color of the loading component

<DaisyTabs>
<DaisyTab value="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<div v-for="color in [...colorsBrand, ...colorsState]" :key="color" class="flex flex-col items-center">
<p>{{color.toUpperCase()}}</p>
<DaisyLoading  :color="color"/>
</div>
</div>
:::

</DaisyTab>
<DaisyTab value="Code">

<template v-for="color in [...colorsBrand, ...colorsState]" :key="color">

```vue-vue
<DaisyLoading color="{{color}}"/>
```

</template>

</DaisyTab>
</DaisyTabs>

## With different sizes

A size property can be set to determine the size of the loading component

<DaisyTabs>
<DaisyTab value="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<div v-for="size in sizes" :key="size" class="flex flex-col items-center">
<p>{{size.toUpperCase()}}</p>
<DaisyLoading :size="size"/>
</div>
</div>
:::

</DaisyTab>
<DaisyTab value="Code">

<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyLoading size="{{size}}"/>
```

</template>

</DaisyTab>
</DaisyTabs>

## With different animation types

A type property can be set to determine the type of animation of the loading component

<DaisyTabs>
<DaisyTab value="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<div v-for="type in types" :key="type" class="flex flex-col items-center">
<p>{{type.toUpperCase()}}</p>
<DaisyLoading :type="type"/>
</div>
</div>
:::

</DaisyTab>
<DaisyTab value="Code">

<template v-for="type in types" :key="type">

```vue-vue
<DaisyLoading type="{{type}}"/>
```

</template>

</DaisyTab>
</DaisyTabs>
