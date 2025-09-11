<script setup lang="ts">
import { computed } from 'vue'
import type { ColorsBrand, ColorsState, Sizes } from '../../globals'
import type { DaisyLoadingTypes } from './config'

const props = withDefaults(
  defineProps<{
    /** Loader type */
    type?: DaisyLoadingTypes,
    /** Loader size */
    size?: Sizes
    /** Loader color based on visual intent / theme token */
    color?: ColorsBrand | ColorsState
  }>(),
  {
    type: 'spinner',
    size: 'md',
    color: 'primary'
  }
)

const typeClass = computed(() => {
  return {
    spinner: 'loading-spinner',
    dots: 'loading-dots',
    ring: 'loading-ring',
    ball: 'loading-ball',
    bars: 'loading-bars',
    infinity: 'loading-infinity'
  }[props.type]
})

const sizeClass = computed(() => {
  return {
    xs: 'loading-xs',
    sm: 'loading-sm',
    md: 'loading-md',
    lg: 'loading-lg'
  }[props.size]
})

const colorClass = computed(() => {
  return {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    neutral: 'text-neutral',

    success: 'text-success',
    error: 'text-error',
    warning: 'text-warning',
    info: 'text-info'
  }[props.color]
})
</script>

<template>
  <span class="loading" :class="[sizeClass, typeClass, colorClass]"></span>
</template>
