<script setup lang="ts">
import {DaisyButton,DaisyTab, DaisyTabs} from 'daisy-vue'
import {colorsBrand, colorsState, sizes} from 'daisy-vue/globals'

const variants = [
                { name: 'disabled', disabled: true },
                { name: 'square', square: true },
                { name: 'circle', circle: true },
                { name: 'active', active: true },
                { name: 'soft', soft: true },
                { name: 'outline', outline: true },
                { name: 'dash', dash: true }
            ]
</script>

# Button Component

A flexible button component for to allow users to take action or make choices. This component
uses the [Daisy UI Button component](https://daisyui.com/components/button/) and exposes most of the
available options.

## Without any props

If using DaisyButton without any props, it defaults to primary color and medium size

<DaisyTabs>
<DaisyTab title="Preview">

:::raw
<DaisyButton>Click Me!</DaisyButton>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue
<DaisyButton>Click Me!</DaisyButton>
```

</DaisyTab>
</DaisyTabs>

## With Brand and State colors

A color property can be set to determine the color of the button

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<DaisyButton v-for="color in [...colorsBrand, ...colorsState, 'ghost', 'link']" :key="color" :color="color">{{color.toUpperCase()}}</DaisyButton>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="color in [...colorsBrand, ...colorsState, 'ghost', 'link']" :key="color">

```vue-vue
<DaisyButton color="{{color}}">{{color.toUpperCase()}}</DaisyButton>
```

</template>

</DaisyTab>
</DaisyTabs>

## With different sizes

A size property can be set to determine the size of the button

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<DaisyButton v-for="size in sizes" :key="size" :size="size">{{size.toUpperCase()}}</DaisyButton>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyButton size="{{size}}">{{size.toUpperCase()}}</DaisyButton>
```

</template>

</DaisyTab>
</DaisyTabs>

## With other properties

Several other properties can be used with buttons to control their behavior

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4 mb-4">
<DaisyButton v-for="variant in variants" :key="variant" v-bind="variant">{{variant.name.toUpperCase()}}</DaisyButton>
</div>
<DaisyButton wide class="mb-4">WIDE</DaisyButton>
<DaisyButton block>BLOCK</DaisyButton>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="variant in variants" :key="variant">

```vue-vue
<DaisyButton {{variant.name}}>{{variant.name.toUpperCase()}}</DaisyButton>
```

</template>

```vue-vue
<DaisyButton wide>WIDE</DaisyButton>
```

```vue-vue
<DaisyButton block>BLOCK</DaisyButton>
```

</DaisyTab>
</DaisyTabs>
