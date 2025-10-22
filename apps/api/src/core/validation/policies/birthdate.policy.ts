import z from 'zod'

export const BirthDatePolicy = z.iso
  .date('Date de naissance invalide')
  .refine(
    (val) => {
      const date = new Date(val)
      return date < new Date() && date > new Date(new Date().setFullYear(new Date().getFullYear() - 100))
    },
    {
      message: 'Date de naissance doit être avant aujourd\'hui et moins de 100 ans',
    },
  )
  .transform((val) => new Date(val))
