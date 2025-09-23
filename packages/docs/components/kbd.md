<script setup lang="ts">
import {DaisyKbd, DaisyTab, DaisyTabs} from 'daisy-vue'
import {sizes} from 'daisy-vue/globals'
</script>

# Kbd Component

A kbd component. This component
uses the [Daisy UI Kbd component](https://daisyui.com/components/kbd/)
and exposes most of the available options.

## Without any props

If using DaisyKbd without any props, it defaults to medium size

<DaisyTabs>
<DaisyTab title="Preview">

:::raw
<DaisyKbd>TEST</DaisyKbd>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue
<DaisyKbd>TEST</DaisyKbd>
```

</DaisyTab>
</DaisyTabs>

## With different sizes

A size property can be set to determine the size of the Kbd

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<DaisyKbd v-for="size in sizes" :key="size" :size="size">{{size.toUpperCase()}}</DaisyKbd>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyKbd size="{{size}}">{{size.toUpperCase()}}</DaisyKbd>
```

</template>

</DaisyTab>
</DaisyTabs>
