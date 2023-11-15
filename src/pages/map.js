import React from 'react'
import Layout from '../container/layout'
import { useTranslate } from '../hooks/useTranslate'
import Container from '../container/container'

export default function Map() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Container>
        <div className='items-center justify-between font-bold leading-normal flex flex-row gap-2 items-left'>
          <p className='text-md'>{t('header.greetings')}</p>
          <p className='text-md'>{t('header.welcome')}</p>
        </div>
      </Container>
    </Layout>
  )
}
