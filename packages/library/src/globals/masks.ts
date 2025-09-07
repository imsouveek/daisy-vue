export const masks = [
    'squircle', // mask-squircle
    'heart', // mask-heart
    'hexagon', // mask-hexagon
    'hexagon-2', // mask-hexagon-2
    'decagon', // mask-decagon
    'pentagon', // mask-pentagon
    'diamond', // mask-diamond
    'circle', // mask-circle
    'square', // mask-square
    'star', // mask-star
    'star-2', // mask-star-2
    'triangle', // mask-triangle
    'triangle-2', // mask-triangle-2
    'triangle-3', // mask-triangle-3
    'triangle-4' // mask-triangle-4
] as const

export const types = [
    'half-1', // mask-half-1
    'half-2' // mask-half-2
]
export type Masks = (typeof masks)[number]
export type Types = (typeof types)[number]
