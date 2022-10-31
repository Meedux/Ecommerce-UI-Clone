import React from 'react'
import { BsFillTagFill } from 'react-icons/bs'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const MyProducts = () => {
  return (
    <>
        <Menu>
            <Menu.Button>
                <i>
                    <BsFillTagFill size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
                </i>
            </Menu.Button>
            <Menu.Items as="div" className="absolute bg-white left-16  text-center flex flex-col rounded-md shadow-xl top-24">
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-base-100'} p-2`}
                        >   
                            <Link href={'/products/myproducts'} legacyBehavior>
                                    
                                        View My Products
                                    
                            </Link>
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-base-100'} p-2`}
                        >   
                            <Link href={'/products/board'} legacyBehavior>
                                
                                    Boards
                                
                            </Link>
                        </a>    
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-base-100'} p-2`}
                        >   
                            <Link href={'/products/priceformulas'} legacyBehavior>
                                
                                    Price Formulas
                                
                            </Link>
                        </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    </>
  )
}

export default MyProducts