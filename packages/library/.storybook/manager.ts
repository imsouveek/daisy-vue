import { addons } from 'storybook/manager-api'
import { themes } from 'storybook/theming'
import { GLOBALS_UPDATED } from 'storybook/internal/core-events'

addons.register('theme-sync', () => {
    const channel = addons.getChannel()

    // initial config
    addons.setConfig({ theme: themes.light })

    channel.on(GLOBALS_UPDATED, ({ globals }) => {
        const theme = globals.theme === 'dark' ? themes.dark : themes.light
        addons.setConfig({
            theme
        })
    })
})
