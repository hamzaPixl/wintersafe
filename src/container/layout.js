import React from 'react'
import SEO from './seo'
import Footer from '../components/footer'
import Header from '../components/header'
import Container from './container'

export default function Layout({ children }) {
  return (
    <>
      <main className='main'>
        <SEO />
        <Header />
        <Container>{children}</Container>
        <Footer />
      </main>
    </>
  )
}
