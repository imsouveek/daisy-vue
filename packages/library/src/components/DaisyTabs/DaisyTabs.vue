<script setup lang="ts">
import { computed, provide } from 'vue'
import type { Types, Positions } from './config'
import type { Sizes } from '../../globals'

const selected = defineModel<string>()

const props = withDefaults(defineProps<{
  /** Tab type */
  type?: Types,
  /** Tab size */
  size?: Sizes,
  /** Tab position */
  position?: Positions
}>(), {
  type: 'lifted',
  size: 'md'
})

defineSlots<{
  /** Each DaisyTab has to be defined here */
  default: string
}>()

// unique name for this tab group
const groupName = `tabs-${Math.random().toString(36).slice(2, 9)}`

provide('DaisyVueTabsGroup', {
  groupName,
  get value() {
    return selected.value
  },
  select: (val: string) => (selected.value = val)
})

const styleClass = computed(() => ({
  bordered: 'tabs-border',
  boxed: 'tabs-box',
  lifted: 'tabs-lift'
}[props.type]))

const sizeClass = computed(() => ({
  xs: 'tabs-xs',
  sm: 'tabs-sm',
  md: 'tabs-md',
  lg: 'tabs-lg',
}[props.size]))

const positionClass = computed(() => ({
  top: 'tabs-top',
  bottom: 'tabs-bottom',
}[props.position]))
</script>

<template>
  <div role="tablist" class="tabs" :class="[styleClass, sizeClass, positionClass]">
    <slot />
  </div>
</template>
