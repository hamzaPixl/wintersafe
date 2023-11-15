import React from 'react'
import Layout from '../container/layout'
import { useTranslate } from '../hooks/useTranslate'
import Container from '../container/container'
import Link from 'next/link'
import MedicalIcon from '../icons/medical'
import BedIcon from '../icons/bed'
import FoodIcon from '../icons/food'
import centers from '../api/processedCenters.json'

export default function Help() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Container>
        <div className='items-center justify-between font-bold leading-normal flex flex-row gap-2 items-left'>
          <p className='text-md'>{t('header.greetings')}</p>
          <p className='text-md'>{t('header.welcome')}</p>
        </div>
        <div className='mt-5 font-bold leading-normal flex  justify-center items-center flex-col gap-2 items-left'>
          <div className='grid grid-cols-3 gap-3'>
            <Link
              href={'/help?category=bed'}
              className='my-10 p-5 flex flex-col justify-center items-center bg-secondary-900 text-white rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 ease-in-out'
            >
              <BedIcon />
            </Link>
            <Link
              href={'/help?category=medical'}
              className='my-10 p-5 flex flex-col justify-center items-center bg-secondary-900 text-white rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 ease-in-out'
            >
              <MedicalIcon />
            </Link>
            <Link
              href={'/help?category=food'}
              className='my-10 p-5 flex flex-col justify-center items-center bg-secondary-900 text-white rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 ease-in-out'
            >
              <FoodIcon />
            </Link>
          </div>
        </div>
        <div className='mt-5 font-bold leading-normal flex justify-center items-center flex-col gap-2 items-left'>
          <p className='text-xl'>{t('home.contact.title')}</p>
          <div className='grid grid-cols-1 gap-3 w-full mt-2'>
            {centers.centers.map((center, index) => (
              <Link
                key={index}
                href={`/centers/${center.id}`}
                className='p-5 border-2 border-primary-500 shadow-md rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 ease-in-out'
              >
                <div className='flex flex-row gap-5 items-center'>
                  <div className='flew flex-col justify-start'>
                    <p className='font-bold text-lg'>{center.name}</p>
                    <p className='font-light text-lg'>{`${center.address.rue}, ${center.address.numero}, ${center.address.cityHole} ${center.address.zip}`}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  )
}
