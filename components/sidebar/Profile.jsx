import React, { useState } from 'react'
import Image from 'next/image'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'

const Profile = () => {
  const [ MenuOpen, setOpen ] = useState(false)

  return (
    <>
      <div className="dropdown mt-3 w-[98%] indicator mb-3">
        <label tabIndex={0} className="p-4 bg-[#F7F8FF] rounded-r-md m-1 flex justify-between w-full cursor-pointer" onClick={() => setOpen(!MenuOpen)}>
          <span className='flex items-center'>
            <Image src={'/img.jpg'} height={50} width={40} className="rounded-full mr-2" /> 
            <span className="text-sm font-bold">Name</span>
          </span>
        </label>
        <span className="indicator-item badge badge-info p-[0.6rem] text-white mr-10 rounded-md text-xs">FREE</span> 
        <ul tabIndex={0} className="dropdown-content top-[4rem] w-full menu p-1 bg-base-100 rounded-md shadow-xl">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>

      <span className="w-[100%] flex justify-center">
        <button className="btn-primary w-[80%] rounded-lg mb-3 shadow-2xl text-xs p-3">UPGRADE NOW</button>
      </span>
    </>
  )
}

export default Profile