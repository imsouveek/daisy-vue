---
title: Context Menu
description: A context menu component built on top of Radix Vue ContextMenu.
---

<script setup lang="ts">
import { DaisyContextMenu, DaisyTab, DaisyTabs } from 'daisy-vue'
import { menuItems } from './code-snippets/context-menu.ts'
</script>

# ContextMenu Component

A context menu component built on top of the [Radix Vue ContextMenu component](https://www.radix-vue.com/components/context-menu.html).  
It exposes most Radix options while providing sensible defaults for Daisy styling.

---

## Usage

`DaisyContextMenu` supports hierarchical menu structures and simple configuration through an array of menu items.

Each item in the array can have the following properties:

| Property    | Type         | Optional | Description                                                                     |
| ----------- | ------------ | -------- | ------------------------------------------------------------------------------- |
| `label`     | `string`     | No       | The item label to show in the menu                                              |
| `shortcut`  | `string`     | Yes      | Keyboard shortcut displayed to the right. Does not work if item opens a submenu |
| `action`    | `() => void` | Yes      | Callback function invoked when the item is clicked                              |
| `header`    | `string`     | Yes      | Heading text displayed before the item                                          |
| `disabled`  | `boolean`    | Yes      | Marks the item as disabled (non-clickable)                                      |
| `separator` | `boolean`    | Yes      | Shows a separator line _after_ the item                                         |
| `children`  | `MenuItem[]` | Yes      | Nested submenu items                                                            |

<DaisyTabs>
<DaisyTab title="Preview">

::: raw
<DaisyContextMenu :items="menuItems">

  <div>Some stuff going on here that needs a custom context menu.</div>
    <div>Right click me to see context menu</div>
</DaisyContextMenu>
:::

</DaisyTab>

<DaisyTab title="Code">

::: code-group

```vue [app.vue]
<template>
    <DaisyContextMenu :items="menuItems">
        <div>Some stuff going on here that needs a custom context menu.</div>
        <div>Right click me to see context menu</div>
    </DaisyContextMenu>
</template>

<script setup lang="ts">
import { menuItems } from '@/context-menu.ts'
</script>
```

<<< @/components/code-snippets/context-menu.ts

:::

</DaisyTab>
</DaisyTabs>

## Styling

There are two options to style menus:

- Inline styles on DaisyContextMenu component
- Styling using `data-*` attributes

### Inline styles on DaisyContextMenu component

This styling option is best suited to menus that do not have any separators and menus where styling is intended for all surfaces or all text

<DaisyTabs>
<DaisyTab title="Preview">

::: raw
<DaisyContextMenu :items="menuItems" style="background-color: oklch(76.9% 0.188 70.08) ; color: white;">

  <div>Some stuff going on here that needs a custom context menu.</div>
    <div>Right click me to see context menu</div>
</DaisyContextMenu>
:::

</DaisyTab>

<DaisyTab title="Code">

::: code-group

```vue [app.vue]
<template>
    <DaisyContextMenu
        :items="menuItems"
        style="background-color: oklch(76.9% 0.188 70.08) ; color: white;"
    >
        <div>Some stuff going on here that needs a custom context menu.</div>
        <div>Right click me to see context menu</div>
    </DaisyContextMenu>
</template>

<script setup lang="ts">
import { menuItems } from '@/context-menu.ts'
</script>
```

<<< @/components/code-snippets/context-menu.ts

:::

</DaisyTab>
</DaisyTabs>

### Styling using `data-*` attributes

This styling option provides maximum flexibility

#### Styling all surfaces

Use `[data-context-menu-surface]` selector to target all surfaces

<DaisyTabs>
<DaisyTab title="Preview">

::: raw
<DaisyContextMenu :items="menuItems" data-demo-id="context_menu_styling_story_all_surfaces">

  <div>Some stuff going on here that needs a custom context menu.</div>
    <div>Right click me to see context menu</div>
</DaisyContextMenu>
:::

</DaisyTab>

<DaisyTab title="Code">

::: code-group

```vue [app.vue]
<template>
    <DaisyContextMenu :items="menuItems" data-demo-id="context_menu_styling_story_all_surfaces">
        <div>Some stuff going on here that needs a custom context menu.</div>
        <div>Right click me to see context menu</div>
    </DaisyContextMenu>
</template>

<script setup lang="ts">
import { menuItems } from '@/context-menu.ts'
</script>

<style scoped>
[data-demo-id='context_menu_styling_story_all_surfaces'][data-context-menu-surface] {
    background-color: oklch(70.7% 0.165 254.624);
}
</style>
```

<<< @/components/code-snippets/context-menu.ts

:::

</DaisyTab>
</DaisyTabs>

#### Styling specific surfaces

Use `[data-context-menu-surface='item_2']` selector to target surface with `id` having value of `item_2`. This only works for menu items
with children. Note: use `id` value as `root` for top level surface.

<DaisyTabs>
<DaisyTab title="Preview">

::: raw
<DaisyContextMenu :items="menuItems" data-demo-id="context_menu_styling_story_one_surface">

  <div>Some stuff going on here that needs a custom context menu.</div>
    <div>Right click me to see context menu</div>
</DaisyContextMenu>
:::

</DaisyTab>

<DaisyTab title="Code">

::: code-group

```vue [app.vue]
<template>
    <DaisyContextMenu :items="menuItems" data-demo-id="context_menu_styling_story_one_surface">
        <div>Some stuff going on here that needs a custom context menu.</div>
        <div>Right click me to see context menu</div>
    </DaisyContextMenu>
</template>

<script setup lang="ts">
import { menuItems } from '@/context-menu.ts'
</script>

<style scoped>
[data-demo-id='context_menu_styling_story_one_surface'][data-context-menu-surface='item_2'] {
    background-color: oklch(70.4% 0.191 22.216);
}
</style>
```

<<< @/components/code-snippets/context-menu.ts

:::

</DaisyTab>
</DaisyTabs>

#### Styling all text

Use `[data-context-menu-id]` selector to target menu item text

<DaisyTabs>
<DaisyTab title="Preview">

::: raw
<DaisyContextMenu :items="menuItems" data-demo-id="context_menu_styling_story_all_text">

  <div>Some stuff going on here that needs a custom context menu.</div>
    <div>Right click me to see context menu</div>
</DaisyContextMenu>
:::

</DaisyTab>

<DaisyTab title="Code">

::: code-group

```vue [app.vue]
<template>
    <DaisyContextMenu :items="menuItems" data-demo-id="context_menu_styling_story_all_text">
        <div>Some stuff going on here that needs a custom context menu.</div>
        <div>Right click me to see context menu</div>
    </DaisyContextMenu>
</template>

<script setup lang="ts">
import { menuItems } from '@/context-menu.ts'
</script>

<style scoped>
[data-demo-id='context_menu_styling_story_all_text'] [data-context-menu-id] {
    font-weight: 700;
    color: oklch(52.7% 0.154 150.069);
}
</style>
```

<<< @/components/code-snippets/context-menu.ts

:::

</DaisyTab>
</DaisyTabs>

#### Styling specific text

Use `[data-context-menu-id='item_4']` selector to target menu item text for item with `id` value set as `item_4`

<DaisyTabs>
<DaisyTab title="Preview">

::: raw
<DaisyContextMenu :items="menuItems" data-demo-id="context_menu_styling_story_one_text">

  <div>Some stuff going on here that needs a custom context menu.</div>
    <div>Right click me to see context menu</div>
</DaisyContextMenu>
:::

</DaisyTab>

<DaisyTab title="Code">

::: code-group

```vue [app.vue]
<template>
    <DaisyContextMenu :items="menuItems" data-demo-id="context_menu_styling_story_one_text">
        <div>Some stuff going on here that needs a custom context menu.</div>
        <div>Right click me to see context menu</div>
    </DaisyContextMenu>
</template>

<script setup lang="ts">
import { menuItems } from '@/context-menu.ts'
</script>

<style scoped>
[data-demo-id='context_menu_styling_story_one_text'] [data-context-menu-id='item_4'] {
    font-weight: 200;
    color: oklch(55.5% 0.163 48.998);
}
</style>
```

<<< @/components/code-snippets/context-menu.ts

:::

</DaisyTab>
</DaisyTabs>

#### Styling headers

Use `[data-context-menu-header]` selector to target all headings and `[data-context-menu-header='xxx']` to target specific heading

<DaisyTabs>
<DaisyTab title="Preview">

::: raw
<DaisyContextMenu :items="menuItems" data-demo-id="context_menu_styling_story_header">

  <div>Some stuff going on here that needs a custom context menu.</div>
    <div>Right click me to see context menu</div>
</DaisyContextMenu>
:::

</DaisyTab>

<DaisyTab title="Code">

::: code-group

```vue [app.vue]
<template>
    <DaisyContextMenu :items="menuItems" data-demo-id="context_menu_styling_story_header">
        <div>Some stuff going on here that needs a custom context menu.</div>
        <div>Right click me to see context menu</div>
    </DaisyContextMenu>
</template>

<script setup lang="ts">
import { menuItems } from '@/context-menu.ts'
</script>

<style scoped>
[data-demo-id='context_menu_styling_story_header'] [data-context-menu-header='item_2_1'] {
    font-weight: 900;
    color: red;
}
</style>
```

<<< @/components/code-snippets/context-menu.ts

:::

</DaisyTab>
</DaisyTabs>

#### Styling separators

Use `[data-context-menu-separator]` selector to target all separators and `[data-context-menu-separator='xxx']` to target specific separator

<DaisyTabs>
<DaisyTab title="Preview">

::: raw
<DaisyContextMenu :items="menuItems" data-demo-id="context_menu_styling_story_separator">

  <div>Some stuff going on here that needs a custom context menu.</div>
    <div>Right click me to see context menu</div>
</DaisyContextMenu>
:::

</DaisyTab>

<DaisyTab title="Code">

::: code-group

```vue [app.vue]
<template>
    <DaisyContextMenu :items="menuItems" data-demo-id="context_menu_styling_story_separator">
        <div>Some stuff going on here that needs a custom context menu.</div>
        <div>Right click me to see context menu</div>
    </DaisyContextMenu>
</template>

<script setup lang="ts">
import { menuItems } from '@/context-menu.ts'
</script>

<style scoped>
[data-demo-id='context_menu_styling_story_separator'] [data-context-menu-separator] {
    background-color: red;
    height: 2px;
}
</style>
```

<<< @/components/code-snippets/context-menu.ts

:::

</DaisyTab>
</DaisyTabs>

<style module>
[data-demo-id='context_menu_styling_story_all_surfaces'][data-context-menu-surface] {
    background-color: oklch(70.7% 0.165 254.624);
}

[data-demo-id='context_menu_styling_story_one_surface'][data-context-menu-surface='item_2'] {
    background-color: oklch(70.4% 0.191 22.216);
}

[data-demo-id='context_menu_styling_story_all_text'] [data-context-menu-id] {
    font-weight: 700;
    color: oklch(52.7% 0.154 150.069);
}

[data-demo-id='context_menu_styling_story_one_text'] [data-context-menu-id='item_4'] {
    font-weight: 200;
    color: oklch(55.5% 0.163 48.998);
}

[data-demo-id='context_menu_styling_story_header'] [data-context-menu-header='item_2_1'] {
    font-weight: 900;
    color: red;
}

[data-demo-id='context_menu_styling_story_separator'] [data-context-menu-separator] {
    background-color: red;
    height: 2px;
}
</style>
