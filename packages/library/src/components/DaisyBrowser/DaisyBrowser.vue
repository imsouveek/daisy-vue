<script setup lang="ts">
withDefaults(defineProps<{
  /** Browser URL */
  url?: string
}>(), {
  url: 'https://daisyui.com'
})
defineSlots<{
  /** Slot for browser text */
  default: string
}>()


</script>

<template>
  <div class="mockup-browser border-base-300 border w-full">
    <div class="mockup-browser-toolbar">
      <div class="input">{{ url }}</div>
    </div>
    <div class="grid place-content-center border-t border-base-300 h-80">
      <slot />
    </div>
  </div>
</template>
