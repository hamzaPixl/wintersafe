import React from 'react'
import SEO from './seo'
import Footer from '../components/footer'
import Header from '../components/header'
import CookieBanner from '../components/banners/cookie'

export default function Layout({ children }) {
  return (
    <>
      <main>
        <SEO />
        <CookieBanner />
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}
