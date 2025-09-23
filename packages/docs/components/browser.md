<script setup lang="ts">
import {DaisyBrowser, DaisyTab, DaisyTabs} from 'daisy-vue'
</script>

# Browser Component

A browser component. This component
uses the [Daisy UI Browser component](https://daisyui.com/components/mockup-browser/)
and exposes most of the available options.

## Without any props

This component takes a URL prop to set the mockup browser url but has no other variations

<DaisyTabs>
<DaisyTab title="Preview">

:::raw
<DaisyBrowser>
This is a test
</DaisyBrowser>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue
<DaisyBrowser>This is a test</DaisyBrowser>
```

</DaisyTab>
</DaisyTabs>
