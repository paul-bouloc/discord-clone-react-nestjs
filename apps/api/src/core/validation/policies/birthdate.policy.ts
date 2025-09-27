import z from 'zod'

export const BirthDatePolicy = z.string().refine(
  (val) => {
    const date = new Date(val)
    return date < new Date() && date > new Date(new Date().setFullYear(new Date().getFullYear() - 100))
  },
  {
    message: 'Birth date must be before today and less than 100 years ago',
  },
)
