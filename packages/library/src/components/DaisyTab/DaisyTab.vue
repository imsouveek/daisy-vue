<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted } from 'vue'

const props = defineProps<{
  /** Tab title */
  title: string
  /** Value to refer to tab */
  value?: number | string
}>()

defineSlots<{
  /** Slot for Icon */
  icon: string,
  /** Slot for tab content */
  default: string
}>()

const tabs = inject<{
  groupName: string
  value: number | string | undefined
  select: (val: number | string) => void,
  registerTab: (val?: number | string) => number | string
  deregisterTab: (id: number | string) => void
}>('DaisyVueTabsGroup')!

// If developer passed a value, it gets respected. Otherwise parent assigns one.
const id = tabs.registerTab(props.value)

// if no tab selected yet, first one claims it
onMounted(() => {
  if (!tabs.value) {
    tabs.select(id)
  }
})

onBeforeUnmount(() => {
  tabs.deregisterTab(id)
})
</script>

<template>
  <label class="tab">
    <input type="radio" :name="tabs.groupName" :value="id" :checked="tabs.value === id" @change="tabs.select(id)" />
    <slot name="icon"></slot>
    {{ title }}
  </label>
  <div class="tab-content bg-base-100 border-base-300 p-6" role="tabpanel">
    <slot></slot>
  </div>
</template>
