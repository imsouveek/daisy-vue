<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import type { States } from '../../globals/states'

const props = withDefaults(
    defineProps<{
        /** Affects the color and icon.
         * @default undefined
         */
        type?: States

        /** When true, displays an "x" button to dismiss the alert. When clicked the alert is hidden and the dismiss event is emitted
         * @default false
         */
        dismissible?: boolean

        /** Show alert as an outline
         * @default false
         */
        outline?: boolean

        /** Show alert with dashed outline
         * @default false
         */
        dash?: boolean

        /** Show alert with soft style
         * @default false
         */
        soft?: boolean

    }>(),
    {
        dismissible: false,
        outline: false,
        soft: false,
        dashed: false
    }
)

const emit = defineEmits<{
    /** Emitted when the alert is dismissed and completely transitioned out */
    dismiss: [payload: void]
}>()

defineSlots<{
    /** Default slot - auto-applies icons and supports a dismissible flag*/
    default: string,
    /** Full Custom slot - more control but no icon or close button by default */
    'full-custom': string
}>()

const classes = computed(() => {
    const map = {
        info: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning',
        error: 'alert-error'
    }

    return map[props.type]
})

const dismissed = ref(false)

const transitionDuration = 500
const transitionCssRule = `all ${transitionDuration}ms`

function handleDismiss() {
    dismissed.value = true
    setTimeout(() => {
        emit('dismiss')
    }, transitionDuration)
}

const icon = computed(() => {
    if (!props.type) return 'carbon:information'
    return {
        info: 'carbon:information',
        success: 'carbon:checkmark-outline',
        warning: 'carbon:warning',
        error: 'carbon:error'
    }[props.type]
})
</script>

<template>
    <Transition>
        <div v-if="!dismissed" role="alert" class="alert w-full" :class="[classes, {
            'alert-outline': outline,
            'alert-dash': dash,
            'alert-soft': soft
        }]">
            <slot name="full-custom">
                <Icon :icon="icon" width="1.5rem" />
                <span>
                    <slot></slot>
                </span>
                <button @click="handleDismiss" v-if="dismissible" type="button"
                    class="text-lg close cursor-pointer border rounded-full px-2" data-dismiss="alert"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </slot>
        </div>
    </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: v-bind(transitionCssRule);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>
