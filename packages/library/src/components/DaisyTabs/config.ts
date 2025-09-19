export const types = ['bordered', 'boxed', 'lifted', undefined] as const
export type Types = (typeof types)[number]

export const positions = ['top', 'bottom', undefined] as const
export type Positions = (typeof positions)[number]
