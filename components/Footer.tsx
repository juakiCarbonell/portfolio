export const Footer = () => {
  return (
    <footer className='container flex justify-between flex-col md:flex-row md:items-center gap-4 mx-auto py-5 border-t mt-auto'>
      <div className='flex flex-col'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tighter leading-tight'>
            Lorea Oya
          </h2>
        </div>
        <div>
          <div>
            <p className='text-base'>lorea@gmail.com</p>
          </div>
          <div>
            <p>+34 666 66 66</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div>
          <p className='text-xs'>Juaki © Copyright 2023</p>
        </div>
        <div>
          <p className='text-xs'>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
