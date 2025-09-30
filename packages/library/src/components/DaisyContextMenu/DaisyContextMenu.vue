<script setup lang="ts">
import type { Sizes } from '../../globals'
import { computed } from 'vue'

const props = withDefaults(defineProps<{ 
  /** context menu size */
  size?: Sizes
}>(), {
  size: 'md'
})

defineSlots<{
  /** Slot for context menu text */
  default: string
}>()

const sizeClass = computed(() => {
  return {
    xs: 'context-menu-xs',
    sm: 'context-menu-sm',
    md: 'context-menu-md',
    lg: 'context-menu-lg'
  }[props.size]
})

const classes = computed(() => {
  return [sizeClass.value]
})
</script>

<template>
  <div class="context-menu" :class="classes">
    <slot></slot>
  </div>
</template>
