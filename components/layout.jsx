import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>sesugh e-store</title>
        </Head>
        <header>
          <Navbar/>
        </header>
        <main className='main-container'>
          {children}
        </main>
        <footer>
          <Footer/> 
        </footer>
    </div>
  )
}

export default Layout
