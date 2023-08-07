import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import useOnlineStatus from '../utils/useOnlineStatus'
import Offline from '../pages/Offline';

const Main = () => {
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus)
  if(!onlineStatus){
    return (
      <>
        <Offline />
      
      </>
      
    )
  }
  return (
    <div className=''>
        <Header />
        <main className='min-h-screen'>
            <Outlet />
        </main>
    </div>
  )
}

export default Main