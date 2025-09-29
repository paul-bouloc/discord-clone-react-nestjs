import { Button } from '@/components/ui/button/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import z from 'zod'

const formSchema = z.object({
  email: z.email('Adresse email invalide'),
  password: z.string('Mot de passe invalide').min(1, 'Mot de passe invalide'),
})

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="sm:bg-gray-560 flex w-full max-w-lg flex-col sm:rounded-md sm:p-8 sm:shadow-lg">
      <div>
        <h2 className="mb-2 text-center text-2xl font-semibold text-white">Ha, te revoilà !</h2>
        <p className="text-gray-330 text-center text-base leading-5">Nous sommes si heureux de te revoir !</p>
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
                    <Input {...field} required />
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
                    <Input {...field} required type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-3 w-full">
              Connexion
            </Button>
          </form>
        </Form>
        <div className="mt-2 flex items-center gap-1 text-sm">
          <p className="text-gray-360">Besoin d&apos;un compte ?</p>
          <Link to="/auth/register" className="text-brand-360 font-medium hover:underline hover:underline-offset-2">
            S&apos;inscrire
          </Link>
        </div>
      </div>
    </div>
  )
}
