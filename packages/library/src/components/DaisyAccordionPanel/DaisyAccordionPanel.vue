<script setup lang="ts">
import { inject, onMounted, onBeforeUnmount, computed, Ref } from 'vue'
import { IconType } from '../DaisyAccordion/config';

const props = defineProps<{
  /** Panel title */
  title: string
  /** Value to refer to panel (must be unique if provided) */
  value?: number | string
}>()

defineSlots<{
  /** Panel content */
  default: string
}>()

const panels = inject<{
  groupName: string
  value: Ref<(number | string)[]>
  multipleOpen: Ref<boolean>
  noneOpen: Ref<boolean>
  icon: Ref<IconType>
  registerPanel: (val?: number | string) => number | string
  deregisterPanel: (id: number | string) => void
}>('DaisyAccordionGroup')!

if (!panels?.groupName) {
  throw new Error('DaisyAccordionPanel must be used inside of a DaisyAccordion')
}

// If developer passed a value, it gets respected. Otherwise parent assigns one.
const id = panels.registerPanel(props.value)

onMounted(() => {
  if (panels.value.value.length === 0 && !panels.noneOpen.value) {
    panels.value.value = [id]
  }
})

onBeforeUnmount(() => {
  panels.deregisterPanel(id)
})

// is this panel open?
const checked = computed(() => panels.value.value.includes(id))

function handleToggle(id: number | string) {
  const arr = panels.value.value

  if (panels.multipleOpen.value) {
    if (checked.value) {
      // trying to close
      if (arr.length === 1 && !panels.noneOpen.value) return
      panels.value.value = arr.filter(v => v !== id)
    } else {
      panels.value.value = [...arr, id]
    }
  } else {
    if (checked.value) {
      // single mode: can close only if noneOpen.value=true
      if (panels.noneOpen.value) {
        panels.value.value = []
      }
    } else {
      // replace with only this panel
      panels.value.value = [id]
    }
  }
}

const iconClass = computed(() => ({
  arrow: 'collapse-arrow',
  plus: 'collapse-plus'
}[panels.icon.value]))

</script>

<template>
  <div class="collapse bg-base-100 border border-base-300" :class="[iconClass, { 'collapse-open': checked }]"
    @click="handleToggle(id)">
    <div class="collapse-title font-semibold">{{ title }}</div>
    <div class="collapse-content text-sm">
      <slot />
    </div>
  </div>
</template>
