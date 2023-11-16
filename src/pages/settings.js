import React from 'react'
import Layout from '../container/layout'
import Container from '../container/container'
import { useTranslate } from '../hooks/useTranslate'

export default function Settings() {
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
