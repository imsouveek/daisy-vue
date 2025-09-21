---
inject: true
to: packages/docs/.vitepress/config.mts
before: "// do not remove - used by hygen"
skip_if: "link: '/components/<%= h.componentNameKebab(name) %>'"
---

          { text: '<%= h.componentNameNoPrefix(name) %>', link: '/components/<%= h.componentNameKebab(name) %>' },