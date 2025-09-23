<script setup lang="ts">
import { provide, ref, toRef, watch } from 'vue'
import type { IconType } from './config'

const props = withDefaults(defineProps<{
  /** Allow multiple open panels */
  multipleOpen?: boolean
  /** Allow all panels to be closed */
  noneOpen?: boolean
  /** Icon type */
  icon?: IconType
}>(), {
  multipleOpen: false,
  noneOpen: false
})

defineSlots<{
  /** All DaisyAccordionPanels have to be defined here */
  default: string
}>()

// external API: v-model
const model = defineModel<number | string | (number | string)[] | undefined>()

// internal state: always an array
const internalValue = ref<(number | string)[]>([])

// sync external → internal
watch(model, val => {
  if (Array.isArray(val)) {
    internalValue.value = val
  } else if (val != null) {
    internalValue.value = [val]
  } else {
    internalValue.value = []
  }
}, { immediate: true })

// sync internal → external
watch(internalValue, val => {
  if (props.multipleOpen) {
    model.value = val
  } else {
    model.value = val[0] ?? (props.noneOpen ? undefined : null)
  }
})

watch(() => props.multipleOpen, (newVal) => {
  if (!newVal && internalValue.value.length > 1) {
    // collapse to the first one if switching to single mode
    internalValue.value = [internalValue.value[0]]
  }
})

watch(() => props.noneOpen, (newVal) => {
  if (!newVal && internalValue.value.length === 0 && panels.value.length > 0) {
    // enforce at least one panel open
    internalValue.value = [panels.value[0]]
  }
})

const groupName = `accordion-${Math.random().toString(36).slice(2, 9)}`
const panels = ref<(number | string)[]>([])

let nextId = 0

function registerPanel(explicitValue?: number | string) {
  const id = explicitValue ?? nextId++

  if (panels.value.includes(id)) {
    throw new Error(
      `[DaisyAccordion] Duplicate panel value detected: "${id}". ` +
      `Each DaisyAccordionPanel must have a unique "value".`
    )
  }

  panels.value.push(id)
  return id
}

function deregisterPanel(id: number | string) {
  panels.value = panels.value.filter(p => p !== id)
  internalValue.value = internalValue.value.filter(v => v !== id)

  // enforce noneOpen = false: ensure something stays open
  if (!props.noneOpen && internalValue.value.length === 0 && panels.value.length > 0) {
    internalValue.value = [panels.value[0]]
  }
}

// provide state for children
provide('DaisyAccordionGroup', {
  groupName,
  value: internalValue, // always array
  multipleOpen: toRef(props, 'multipleOpen'),
  noneOpen: toRef(props, 'noneOpen'),
  icon: toRef(props, 'icon'),
  registerPanel,
  deregisterPanel,
})
</script>

<template>
  <div class="w-full">
    <slot>
      <div class="text-sm text-gray-500 italic">
        No panels defined
      </div>
    </slot>
  </div>
</template>
