<script setup lang="ts">
import { ContextMenuItem } from 'radix-vue'
import type { MenuItem } from './DaisyContextMenu.vue'

defineProps<{ item: MenuItem }>()
</script>

<template>
    <ContextMenuItem @select="item.action" class="flex items-center w-full" :data-context-menu-id="item.id">
        {{ item.label }}
        <div class="ml-auto">{{ item.shortcut }}</div>
    </ContextMenuItem>
</template>
