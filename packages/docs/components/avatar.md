<script setup lang="ts">
import {DaisyAvatar, DaisyBadge, DaisyTab, DaisyTabs} from 'daisy-vue'
import {sizes, masks} from 'daisy-vue/globals'

const presence = ['online', 'offline', 'busy', 'away', undefined] as const
</script>

# Avatar Component

A avatar component. This component
uses the [Daisy UI Avatar component](https://daisyui.com/components/avatar/)
and exposes most of the available options.

## Without any props

If using DaisyAvatar without any props, it defaults to medium size

<DaisyTabs>
<DaisyTab title="Preview">

:::raw
<DaisyAvatar  style="background-color: #fb2c36; color: white;" placeholder="TEST" size="md">
<img src="https://picsum.photos/300/300" />
</DaisyAvatar>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue
<DaisyAvatar style="background-color: #fb2c36; color: white;" placeholder="TEST" size="md">
    <img src="https://picsum.photos/300/300" />
</DaisyAvatar>
```

</DaisyTab>
</DaisyTabs>

## With different sizes

A size property can be set to determine the size of the Avatar

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<div v-for="size in sizes" :key="size" class="flex flex-col items-center">
{{size.toUpperCase()}} 
<DaisyAvatar style="background-color: #fb2c36; color: white;" :size="size" placeholder="TEST"/>
</div>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyAvatar style="background-color: #fb2c36; color: white;" size="{{size}}" placeholder="TEST"/>
```

</template>

</DaisyTab>
</DaisyTabs>

## With presence indicator

A presence property can be set to show a user presence status along with the Avatar. Note that this prop does not work inside an [Avatar Group](/components/avatar-group.html) component

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<div v-for="option in presence" :key="option"  class="flex flex-col items-center">
{{option?.toUpperCase() ?? 'UNDEFINED'}}
<DaisyAvatar style="background-color: #fb2c36; color: white;" :presence="option" placeholder="TEST"/>
</div>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="option in presence" :key="option">

```vue-vue
<DaisyAvatar style="background-color: #fb2c36; color: white;" presence="{{option}}" placeholder="TEST"/>
```

</template>

</DaisyTab>
</DaisyTabs>

## With different masks

A mask property can be set to control the shape of the Avatar

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-5 gap-4">
<div v-for="option in masks" :key="option"  class="flex flex-col items-center">
{{option?.toUpperCase() ?? 'UNDEFINED'}}
<DaisyAvatar style="background-color: #fb2c36; color: white;" :mask="option" placeholder="TEST"/>
</div>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="option in masks" :key="option">

```vue-vue
<DaisyAvatar style="background-color: #fb2c36; color: white;" mask="{{option}}" placeholder="TEST"/>
```

</template>

</DaisyTab>
</DaisyTabs>

## With image or placeholder text

The avatar component can show either image in the default slot or a text specified in the placeholder property

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-2 gap-4">
    <div class="flex flex-col items-center">
        With Placeholder
        <DaisyAvatar style="background-color: #fb2c36; color: white;" placeholder="TEST" />
    </div>
    <div class="flex flex-col items-center">
        With Image
        <DaisyAvatar  style="background-color: #fb2c36; color: white;">
            <img src="https://picsum.photos/300/300" />
        </DaisyAvatar>
    </div>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue-vue
<DaisyAvatar style="background-color: #fb2c36; color: white;" placeholder="TEST" />
```

```vue-vue
<DaisyAvatar style="background-color: #fb2c36; color: white;">
    <img src="https://picsum.photos/300/300" />
</DaisyAvatar>
```

</DaisyTab>
</DaisyTabs>

## Applying different styles on the avatar

The avatar component can be styled using css classes or styles

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-2 gap-4">
    <div class="flex flex-col items-center">
        <DaisyAvatar style="background-color: green; color: white;" placeholder="TEST" />
    </div>
    <div class="flex flex-col items-center">
        <DaisyAvatar style="background-color: yellow; color: black;" placeholder="TEST" />
    </div>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue-vue
<DaisyAvatar style="background-color: green; color: white;" placeholder="TEST" />
```

```vue-vue
<DaisyAvatar style="background-color: yellow; color: black;" placeholder="TEST" />
```

</DaisyTab>
</DaisyTabs>

## Using other components with DaisyAvatar

The avatar component can be styled using css classes or styles

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-1 gap-4">
    <div class="flex flex-col items-center relative">
        <DaisyBadge style="position: absolute; z-index: 50; left: 50%; top: -4px;">TEST</DaisyBadge>
        <DaisyAvatar style="background-color: red; color: white;" placeholder="TEST" />
    </div>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue-vue
<div class="flex flex-col items-center relative">
    <DaisyBadge style="position: absolute; z-index: 50; left: 50%; top: -4px;">TEST</DaisyBadge>
    <DaisyAvatar style="background-color: red; color: white;" placeholder="TEST" />
</div>
```

</DaisyTab>
</DaisyTabs>
