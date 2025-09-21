---
to: packages/library/src/components/<%= h.componentNameWithPrefix(name) %>/<%= h.componentNameWithPrefix(name) %>.vue
---

<script setup lang="ts">
import type { Sizes } from '../../globals'
import { computed } from 'vue'

const props = withDefaults(defineProps<{ 
  /** <%= h.componentNameText(name) %> size */
  size?: Sizes
}>(), {
  size: 'md'
})

defineSlots<{
  /** Slot for <%= h.componentNameText(name) %> text */
  default: string
}>()

const sizeClass = computed(() => {
  return {
    xs: '<%= h.componentNameKebab(name) %>-xs',
    sm: '<%= h.componentNameKebab(name) %>-sm',
    md: '<%= h.componentNameKebab(name) %>-md',
    lg: '<%= h.componentNameKebab(name) %>-lg'
  }[props.size]
})

const classes = computed(() => {
  return [sizeClass.value]
})
</script>

<template>
  <div class="<%= h.componentNameKebab(name) %>" :class="classes">
    <slot></slot>
  </div>
</template>
