import React, { useEffect, useState } from 'react'
import Layout from '../../container/layout'
import { useTranslate } from '../../hooks/useTranslate'
import centers from '../../api/centers.json'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LocationIcon from '../../icons/location'
import PhoneIcon from '../../icons/phone'
import WebIcon from '../../icons/web'
import MailIcon from '../../icons/mail'

export default function CenterSlug() {
  const router = useRouter()
  const { t } = useTranslate()
  const [center, setCenter] = useState()

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      setCenter(centers.find((item) => `${item.id}` === router.query.slug))
    }
  }, [router.query])

  return (
    <Layout>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-5 justify-center items-center mt-10 shadow-xl rounded-xl p-5'>
          <h1 className='text-2xl font-bold p-2 bg-primary-500 text-white rounded-xl'>
            {center?.name}
          </h1>
          <div className='grid grid-cols-1 gap-4'>
            <Link
              className='flex flex-row gap-5 items-center text-primary-500'
              href={`https://${center?.addressLink}`}
            >
              <LocationIcon />
              <p className='font-bold text-secondary-900/50'>{`${center?.address}`}</p>
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
      </div>
    </Layout>
  )
}
