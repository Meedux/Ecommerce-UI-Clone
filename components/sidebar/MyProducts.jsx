import React from 'react'
import { BsFillTagFill } from 'react-icons/bs'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const MyProducts = () => {
  return (
    <>
        <div className="dropdown">
            <label tabIndex={0}><BsFillTagFill size={25} className="cursor-pointer text-secondary hover:text-primary mb-3"/></label>
            <ul tabIndex={0} className=" dropdown-content left-[165%] top-[-20%] menu p-1 shadow bg-white rounded-sm  w-52">
                <li><Link href={'/products/myproducts'} className="hover:text-primary hover:bg-white">View My Products</Link></li>
                <li><Link href={'/products/board'} className="hover:text-primary hover:bg-white">Boards</Link></li>
                <li><Link href={'/products/collections'} className="hover:text-primary hover:bg-white">Collections</Link></li>
                <li><Link href={'/products/priceformulas'} className="hover:text-primary hover:bg-white">Price Formulas</Link></li>
            </ul>
        </div>
    </>
  )
}

export default MyProducts