import React from 'react'

export default function Container({ children }) {
  return (
    <div className='container p-6 md:p-8 w-full max-w-screen-xl flex gap-14 flex-col justify-between mx-auto text-secondary-900 text-base leading-normal font-normal scroll-smooth transition-all duration-300 ease-in-out'>
      {children}
    </div>
  )
}
