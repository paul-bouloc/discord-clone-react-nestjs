import { z } from 'zod'

export const LoginDto = z.object({
  email: z.email('Adresse email invalide').trim().toLowerCase(),
  password: z.string('Mot de passe invalide')
})

export type LoginDto = z.infer<typeof LoginDto>
