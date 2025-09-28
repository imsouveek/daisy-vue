<script setup lang="ts">
import { provide, computed } from 'vue'
import type { Masks, Sizes } from '../../globals'

const props = withDefaults(
  defineProps<{
    size?: Sizes
    mask?: Masks
  }>(),
  {
    size: 'md',
    mask: 'circle'
  }
)

// Size
const size = computed(() => props.size)
provide('DaisyAvatarGroupSize', size)

// Mask
const mask = computed(() => props.mask)
provide('DaisyAvatarGroupMask', mask)

// Spacing
const classes = computed(() => {
  const spacing = {
    xs: '-space-x-2',
    sm: '-space-x-3',
    md: '-space-x-4',
    lg: '-space-x-5'
  }[size.value]

  return [spacing]
})
</script>

<template>
  <div class="flex" :class="classes">
    <slot></slot>
  </div>
</template>