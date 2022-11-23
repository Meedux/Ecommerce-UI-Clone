import React from 'react'
import { VscGraphLine } from 'react-icons/vsc'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const Billing = () => {
  return (
    <>
        <div className="dropdown">
            <label tabIndex={0}><VscGraphLine size={20} className="font-extrabold cursor-pointer text-secondary hover:text-primary mb-3"/></label>
            <ul tabIndex={0} className="left-[190%] top-[-20%] dropdown-content menu p-1 shadow bg-white rounded-sm w-52">
                <li className='hover:bg-none'><Link href={'/billings/details'} className="hover:text-primary hover:bg-white">Details & Invoices</Link></li>
                <li className='hover:bg-white'><Link href={'/billings/subscription'} className="hover:text-primary hover:bg-white">My Subscription</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Billing