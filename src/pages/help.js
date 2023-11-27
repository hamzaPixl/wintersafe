import React from 'react'
import Layout from '../container/layout'
import { useTranslate } from '../hooks/useTranslate'
import Link from 'next/link'
import centers from '../api/processedCenters.json'
import NextIcon from '../icons/next'

export default function Help() {
  const { t } = useTranslate()
  return (
    <Layout>
      <div className='mt-5 font-bold leading-normal flex flex-col gap-10 items-left'>
        <p className='text-xl'>{t('home.other.description')}</p>
        <p className='text-xl opacity-50'>{t('home.contact.title')}</p>
      </div>
      <div className='mt-5 font-bold leading-normal flex flex-col gap-2 items-left'>
        <div className='grid grid-cols-1 gap-3 w-full mt-2'>
          {centers.centers.map((center, index) => (
            <Link
              key={index}
              href={`/centers/${center.id}`}
              className='group bg-white shadow-md rounded-xl px-5 py-8 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary-500'
            >
              <div className='flex flex-row gap-5 items-center justify-between'>
                <div className='flew flex-col justify-start'>
                  <p className='font-bold text-lg'>{center.name}</p>
                  <p className='font-light text-lg'>{`${center.address.rue}, ${center.address.numero}, ${center.address.cityHole} ${center.address.zip}`}</p>
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
