<script setup lang="ts">
import {DaisyAvatarGroup, DaisyAvatar, DaisyTab, DaisyTabs} from 'daisy-vue'
import {sizes, masks} from 'daisy-vue/globals'

const avatarSettings = [
    {
        placeholder: 'AB',
        class: 'bg-red-500 text-white',
        presence: 'online',
        img: ''
    },
    {
        placeholder: 'AB',
        class: 'bg-red-500 text-white',
        img: 'https://picsum.photos/300/300'
    },
    {
        placeholder: 'CD',
        class: 'bg-green-500 text-white',
        img: ''
    },
    {
        placeholder: 'EF',
        class: 'bg-yellow-500 text-black',
        img: ''
    },
    {
        placeholder: 'AB',
        class: 'bg-red-500 text-white',
        presence: 'away',
        img: 'https://img.daisyui.com/images/profile/demo/distracted1@192.webp'
    }
]
const avatarVueSrc = avatarSettings.reduce((result, avatarObj) => {
    const imgSource = avatarObj.img
        ? `>
        <img src="${avatarObj.img}"/>
    </DaisyAvatar>`
        : `/>
    `

    return `${result}<DaisyAvatar class="${avatarObj.class}" placeholder="${avatarObj.placeholder}"${imgSource}`
}, '')
</script>

# Avatar Group Component

An avatar group component. This component replicates the behavior of the avatar-group classin Daisy UI
that is documented in [Daisy UI Avatar component](https://daisyui.com/components/avatar/), but does not use the
avatar-group class itself to support masks for avatar components.

## Without any props

If using DaisyAvatarGroup without any props, it defaults to medium size and circular avatars

<DaisyTabs>
<DaisyTab title="Preview">

:::raw
<DaisyAvatarGroup>
<DaisyAvatar v-for="avatar in avatarSettings" :key="avatar" v-bind="avatar">
<img v-if="avatar.img" :src="avatar.img"/>
</DaisyAvatar>
</DaisyAvatarGroup>
:::

</DaisyTab>
<DaisyTab title="Code">

```vue-vue
<DaisyAvatarGroup>
    {{avatarVueSrc}}
</DaisyAvatarGroup>
```

</DaisyTab>
</DaisyTabs>

## With different sizes

A size property can be set to determine the size of the AvatarGroup

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-2 gap-4">
<div v-for="size in sizes" :key="size" class="flex flex-col items-center">
{{size?.toUpperCase()??'UNDEFINED'}}
<DaisyAvatarGroup  :size="size">
<DaisyAvatar v-for="avatar in avatarSettings" :key="avatar" v-bind="avatar">
<img v-if="avatar.img" :src="avatar.img"/>
</DaisyAvatar>
</DaisyAvatarGroup>
</div>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyAvatarGroup size="{{size}}">
    {{avatarVueSrc}}
</DaisyAvatarGroup>
```

</template>

</DaisyTab>
</DaisyTabs>

## With different avatar shapes

A mask property can be set to determine the shape of each avatar inside the avatar group

<DaisyTabs>
<DaisyTab title="Preview">

:::raw

<div class="grid grid-cols-2 gap-4">
<div v-for="mask in masks" :key="mask" class="flex flex-col items-center">
{{mask?.toUpperCase()??'UNDEFINED'}}
<DaisyAvatarGroup  :mask="mask">
<DaisyAvatar v-for="avatar in avatarSettings" :key="avatar" v-bind="avatar">
<img v-if="avatar.img" :src="avatar.img"/>
</DaisyAvatar>
</DaisyAvatarGroup>
</div>
</div>
:::

</DaisyTab>
<DaisyTab title="Code">

<template v-for="mask in masks" :key="mask">

```vue-vue
<DaisyAvatarGroup mask="{{mask}}">
    {{avatarVueSrc}}
</DaisyAvatarGroup>
```

</template>

</DaisyTab>
</DaisyTabs>
