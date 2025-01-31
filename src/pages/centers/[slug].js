import React, { useEffect, useState } from 'react'
import Layout from '../../container/layout'
import centers from '../../api/centers.json'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LocationIcon from '../../icons/location'
import PhoneIcon from '../../icons/phone'
import WebIcon from '../../icons/web'
import MailIcon from '../../icons/mail'
import { useTranslate } from '../../hooks/useTranslate'

export default function CenterSlug() {
  const { t } = useTranslate()
  const router = useRouter()
  const [center, setCenter] = useState()

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      setCenter(centers.find((item) => `${item.id}` === router.query.slug))
    }
  }, [router.query])

  return (
    <Layout>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-5 justify-center items-center mt-10'>
          <h1 className='text-2xl font-bold text-primary-500'>{center?.name}</h1>
          <div className='grid grid-cols-1 gap-4'>
            <Link
              className='flex flex-col gap-5 items-center text-primary-500'
              href={`https://${center?.addressLink}`}
            >
              <p className='font-bold text-secondary-900'>{`${center?.address}`}</p>
              <LocationIcon />
            </Link>
          </div>
        </div>
        <div className='flex flex-row gap-5 justify-evenly items-center text-white my-10'>
          <Link
            className='flex flex-row gap-5 items-center rounded-full p-5 bg-primary-500'
            href={`tel:${center?.tel}`}
          >
            <PhoneIcon />
          </Link>
          <Link
            className='flex flex-row gap-5 items-center rounded-full p-5 bg-primary-500'
            href={`mailto:${center?.email}`}
          >
            <MailIcon />
          </Link>{' '}
          <Link
            className='flex flex-row gap-5 items-center rounded-full p-5 bg-primary-500'
            href={`${center?.web}`}
          >
            <WebIcon />
          </Link>
        </div>
        <div className='flex flex-col gap-5 justify-center items-left'>
          <p className='text-xl text-primary-500 font-bold'>{t('center.detail')}</p>
          <div className='flex flex-col items-start gap-5'>
            {center?.details.map((item, index) => (
              <div key={index} className='flex flex-row gap-5 items-center'>
                <div className='bg-primary-500 p-1 rounded-full' />
                <p key={index} className='text-secondary-900'>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
