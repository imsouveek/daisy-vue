export const types = ['spinner', 'dots', 'ring', 'ball', 'bars', 'infinity', undefined] as const

export type DaisyLoadingTypes = (typeof types)[number]
