<script setup lang="ts">
import {DaisyAlert, DaisyTab, DaisyTabs} from 'daisy-vue'
import {states} from 'daisy-vue/globals'

const variants = [
                    { name: 'dismissible', dismissible: true },
                    { name: 'soft', soft: true },
                    { name: 'outline', outline: true },
                    { name: 'dash', dash: true }
                ]
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
<DaisyAlert>This is a test</DaisyAlert>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue
<DaisyAlert>This is a test</DaisyAlert>
```

</DaisyTab>
</DaisyTabs>

## With different colors and icons

A type property can be set to determine the color and icon shown in the alert

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div v-for="type in [...states, undefined]" :key="type" class="mb-4">
{{ type?.toUpperCase() ?? 'UNDEFINED'}}
<DaisyAlert :type="type"> This is a test </DaisyAlert>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="type in [...states, undefined]" :key="type">

```vue-vue
<DaisyAlert type="{{type}}">This is a test</DaisyAlert>
```

</template>

</DaisyTab>
</DaisyTabs>

## With other variations

The `dismissible` prop can be used to show a dismiss button with the alert, which triggers a `dismiss` even when clicked. Also, `outline`, `dash` and `soft` props can be used to change the display style of the alert

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div v-for="option in variants" :key="option" class="mb-4">
{{ option.name.toUpperCase()}}
<DaisyAlert v-bind="option"> This is a test </DaisyAlert>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="option in variants" :key="option">

```vue-vue
<DaisyAlert {{option.name}}>This is a test</DaisyAlert>
```

</template>

</DaisyTab>
</DaisyTabs>

## Full Custom layout

The `full-custom` slot can be used to customize the look of the alert and add different components. Note that the icon and the dismiss
button are no longer displayed if this slot is used

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<DaisyAlert type='error' >
    <template #full-custom>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>This is using the full-custom slot. </span>
        <div>
            <button class="btn btn-sm">Deny</button>
            <button class="btn btn-sm btn-primary">Accept</button>
        </div>
    </template>
</DaisyAlert>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue-vue
<DaisyAlert type='error' >
    <template #full-custom>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>This is using the full-custom slot. </span>
        <div>
            <button class="btn btn-sm">Deny</button>
            <button class="btn btn-sm btn-primary">Accept</button>
        </div>
    </template>
</DaisyAlert>
```

</DaisyTab>
</DaisyTabs>

## Responsive styling

The `alert-vertical` class can be added to the DaisyAlert class to show alerts in vertical layout

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<DaisyAlert type='warning' class='alert-vertical' >
    <template #full-custom>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>This is using the full-custom slot. </span>
        <div>
            <button class="btn btn-sm">Deny</button>
            <button class="btn btn-sm btn-primary">Accept</button>
        </div>
    </template>
</DaisyAlert>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue-vue
<DaisyAlert type='warning' class='alert-vertical'>
    <template #full-custom>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>This is using the full-custom slot. </span>
        <div>
            <button class="btn btn-sm">Deny</button>
            <button class="btn btn-sm btn-primary">Accept</button>
        </div>
    </template>
</DaisyAlert>
```

</DaisyTab>
</DaisyTabs>
