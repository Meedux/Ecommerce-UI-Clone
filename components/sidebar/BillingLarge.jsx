import React, { useState } from 'react'
import { VscGraphLine } from 'react-icons/vsc'
import { IoMdArrowDropleft, IoMdArrowDropdown } from 'react-icons/io'
import { Menu } from '@headlessui/react'
import Link from 'next/link'


const BillingLarge = () => {
  const [ localOpen, setLocalOpen ] = useState(false)
  return (
    <>
      <Menu>
        <Menu.Button className="cursor-pointer flex items-center justify-between p-7 max-w-full w-[95%]  text-[#626A92]  hover:bg-navbg py-2 rounded-r-2xl hover:text-primary" onClick={() => {setLocalOpen(!localOpen)}} style={{transition: "300ms"}}>
          <span className="flex items-center">
              <VscGraphLine size={27.5} className="cursor-pointer text-secondary hover:text-primary mr-[10px]"/>
              <span className="text-start text-sm font-bold">Billings and Subscription</span>
          </span>
          {localOpen ? <IoMdArrowDropdown className="fill-current" /> : <IoMdArrowDropleft className='swap-on fill-current' />}
        </Menu.Button>
        <Menu.Items as="div" className="max-w-full mt-3 w-full text-start ml-[4.3rem] flex flex-col" style={{transition: "300ms"}}>
          <Menu.Item className="mb-3">
              <Link href={'/billings/details'}>
                <span className="mb-3 text-secondary text-start hover:text-primary">Details & Invoices</span>
              </Link>
          </Menu.Item>

          <Menu.Item className="mb-3">
              <Link href={'/billings/subscription'}>
                <span className="mb-3 text-secondary text-start hover:text-primary">My Subscriptions</span>
              </Link>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  )
}

export default BillingLarge