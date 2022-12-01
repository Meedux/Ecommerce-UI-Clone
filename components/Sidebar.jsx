import React, { useState } from 'react'
import { MdDashboard } from 'react-icons/md'
import { FaBoxes, FaStoreAlt } from 'react-icons/fa'
import {  BsFillBasketFill, BsFillLightbulbFill } from 'react-icons/bs'
import Link from 'next/link'

import Profile from './sidebar/Profile'
import MyProducts  from './sidebar/MyProducts'
import Billing from './sidebar/Billing'
import Settings from './sidebar/Settings'
import BillingLarge from './sidebar/BillingLarge'
import SettingsLarge from './sidebar/SettingsLarge'
import MyProductsLarge from './sidebar/MyProductsLarge'

const Sidebar = ({ open }) => {
  const [hoverOne, setHoverOne] = useState(false)
  return (
    <>
     <div className={`${open ? ' w-[23rem]' : ' w-[3.3rem]'} shadow-xl pt-2 flex flex-col justify-between bg-white smooth sticky top-[3.4rem] mt-14 z-40`} style={{height: "96.5vh"}}>
        <div>
          <span className={`${open ? 'hidden' : ''} flex flex-col justify-between items-center`}>
            {/* Short Icons */}
            <Link href={'/'}>
              <i>
                <MdDashboard size={25} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
              </i>
            </Link>

              <Link href={'/catalog'}>
                <i>
                  <FaBoxes size={20} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
                </i>
              </Link>

            {/* TODO make this shit dropdown onHover */}
            <MyProducts />

            <Link href={'/orders'}>
              <i>
                <BsFillBasketFill size={20} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
              </i>
            </Link>

            <Link href={'/mystores'}>
              <i>
                <FaStoreAlt size={23} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
              </i>
            </Link>
            <Billing />
            <Settings />
          </span>


          <span className={`${open ? '' : 'hidden'} max-w-full w-full flex flex-col justify-between items-start`}>
            <Profile />
            <Link href={'/'} className="w-[95%]">
              <span className="flex items-center p-7 pr-20 hover:bg-navbg text-[#626A92]  py-2 rounded-r-2xl hover:text-primary" style={{transition: "300ms"}}>
                <MdDashboard size={21} className="cursor-pointer text-secondary hover:text-primary  mr-[16px]"/>
                <span className="text-sm text-start font-bold ">Dashboard</span>
              </span>
            </Link>
            <Link href={'/catalog'} legacyBehavior className="w-[95%]">
              <a className="w-[95%]">
                <span className="flex w-full items-center p-7 hover:bg-navbg text-[#626A92]  py-2 rounded-r-2xl hover:text-primary" style={{transition: "300ms"}}>
                  <FaBoxes size={27} className="cursor-pointer text-secondary hover:text-primary  mr-[16px]"/>
                  <span className="text-sm w-full text-start font-bold  ">Product Catalog</span>
                </span>
              </a>
            </Link>

            <MyProductsLarge />

            <Link href={'/orders'} className="w-[95%]">
                <span className="flex w-full items-center p-7 hover:bg-navbg text-[#626A92]  py-2 rounded-r-2xl hover:text-primary" style={{transition: "300ms"}}>
                  <BsFillBasketFill size={27} className="cursor-pointer text-secondary hover:text-primary  mr-[16px]"/>
                  <span className="text-sm w-full text-start font-bold ">Orders</span>
                </span>
              
            </Link>
            <Link href={'/mystores'} className="w-[95%]">
              <span className="flex w-full items-center p-7 hover:bg-navbg text-[#626A92]  py-2 rounded-r-2xl hover:text-primary" style={{transition: "300ms"}}>
                <FaStoreAlt size={28} className="cursor-pointer text-secondary hover:text-primary  mr-[16px]"/>
                <span className="text-sm w-full text-start font-bold ">My Stores</span>
              </span>
            </Link>
            <BillingLarge />
            <SettingsLarge />
          </span>
        </div>
        <div className='mb-10 absolute left-[0.35rem] bottom-0'>
          <span className={``}>
            <Link href={'/quickstart'}>
              <button className={`${open ? "w-[120%]" : "hover:w-[120%] w-[30%]"} min-h-[2rem] shadow-xl align-middle flex-col-reverse flex justify-center overflow-hidden btn btn-info py-0 h-[1rem] px-3  smooth`} onMouseEnter={() => setHoverOne(true)} onMouseLeave={() => setHoverOne(false)}><BsFillLightbulbFill size={15} style={{color: "white"}} className="inline-block mr-3"/><span className={`p-2 text-sm text-center`}>Quickstart</span></button>
            </Link>
          </span>
          {/* <span className={`${open ? '' : 'hidden'} text-center`}>
            <Link href={'/quickstart'}>
              <button className="btn btn-info p-2" onMouseEnter={() => setHoverOne(true)} onMouseLeave={() => setHoverOne(false)}> <span className="flex items-center smooth"><BsFillLightbulbFill size={20} style={{color: "white"}}/><span className={`ml-3`}>Quickstart</span></span></button>
            </Link>
          </span> */}
        </div>
     </div>
    </>
  )
}

export default Sidebar