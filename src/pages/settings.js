import React from 'react'
import Layout from '../container/layout'
import { useLocale } from '../hooks/useLocale'
import Container from '../container/container'
import { useTranslate } from '../hooks/useTranslate'

export default function Settings() {
  const { t } = useTranslate()
  const { locale, switchLocale } = useLocale()

  const handleLocaleChange = (event) => {
    console.log(event.target.value)
    switchLocale(event.target.value)
  }

  return (
    <Layout>
      <Container>
        <div className='items-center justify-between font-bold leading-normal flex flex-row gap-2 items-left'>
          <p className='text-md'>{t('header.greetings')}</p>
          <p className='text-md'>{t('header.welcome')}</p>
        </div>
        <div className='mt-4'>
          <label htmlFor='language-select' className='text-secondary-900 font-bold'>
            {t('settings.language')}
          </label>
          <div className='mt-1 relative'>
            <select
              id='language-select'
              name='language'
              className='block appearance-none bg-white border border-primary-300 hover:border-primary-500 focus:border-primary-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
              value={locale}
              onChange={handleLocaleChange}
            >
              <option value='en'>🇺🇸</option>
              <option value='fr'>🇫🇷</option>
              <option value='nl'>🇳🇱</option>
              <option value='ar'>🇸🇦</option>
              <option value='ru'>🇷🇺</option>
              <option value='pl'>🇵🇱</option>
            </select>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
