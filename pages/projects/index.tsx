import { PageWrapper } from '@/components/PageWrapper'
import { ProjectCard } from '@/components/ProjectCard'
import { motion } from 'framer-motion'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase';



const projectsIntance = collection(db, 'projects');

const projects = [
  {
    id: 1,
    title: 'School in Berlin',
    image:
      'https://res.cloudinary.com/dhbrsb9qd/image/upload/v1677843789/slide1_daeeb3c071.jpg',
  },
  {
    id: 2,
    title: 'Residence in Temlin',
    image:
      'https://res.cloudinary.com/dhbrsb9qd/image/upload/v1677843790/slide3_6d9aa807ac.jpg',
  },
  {
    id: 3,
    title: 'Clinic in Magdeburg',
    image:
      'https://res.cloudinary.com/dhbrsb9qd/image/upload/v1677843789/small_slide2_8c43c32e59.jpg',
  },
]

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

export default function Projects() {
  return (
    <PageWrapper>
      <motion.section
        variants={variants}
        initial='hidden'
        animate='show'
        className='py-2 flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6'
      >
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
            />
          )
        })}
      </motion.section>
    </PageWrapper>
  )
}
