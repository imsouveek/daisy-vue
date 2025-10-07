<script setup lang="ts">
import {DaisyTable, DaisyTab, DaisyTabs} from 'daisy-vue'
import {sizes} from 'daisy-vue/globals'
</script>

# Table Component 

A table component. This component
uses the [Daisy UI Table component](https://daisyui.com/components/table/) 
and exposes most of the available options.

## Without any props

If using DaisyTable without any props, it defaults to medium size

<DaisyTabs>
<DaisyTab title="Preview">

:::raw
<DaisyTable>TEST</DaisyTable>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue
<DaisyTable>TEST</DaisyTable>
```

</DaisyTab>
</DaisyTabs>

## With different sizes

A size property can be set to determine the size of the Table

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<DaisyTable v-for="size in sizes" :key="size" :size="size">{{size.toUpperCase()}}</DaisyTable>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyTable size="{{size}}">{{size.toUpperCase()}}</DaisyTable>
```

</template>

</DaisyTab>
</DaisyTabs>
