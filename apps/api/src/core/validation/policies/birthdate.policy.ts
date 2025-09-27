import z from 'zod'

export const BirthDatePolicy = z.iso
  .date('Invalid birth date')
  .refine(
    (val) => {
      const date = new Date(val)
      return date < new Date() && date > new Date(new Date().setFullYear(new Date().getFullYear() - 100))
    },
    {
      message: 'Birth date must be before today and less than 100 years ago',
    },
  )
  .transform((val) => new Date(val))
