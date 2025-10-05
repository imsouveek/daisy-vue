<script setup lang="ts">
import type { Sizes } from '../../globals'
import { computed } from 'vue'

const props = withDefaults(defineProps<{ 
  /** alert size */
  size?: Sizes
}>(), {
  size: 'md'
})

defineSlots<{
  /** Slot for alert text */
  default: string
}>()

const sizeClass = computed(() => {
  return {
    xs: 'alert-xs',
    sm: 'alert-sm',
    md: 'alert-md',
    lg: 'alert-lg'
  }[props.size]
})

const classes = computed(() => {
  return [sizeClass.value]
})
</script>

<template>
  <div class="alert" :class="classes">
    <slot></slot>
  </div>
</template>
