import React from 'react'
import { VscGraphLine } from 'react-icons/vsc'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const Billing = () => {
  return (
    <>
        <div className="dropdown dropdown-right">
            <label tabIndex={0}><VscGraphLine size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/></label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-md left-10 w-52">
                <li><Link href={'/billings/details'} legacyBehavior>Details & Invoices</Link></li>
                <li><Link href={'/billings/subscription'} legacyBehavior>My Subscription</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Billing