import { useLocale } from '../../hooks/useLocale'
import { useTranslate } from '../../hooks/useTranslate'
import { cn } from '../../utils/cn'

const languages = [
  {
    id: 'en',
    title: 'English',
    flag: '🇺🇸',
  },
  {
    id: 'fr',
    title: 'Français',
    flag: '🇫🇷',
  },
  {
    id: 'nl',
    title: 'Nederlands',
    flag: '🇳🇱',
  },
  {
    id: 'ar',
    title: 'العربية',
    flag: '🇸🇦',
  },
  {
    id: 'ru',
    title: 'Русский',
    flag: '🇷🇺',
  },
  {
    id: 'pl',
    title: 'Polski',
    flag: '🇵🇱',
  },
]

export default function Language({ onChange }) {
  const { t } = useTranslate()

  const { locale, switchLocale } = useLocale()

  const onClick = (id) => {
    switchLocale(id)
    onChange(id)
  }

  return (
    <section className='flex flex-col gap-10 my-5 justify-center'>
      <p className='font-bold text-2xl'>{t('select.language')}</p>
      <div className='flex flex-row gap-4 overflow-x-scroll my-5 py-5'>
        {languages.map((language) => (
          <div
            key={language.id}
            id={language.id}
            onClick={() => onClick(language.id)}
            className={cn(
              'p-5 border-2 border-secondary-900 rounded-3xl cursor-pointer',
              locale === language.id ? 'text-primary-500 border-primary-500' : 'text-secondary-900',
            )}
          >
            <p className='text-3xl'>{language.flag}</p>
            <p className='text-sm font-bold'>{language.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
