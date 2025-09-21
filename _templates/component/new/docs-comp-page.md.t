---
inject: true
to: packages/docs/components.md
before: "<!--do not remove - used by hygen-->"
skip_if: "/components/<%= h.componentNameKebab(name) %>"
---
- [<%=h.componentNameNoPrefix(name)%>](/components/<%= h.componentNameKebab(name) %>)