import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { FaBoxes, FaStoreAlt } from 'react-icons/fa'
import {  BsFillBasketFill } from 'react-icons/bs'
import Link from 'next/link'

import MyProducts  from './sidebar/MyProducts'
import Billing from './sidebar/Billing'
import Settings from './sidebar/Settings'

const Sidebar = ({ open }) => {
  return (
    <>
     <div className={`${open ? 'w-1/6' : 'w-16'} p-2 bg-white smooth `} style={{height: "93.5vh"}}>
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
          <span className={`${open ? '' : 'hidden'} flex flex-col justify-between items-start`}>
            <Link href={'/'}>
              <span className="flex items-center p-7 pr-24 hover:bg-navbg py-2 rounded-r-lg hover:text-primary" style={{transition: "300ms"}}>
                <MdDashboard size={30} className="cursor-pointer text-secondary hover:text-primary  mr-3"/>
                <span className="text-md text-start">Dashboard</span>
              </span>
            </Link>
            <Link href={'/catalog'}>
              <span className="flex items-center p-7 pr-20 hover:bg-navbg py-2 rounded-r-lg hover:text-primary" style={{transition: "300ms"}}>
                <FaBoxes size={30} className="cursor-pointer text-secondary hover:text-primary  mr-3"/>
                <span className="text-md text-start">Product Catalog</span>
              </span>
            </Link>

            <Link href={'/orders'}>
              <span className="flex items-center p-7 pr-32 hover:bg-navbg py-2 rounded-r-lg hover:text-primary" style={{transition: "300ms"}}>
                <BsFillBasketFill size={30} className="cursor-pointer text-secondary hover:text-primary  mr-3"/>
                <span className="text-md text-start">Orders</span>
              </span>
            </Link>
            <Link href={'/catalog'}>
              <span className="flex items-center p-7 pr-28 hover:bg-navbg py-2 rounded-r-lg hover:text-primary" style={{transition: "300ms"}}>
                <FaStoreAlt size={30} className="cursor-pointer text-secondary hover:text-primary  mr-3"/>
                <span className="text-md text-start">My Stores</span>
              </span>
            </Link>
          </span>
        </div>
        <div>
          <span className={`${open ? 'hidden' : ''}`}>
           
          </span>
          <span className={`${open ? '' : 'hidden'}`}>

          </span>
        </div>
     </div>
    </>
  )
}

export default Sidebar