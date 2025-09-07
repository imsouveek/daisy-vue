import type { ObjectDirective } from 'vue'
import type { Masks, Types } from '../../globals'

type MaskValue = Masks | undefined
type MaskArg = Types | undefined

function stripMaskClasses(el: HTMLElement) {
    // remove plain "mask"
    el.classList.remove('mask')
    // remove all "mask-*" (use index loop to avoid DOM.Iterable lib requirement)
    for (let i = el.classList.length - 1; i >= 0; i--) {
        const cls = el.classList.item(i)!
        if (cls.startsWith('mask-')) el.classList.remove(cls)
    }
}

function applyMask(el: HTMLElement, mask?: MaskValue, arg?: MaskArg) {
    stripMaskClasses(el)
    if (mask) el.classList.add('mask', `mask-${mask}`)
    if (arg) el.classList.add(`mask-${arg}`)
}

export const vMask: ObjectDirective<HTMLElement, MaskValue> = {
    mounted(el, binding) {
        applyMask(el, binding.value, binding.arg as MaskArg)
    },
    updated(el, binding) {
        applyMask(el, binding.value, binding.arg as MaskArg)
    },
    beforeUnmount(el) {
        stripMaskClasses(el)
    }
}
