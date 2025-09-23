export const iconTypes = ['arrow', 'plus', undefined] as const
export type IconType = (typeof iconTypes)[number]
