import React from 'react'
import { BsFillTagFill } from 'react-icons/bs'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const MyProducts = () => {
  return (
    <>
        <div className="dropdown dropdown-right origin-right">
            <label tabIndex={0}><BsFillTagFill size={25} className="cursor-pointer text-secondary hover:text-primary mb-3"/></label>
            <ul tabIndex={0} className=" dropdown-content left-[10rem] menu p-2 shadow bg-white rounded-md  w-52">
                <li><Link href={'/products/myproducts'} className="hover:text-primary">View My Products</Link></li>
                <li><Link href={'/products/board'} className="hover:text-primary">Boards</Link></li>
                <li><Link href={'/products/priceformulas'} className="hover:text-primary">Price Formulas</Link></li>
            </ul>
        </div>
    </>
  )
}

export default MyProducts