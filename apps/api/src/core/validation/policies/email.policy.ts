import z from 'zod'

export const EmailPolicy = z.email('Invalid email address')
