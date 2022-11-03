import React from 'react'
import { BsFillTagFill } from 'react-icons/bs'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const MyProducts = () => {
  return (
    <>
        <div className="dropdown dropdown-right">
            <label tabIndex={0}><BsFillTagFill size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/></label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-md left-10 w-52">
                <li><Link href={'/products/myproducts'} legacyBehavior>View My Products</Link></li>
                <li><Link href={'/products/board'} legacyBehavior>Boards</Link></li>
                <li><Link href={'/products/priceformulas'} legacyBehavior>Price Formulas</Link></li>
            </ul>
        </div>
    </>
  )
}

export default MyProducts