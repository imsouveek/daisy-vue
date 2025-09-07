<script setup lang="ts">
import type { ColorsBrand, ColorsState, Sizes } from '../../globals'
import {
  computed

} from 'vue';
const props = withDefaults(defineProps<{
  color?: ColorsBrand | ColorsState | 'ghost' | 'link'
  size?: Sizes,
  wide?: boolean,
  block?: boolean,
  square?: boolean,
  circle?: boolean,
  active?: boolean,
  soft?: boolean,
  outline?: boolean,
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