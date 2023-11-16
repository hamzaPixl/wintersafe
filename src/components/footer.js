import React from 'react'
import Link from 'next/link'
import HomeIcon from '../icons/home'
import LightIcon from '../icons/light'
import MapIcon from '../icons/map'

export default function Footer() {
  return (
    <footer className='sticky bottom-0 overflow-auto bg-white'>
      <div className={`px-2 py-5 w-full max-w-screen-xl mx-auto text-white`}>
        <div className='flex flex-wrap justify-evenly items-center gap-4'>
          <Link
            className='items-center rounded-full p-2 hover:bg-primary-500 hover:text-white text-primary-500 transition-all duration-300 ease-in-out'
            href={'/'}
          >
            <HomeIcon />
          </Link>
          <Link
            className='items-center rounded-full p-2 hover:bg-primary-500 hover:text-white text-primary-500 transition-all duration-300 ease-in-out'
            href={'/help'}
          >
            <LightIcon />
          </Link>
          <Link
            className='items-center rounded-full p-2 hover:bg-primary-500 hover:text-white text-primary-500 transition-all duration-300 ease-in-out'
            href={'/map'}
          >
            <MapIcon />
          </Link>
        </div>
      </div>
    </footer>
  )
}
