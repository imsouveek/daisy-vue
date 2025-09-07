import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@nuxt/test-utils'],
    devtools: { enabled: true },
    vite: {
        plugins: [tailwindcss()]
    }
})
