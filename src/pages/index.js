import React, { useEffect, useState } from 'react'
import Layout from '../container/layout'
import { useTranslate } from '../hooks/useTranslate'
import Language from '../container/steps/language'
import Situation from '../container/steps/situations'
import { useLocale } from '../hooks/useLocale'
import { useRouter } from 'next/router'

export default function Home() {
  const { t } = useTranslate()

  const router = useRouter()
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
    if (lang && situation && location) {
      router.push(`/help?s=${situation}&lat=${location.lat}&lng=${location.lng}`)
    }
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
        </div>
      </div>
    </Layout>
  )
}
