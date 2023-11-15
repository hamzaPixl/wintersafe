import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../utils/cn'

export default function Header() {
  return (
    <nav
      className={cn(
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-out bg-white border-b-2 border-primary-600',
      )}
    >
      <div className='px-5 font-bold leading-normal w-full flex flex-row gap-2 items-center justify-between'>
        <Link href={'/'}>
          <Image loading='lazy' width={150} height={2} src='/wintersafe.svg' alt={`Logo`} />
        </Link>
      </div>
    </nav>
  )
}
