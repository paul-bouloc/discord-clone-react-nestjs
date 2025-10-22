import z from 'zod'

export const EmailPolicy = z.email('Adresse email invalide').trim().toLowerCase()
