import React from 'react'
import SEO from './seo'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Layout({ children }) {
  return (
    <>
      <main className='text-secondary-900'>
        <SEO />
        <Header />
        <div className='max-w-screen-xl mx-auto px-10 flex flex-col gap-20 my-10'>{children}</div>
        <Footer />
      </main>
    </>
  )
}
