import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Projects',
    route: '/projects',
  },
]

export const Navbar = () => {
  const [route, setRoute] = useState(links[0])
  const router = useRouter()
  const pathname = router.pathname
  useEffect(() => {
    const route = links.find((item) => item.route === pathname)
    if (route === undefined) return
    setRoute(route)
  }, [pathname])
  return (
    <header>
      <nav className='flex container mx-auto justify-between h-18 items-center flex-col md:flex-row py-2'>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          onClick={() => setRoute(links[0])}
        >
          <h2 className='text-3xl md:text-4xl font-bold tracking-tighter leading-tight'>
            Lorem ipsum
          </h2>
        </motion.div>
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <ul className='flex gap-8'>
            {links.map((item) => {
              return (
                <li
                  key={item.route}
                  className='relative cursor-pointer px-2.5 pt-2.5'
                >
                  <Link href={item.route}>{item.label}</Link>
                  {item === route ? (
                    <motion.div
                      className='absolute -bottom-1 left-0 right-0 h-px bg-slate-300'
                      layoutId='underline'
                    />
                  ) : null}
                </li>
              )
            })}
          </ul>
        </motion.div>
      </nav>
    </header>
  )
}
