<script setup lang="ts">
import type { ColorsBrand, ColorsState, Sizes } from '../../globals'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /** Badge color based on visual intent / theme token */
  color?: ColorsBrand | ColorsState | 'ghost'
  /** Badge size */
  size?: Sizes
  /** Show badge as an outline */
  outline?: boolean
}>(), {
  color: 'primary',
  size: 'md',
  outline: true
})

const colorClass = computed(() => {
  return {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    neutral: 'badge-neutral',
    accent: 'badge-accent',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
    info: 'badge-info',
    ghost: 'badge-ghost'
  }[props.color]
})

const outlineClass = computed(() => (props.outline ? 'badge-outline' : ''))
const sizeClass = computed(() => {
  return {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg'
  }[props.size]
})

const classes = computed(() => {
  return [colorClass.value, outlineClass.value, sizeClass.value]
})
</script>

<template>
  <div class="badge" :class="classes">
    <slot></slot>
  </div>
</template>
