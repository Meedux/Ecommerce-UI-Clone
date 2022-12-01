import React from 'react'
import { Listbox, Transition, Menu } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { GiHamburgerMenu, GiLipstick } from 'react-icons/gi'
import { FaShippingFast } from 'react-icons/fa'
import { BsFillFlagFill, BsHouseDoor, BsStarFill, BsWatch } from 'react-icons/bs'
import { TfiAngleLeft, TfiAngleRight, TfiAngleDoubleLeft, TfiAngleDoubleRight } from 'react-icons/tfi'
import { AiFillEye } from 'react-icons/ai'
import { VscTriangleDown } from 'react-icons/vsc'
import { IoShirtOutline,  } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'
import { TbSofa } from 'react-icons/tb'
import Dialogue from '../components/Dialog'
import EU from 'country-flag-icons/react/3x2/EU'

const Catalog = () => {
  const [ hover, setHover ] = useState(0)
  const [ id, setId] = useState(0)
  
  const categories = [
      { name: "Categories", icon: <GiHamburgerMenu className='mr-2'/>, id: 0 },
      { name: "Fashion", id: 1, icon: <IoShirtOutline className="mr-2"/> },
      { name: "Furniture", id: 2, icon: <TbSofa className='mr-2'/> },
      { name: "Home, Tools & Garden", id: 3, icon: <BsHouseDoor className="mr-2"/> },
      { name: "Beauty, Health & Hair", id: 4, icon: <GiLipstick className='mr-2' /> },
      { name: "Jewelry & Watches", id: 5, icon: <BsWatch className="mr-2"/> },
  ]


  const countries = [
    { name: "Country 1" },
    { name: "Country 2" },
    { name: "Country 3" },
    { name: "Country 4" },
    { name: "Country 5" },
  ]

  const supplier = [
    { name: "Supplier 1" },
    { name: "Supplier 2" },
    { name: "Supplier 3" },
    { name: "Supplier 4" },
    { name: "Supplier 5" },
  ]

  const items = [
    {
      id: 1,
      img: "/img.jpg",
      name: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit deleniti, aspernatur nihil quos earum cumque esse repellendus vitae pariatur, provident voluptate ex consectetur exercitationem facere enim nobis rem tempore itaque!",
      supplierID: "12345-67890",
      status: "In Stock",
      discountedPrice: "$7.00",
      originalPrice: "$14.00",
      description: (
        <>
          <p className="text-base mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi blanditiis suscipit minus animi quisquam id culpa illum adipisci, tenetur neque? Maxime molestiae, modi natus qui repudiandae, <span class="font-bold">doloremque tempora numquam cumque reprehenderit nemo laboriosam nostrum culpa placeat, optio reiciendis ipsam quam.</span></p>

          <ul className="font-bold pl-3">
            <li className="list-disc">Lorem</li>
            <li className="list-disc">Lorem</li>
            <li className="list-disc">Lorem</li>
          </ul>
        </>
      ),
      isPremium: false,
      shipsTo: ["United States"]
    },

    {
      id: 2,
      img: "/img.jpg",
      name: "Shoes 2",
      supplierID: "12345-67890",
      status: "In Stock",
      discountedPrice: "$7.00",
      originalPrice: "$14.00",
      description: (
        <>
          <p className="text-base mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi blanditiis suscipit minus animi quisquam id culpa illum adipisci, tenetur neque? Maxime molestiae, modi natus qui repudiandae, <span class="font-bold">doloremque tempora numquam cumque reprehenderit nemo laboriosam nostrum culpa placeat, optio reiciendis ipsam quam.</span></p>

          <ul className="font-bold pl-3">
            <li className="list-disc">Lorem</li>
            <li className="list-disc">Lorem</li>
            <li className="list-disc">Lorem</li>
          </ul>
        </>
      ),
      isPremium: true,
      shipsTo: ["United States", "Spain", "China", "Europe"]
    },

    {
      id: 3,
      img: "/img.jpg",
      name: "Shoes 3",
      supplierID: "12345-67890",
      status: "In Stock",
      discountedPrice: "$99.9",
      originalPrice: "$500.00",
      description: (
        <>
          <p className="text-base mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi blanditiis suscipit minus animi quisquam id culpa illum adipisci, tenetur neque? Maxime molestiae, modi natus qui repudiandae, <span class="font-bold">doloremque tempora numquam cumque reprehenderit nemo laboriosam nostrum culpa placeat, optio reiciendis ipsam quam.</span></p>

          <ul className="font-bold pl-3">
            <li className="list-disc">Lorem</li>
            <li className="list-disc">Lorem</li>
            <li className="list-disc">Lorem</li>
          </ul>
        </>
      ),
      isPremium: false,
      shipsTo: ["United States", "Spain"]
    },

    
  ]

  const defcat = { name: "Categories", icon: <GiHamburgerMenu className='mr-2'/> }
  const count = { name: "Set Country" }
  const [ cat, setCat ] = useState(defcat)
  const [ open, setOpen ] = useState(false)

  return (
    <>
      <main className='container p-5'>
          <span className='text-xl font-bold mb-5'>
            Products
          </span>
          <div className="card card-compact bg-white shadow-lg overflow-visible mb-6">
            <div className="card-body justify-center">
              <div className='max-w-full w-full mb-5 flex items-center'>
                <Listbox value={cat} onChange={setCat}> 
                  <div className="relative w-[18%] inline">
                    <Listbox.Button className=" bg-slate-200 border inline-flex items-center justify-between h-auto text-start pl-2 border-slate-400 w-full p-1 rounded-l-lg">
                        <span className='flex items-center'>
                          {cat.icon}
                          {cat.name}
                        </span>

                        <VscTriangleDown />
                    </Listbox.Button>
                      <Listbox.Options as="div" className="w-full absolute block z-30 shadow-2xl text-center bg-white">
                        {categories.map(item => (
                          <Listbox.Option
                            key={item.id}
                            className="hover:bg-slate-300 text-start w-full flex justify-between items-center bg-white p-2 cursor-pointer list-none"
                            value={item}
                          >
                            {({ active, selected }) => (
                              <>
                                <span className={`w-full flex items-center`}>
                                  {item.icon}
                                  {item.name}
                                </span>
                                {!(item.name === "Categories") && <IoIosArrowForward />}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                  </div>
                </Listbox>
                <input type="text" placeholder='Search' className='outline-none p-1 rounded-r-lg border border-slate-400 w-[82%]'/>
              </div>

              <div className='grid grid-cols-12 gap-4 items-center justify-items-center mb-1 w-full max-w-full' style={{width: '90vw'}}>
                  <div className="col-span-2 dropdown max-w-full w-full  border border-slate-400 rounded-sm px-2 py-1">
                    <label tabIndex={0} className="text-md w-full text-gray-500 rounded-sm cursor-pointer flex items-center justify-between">Select a Country <VscTriangleDown /></label>
                    <ul className="dropdown-content menu w-full left-1 top-8 shadow rounded-sm bg-white" tabIndex={0} style={{width: '13rem'}}>
                      <li className='p-3'>
                        <input type="text" placeholder='Search Country' className="p-1 max-w-full outline-none rounded-md mb-5 w-full border border-gray-300" />
                      </li>
                      {countries.map((item, index) => (
                        <li key={index}>
                          <div className="form-control">
                            <label className="label cursor-pointer">
                              <input type="checkbox" className="checkbox mr-2" />
                              <span className="label-text font-bold">{item.name}</span> 
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-2 dropdown max-w-full w-full border border-slate-400 p-1 rounded-sm">
                    <label tabIndex={0} className=" px-2 flex items-center justify-between text-md text-gray-500 rounded-sm max-w-full w-full cursor-pointer">Ships to <VscTriangleDown /></label>
                    <ul className="dropdown-content menu p-2 top-8 shadow rounded-sm bg-white" tabIndex={0} style={{width: '13rem'}}>
                      <li className='p-3'>
                        <input type="text" placeholder='Search Country' className="p-1 max-w-full outline-none rounded-md mb-5 w-full border border-gray-300" />
                      </li>
                      {countries.map((item, index) => (
                        <li key={index}>
                          <div className="form-control">
                            <label className="label cursor-pointer">
                              <input type="checkbox" className="checkbox mr-4" />
                              <span className="label-text font-bold">{item.name}</span> 
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-2 max-w-full w-full">
                    <input type="number" placeholder='Max Time Delivery(Days)' className='input w-full rounded-sm bg-white border border-slate-400 px-2 h-[2rem]'/>
                  </div>

                  <div className="col-span-2 max-w-full w-full dropdown border border-slate-400 p-1 rounded-sm">
                    <label tabIndex={0} className="flex items-center justify-between px-2  text-md text-gray-500 rounded-lg w-full cursor-pointer">Supplier <VscTriangleDown /></label>
                    <ul className="dropdown-content menu top-8 shadow rounded-sm w-full bg-white" tabIndex={0}>
                      <li className='p-3'>
                        <input type="text" placeholder='Search Supplier' className="p-1 max-w-full outline-none rounded-md mb-5 w-full border border-gray-300" />
                      </li>
                      {supplier.map((item, index) => (
                        <li key={index}>
                          <div className="form-control">
                            <label className="label cursor-pointer">
                              <input type="checkbox" className="checkbox mr-4" />
                              <span className="label-text font-bold">{item.name}</span> 
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-2 max-w-full w-full">
                    <input type="number" placeholder='Min Price ($)' className='input rounded-sm w-full bg-white border border-slate-400 px-2 h-[2rem]'/>
                  </div>

                  <div className="col-span-2 max-w-full w-full">
                    <input type="number" placeholder='Max Price ($)' className='input rounded-sm w-full bg-white border border-slate-400 px-2 h-[2rem]' />
                  </div>
              </div>

              <div className='flex justify-start items-center mb-5'>
                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">In Stock</span> 
                  </label>

                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">Premium Only</span> 
                  </label>

                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">Free Shipping</span> 
                  </label>

                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">Free Returns</span> 
                  </label>

                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">Newest Products</span> 
                  </label>

                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">Exclude Adult</span> 
                  </label>

                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">Exclude already imported products</span> 
                  </label>
              </div>

              <div className="w-full max-w-full grid grid-cols-6 gap-4">
                <div className="col-span-2 card bg-base-100 shadow-xl image-full">
                  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Furniture</h2>
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="max-w-full w-full grid grid-cols-4 gap-4 mb-5">
                    <div className="col-span-2 card bg-base-100 shadow-xl image-full">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title">Home, Tools & Garden</h2>
                      </div>
                    </div>
                    <div className="col-span-2 card bg-base-100 shadow-xl image-full">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body items-end text-end">
                        <h2 className="card-title">Pets</h2>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-full w-full card bg-base-100 shadow-xl image-full">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title">Fashion</h2>
                      </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="max-w-full w-full card bg-base-100 shadow-xl image-full  mb-5">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body items-end text-end">
                        <h2 className="card-title">Jewelry and Watches</h2>
                      </div>
                  </div>

                  <div className="max-w-full w-full grid grid-cols-4 gap-4">
                    <div className="col-span-2 card bg-base-100 shadow-xl image-full">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title">Premium</h2>
                      </div>
                    </div>
                    <div className="col-span-2 card bg-base-100 shadow-xl image-full">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body items-center justify-end">
                        <h2 className="card-title">Show More</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-4 mb-7">
              {items.map(item => (
                <div key={item.id} htmlFor="modal"  className='col-span-2 card relative overflow-visible bg-white shadow-xl card-compact'>
                  <span className={`left-[50%] top-[20%] ${hover == item.id ? "" : 'hidden'} absolute`}><AiFillEye size={100} className="text-primary relative left-[-50%] top-[-20%]"/></span>
                  <span className={`left-[3%] top-[44%] ${item.isPremium ? "" : 'hidden'} absolute bg-yellow-500 p-1 text-xs px-3 flex rounded-box items-center`}><BsStarFill className='text-white mr-2'/><h1 className="font-bold text-white">PREMIUM</h1></span>
                  
                  <figure 
                  htmlFor="modal" 
                  onClick={() => {setOpen(!open) 
                                  setId(item.id)}}  
                  onMouseEnter={() => setHover(item.id)} 
                  onMouseLeave={() => setHover(0)}>
                          <img src={`${item.img}`}/>
                  </figure>
                  
                  <div className="card-body bg-white z-30 ">
                     
                    <h2 className="ellipsis text-lg font-bold mb-3">{item.name}</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Supplier: {item.supplierID}</span>
                        <div className="badge badge-success p-4 text-white">{item.status}</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <span className="flex">
                          <h1 className="text-xl font-bold mr-2">{item.discountedPrice}</h1>
                          <span className="text-white bg-violetish p-1 rounded-lg text-sm font-extrabold">15%</span>
                        </span>
                        <h1 className="text-sm text-gray-400 line-through">{item.originalPrice}</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span className='flex items-center'>
                          <FaShippingFast className='mr-2' size={20}/>
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <span className="flex items-center">
                          <span className="text-sm text-gray-400 mr-2">From: </span>
                          <EU className='mr-2 h-[30px] w-[50px]'/>
                        </span>
                    </div>
                  </div>

                  <div className={`bg-primary absolute z-10 max-w-full w-full smooth ${hover == item.id ? "top-[98%]" : "top-[65%]"} p-5 rounded-b-lg text-center font-bold text-white`}>IMPORT NOW</div>
                </div>
              ))}
          </div>
          <div className="p-2 flex justify-end items-center">
            <span className="text-[#9F9F9F] mr-4">1-1 of 1</span>
            <span className='flex items-center'>
              <TfiAngleDoubleLeft size={20} className="mr-2 text-[#9F9F9F] cursor-pointer" />
              <TfiAngleLeft size={15} className="mr-2 text-[#9F9F9F] cursor-pointer" />
              <span className="px-2 py-1 text-sm bg-primary rounded-md font-bold text-white mr-2">1</span>
              <TfiAngleRight size={15} className="mr-2 text-[#9F9F9F] cursor-pointer" />
              <TfiAngleDoubleRight size={20} className="mr-2 text-[#9F9F9F] cursor-pointer" />
            </span>
          </div>

          <Dialogue items={items} id={id} isOpen={open} setOpen={setOpen} />
      </main>
    </>
  )
}

export default Catalog