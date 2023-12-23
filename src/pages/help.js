import React, { useEffect, useState } from 'react'
import Layout from '../container/layout'
import { useTranslate } from '../hooks/useTranslate'
import Link from 'next/link'
import allCenters from '../api/centers.json'
import NextIcon from '../icons/next'
import { useRouter } from 'next/router'

export default function Help() {
  const { t } = useTranslate()
  const router = useRouter()
  const [centers, setCenters] = useState(allCenters)
  const [, setSituation] = useState('all')

  useEffect(() => {
    if (router.query.s) {
      setSituation(router.query.s)
      setCenters(allCenters.filter((c) => c.situation.includes(router.query.s)))
    }
  }, [router.query.s])

  return (
    <Layout>
      <div className='mt-5 font-bold leading-normal flex flex-col gap-10 items-left'>
        <p className='text-xl'>{t('home.other.description')}</p>
        <p className='text-xl opacity-50'>{t('home.contact.title')}</p>
        <div className='grid grid-cols-1 gap-3 w-full mt-2'>
          {centers.map((center, index) => (
            <Link
              key={index}
              href={`/centers/${center.id}`}
              className='group bg-white shadow-md rounded-xl px-5 py-8 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary-500'
            >
              <div className='flex flex-row gap-5 items-center justify-between'>
                <div className='flew flex-col justify-start'>
                  <p className='font-bold text-lg'>{center.name}</p>
                  <p className='font-light text-lg'>{`${center.address}`}</p>
                </div>
                <div className='group-hover:text-white'>
                  <NextIcon />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
