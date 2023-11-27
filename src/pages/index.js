import React, { useEffect, useState } from 'react'
import Layout from '../container/layout'
import { useTranslate } from '../hooks/useTranslate'
import Language from '../container/steps/language'
import Situation from '../container/steps/situations'
import Button from '../components/button'
import { useLocale } from '../hooks/useLocale'

export default function Home() {
  const { t } = useTranslate()

  const { locale } = useLocale()
  const [lang, setLang] = useState(locale)
  const [situation, setSituation] = useState()
  const [location, setLocation] = useState({})

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
      })
    }
  }, [])

  useEffect(() => {
    lang && sessionStorage.setItem('lang', lang)
    situation && sessionStorage.setItem('situation', situation)
    location && sessionStorage.setItem('location', location)
  }, [lang, situation, location])

  return (
    <Layout>
      <div className='flex flex-col gap-10'>
        <div className='mt-5 font-bold leading-normal flex flex-col gap-2 items-left'>
          <p className='text-xl'>{t('header.greetings')}</p>
          <p className='text-md text-secondary-900/50'>{t('home.other.description')}</p>
        </div>
        <div className='flex flex-col gap-5 mt-5'>
          <Language onChange={setLang} />
          <Situation situation={situation} onChange={setSituation} />
          {lang && situation && (
            <Button
              message={t('home.result.button')}
              link={`/help?s=${situation}&lat=${location.lat}&lng=${location.lng}`}
              primary
              className='mt-5 w-full'
            />
          )}
        </div>
      </div>
    </Layout>
  )
}
