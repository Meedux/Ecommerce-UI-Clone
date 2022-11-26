import React, {useState} from 'react'
import { MdOutlineMenu, MdOutlineMenuOpen } from 'react-icons/md'
import { AiFillBell } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'
import { Menu } from '@headlessui/react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { HiUserCircle } from 'react-icons/hi2'
import Link from 'next/link'

const Navbar = ({ open, setStatus }) => {
    const [ MenuOpen, setOpen ] = useState(false)

  return (
    <div className='navbar min-h-0 justify-between bg-primary p-0 shadow-2xl fixed z-50'>
        <div className='navbar-start w-80 flex justify-between bg-white p-1 px-5'>
            <a className="btn btn-ghost normal-case text-xl">LOGO</a>
            <button onClick={() => setStatus(!open)}>
                <i>
                    { open ? <MdOutlineMenuOpen size={35} /> : <MdOutlineMenu size={35} /> }
                </i>
            </button>
        </div>

        <div className="navbar-center flex flex-col">
            <h1 className="text-lg text-white font-bold ">Store Integration Progress</h1>
            <progress className="progress progress-error w-56 h-[20px] pb-1" value={50} max={100}>1 out of 10</progress>
        </div>


        <div className="flex items-center navbar-end p-1 w-[270px]">
            <button className='p-2'>
                <i>
                    <AiFillBell size={27} style={{color: 'white'}}/>
                </i>
            </button>
            <Menu>
                <Menu.Button className='flex items-center pr-6' onClick={() => setOpen(!MenuOpen)}>
                    <i className='mr-2'>
                        <HiUserCircle size={38} style={{color: 'white'}}/>
                    </i>
                    <div className='flex flex-col mr-2'>
                        <span className="font-bold text-white text-left text-sm ">Name goes here</span>
                        <span className='text-white text-left text-xs'>Nickname Goes here</span>
                    </div>
                    <i>
                        { MenuOpen ? <GoTriangleUp  style={{color: 'white', transition: '300ms'}}/> : <GoTriangleDown  style={{color: 'white', transition: '300ms'}}/> }
                    </i>
                </Menu.Button>
                <Menu.Items as='div' className='absolute bg-white -bottom-20 w-[200px] text-center flex flex-col rounded-sm shadow-xl'>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`${active && 'text-primary'} p-2`}
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
                                className={`${active && 'text-primary'} p-2`}
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