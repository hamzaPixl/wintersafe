import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import Layout from '../container/layout'

export default function NotFound() {
  const { t } = useTranslate()
  return (
    <Layout>
      <div className='mx-auto max-w-screen-sm text-center'>
        <img
          className='mx-auto mb-4'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg'
          alt='404 Not Found'
        />
        <h1 className='mb-4 text-2xl font-extrabold text-secondary-900'>{t('notfound.title')}</h1>
        <p className='mb-10 text-3xl tracking-tight font-bold text-secondary-900 md:text-4x'>
          {t('notfound.message')}
        </p>
        <Link
          className='mb-4 text-primary-600 border-b-2 py-2 border-transparent hover:border-primary-600 transition-all ease-in-out duration-300'
          href={'/'}
        >
          {t('notfound.back')}
        </Link>
      </div>
    </Layout>
  )
}
