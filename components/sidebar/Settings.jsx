import React from 'react'
import { FaUserCog } from 'react-icons/fa'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const Settings = () => {
  return (
    <>
        <div className="dropdown dropdown-right">
            <label tabIndex={0}><FaUserCog size={23} className="cursor-pointer text-secondary hover:text-primary mb-3"/></label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-md left-10 w-52">
                <li><Link href={'/settings/shipping'} className="hover:text-primary">Shipping Settings</Link></li>
                <li><Link href={'/settings/wallet'} className="hover:text-primary">Store Wallet</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Settings