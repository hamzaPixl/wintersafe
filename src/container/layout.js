import React from 'react'
import SEO from './seo'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Layout({ children }) {
  return (
    <>
      <main>
        <SEO />
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}
