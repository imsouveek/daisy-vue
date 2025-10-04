<script setup lang="ts">
import {
    ContextMenuRoot,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuPortal
} from 'radix-vue'
import DaisyContextMenuList from './DaisyContextMenuList.vue'
import { provide, useAttrs } from 'vue'

export interface MenuItem {
    header?: string
    id?: string
    label: string
    shortcut?: string
    disabled?: boolean
    separator?: boolean
    action?: () => void
    children?: MenuItem[]
}

defineOptions({
    inheritAttrs: false
})

defineProps<{
    /** An array of menu items with nested child menu items*/
    items: MenuItem[]
}>()

defineSlots<{
    /**Content that has the context menu should be placed here */
    default: string
}>()

const attrs = useAttrs()
provide('DaisyContextMenuAttrs', { ...attrs })
</script>

<template>
    <ContextMenuRoot>
        <ContextMenuTrigger>
            <slot />
        </ContextMenuTrigger>

        <ContextMenuPortal>
            <ContextMenuContent
                class="w-56 rounded menu bg-base-100 dark:shadow-[0px_10px_38px_-10px_var(--color-base-100,_rgba(0,_0,_0,0.6)),_0px_10px_20px_-15px_rgba(0,_0,_0,0.5),_0px_0px_4px_rgba(255,255,255,0.1)] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                data-context-menu-surface="root" :side-offset="5" v-bind="$attrs">
                <DaisyContextMenuList :items="items" />
            </ContextMenuContent>
        </ContextMenuPortal>
    </ContextMenuRoot>
</template>
