import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../utils/cn'
import { useLocale } from '../hooks/useLocale'

export default function Header() {
  const { locale, switchLocale } = useLocale()

  const handleLocaleChange = (event) => {
    switchLocale(event.target.value)
  }

  return (
    <nav
      className={cn(
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-out bg-white border-b-2 border-primary-600',
      )}
    >
      <div className='px-5 font-bold leading-normal w-full flex flex-row gap-2 items-center justify-between'>
        <Link href={'/'}>
          <Image loading='lazy' width={150} height={2} src='/wintersafe.svg' alt={`Logo`} />
        </Link>
        <select
          id='language-select'
          name='language'
          className='border-transparent appearance-none bg-white text-secondary-900 leading-tight focus:outline-none focus:shadow-outline'
          value={locale}
          onChange={handleLocaleChange}
        >
          <option value='en'>🇺🇸 EN</option>
          <option value='fr'>🇫🇷 FR</option>
          <option value='nl'>🇳🇱 NL</option>
          <option value='ar'>🇸🇦 AR</option>
          <option value='ru'>🇷🇺 RU</option>
          <option value='pl'>🇵🇱 PL</option>
        </select>
      </div>
    </nav>
  )
}
