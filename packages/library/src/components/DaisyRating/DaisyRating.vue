<script setup lang="ts">
import type { ColorsBrand, ColorsState, Sizes, Masks } from '../../globals'
import { computed, watch, useId } from 'vue'

const props = withDefaults(
    defineProps<{
        /** Rating color based on visual intent or theme token */
        color?: ColorsBrand | ColorsState
        /** Rating size */
        size?: Sizes
        /** Allow half ratings? */
        halves?: boolean
        /** Rating shape */
        shape?: Masks
    }>(),
    {
        shape: 'star'
    }
)

/** Value of rating */
const model = defineModel<number>({ default: 0 })

const name = useId()

const sizeClass = computed(() => {
    return {
        xs: 'rating-xs',
        sm: 'rating-sm',
        md: 'rating-md',
        lg: 'rating-lg'
    }[props.size]
})

const colorClass = computed(() => {
    return {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        neutral: 'bg-neutral',
        accent: 'bg-accent',
        success: 'bg-success',
        warning: 'bg-warning',
        error: 'bg-error',
        info: 'bg-info'
    }[props.color]
})

const classes = computed(() => {
    return [sizeClass.value, props.halves ? 'rating-half' : '']
})

const ratingValue = (n) => {
    return props.halves ? n / 2 : n
}

watch(
    () => props.halves,
    (val) => {
        if (!val) {
            model.value = Math.round(model.value)
        }
    }
)
</script>

<template>
    <div class="rating" :class="classes">
        <input
            v-for="n in halves ? 10 : 5"
            :key="n"
            type="radio"
            :name="name"
            :class="[
                `mask mask-${shape}`,
                colorClass,
                halves && ['mask-half-2', 'mask-half-1'][n % 2]
            ]"
            :aria-label="`${ratingValue(n)} star`"
            :checked="ratingValue(n) == model"
            :value="ratingValue(n)"
            v-model="model"
        />
    </div>
</template>
