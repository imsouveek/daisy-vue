const config = require('./.lib.config.js')

function toPascalCase(str) {
    return str
        .replace(new RegExp(`^${config.prefix}`, 'i'), '') // drop prefix if present
        .split(/[^a-zA-Z0-9]/) // split kebab/underscore/other
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join('')
}

function toKebabCase(str) {
    return toPascalCase(str)
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .toLowerCase()
}

function toNormalText(str) {
    return toPascalCase(str)
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .toLowerCase()
}

function toLowerCase(str) {
    return toPascalCase(str).toLowerCase()
}

module.exports = {
    helpers: {
        componentNameNoPrefix: (raw) => toPascalCase(raw),
        componentNameWithPrefix: (raw) => config.prefix + toPascalCase(raw),
        componentNameKebab: (raw) => toKebabCase(raw),
        componentNameLower: (raw) => toLowerCase(raw),
        componentNameText: (raw) => toNormalText(raw)
    }
}
