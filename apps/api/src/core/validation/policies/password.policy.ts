import z from 'zod'

export const PasswordPolicy = z
  .string()
  .min(8, 'Password must be at least 8 characters long')
  .max(20, 'Password must be less than 20 characters long')
  .refine(
    (val) => {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val)
    },
    {
      message:
        'Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character',
    },
  )
