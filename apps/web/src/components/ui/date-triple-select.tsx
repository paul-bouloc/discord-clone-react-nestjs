import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import * as React from 'react'
import { useFormContext } from 'react-hook-form'

interface DateTripleSelectProps {
  label?: string
  requiredIndicator?: boolean | 'auto'
  name: string // outer form field name that will receive an ISO date string when valid
  maxYears?: number
}
const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
]

export function DateTripleSelect({
  label = 'Date de naissance',
  requiredIndicator = 'auto',
  name,
  maxYears = 100,
}: DateTripleSelectProps) {
  const form = useFormContext()

  const now = React.useMemo(() => new Date(), [])
  const currentYear = now.getFullYear()
  const years = React.useMemo(
    () => Array.from({ length: maxYears }, (_, i) => currentYear - i),
    [currentYear, maxYears],
  )

  const outerError = form.formState.errors?.[name]

  const [day, setDay] = React.useState<string>('')
  const [month, setMonth] = React.useState<string>('')
  const [year, setYear] = React.useState<string>('')

  const recompute = React.useCallback(
    (y: string, m: string, d: string) => {
      // si tous définis -> valider; sinon, vider la valeur du champ parent sans erreur
      if (!y || !m || !d) {
        form.setValue(name as never, '' as never, { shouldDirty: true })
        form.clearErrors(name as never)
        return
      }

      const yN = Number(y)
      const mN = Number(m)
      const dN = Number(d)

      const within =
        Number.isInteger(yN) &&
        Number.isInteger(mN) &&
        Number.isInteger(dN) &&
        yN >= currentYear - 100 &&
        yN <= currentYear &&
        mN >= 1 &&
        mN <= 12 &&
        dN >= 1 &&
        dN <= 31

      if (!within) {
        form.setValue(name as never, '' as never, { shouldDirty: true })
        form.setError(name as never, { type: 'custom', message: 'Date invalide' })
        return
      }

      const date = new Date(yN, mN - 1, dN)
      const valid =
        !Number.isNaN(date.getTime()) &&
        date.getFullYear() === yN &&
        date.getMonth() === mN - 1 &&
        date.getDate() === dN &&
        date < now &&
        date > new Date(currentYear - 100, now.getMonth(), now.getDate())

      if (!valid) {
        form.setValue(name as never, '' as never, { shouldDirty: true })
        form.setError(name as never, { type: 'custom', message: 'Date invalide' })
        return
      }

      // Sortie sans fuseau: YYYY-MM-DD
      const yyyy = String(yN).padStart(4, '0')
      const mm = String(mN).padStart(2, '0')
      const dd = String(dN).padStart(2, '0')
      const isoLocalDate = `${yyyy}-${mm}-${dd}`

      form.clearErrors(name as never)
      form.setValue(name as never, isoLocalDate as never, { shouldValidate: true, shouldDirty: true })
    },
    [currentYear, form, name, now],
  )

  const onChangeDay = (v: string) => {
    setDay(v)
    recompute(year, month, v)
  }
  const onChangeMonth = (v: string) => {
    setMonth(v)
    recompute(year, v, day)
  }
  const onChangeYear = (v: string) => {
    setYear(v)
    recompute(v, month, day)
  }

  return (
    <FormField
      name={name as never}
      control={form.control as never}
      render={() => (
        <FormItem>
          <FormLabel requiredIndicator={requiredIndicator}>{label}</FormLabel>
          <div className="grid grid-cols-3 items-end gap-3">
            {/* Jour */}
            <div>
              <Select onValueChange={onChangeDay} value={day}>
                <SelectTrigger aria-invalid={!!outerError}>
                  <SelectValue placeholder="Jour" />
                </SelectTrigger>
                <SelectContent className="max-h-[350px]">
                  {Array.from({ length: 31 }, (_, i) => (
                    <SelectItem key={i} value={(i + 1).toString()}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className={cn(outerError && 'mt-2 min-h-5')}>
                <FormMessage />
              </div>
            </div>

            {/* Mois */}
            <div>
              <Select onValueChange={onChangeMonth} value={month}>
                <SelectTrigger aria-invalid={!!outerError}>
                  <SelectValue placeholder="Mois" />
                </SelectTrigger>
                <SelectContent className="max-h-[350px]">
                  {months.map((m, index) => (
                    <SelectItem key={index} value={(index + 1).toString()}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className={cn(outerError && 'mt-2 min-h-5')}>
                {/* Masqué visuellement, on garde l'espace */}
                <FormMessage className="sr-only" />
              </div>
            </div>

            {/* Année */}
            <div>
              <Select onValueChange={onChangeYear} value={year}>
                <SelectTrigger aria-invalid={!!outerError}>
                  <SelectValue placeholder="Année" />
                </SelectTrigger>
                <SelectContent className="max-h-[350px]">
                  {years.map((y) => (
                    <SelectItem key={y} value={y.toString()}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className={cn(outerError && 'mt-2 min-h-5')}>
                <FormMessage className="sr-only" />
              </div>
            </div>
          </div>
        </FormItem>
      )}
    />
  )
}
