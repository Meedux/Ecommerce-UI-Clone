import React from 'react'
import { FaUserCog } from 'react-icons/fa'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const Settings = () => {
  return (
    <>
        <div className="dropdown">
            <label tabIndex={0}><FaUserCog size={23} className="cursor-pointer text-secondary hover:text-primary mb-3"/></label>
            <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-white rounded-sm left-[170%] top-[-20%] w-52">
                <li><Link href={'/settings/shipping'} className="hover:text-primary hover:bg-white">Shipping Settings</Link></li>
                <li><Link href={'/settings/wallet'} className="hover:text-primary hover:bg-white">Store Wallet</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Settings