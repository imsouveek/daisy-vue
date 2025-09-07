import type { App } from 'vue'
import './assets/main.css'
import * as rawComponents from './components/components'
import { setConfig } from './global-config'
import type { Config } from './global-config'

const components = rawComponents as Record<string, any>
type Components = typeof rawComponents
declare module 'vue' {
    interface GlobalComponents extends Components {}
}

export function createDaisyVue(config?: Config) {
    const plugin = {
        // need this for the Type to be right even if we aren't using it
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        install(app: App, options: Record<string, any> = {}) {
            setConfig(config, app)
            if (config?.shamefullyRegisterAllComponents) {
                for (const key in components) {
                    app.component(key, components[key])
                }
            }
        }
    }
    return plugin
}
