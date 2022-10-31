import React, {useState} from 'react'
import { MdOutlineMenu, MdOutlineMenuOpen } from 'react-icons/md'
import { AiFillBell } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'
import { Menu } from '@headlessui/react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import Link from 'next/link'

const Navbar = ({ open, setStatus }) => {
    const [ MenuOpen, setOpen ] = useState(false)

  return (
    <div className='navbar justify-between bg-primary p-0 shadow-2xl fixed z-50'>
        <div className='navbar-start w-1/6 flex justify-between bg-white p-2 px-5'>
            <a className="btn btn-ghost normal-case text-xl">LOGO</a>
            <button onClick={() => setStatus(!open)}>
                <i>
                    { open ? <MdOutlineMenuOpen size={35} /> : <MdOutlineMenu size={35} /> }
                </i>
            </button>
        </div>


        <div className="flex items-center navbar-end p-2">
            <button className='mr-7'>
                <i>
                    <AiFillBell size={27} style={{color: 'white'}}/>
                </i>
            </button>
            <Menu>
                <Menu.Button className='flex items-center' onClick={() => setOpen(!MenuOpen)}>
                    <i className='mr-2'>
                        <CgProfile size={38} style={{color: 'white'}}/>
                    </i>
                    <div className='flex flex-col mr-2'>
                        <span className="font-bold text-white text-left">Name goes here</span>
                        <span className='text-white text-left'>Nickname Goes here</span>
                    </div>
                    <i>
                        { MenuOpen ? <GoTriangleUp size={25} style={{color: 'white', transition: '300ms'}}/> : <GoTriangleDown size={25} style={{color: 'white', transition: '300ms'}}/> }
                    </i>
                </Menu.Button>
                <Menu.Items as='div' className='absolute bg-white -bottom-20 w-1/6 text-center flex flex-col rounded-md shadow-xl'>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`${active && 'bg-base-100'} p-2`}
                            >
                                <Link href={'/profile'} legacyBehavior>
                                    Profile
                                </Link>
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`${active && 'bg-base-100'} p-2`}
                            >
                            Logout
                            </a>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>

        </div>
    </div>
  )
}

export default Navbar