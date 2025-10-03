<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
    ContextMenuSub,
    ContextMenuSubTrigger,
    ContextMenuSubContent,
    ContextMenuPortal
} from 'radix-vue'
import type { MenuItem } from './DaisyContextMenu.vue'
import DaisyContextMenuList from './DaisyContextMenuList.vue'
import { inject } from 'vue'

defineProps<{ item: MenuItem }>()
const attrs = { ...inject('DaisyContextMenuAttrs', {}) }
</script>

<template>
    <ContextMenuSub>
        <ContextMenuSubTrigger v-if="item.children" class="block w-full">
            <div>
                <div class="flex items-center justify-between">
                    <span :data-context-menu-id="item.id">{{ item.label }}</span>
                    <span>
                        <Icon icon="radix-icons:chevron-right" :data-context-menu-id="item.id" />
                    </span>
                </div>
            </div>
        </ContextMenuSubTrigger>

        <ContextMenuPortal>
            <ContextMenuSubContent
                class="w-56  rounded menu bg-base-100 dark:shadow-[0px_10px_38px_-10px_var(--color-base-100,_rgba(0,_0,_0,0.6)),_0px_10px_20px_-15px_rgba(0,_0,_0,0.5),_0px_0px_4px_rgba(255,255,255,0.1)] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                :side-offset="0" :align-offset="0" :data-context-menu-surface="item.id" v-bind="attrs">
                <DaisyContextMenuList :items="item.children!" />
            </ContextMenuSubContent>
        </ContextMenuPortal>
    </ContextMenuSub>
</template>
