<script setup lang="ts">
import {DaisyContextMenu, DaisyTab, DaisyTabs} from 'daisy-vue'
import {sizes} from 'daisy-vue/globals'
</script>

# ContextMenu Component 

A context menu component. This component
uses the [Daisy UI ContextMenu component](https://daisyui.com/components/context-menu/) 
and exposes most of the available options.

## Without any props

If using DaisyContextMenu without any props, it defaults to medium size

<DaisyTabs>
<DaisyTab title="Preview">

:::raw
<DaisyContextMenu>TEST</DaisyContextMenu>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue
<DaisyContextMenu>TEST</DaisyContextMenu>
```

</DaisyTab>
</DaisyTabs>

## With different sizes

A size property can be set to determine the size of the ContextMenu

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<DaisyContextMenu v-for="size in sizes" :key="size" :size="size">{{size.toUpperCase()}}</DaisyContextMenu>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyContextMenu size="{{size}}">{{size.toUpperCase()}}</DaisyContextMenu>
```

</template>

</DaisyTab>
</DaisyTabs>
