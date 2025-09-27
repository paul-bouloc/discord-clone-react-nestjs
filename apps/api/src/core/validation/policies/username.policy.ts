import z from 'zod'

export const UsernamePolicy = z
  .string()
  .trim()
  .min(3, 'Username must be at least 3 characters long')
  .max(20, 'Username must be less than 20 characters long')
