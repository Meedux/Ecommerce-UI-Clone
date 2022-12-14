import React, { useState } from 'react'
import { FaUserCog } from 'react-icons/fa'
import { IoMdArrowDropleft, IoMdArrowDropdown } from 'react-icons/io'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const SettingsLarge = () => {
  const [ localOpen, setLocalOpen ] = useState(false)
  return (
    <>
      <Menu>
        <Menu.Button className="cursor-pointer flex items-center justify-between text-[#626A92]  p-7 max-w-full w-[95%] hover:bg-navbg py-2 rounded-r-2xl hover:text-primary" onClick={() => {setLocalOpen(!localOpen)}} style={{transition: "300ms"}}>
          <span className="flex items-center">
              <FaUserCog size={22} className="cursor-pointer text-secondary hover:text-primary mr-[16px]"/>
              <span className="text-sm text-start font-bold">Settings</span>
          </span>
          {localOpen ? <IoMdArrowDropdown className="fill-current" /> : <IoMdArrowDropleft className='swap-on fill-current' />}
        </Menu.Button>
        <Menu.Items as="div" className="max-w-full mt-3 w-full text-start ml-[4.3rem] flex flex-col" style={{transition: "300ms"}}>
          <Menu.Item className="mb-3">
              <Link href={'/settings/shipping'}>
                <span className="mb-3 text-secondary text-start hover:text-primary">Shipping Settings</span>
              </Link>
          </Menu.Item>

          <Menu.Item className="mb-3">
              <Link href={'/settings/wallet'}>
                <span className="mb-3 text-secondary text-start hover:text-primary">Store Wallet</span>
              </Link>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  )
}

export default SettingsLarge