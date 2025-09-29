import { Button } from '@/components/ui/button/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DateTripleSelect } from '@/components/ui/date-triple-select'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useLogin } from '@/features/auth/api/login.api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import z from 'zod'
// months/years now handled inside DateTripleSelect
// Nouveau modèle: un seul champ date ISO string
const formSchema = z.object({
  email: z.email('Adresse email invalide'),
  displayName: z.string("Le nom d'affichage est invalide").optional(),
  userName: z
    .string("Le nom d'utilisateur est invalide")
    .min(3, "Le nom d'utilisateur doit contenir au moins 3 caractères")
    .max(20, "Le nom d'utilisateur doit contenir moins de 20 caractères")
    .regex(/^[a-z0-9_-]+$/i, "Le nom d'utilisateur ne peut contenir que des lettres, chiffres, '-' et '_'")
    .toLowerCase(),
  // Date ISO construite par le composant DateTripleSelect
  birthDate: z.string().min(1, 'Date invalide'),
  password: z
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
    ),
  terms: z.boolean(),
})

export default function RegisterPage() {
  const form = useForm<z.input<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      userName: '',
      displayName: '',
      password: '',
      birthDate: '',
      terms: false,
    },
  })

  const { mutate: login, isPending, error } = useLogin()

  function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = { ...values }
    console.log(payload)
  }

  return (
    <div className="sm:bg-gray-560 flex w-full max-w-lg flex-col sm:rounded-md sm:p-8 sm:shadow-lg">
      <div>
        <h2 className="mb-2 text-center text-2xl font-semibold text-white">Créer un compte</h2>
      </div>

      <div className="mt-5 flex w-full flex-col">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input {...field} required autoComplete="email" inputMode="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom d&apos;affichage</FormLabel>
                  <FormControl>
                    <Input {...field} autoComplete="displayname" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom d&apos;utilisateur</FormLabel>
                  <FormControl>
                    <Input {...field} required autoComplete="username" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input {...field} required type="password" autoComplete="current-password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date de naissance: triple select */}
            <DateTripleSelect name="birthDate" label="Date de naissance" requiredIndicator maxYears={100} />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-row items-center gap-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(checked) => {
                          return checked ? field.onChange(true) : field.onChange(false)
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal text-gray-300">
                      J&apos;ai lu et accepté les conditions d&apos;utilisation et la politique de confidentialité de
                      Discord.
                    </FormLabel>
                  </FormItem>
                )
              }}
            />

            {error ? <p className="text-destructive text-center text-sm">Identifiants invalides.</p> : null}
            <Button type="submit" className="w-full" disabled={isPending || !form.watch('terms')}>
              {isPending ? 'Création de compte…' : 'Créer un compte'}
            </Button>
          </form>
        </Form>
        <div className="mt-5 flex items-center gap-1 text-sm">
          <Link to="/auth/login" className="text-brand-360 font-medium hover:underline hover:underline-offset-2">
            Tu as déjà un compte ? Connecte-toi
          </Link>
        </div>
      </div>
    </div>
  )
}
