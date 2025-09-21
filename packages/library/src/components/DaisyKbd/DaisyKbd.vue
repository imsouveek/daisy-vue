<script setup lang="ts">
import type { Sizes } from '../../globals'
import { computed } from 'vue'

const props = withDefaults(defineProps<{ 
  /** kbd size */
  size?: Sizes
}>(), {
  size: 'md'
})

defineSlots<{
  /** Slot for kbd text */
  default: string
}>()

const sizeClass = computed(() => {
  return {
    xs: 'kbd-xs',
    sm: 'kbd-sm',
    md: 'kbd-md',
    lg: 'kbd-lg'
  }[props.size]
})

const classes = computed(() => {
  return [sizeClass.value]
})
</script>

<template>
  <div class="kbd" :class="classes">
    <slot></slot>
  </div>
</template>
