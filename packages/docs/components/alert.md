<script setup lang="ts">
import {DaisyAlert, DaisyTab, DaisyTabs} from 'daisy-vue'
import {sizes} from 'daisy-vue/globals'
</script>

# Alert Component 

A alert component. This component
uses the [Daisy UI Alert component](https://daisyui.com/components/alert/) 
and exposes most of the available options.

## Without any props

If using DaisyAlert without any props, it defaults to medium size

<DaisyTabs>
<DaisyTab title="Preview">

:::raw
<DaisyAlert>TEST</DaisyAlert>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue
<DaisyAlert>TEST</DaisyAlert>
```

</DaisyTab>
</DaisyTabs>

## With different sizes

A size property can be set to determine the size of the Alert

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<DaisyAlert v-for="size in sizes" :key="size" :size="size">{{size.toUpperCase()}}</DaisyAlert>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyAlert size="{{size}}">{{size.toUpperCase()}}</DaisyAlert>
```

</template>

</DaisyTab>
</DaisyTabs>
