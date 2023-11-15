import React from 'react'
import Layout from '../container/layout'
import { useTranslate } from '../hooks/useTranslate'
import Container from '../container/container'
import Image from 'next/image'
import Link from 'next/link'
import MedicalIcon from '../icons/medical'
import BedIcon from '../icons/bed'
import FoodIcon from '../icons/food'

export default function Home() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Container>
        <div className='items-center justify-between font-bold leading-normal flex flex-row gap-2 items-left'>
          <p className='text-md'>{t('header.greetings')}</p>
          <p className='text-md'>{t('header.welcome')}</p>
        </div>
        <div className='mt-10 font-bold leading-normal flex  justify-center items-center flex-col gap-2 items-left'>
          <p className='text-4xl'>{t('home.help.title')}</p>
          <p className='text-xl text-secondary-900/70'>{t('home.help.description')}</p>
          <Link href={'/help'} className='my-10'>
            <Image
              src='/images/siren.png'
              alt='Help'
              width={170}
              height={300}
              loading='lazy'
              className='transform transition-all duration-300 ease-in-out hover:scale-75 hover:rotate-12'
            />
          </Link>
        </div>
        <div className='mt-5 font-bold leading-normal flex  justify-center items-center flex-col gap-2 items-left'>
          <p className='text-xl'>{t('home.other.title')}</p>
          <p className='text-md text-secondary-900/70'>{t('home.other.description')}</p>
          <div className='grid grid-cols-3 gap-3'>
            <Link
              href={'/help?category=bed'}
              className='my-10 p-10 flex flex-col justify-center items-center bg-secondary-900 text-white rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 ease-in-out'
            >
              <BedIcon />
            </Link>
            <Link
              href={'/help?category=medical'}
              className='my-10 p-10 flex flex-col justify-center items-center bg-secondary-900 text-white rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 ease-in-out'
            >
              <MedicalIcon />
            </Link>
            <Link
              href={'/help?category=food'}
              className='my-10 p-10 flex flex-col justify-center items-center bg-secondary-900 text-white rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 ease-in-out'
            >
              <FoodIcon />
            </Link>
          </div>
        </div>
        <div className='mt-5 font-bold leading-normal flex justify-center items-center flex-col gap-2 items-left'>
          <p className='text-xl'>{t('home.contact.title')}</p>
          <div className='grid grid-cols-1 gap-3 w-full mt-2'>
            <Link
              href={'tel:112'}
              className='p-5 border-2 border-primary-500 shadow-md rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 ease-in-out'
            >
              <div className='flex flex-row gap-5 items-center'>
                <Image
                  src='/images/samu.png'
                  alt='samu avatar'
                  width={60}
                  height={60}
                  loading='lazy'
                  className='rounded-full'
                />
                <div className='flew flex-col justify-start'>
                  <p className='font-bold text-lg'>{'Samu'}</p>
                  <p className='font-light text-lg'>{'Address samu'}</p>
                </div>
              </div>
            </Link>
            <Link
              href={'tel:112'}
              className='p-5 border-2 border-primary-500 shadow-md rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 ease-in-out'
            >
              <div className='flex flex-row gap-5 items-center'>
                <Image
                  src='/images/samu.png'
                  alt='samu avatar'
                  width={60}
                  height={60}
                  loading='lazy'
                  className='rounded-full'
                />
                <div className='flew flex-col justify-start'>
                  <p className='font-bold text-lg'>{'Samu'}</p>
                  <p className='font-light text-lg'>{'Address samu'}</p>
                </div>
              </div>
            </Link>
            <Link
              href={'tel:112'}
              className='p-5 border-2 border-primary-500 shadow-md rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 ease-in-out'
            >
              <div className='flex flex-row gap-5 items-center'>
                <Image
                  src='/images/samu.png'
                  alt='samu avatar'
                  width={60}
                  height={60}
                  loading='lazy'
                  className='rounded-full'
                />
                <div className='flew flex-col justify-start'>
                  <p className='font-bold text-lg'>{'Samu'}</p>
                  <p className='font-light text-lg'>{'Address samu'}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
