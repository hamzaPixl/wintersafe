import Image from 'next/image'
import { useTranslate } from '../../hooks/useTranslate'

const situations = [
  {
    id: 'male',
    title: 'home.situations.male.title',
    description: 'home.situations.male.description',
    image: '/images/situation/male.png',
  },
  {
    id: 'female',
    title: 'home.situations.female.title',
    description: 'home.situations.female.description',
    image: '/images/situation/female.png',
  },
  {
    id: 'couple',
    title: 'home.situations.couple.title',
    description: 'home.situations.couple.description',
    image: '/images/situation/couple.png',
  },
  {
    id: 'maleAndChildren',
    title: 'home.situations.maleAndChildren.title',
    description: 'home.situations.maleAndChildren.description',
    image: '/images/situation/maleAndChildren.png',
  },
  {
    id: 'femaleAndChildren',
    title: 'home.situations.femaleAndChildren.title',
    description: 'home.situations.femaleAndChildren.description',
    image: '/images/situation/femaleAndChildren.png',
  },
  {
    id: 'family',
    title: 'home.situations.family.title',
    description: 'home.situations.family.description',
    image: '/images/situation/family.png',
  },
]

export default function Situation({ situation, onChange }) {
  const { t } = useTranslate()
  return (
    <section className='flex flex-col gap-10 my-5 justify-center'>
      <p className='font-bold text-2xl'>{t('select.situation')}</p>
      <div className='grid grid-cols-3 gap-6 my-5'>
        {situations.map((st) => (
          <div
            key={st.id}
            id={st.id}
            onClick={() => onChange(st.id)}
            className={`p-5 w-fit rounded-3xl cursor-pointer first-letter:${
              situation === st.id
                ? 'text-primary-500 border-2 border-primary-500'
                : 'text-secondary-900 border-2 border-secondary-900'
            }`}
          >
            <Image src={st.image} width={50} alt={t(st.title)} height={50} />
          </div>
        ))}
      </div>
    </section>
  )
}
