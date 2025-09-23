<script setup lang="ts">
import {DaisyBadge, DaisyTab, DaisyTabs} from 'daisy-vue'
import {colorsBrand, colorsState, sizes} from 'daisy-vue/globals'
</script>

# Badge Component

A badge component for displaying status, counts, or labels. This component
uses the [Daisy UI Badge component](https://daisyui.com/components/badge/) and exposes most of the
available options.

## Without any props

If using DaisyBadge without any props, it defaults to primary color and medium size

<DaisyTabs>
<DaisyTab title="Preview">

:::raw
<DaisyBadge>TEST</DaisyBadge>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue
<DaisyBadge>TEST</DaisyBadge>
```

</DaisyTab>
</DaisyTabs>

## With Brand and State colors

A color property can be set to determine the color of the badge

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<DaisyBadge v-for="color in [...colorsBrand, ...colorsState, 'ghost' ]" :key="color" :color="color">{{color.toUpperCase()}}</DaisyBadge>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="color in [...colorsBrand, ...colorsState, 'ghost']" :key="color">

```vue-vue
<DaisyBadge color="{{color}}">{{color.toUpperCase()}}</DaisyBadge>
```

</template>

</DaisyTab>
</DaisyTabs>

## With different sizes

A size property can be set to determine the size of the badge

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<DaisyBadge v-for="size in sizes" :key="size" :size="size">{{size.toUpperCase()}}</DaisyBadge>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyBadge size="{{size}}">{{size.toUpperCase()}}</DaisyBadge>
```

</template>

</DaisyTab>
</DaisyTabs>

## Other variations

Badges can also be outlined or without any text

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<DaisyBadge outline>TEST</DaisyBadge>
<DaisyBadge/>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue
<DaisyBadge outline>TEST</DaisyBadge>
```

```vue
<DaisyBadge />
```

</DaisyTab>
</DaisyTabs>
