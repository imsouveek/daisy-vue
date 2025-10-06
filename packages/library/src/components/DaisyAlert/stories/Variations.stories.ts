import { getMeta, type DaisyAlertMeta, type DaisyAlertStory } from './DaisyAlertMeta'
import DaisyAlert from '../DaisyAlert.vue'
import { states } from '../../../globals'

const meta = getMeta()
const srcArgTypes = meta.argTypes

export default {
    ...meta,
    title: 'Components/DaisyAlert',
    parameters: {
        ...meta.parameters,
        docs: {
            source: false
        }
    }
} as DaisyAlertMeta

export const Types: DaisyAlertStory = {
    argTypes: {
        ...srcArgTypes,
        type: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => ({
        components: { DaisyAlert },
        setup() {
            return {
                args,
                states: [...states, undefined]
            }
        },
        template: `
            <div style="width: 896px;">
                <div v-for="option in states" :key="option" class="flex flex-col mb-8">
                    {{ option?.toUpperCase() ?? 'UNDEFINED' }}
                    <DaisyAlert :type="option" v-bind="args">{{ args.content }}</DaisyAlert>
                </div>
            </div>
        `
    })
}

export const Variants: DaisyAlertStory = {
    argTypes: {
        ...srcArgTypes,
        ...Object.keys(srcArgTypes).reduce((result, key) => {
            if (key !== 'type' && key !== 'content') {
                result[key] = {
                    control: false
                }
            }
            return result
        }, {})
    },
    render: (args) => ({
        components: { DaisyAlert },
        setup() {
            return {
                args,
                variants: [
                    { name: 'dismissible', dismissible: true },
                    { name: 'soft', soft: true },
                    { name: 'outline', outline: true },
                    { name: 'dash', dash: true }
                ]
            }
        },
        template: `
            <div style="width: 896px;">
                <div v-for="option in variants" :key="option" class="flex flex-col mb-8">
                    {{ option.name.toUpperCase() }}
                    <DaisyAlert v-bind="{...args, ...option}">{{ args.content }}</DaisyAlert>
                </div>
            </div>
        `
    })
}

export const FullCustom: DaisyAlertStory = {
    render: (args) => ({
        components: { DaisyAlert },
        setup() {
            return { args }
        },
        template: `
            <div style="width: 896px;">
                <DaisyAlert v-bind="args">
                    <template #full-custom>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>This is using the full-custom slot. </span>
                        <div>
                            <button class="btn btn-sm">Deny</button>
                            <button class="btn btn-sm btn-primary">Accept</button>
                        </div>
                    </template>
                </DaisyAlert>
            </div>
            <div style="width: 200px; margin: auto;">
                <DaisyAlert v-bind="args" class="alert-vertical mt-8">
                    <template #full-custom>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>This is using the full-custom slot and the alert-vertical class</span>
                        <div>
                            <button class="btn btn-sm">Deny</button>
                            <button class="btn btn-sm btn-primary">Accept</button>
                        </div>
                    </template>
                </DaisyAlert>
            </div>
        `
    })
}
