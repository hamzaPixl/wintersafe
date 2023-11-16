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
        <div className='mt-5 font-bold leading-normal flex flex-col gap-2 items-left'>
          <p className='text-xl'>{t('header.greetings')}</p>
          <p className='text-md text-secondary-900/50'>{t('home.other.description')}</p>
          <p className='text-xl mt-5'>{t('home.other.description')}</p>
          <div className='flex flex-row justify-between items-center gap-3 mt-5'>
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
        <div className='my-20 font-bold leading-normal flex justify-center items-center flex-col gap-2 items-left'>
          <p className='text-xl'>{t('home.contact.title')}</p>
          <div className='grid grid-cols-1 gap-3 w-full mt-2'>
            <Link href={'tel:112'}>
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
            <Link href={'tel:112'}>
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
            <Link href={'tel:112'}>
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
