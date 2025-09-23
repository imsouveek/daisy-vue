<script setup lang="ts">
import { ref, computed, provide } from 'vue'
import type { Types, Positions } from './config'
import type { Sizes } from '../../globals'

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

const selected = defineModel<number | string>()

// unique name for this tab group
const groupName = `tabs-${Math.random().toString(36).slice(2, 9)}`
const tabs = ref<(number | string)[]>([])

let nextId = 1

function registerTab(explicitValue?: number | string) {
  const id = explicitValue ?? nextId++
  tabs.value.push(id)
  return id
}

function deregisterTab(id: number | string) {
  tabs.value = tabs.value.filter(p => p !== id)
  if (selected.value === id) {
    selected.value = tabs.value[0] ?? undefined
  }
}

provide('DaisyVueTabsGroup', {
  groupName,
  get value() {
    return selected.value
  },
  select: (val: number | string) => (selected.value = val),
  registerTab,
  deregisterTab
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
