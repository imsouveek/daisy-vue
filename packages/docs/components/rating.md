<script setup lang="ts">
import {DaisyRating, DaisyTab, DaisyTabs} from 'daisy-vue'
import {sizes} from 'daisy-vue/globals'
</script>

# Rating Component 

A rating component. This component
uses the [Daisy UI Rating component](https://daisyui.com/components/rating/) 
and exposes most of the available options.

## Without any props

If using DaisyRating without any props, it defaults to medium size

<DaisyTabs>
<DaisyTab title="Preview">

:::raw
<DaisyRating>TEST</DaisyRating>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue
<DaisyRating>TEST</DaisyRating>
```

</DaisyTab>
</DaisyTabs>

## With different sizes

A size property can be set to determine the size of the Rating

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<DaisyRating v-for="size in sizes" :key="size" :size="size">{{size.toUpperCase()}}</DaisyRating>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyRating size="{{size}}">{{size.toUpperCase()}}</DaisyRating>
```

</template>

</DaisyTab>
</DaisyTabs>
