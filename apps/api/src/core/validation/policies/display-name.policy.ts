import z from 'zod'

export const DisplayNamePolicy = z
  .string()
  .trim()
  .min(3, 'Le nom d\'affichage doit contenir au moins 3 caractères')
  .max(20, 'Le nom d\'affichage doit contenir moins de 20 caractères')
