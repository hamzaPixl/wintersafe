import { useTranslate } from '../../hooks/useTranslate'
import { cn } from '../../utils/cn'
import CoupleIcon from '../../icons/couple'
import MaleIcon from '../../icons/male'
import FemaleIcon from '../../icons/female'
import FemaleAndChildrenIcon from '../../icons/femaleAndChildren'
import FamilyIcon from '../../icons/family'
import MaleAndChildrenIcon from '../../icons/maleAndChildren'

const situations = [
  {
    id: 'male',
    title: 'home.situations.male.title',
    description: 'home.situations.male.description',
    image: <MaleIcon />,
  },
  {
    id: 'female',
    title: 'home.situations.female.title',
    description: 'home.situations.female.description',
    image: <FemaleIcon />,
  },
  {
    id: 'couple',
    title: 'home.situations.couple.title',
    description: 'home.situations.couple.description',
    image: <CoupleIcon />,
  },
  {
    id: 'femaleAndChildren',
    title: 'home.situations.femaleAndChildren.title',
    description: 'home.situations.femaleAndChildren.description',
    image: <FemaleAndChildrenIcon />,
  },
  {
    id: 'maleAndChildren',
    title: 'home.situations.maleAndChildren.title',
    description: 'home.situations.maleAndChildren.description',
    image: <MaleAndChildrenIcon />,
  },
  {
    id: 'family',
    title: 'home.situations.family.title',
    description: 'home.situations.family.description',
    image: <FamilyIcon />,
  },
]

export default function Situation({ onChange }) {
  const { t } = useTranslate()
  return (
    <section className='flex flex-col gap-10 my-5 justify-center'>
      <p className='font-bold text-2xl'>{t('select.situation')}</p>
      <div className='flex items-center justify-start gap-5 my-5 py-5 overflow-x-scroll mb-5'>
        {situations.map((st) => (
          <div
            key={st.id}
            id={st.id}
            onClick={() => onChange(st.id)}
            className={cn(
              'p-5 rounded-3xl cursor-pointer shadow-lg',
              'text-secondary-900 hover:text-primary-500',
              'border-2 border-secondary-900',
            )}
          >
            {st.image}
          </div>
        ))}
      </div>
    </section>
  )
}
