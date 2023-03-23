import { PropsWithChildren } from "react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='min-h-screen px-5 flex flex-col'>
      <Navbar />
      <main className='container mx-auto mt-4'>{children}</main>
      <Footer />
    </div>
  )
}