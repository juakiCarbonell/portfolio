import { PageWrapper } from '@/components/PageWrapper'
import { ProjectCard } from '@/components/ProjectCard'
import { motion } from 'framer-motion'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'

const projectsIntance = collection(db, 'projects')


const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

interface Projects {
  id: string,
  title: string,
  image: string,
}

interface ProjectsProps {
  projectsCol: Projects[]
}

export default function Projects({ projectsCol} : ProjectsProps) {
  return (
    <PageWrapper>
      <motion.section
        variants={variants}
        initial='hidden'
        animate='show'
        className='py-2 flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6'
      >
        {projectsCol.map((project) => {
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

export async function getStaticProps() {
  const res = await getDocs(projectsIntance)
  const projectsCol = res.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id}
  })
  return {
    props: {
      projectsCol,
    },
  }
}
