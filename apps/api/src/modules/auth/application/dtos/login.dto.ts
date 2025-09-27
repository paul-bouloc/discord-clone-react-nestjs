import { z } from 'zod'

export const LoginDto = z.object({
  email: z.email('Invalid email address'),
  password: z.string('Invalid password'),
})

export type LoginDto = z.infer<typeof LoginDto>
