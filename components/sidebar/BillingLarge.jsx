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
        <Menu.Button className="cursor-pointer flex items-center justify-between p-7 max-w-full w-full hover:bg-navbg py-2 rounded-r-lg hover:text-primary" onClick={() => {setLocalOpen(!localOpen)}} style={{transition: "300ms"}}>
          <span className="flex items-center">
              <VscGraphLine size={30} className="cursor-pointer text-secondary hover:text-primary  mr-3"/>
              <span className="text-sm text-start">Billings and Subscription</span>
          </span>
          {localOpen ? <IoMdArrowDropdown className="fill-current" /> : <IoMdArrowDropleft className='swap-on fill-current' />}
        </Menu.Button>
        <Menu.Items as="div" className="max-w-full mt-3 w-full text-center flex flex-col" style={{transition: "300ms"}}>
          <Menu.Item className="mb-3">
              <Link href={'/billings/details'}>
                <span className="mb-3 text-secondary hover:text-primary">Details & Invoices</span>
              </Link>
          </Menu.Item>

          <Menu.Item className="mb-3">
              <Link href={'/billings/subscription'}>
                <span className="mb-3 text-secondary hover:text-primary">My Subscriptions</span>
              </Link>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  )
}

export default BillingLarge