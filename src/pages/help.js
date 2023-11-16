import React from 'react'
import Layout from '../container/layout'
import { useTranslate } from '../hooks/useTranslate'
import Link from 'next/link'
import MedicalIcon from '../icons/medical'
import BedIcon from '../icons/bed'
import FoodIcon from '../icons/food'
import centers from '../api/processedCenters.json'
import NextIcon from '../icons/next'

export default function Help() {
  const { t } = useTranslate()
  return (
    <Layout>
      <div className='mt-5 font-bold leading-normal flex flex-col gap-2 items-left'>
        <p className='text-xl'>{t('home.other.description')}</p>
        <div className='grid grid-cols-3 gap-5 mt-5 max-w-lg align-center'>
          <Link
            href={'/help?category=bed'}
            className='p-10 gap-4 flex flex-col justify-center items-center bg-white text-secondary-900 shadow-xl rounded-2xl hover:bg-primary-500 hover:text-white transition-all duration-300 ease-in-out'
          >
            <BedIcon />
            <p>{t('bed')}</p>
          </Link>
          <Link
            href={'/help?category=medical'}
            className='p-10 gap-4 flex flex-col justify-center items-center bg-white text-secondary-900 shadow-xl rounded-2xl hover:bg-primary-500 hover:text-white transition-all duration-300 ease-in-out'
          >
            <MedicalIcon />
            <p>{t('medical')}</p>
          </Link>
          <Link
            href={'/help?category=food'}
            className='p-10 gap-4 flex flex-col justify-center items-center bg-white text-secondary-900 shadow-xl rounded-2xl hover:bg-primary-500 hover:text-white transition-all duration-300 ease-in-out'
          >
            <FoodIcon />
            <p>{t('food')}</p>
          </Link>
        </div>
      </div>
      <div className='mt-10 font-bold leading-normal flex flex-col gap-2 items-left'>
        <p className='text-xl mb-5 opacity-50'>{t('home.contact.title')}</p>
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
