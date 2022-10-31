import React from 'react'
import { FaUserCog } from 'react-icons/fa'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const Settings = () => {
  return (
    <>
        <Menu>
            <Menu.Button>
                <i>
                    <FaUserCog size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
                </i>
            </Menu.Button>
            <Menu.Items as="div" className="absolute bg-white left-16  text-center flex flex-col rounded-md shadow-xl" style={{top: '16rem'}}>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-base-100'} p-2`}
                        >   
                            <Link href={'/settings/shipping'} legacyBehavior>
                                
                                    Shipping Settings
                                
                            </Link>
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-base-100'} p-2`}
                        >   
                            <Link href={'/settings/wallet'} legacyBehavior>
                                
                                    Store Wallet
                                
                            </Link>
                        </a>    
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    </>
  )
}

export default Settings