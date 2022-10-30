import React from 'react'
import { VscGraphLine } from 'react-icons/vsc'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const Billing = () => {
  return (
    <>
        <Menu>
            <Menu.Button>
                <i>
                    <VscGraphLine size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
                </i>
            </Menu.Button>
            <Menu.Items as="div" className="absolute bg-white left-16  text-center flex flex-col rounded-md shadow-xl" style={{top: '18rem'}}>
            <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-base-100'} p-2`}
                        >   
                            <Link href={'/billings/details'} legacyBehavior>
                                
                                    Details & Invoices
                                
                            </Link>
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-base-100'} p-2`}
                        >   
                            <Link href={'/billings/subscription'} legacyBehavior>
                                
                                    My Subscription
                                
                            </Link>
                        </a>    
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    </>
  )
}

export default Billing