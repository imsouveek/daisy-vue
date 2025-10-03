<script setup lang="ts">
import { MenuItem } from './DaisyContextMenu.vue'
import DaisyContextMenuItem from './DaisyContextMenuItem.vue'
import DaisyContextMenuSubMenu from './DaisyContextMenuSubMenu.vue'
import { ContextMenuLabel, ContextMenuSeparator } from 'radix-vue';

defineProps<{ items: MenuItem[] }>()
</script>

<template>
    <ul>
        <li v-for="item in items" :key="item.label">
            <ContextMenuLabel v-if="item.header" class="uppercase italic underline" :data-context-menu-header="item.id">
                {{ item.header }}</ContextMenuLabel>
            <DaisyContextMenuItem v-if="!item.children" :item="item" />
            <ContextMenuSeparator v-if="!item.children && item.separator"
                class="h-[1px] bg-base-content p-0 my-2 mx-[10px] opacity-50" :data-context-menu-separator="item.id" />
            <DaisyContextMenuSubMenu v-else :item="item" />
        </li>
    </ul>
</template>
