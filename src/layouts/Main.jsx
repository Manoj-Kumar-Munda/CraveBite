import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import useOnlineStatus from '../utils/useOnlineStatus'
import Offline from '../pages/Offline';

const Main = () => {
  const onlineStatus = useOnlineStatus();
 
  if(!onlineStatus){
    return (
      <>
        <Offline />
      
      </>
      
    )
  }
  return (
    <div className='main-layout'>
        <Header />
        <main className=''>
            <Outlet />
        </main>
    </div>
  )
}

export default Main