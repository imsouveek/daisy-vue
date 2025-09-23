<script setup lang="ts">
import {DaisyAccordion, DaisyAccordionPanel, DaisyTab, DaisyTabs} from 'daisy-vue'

const icons = ['arrow', 'plus'] as const

const combos = [
    { label: 'Single, must stay open', multipleOpen: false, noneOpen: false },
    { label: 'Single, all closable', multipleOpen: false, noneOpen: true },
    { label: 'Multiple, must keep one open', multipleOpen: true, noneOpen: false },
    { label: 'Multiple, all closable', multipleOpen: true, noneOpen: true }
]
</script>

# Accordion Component

An accordion component. This component uses the [Daisy UI Accordion component](https://daisyui.com/components/accordion/)
and the [Daisy UI Collapse component](https://daisyui.com/components/collapse/) and exposes most of the available options.

## Without any props

If using DaisyAccordion without any props, it defaults to single open panel, minimum one panel and no icon

<DaisyTabs>
<DaisyTab title="Preview">

:::raw
<DaisyAccordion>
<DaisyAccordionPanel title="Panel 1">
Panel 1 content
</DaisyAccordionPanel>
<DaisyAccordionPanel title="Panel 2">
Panel 2 content
</DaisyAccordionPanel>
<DaisyAccordionPanel title="Panel 3">
Panel 3 content
</DaisyAccordionPanel>
</DaisyAccordion>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue
<DaisyAccordion>
    <DaisyAccordionPanel title="Panel 1">
        Panel 1 content
    </DaisyAccordionPanel>
    <DaisyAccordionPanel title="Panel 2">
        Panel 2 content
    </DaisyAccordionPanel>
    <DaisyAccordionPanel title="Panel 3">
        Panel 3 content
    </DaisyAccordionPanel>
</DaisyAccordion>
```

</DaisyTab>
</DaisyTabs>

## With different icons

An icon property can be set to control the icon in each panel

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-3 gap-4">
<DaisyAccordion v-for="icon in [...icons, undefined]" :key="icon" :icon="icon">
    <DaisyAccordionPanel title="Panel 1">Panel 1 content</DaisyAccordionPanel>
    <DaisyAccordionPanel title="Panel 2">Panel 2 content</DaisyAccordionPanel>
    <DaisyAccordionPanel title="Panel 3">Panel 3 content</DaisyAccordionPanel>
</DaisyAccordion>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="icon in icons" :key="icon">

```vue-vue
<DaisyAccordion icon="{{icon}}">
    <DaisyAccordionPanel title="Panel 1">Panel 1 content</DaisyAccordionPanel>
    <DaisyAccordionPanel title="Panel 2">Panel 2 content</DaisyAccordionPanel>
    <DaisyAccordionPanel title="Panel 3">Panel 3 content</DaisyAccordionPanel>
</DaisyAccordion>
```

</template>

```vue-vue
<DaisyAccordion>
    <DaisyAccordionPanel title="Panel 1">Panel 1 content</DaisyAccordionPanel>
    <DaisyAccordionPanel title="Panel 2">Panel 2 content</DaisyAccordionPanel>
    <DaisyAccordionPanel title="Panel 3">Panel 3 content</DaisyAccordionPanel>
</DaisyAccordion>
```

</DaisyTab>
</DaisyTabs>

## With different opening behaviors

Opening behaviors can be updated through multipleOpen and noneOpen properties

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-2 gap-8">
    <div v-for="combo in combos" :key="combo.label">
        <h4 class="mb-2">{{ combo.label }}</h4>
        <DaisyAccordion :multipleOpen="combo.multipleOpen" :noneOpen="combo.noneOpen">
            <DaisyAccordionPanel title="Panel 1">Panel 1 content</DaisyAccordionPanel>
            <DaisyAccordionPanel title="Panel 2">Panel 2 content</DaisyAccordionPanel>
            <DaisyAccordionPanel title="Panel 3">Panel 3 content</DaisyAccordionPanel>
        </DaisyAccordion>
    </div>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="combo in combos" :key="combo.label">

```vue-vue
<DaisyAccordion {{ (' ' + (combo.multipleOpen? 'multipleOpen': '') + ' ' + (combo.noneOpen? 'noneOpen': '')).trim() }}>
    <DaisyAccordionPanel title="Panel 1">Panel 1 content</DaisyAccordionPanel>
    <DaisyAccordionPanel title="Panel 2">Panel 2 content</DaisyAccordionPanel>
    <DaisyAccordionPanel title="Panel 3">Panel 3 content</DaisyAccordionPanel>
</DaisyAccordion>
```

</template>

</DaisyTab>
</DaisyTabs>
