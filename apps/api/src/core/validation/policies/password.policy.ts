import z from 'zod'

export const PasswordPolicy = z
  .string()
  .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
  .max(20, 'Le mot de passe doit contenir moins de 20 caractères')
  .refine(
    (val) => {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val)
    },
    {
      message:
        'Le mot de passe doit contenir au moins 1 lettre majuscule, 1 lettre minuscule, 1 chiffre et 1 caractère spécial',
    },
  )
