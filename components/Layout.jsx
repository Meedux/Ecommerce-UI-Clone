import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useState } from 'react'

const Layout = ({ children }) => {
  const [ open, setStatus ] = useState(false)

  return (
    <>
      <Navbar open={open} setStatus={setStatus}/>
      <div className='flex'>
        <Sidebar open={open}/>
        <main className='overflow-y-hidden flex justify-center ml-4 mt-16 w-full'>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout