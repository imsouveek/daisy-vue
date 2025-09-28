<script setup lang="ts">
import type { Sizes, Masks } from '../../globals'
import type { Presence } from './config';
import { computed, inject, Ref } from 'vue'
import { vMask } from '../../directives/vMask/VMask';

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  /** Avatar size */
  size?: Sizes
  /** Add green dot for online, grey dot for offline and red dot for busy */
  presence?: Presence
  /** Placeholder text */
  placeholder?: string
  /** Mask for avatar shape */
  mask?: Masks
}>(), {
  size: 'md',
  mask: 'circle'
})

defineSlots<{
  /** Slot for avatar image */
  default: string
}>()

const defaultSize = computed(() => props.size)
const injectedSize = inject('DaisyAvatarGroupSize', null) as Ref
const _size = injectedSize ?? defaultSize

const defaultMask = computed(() => props.mask)
const _mask = inject('DaisyAvatarGroupMask', defaultMask)

const sizeClass = computed(() => {
  return {
    xs: 'w-8 h-8',
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }[_size.value]
})

const textSizeClass = computed(() => {
  if (['star', 'star-2', 'triangle', 'triangle-2', 'triangle-3', 'triangle-4'].includes(_mask.value)) {
    return {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-2xl'
    }[_size.value]
  } else {
    return {
      xs: 'text-sm',
      sm: 'text-lg',
      md: 'text-xl',
      lg: 'text-4xl'
    }[_size.value]
  }
})

const beforeClasses = computed(() => {
  if (injectedSize) return ''
  let bgClass: string = 'before:z-10 before:absolute before:w-[20%] before:h-[20%] before:content-[""] before:outline-2 before:outline-base-100 before:rounded-full before:overflow-visible'

  switch (_mask.value) {
    case 'pentagon':
    case 'diamond':
      bgClass = `${bgClass} before:top-[6%] before:right-[15%]`
      break;
    case 'star':
    case 'star-2':
      bgClass = `${bgClass} before:top-[6%] before:right-[30%]`
      break;
    case 'triangle':
      bgClass = `${bgClass} before:top-[6%] before:right-[30%]`
      break;
    case 'triangle-4':
      bgClass = `${bgClass} before:top-[6%] before:left-[20%]`
      break;
    default:
      bgClass = `${bgClass} before:top-[6%] before:right-[6%]`
      break
  }

  switch (props.presence) {
    case 'online':
      bgClass = `${bgClass} before:bg-green-500`
      break;
    case 'offline':
      bgClass = `${bgClass} before:bg-gray-300`
      break;
    case 'busy':
      bgClass = `${bgClass} before:bg-red-500`
      break;
    case 'away':
      bgClass = `${bgClass} before:bg-amber-500`
      break
    default:
      bgClass = ''
      break
  }
  return bgClass
})
const classes = computed(() => {
  return [sizeClass.value]
})
</script>

<template>
  <div class="avatar" :class="[beforeClasses, { 'avatar-placeholder': !!placeholder }]">
    <div v-if="injectedSize" class="absolute inset-0 scale-110 z-0 bg-base-100" v-mask="_mask" />
    <div :class="classes" v-mask="_mask" v-bind="$attrs">
      <slot>
        <span :class="textSizeClass">{{ placeholder }}</span>
      </slot>
    </div>
  </div>
</template>
