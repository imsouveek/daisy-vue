<script setup lang="ts">
import { MenuItem } from './DaisyContextMenu.vue'
import DaisyContextMenuItem from './DaisyContextMenuItem.vue'
import DaisyContextMenuSubMenu from './DaisyContextMenuSubMenu.vue'

defineProps<{ items: MenuItem[] }>()
</script>

<template>
    <ul>
        <li v-for="item in items" :key="item.label">
            <DaisyContextMenuItem v-if="!item.children" :item="item" />
            <DaisyContextMenuSubMenu v-else :item="item" />
        </li>
    </ul>
</template>
