import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Main = () => {
  return (
    <div className=''>
        <Header />
        <main className='min-h-screen'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Main