import React, { useEffect, useState } from 'react'
import Layout from '../../container/layout'
import { useTranslate } from '../../hooks/useTranslate'
import Container from '../../container/container'
import centers from '../../api/processedCenters.json'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LocationIcon from '../../icons/location'
import PhoneIcon from '../../icons/phone'
import TimeIcon from '../../icons/time'
import WebIcon from '../../icons/web'
import MailIcon from '../../icons/mail'

export default function CenterSlug() {
  const router = useRouter()
  const { t } = useTranslate()
  const [center, setCenter] = useState()

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      setCenter(centers.centers.find((item) => `${item.id}` === router.query.slug))
    }
  }, [router.query])

  return (
    <Layout>
      <Container>
        <div className='items-center justify-between font-bold leading-normal flex flex-row gap-2 items-left'>
          <p className='text-md'>{t('header.greetings')}</p>
          <p className='text-md'>{t('header.welcome')}</p>
        </div>
        <div className='items-center justify-between font-bold leading-normal flex flex-col gap-5 mt-20'>
          <h1 className='text-4xl bg-primary-500 text-white p-5 rounded-xl'>{center?.name}</h1>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex flex-col gap-5 justify-between mt-10'>
            <h2 className='text-xl font-bold text-primary-500'>{t('center.informations')}</h2>
            <div className='grid grid-cols-1 gap-4'>
              <Link
                className='flex flex-row gap-5 items-center text-primary-500'
                href={`https://maps.google.com/?q=${center?.address?.coord?.lat},${center?.address?.coord?.long}`}
              >
                <LocationIcon />
                <p className='font-bold text-secondary-900'>{`${center?.address?.rue}, ${center?.address?.numero}, ${center?.address?.cityHole} ${center?.address?.zip}`}</p>
              </Link>
              <Link
                className='flex flex-row gap-5 items-center text-primary-500'
                href={`tel:${center?.tel[0]}`}
              >
                <PhoneIcon />
                <p className='font-bold text-secondary-900'>{`${center?.tel.join(',')}`}</p>
              </Link>
              <Link
                className='flex flex-row gap-5 items-center text-primary-500'
                href={`mailto:${center?.email}`}
              >
                <MailIcon />
                <p className='font-bold text-secondary-900'>{`${center?.email}`}</p>
              </Link>
              <div className='flex flex-row gap-5 items-center text-primary-500'>
                <TimeIcon />
                <p className='font-bold text-secondary-900'>{`${center?.contact?.time}`}</p>
              </div>
              <Link
                className='flex flex-row gap-5 items-center text-primary-500'
                href={`${center?.web}`}
              >
                <WebIcon />
                <p className='font-bold text-secondary-900'>{`${center?.web}`}</p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
