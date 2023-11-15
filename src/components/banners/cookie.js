import React, { useState } from 'react'
import { hasCookie, setCookie } from 'cookies-next'
import Button from '../button'
import Link from 'next/link'
import { useTranslate } from '../../hooks/useTranslate'

export default function Cookie() {
  const { t } = useTranslate()
  const [showConsent, setShowConsent] = useState(true)

  React.useEffect(() => {
    setShowConsent(hasCookie('localConsent'))
  }, [])

  const acceptCookie = () => {
    setShowConsent(true)
    setCookie('localConsent', 'true', {})
  }

  return (
    !showConsent && (
      <div className='fixed inset-0 bg-black bg-opacity-70'>
        <div className='fixed bottom-0 left-0 right-0 bg-white flex justify-center'>
          <div className='md:max-w-screen-2xl flex items-left md:items-center justify-between p-10 flex-col md:flex-row'>
            <div className='text-black text-base flex flex-col md:mb-0 mb-10 md:mr-20'>
              <span>{t('policy.cookie.title')}</span>
              <span>
                {t('policy.cookie.text')}
                <Link
                  href={'/policy/cookie'}
                  className='border-b-2 py-2 border-black transition-all ease-in-out duration-300'
                >
                  {t('policy.cookie.page')}
                </Link>
              </span>
            </div>
            <Button message='Accept' onClick={() => acceptCookie()} primary={true} />
          </div>
        </div>
      </div>
    )
  )
}
