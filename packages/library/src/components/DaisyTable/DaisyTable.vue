<script setup lang="ts">
import type { Sizes } from '../../globals'
import { computed } from 'vue'

const props = withDefaults(defineProps<{ 
  /** table size */
  size?: Sizes
}>(), {
  size: 'md'
})

defineSlots<{
  /** Slot for table text */
  default: string
}>()

const sizeClass = computed(() => {
  return {
    xs: 'table-xs',
    sm: 'table-sm',
    md: 'table-md',
    lg: 'table-lg'
  }[props.size]
})

const classes = computed(() => {
  return [sizeClass.value]
})
</script>

<template>
  <div class="table" :class="classes">
    <slot></slot>
  </div>
</template>
