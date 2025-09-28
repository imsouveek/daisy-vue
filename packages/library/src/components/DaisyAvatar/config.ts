export const presence = ['online', 'offline', 'busy', 'away', undefined] as const
export type Presence = (typeof presence)[number]
