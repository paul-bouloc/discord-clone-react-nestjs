import z from 'zod'

const envSchema = z
  .object({
    DATABASE_URL: z.url(),
    PORT: z.coerce.number().int().positive().default(3000),
    FRONTEND_URL: z.url(),
  })
  .catchall(z.unknown())

export type EnvVars = z.infer<typeof envSchema>

export default () => {
  const parsed = envSchema.safeParse(process.env)
  if (!parsed.success) {
    const formatted = parsed.error.issues.map((e) => `• ${e.path.join('.')}: ${e.message}`).join('\n')
    throw new Error(`❌ Invalid environment variables:\n${formatted}`)
  }

  const env = parsed.data

  return {
    port: env.PORT,
    frontendUrl: env.FRONTEND_URL,
    databaseUrl: env.DATABASE_URL,
  } as const
}
