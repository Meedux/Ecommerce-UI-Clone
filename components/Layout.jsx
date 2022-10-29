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
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout