<script setup lang="ts">
import { inject, onMounted } from 'vue'

const props = defineProps<{
  /** Tab name */
  value: string
}>()

defineSlots<{
  /** Slot for Icon */
  icon: string,
  /** Slot for tab content */
  default: string
}>()

const tabs = inject<{
  groupName: string
  value: string | undefined
  select: (val: string) => void
}>('DaisyVueTabsGroup')!

// if no tab selected yet, first one claims it
onMounted(() => {
  if (!tabs.value) {
    tabs.select(props.value)
  }
})

</script>

<template>
  <label class="tab">
    <input type="radio" :name="tabs.groupName" :value="value" :checked="tabs.value === value"
      @change="tabs.select(value)" />
    <slot name="icon"></slot>
    {{ value }}
  </label>
  <div class="tab-content bg-base-100 border-base-300 p-6" role="tabpanel">
    <slot></slot>
  </div>
</template>
