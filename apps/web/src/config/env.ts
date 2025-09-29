import * as z from 'zod'

const createEnv = () => {
  const EnvSchema = z.object({
    API_URL: z.string(),
  })

  const envVars = Object.entries(import.meta.env).reduce<Record<string, string>>((acc, curr) => {
    const [key, value] = curr
    if (key.startsWith('VITE_APP_')) {
      acc[key.replace('VITE_APP_', '')] = value
    }
    return acc
  }, {})

  const parsedEnv = EnvSchema.safeParse(envVars)

  if (!parsedEnv.success) {
    throw new Error(
      `Invalid env provided.
      The following variables are missing or invalid:
      ${parsedEnv.error.issues.map((issue) => `- ${issue.path.join('.')}: ${issue.message}`).join('\n')}
      `,
    )
  }

  return parsedEnv.data
}

export const env = createEnv()
