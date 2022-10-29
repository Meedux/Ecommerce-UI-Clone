import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { FaBoxes, FaStoreAlt, FaUserCog } from 'react-icons/fa'
import { BsFillTagFill, BsFillBasketFill } from 'react-icons/bs'
import { VscGraphLine } from 'react-icons/vsc'

const Sidebar = ({ open }) => {
  return (
    <>
     <div className={`${open ? 'w-1/6' : 'w-16'} p-2 bg-white smooth flex flex-col justify-between items-center`} style={{height: "93.5vh"}}>
        <div>
          <span className={`${open ? 'hidden' : ''}`}>
            {/* Short Icons */}
            <i>
              <MdDashboard size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
            </i>
            <i >
              <FaBoxes size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
            </i>
            <i>
              <BsFillTagFill size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
            </i>
            <i>
              <BsFillBasketFill size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
            </i>
            <i>
              <FaStoreAlt size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
            </i>
            <i>
              <VscGraphLine size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
            </i>
            <i>
              <FaUserCog size={30} className="cursor-pointer text-secondary hover:text-primary mb-3"/>
            </i>
          </span>
          <span className={`${open ? '' : 'hidden'}`}>
            
          </span>
        </div>
        <div>
          <span className={`${open ? 'hidden' : ''}`}>

          </span>
          <span className={`${open ? '' : 'hidden'}`}>

          </span>
        </div>
     </div>
    </>
  )
}

export default Sidebar