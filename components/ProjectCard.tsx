import CoverImage from './CoverImage'
import { motion } from 'framer-motion'

interface Props {
  title: string
  image: string
}

export const ProjectCard = ({ title, image }: Props): JSX.Element => {
  return (
    <motion.div
      whileHover='hover'
      className='mb-14 group transition duration-300 cursor-pointer'
    >
      <motion.div className='relative overflow-hidden bg-no-repeat bg-cover'>
        <div className='group-hover:scale-110 transition duration-300 ease-in-out'>
          <CoverImage title={title} image={image} />
        </div>
      </motion.div>
      <div className='mt-3 inline-block'>
        {title}
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-300' />
      </div>
    </motion.div>
  )
}
