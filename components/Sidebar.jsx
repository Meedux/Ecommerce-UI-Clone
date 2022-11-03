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
     <div className={`${open ? 'w-1/6' : 'w-16'} p-2 flex flex-col justify-between bg-white smooth fixed mt-16 z-40 shadow-lg`} style={{height: "93.5vh"}}>
        <div>
          <span className={`${open ? 'hidden' : ''} flex flex-col justify-between items-center`}>
            {/* Short Icons */}
            <Link href={'/'}>
              <i>
                <MdDashboard size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
              </i>
            </Link>

              <Link href={'/catalog'}>
                <i>
                  <FaBoxes size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
                </i>
              </Link>

            {/* TODO make this shit dropdown onHover */}
            <MyProducts />

            <Link href={'/orders'}>
              <i>
                <BsFillBasketFill size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
              </i>
            </Link>

            <Link href={'/mystores'}>
              <i>
                <FaStoreAlt size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
              </i>
            </Link>
            <Billing />
            <Settings />
          </span>


          <span className={`${open ? '' : 'hidden'} max-w-full w-full flex flex-col justify-between items-start`}>
            <Profile />
            <Link href={'/'}>
              <span className="flex items-center p-7 pr-20 hover:bg-navbg py-2 rounded-r-lg hover:text-primary" style={{transition: "300ms"}}>
                <MdDashboard size={21} className="cursor-pointer text-secondary hover:text-primary  mr-3"/>
                <span className="text-sm text-start">Dashboard</span>
              </span>
            </Link>
            <Link href={'/catalog'} legacyBehavior>
              <a className="w-full">
                <span className="flex w-full items-center p-7 hover:bg-navbg py-2 rounded-r-lg hover:text-primary" style={{transition: "300ms"}}>
                  <FaBoxes size={30} className="cursor-pointer text-secondary hover:text-primary  mr-3"/>
                  <span className="text-sm w-full text-start ">Product Catalog</span>
                </span>
              </a>
            </Link>

            <MyProductsLarge />

            <Link href={'/orders'}>
              <span className="flex items-center p-7 pr-28 hover:bg-navbg py-2 rounded-r-lg hover:text-primary" style={{transition: "300ms"}}>
                <BsFillBasketFill size={21} className="cursor-pointer text-secondary hover:text-primary  mr-3"/>
                <span className="text-sm text-start">Orders</span>
              </span>
            </Link>
            <Link href={'/catalog'}>
              <span className="flex items-center p-7 pr-28 hover:bg-navbg py-2 rounded-r-lg hover:text-primary" style={{transition: "300ms"}}>
                <FaStoreAlt size={30} className="cursor-pointer text-secondary hover:text-primary  mr-3"/>
                <span className="text-sm text-start">My Stores</span>
              </span>
            </Link>
            <BillingLarge />
            <SettingsLarge />
          </span>
        </div>
        <div className='mb-10'>
          <span className={`${open ? 'hidden' : ''}`}>
            <Link href={'/quickstart'}>
              <button className="btn btn-info p-2" onMouseEnter={() => setHoverOne(true)} onMouseLeave={() => setHoverOne(false)}> <span className="flex items-center smooth"><BsFillLightbulbFill size={30} style={{color: "white"}}/><span className={`${hoverOne ? "" : "hidden"} ml-3 p-2`}>Quickstart</span></span></button>
            </Link>
          </span>
          <span className={`${open ? '' : 'hidden'} text-center`}>
            <Link href={'/quickstart'}>
              <button className="btn btn-info p-2" onMouseEnter={() => setHoverOne(true)} onMouseLeave={() => setHoverOne(false)}> <span className="flex items-center smooth"><BsFillLightbulbFill size={30} style={{color: "white"}}/><span className={`ml-3`}>Quickstart</span></span></button>
            </Link>
          </span>
        </div>
     </div>
    </>
  )
}

export default Sidebar