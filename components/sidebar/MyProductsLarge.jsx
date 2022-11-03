import React, { useState } from 'react'
import { BsFillTagFill } from 'react-icons/bs'
import { IoMdArrowDropleft, IoMdArrowDropdown } from 'react-icons/io'
import { Menu } from '@headlessui/react'
import Link from 'next/link'


const MyProductsLarge = () => {
  const [ localOpen, setLocalOpen ] = useState(false)
  return (
    <>
      <Menu>
        <Menu.Button className=" cursor-pointer flex items-center justify-between p-7 max-w-full w-full hover:bg-navbg py-2 rounded-r-lg hover:text-primary" onClick={() => {setLocalOpen(!localOpen)}} style={{transition: "300ms"}}>
          <span className="flex items-center">
              <BsFillTagFill size={22} className="cursor-pointer text-secondary hover:text-primary  mr-3"/>
              <span className="text-sm text-start">My Products</span>
          </span>
          {localOpen ? <IoMdArrowDropdown className="fill-current" /> : <IoMdArrowDropleft className='swap-on fill-current' />}
        </Menu.Button>
        <Menu.Items as="div" className="max-w-full w-full text-center flex flex-col" style={{transition: "300ms"}}>
          <Menu.Item className="mb-3">
              <Link href={'/billings/details'}>
                <span className="mb-3 text-secondary hover:text-primary">View My Products</span>
              </Link>
          </Menu.Item>

          <Menu.Item className="mb-3">
              <Link href={'/billings/subscription'}>
                <span className="mb-3 text-secondary hover:text-primary">Boards</span>
              </Link>
          </Menu.Item>

          <Menu.Item className="mb-3">
              <Link href={'/billings/subscription'}>
                <span className="mb-3 text-secondary hover:text-primary">Price Formulas</span>
              </Link>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  )
}

export default MyProductsLarge