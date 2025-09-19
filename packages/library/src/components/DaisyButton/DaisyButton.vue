<script setup lang="ts">
import type { ColorsBrand, ColorsState, Sizes } from '../../globals'
import {
  computed

} from 'vue';
const props = withDefaults(defineProps<{
  /** Button color based on visual intent / theme token */
  color?: ColorsBrand | ColorsState | 'ghost' | 'link'
  /** Button size */
  size?: Sizes,
  /** Wide button */
  wide?: boolean,
  /** Block button */
  block?: boolean,
  /** Square button */
  square?: boolean,
  /** Circle button */
  circle?: boolean,
  /** Active button color */
  active?: boolean,
  /** Soft button color */
  soft?: boolean,
  /** Outline button */
  outline?: boolean,
  /** Dashed outline button */
  dash?: boolean,
}>(), {
  color: 'primary',
  size: 'md',
  wide: false,
  block: false,
  square: false,
  circle: false,
  active: false,
  soft: false,
  outline: false,
  dash: false,
})

defineSlots<{
  /** Slot for button content */
  default: string
}>()

const colorClass = computed(() => {
  return {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    neutral: 'btn-neutral',
    accent: 'btn-accent',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
    info: 'btn-info',
    ghost: 'btn-ghost',
    link: 'btn-link'
  }[props.color]
})

const sizeClass = computed(() => {
  return {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  }[props.size]
})
</script>

<template>
  <button class="btn" :class="[colorClass, sizeClass, {
    'btn-wide': wide,
    'btn-block': block,
    'btn-square': square,
    'btn-circle': circle,
    'btn-active': active,
    'btn-soft': soft,
    'btn-outline': outline,
    'btn-dash': dash,
  }]">
    <slot></slot>
  </button>
</template>