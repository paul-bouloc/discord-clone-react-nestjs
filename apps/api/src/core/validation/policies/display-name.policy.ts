import z from 'zod'

export const DisplayNamePolicy = z
  .string()
  .trim()
  .min(3, 'Display name must be at least 3 characters long')
  .max(20, 'Display name must be less than 20 characters long')
