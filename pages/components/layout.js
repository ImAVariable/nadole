import Head from 'next/head'

import Footer from './footer'
import Header  from './header'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <>
     
     <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}