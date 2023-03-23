import Link from 'next/link'

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

export const Navbar = (): JSX.Element => {
  return (
    <header>
      <nav className='flex container mx-auto justify-between h-18 items-center flex-col md:flex-row py-2'>

          <h2 className='text-3xl md:text-4xl font-bold tracking-tighter leading-tight'>
            Lorem Ipsum
          </h2>
          <ul className='flex gap-8'>
            {links.map((item) => {
              return (
                <li
                  key={item.route}
                  className='relative cursor-pointer px-2.5 pt-2.5'
                >
                  <Link href={item.route}>{item.label}</Link>
                </li>
              )
            })}
          </ul>
      </nav>
    </header>
  )
}
