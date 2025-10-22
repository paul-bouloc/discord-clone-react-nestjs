import z from 'zod'

export const UsernamePolicy = z
  .string()
  .trim()
  .min(3, 'Le nom d\'utilisateur doit contenir au moins 3 caractères')
  .max(20, 'Le nom d\'utilisateur doit contenir moins de 20 caractères')
  .toLowerCase()
