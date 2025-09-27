import { BirthDatePolicy, DisplayNamePolicy, EmailPolicy, PasswordPolicy, UsernamePolicy } from 'src/core/validation'
import z from 'zod'

export const RegisterDto = z.object({
  email: EmailPolicy,
  displayName: DisplayNamePolicy,
  userName: UsernamePolicy,
  password: PasswordPolicy,
  birthDate: BirthDatePolicy,
})

export type RegisterDto = z.infer<typeof RegisterDto>
