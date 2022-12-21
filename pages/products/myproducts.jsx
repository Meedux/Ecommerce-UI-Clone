import React, { useState } from 'react'
import { VscTriangleDown } from 'react-icons/vsc'
import { IoInformation, IoInformationCircle } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'
import { BsEyeFill } from 'react-icons/bs'
import { TfiAngleLeft, TfiAngleRight, TfiAngleDoubleLeft, TfiAngleDoubleRight } from 'react-icons/tfi'

const Myproducts = () => {
  // For Tab Changes
  const [ tab, setTab ] = useState(1)
  return (
    <>
      <main className="container p-5">
        <p className="text-xl text-start font-bold mb-5">
          Products
        </p>

        <div className="card bg-white rounded-lg shadow-lg overflow-visible mb-5">
          <div className="card-body">
            <div className='tabs mb-5'>
              {/* Tabs */}
              <span className={`tab tab-bordered smooth font-bold ${tab === 1 && "tab-active border-b-info text-primary"}`} onClick={() => setTab(1)}>All</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 2 && "tab-active border-b-info text-primary"}`} onClick={() => setTab(2)}>In Store</span>
              <span className={`tab tab-bordered smooth font-bold indicator ${tab === 3 && "tab-active border-b-info text-primary"}`} onClick={() => setTab(3)}>
                <span className="indicator-item badge badge-info z-50 rounded-full h-4 p-[10px] w-5 text-xs flex justify-center items-center">1</span>
                Push to Store
              </span>
              
             </div>

             <div className="mb-5 flex max-w-full items-center">
              <input type="text" className="p-1 outline-none border w-[95%] border-gray-400 rounded-sm" placeholder='search'/>
              <div className="tooltip z-0 relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="Use Quotes to search for exact words!">
                  <i>
                      <IoInformationCircle size={25} className="relative"/>
                  </i>
              </div>
             </div>
             <div className="mb-5 flex flex-wrap w-full max-w-full">
             <span className="dropdown max-w-full mr-3" style={{width: "23%"}}>
                <button tabIndex={0} className="p-1 border outline-none flex justify-between items-center border-gray-300 rounded-sm mr-3 mb-5 cursor-pointer w-full text-start" >Supplier <VscTriangleDown /></button>
                <ul tabIndex={0} className="dropdown-content w-full menu p-2 shadow bg-base-100 rounded-sm">
                  <li><a>Supplier 1</a></li>
                  <li><a>Supplier 2</a></li>
                  <li><a>Supplier 3</a></li>
                  <li><a>Supplier 4</a></li>
                </ul>
              </span>
              <span className="dropdown max-w-full mr-3" style={{width: "23%"}}>
                <button tabIndex={0} className="p-1 flex justify-between items-center border outline-none border-gray-300 rounded-sm mr-3 mb-5 cursor-pointer w-full text-start" >Ships to <VscTriangleDown /></button>
                <ul tabIndex={0} className="dropdown-content w-full menu p-2 shadow bg-base-100 rounded-sm">
                  <li><a>Country 1</a></li>
                  <li><a>Country 2</a></li>
                  <li><a>Country 3</a></li>
                  <li><a>Country 4</a></li>
                </ul>
              </span>
              <input type="number" className="p-1 border outline-none border-gray-300 rounded-sm mr-3 mb-5" style={{width: "23%"}} placeholder="Max Delivery Time(Days)"/>
              <span className="dropdown max-w-full mr-3" style={{width: "23%"}}>
                <button tabIndex={0} className="p-1 flex justify-between items-center border outline-none border-gray-300 rounded-sm mr-3 mb-5 cursor-pointer w-full text-start" >Boards <VscTriangleDown /></button>
                <ul tabIndex={0} className="dropdown-content w-full menu p-2 shadow bg-base-100 rounded-sm">
                  <li><a>Board 1</a></li>
                  <li><a>Board 2</a></li>
                  <li><a>Board 3</a></li>
                  <li><a>Board 4</a></li>
                </ul>
              </span>

              <span className="dropdown max-w-full mr-3" style={{width: "23%"}}>
                <button tabIndex={0} className="p-1 flex justify-between items-center border outline-none border-gray-300 rounded-sm mr-3 mb-5 cursor-pointer w-full text-start" >Price Formula <VscTriangleDown /></button>
                <ul tabIndex={0} className="dropdown-content w-full menu p-2 shadow bg-base-100 rounded-sm">
                  <li><a>Formula 1</a></li>
                  <li><a>Formula 2</a></li>
                  <li><a>Formula 3</a></li>
                  <li><a>Formula 4</a></li>
                </ul>
              </span>

              <span className="dropdown max-w-full mr-3" style={{width: "23%"}}>
                <button tabIndex={0} className="p-1 flex justify-between items-center border outline-none border-gray-300 rounded-sm mr-3 mb-5 cursor-pointer w-full text-start" >Tags <VscTriangleDown /></button>
                <ul tabIndex={0} className="dropdown-content w-full menu p-2 shadow bg-base-100 rounded-sm">
                  <li><a>Tag 1</a></li>
                  <li><a>Tag 2</a></li>
                  <li><a>Tag 3</a></li>
                  <li><a>Tag 4</a></li>
                </ul>
              </span>

              <span className="dropdown max-w-full mr-3" style={{width: "23%"}}>
                <button tabIndex={0} className="p-1 flex justify-between items-center border outline-none border-gray-300 rounded-sm mr-3 mb-5 cursor-pointer w-full text-start" >Stock <VscTriangleDown /></button>
                <ul tabIndex={0} className="dropdown-content w-full menu p-2 shadow bg-base-100 rounded-sm">
                  <li><a>In Stock</a></li>
                  <li><a>Out of Stock</a></li>
                  <li><a>All</a></li>
                </ul>
              </span>
             </div>

             <div className='flex'>
              <span className="mr-5 flex">
                <input type="checkbox" className='checkbox checkbox-primary mr-3'/>
                <p>Free Shipping</p>
              </span>

              <span className="mr-5 flex">
                <input type="checkbox" className='checkbox checkbox-primary mr-3'/>
                <p>Free Returns</p>
              </span>
             </div>
          </div>
        </div>

        <div className="card bg-white shadow-lg rounded-lg overflow-visible">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div className="max-w-[70%] w-full flex justify-between items-center mb-5">
                <span className='flex max-w-full w-3/4 items-center'>
                  <span className="dropdown max-w-full mr-3" style={{width: "33%"}}>
                    <button tabIndex={0} className="p-1 border outline-none border-gray-300 rounded-sm mr-3 mb-5 cursor-pointer w-full text-start" >Push to Store</button>
                    <ul tabIndex={0} className="dropdown-content w-full menu p-2 shadow bg-white rounded-sm">
                      <li><a>Push to Store</a></li>
                      <li><a>Remove from Store</a></li>
                    </ul>
                  </span>
                  <span className="dropdown max-w-full mr-3" style={{width: "33%"}}>
                    <button tabIndex={0} className="p-1 border outline-none border-gray-300 rounded-sm mr-3 mb-5 cursor-pointer w-full text-start" >Update Boards</button>
                    <div tabIndex={0} className="dropdown-content menu p-2 shadow-2xl bg-white rounded-sm w-full">
                      <label className="flex cursor-pointer mb-5">
                        <input type="checkbox" className="checkbox checkbox-primary mr-5" />
                        <span className="label-text">Add to Boards</span> 
                      </label>

                      <label className="flex cursor-pointer mb-5">
                        <input type="checkbox" className="checkbox checkbox-primary mr-5" />
                        <span className="label-text">Remove to Boards</span> 
                      </label>

                      <input type="text" placeholder='Search' className="p-1 max-w-full outline-none rounded-sm mb-5 w-full border border-gray-300" />
                    
                      <div className='mb-5'>
                        {/* Items Goes Here! */}
                      </div>

                      <div className="max-w-full w-full  text-center">
                        <button className="btn btn-primary">Apply</button>
                      </div>
                    </div>
                  </span>
                    <span className="dropdown z-50 max-w-full mr-3" style={{width: "33%"}}>
                      <button tabIndex={0} className="p-1 border outline-none border-gray-300 rounded-sm mr-3 mb-5 cursor-pointer w-full text-start" >Assign Price Formula</button>
                      <div tabIndex={0} className="dropdown-content menu p-2 shadow-2xl bg-white rounded-sm w-full">
                        <label className="flex cursor-pointer mb-5">
                          <input type="checkbox" className="checkbox checkbox-primary mr-5" />
                          <span className="label-text">Default</span> 
                        </label>

                        <label className="flex cursor-pointer mb-5">
                          <input type="checkbox" className="checkbox checkbox-primary mr-5" />
                          <span className="label-text">Update Price Formula</span> 
                        </label>

                        <input type="text" placeholder='Search' className="p-1 max-w-full outline-none rounded-md mb-5 w-full border border-gray-300" />
                      
                        <div className='mb-5'>
                          {/* Items Goes Here! */}
                        </div>

                        <div className="max-w-full w-full  text-center">
                          <button className="btn btn-primary">Apply</button>
                        </div>
                      </div>
                      
                    </span>
                  </span>
                  
              </div>
              <button className="btn text-end btn-info btn-outline">Delete</button>
            </div>
            <div className='mb-5'>
              <table className="table-auto overflow-visible w-full">
                <thead>
                  <tr>
                    <th className="bg-navbg p-2">
                      <div className="flex items-center text-xs">
                        <input type="checkbox" className='checkbox mr-4'/> PRODUCTS
                      </div>
                    </th>
                    <th className="bg-navbg text-xs">
                      <p className="text-xs">VARIANTS</p>
                    </th>
                    <th className="bg-navbg text-xs">STATUS</th>
                    <th className="bg-navbg text-xs">STOCK</th>
                    <th className="bg-navbg">
                      <div className="relative flex items-center justify-center text-xs">
                        {"ITEM COST(from)"}
                          <div className="tooltip z-0 relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="The Item Price which is paid to the supplier">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                      <div className="relative flex items-center justify-center text-xs">
                          {"Price(from)"}
                            <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="Price that will be pushed to your store">
                                <i>
                                    <IoInformationCircle size={25} className="relative"/>
                                </i>
                            </div>
                        </div>
                    </th>
                    <th className="bg-navbg">
                      <div className="relative flex items-center justify-center text-xs">
                        {"ITEM COST(from)"}
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="Your Profit">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg text-xs">PRICE FORMULA</th>
                    <th className="bg-navbg text-xs">COLLECTIONS</th>
                    <th className="bg-navbg text-xs">BOARDS</th>
                    <th className="bg-navbg text-xs">SUPPLIER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-white">
                      <div className="flex items-center">
                        <input type="checkbox" className='checkbox mr-4'/>
                        <Image src={'/img.jpg'} height={100} width={50} />
                        <span className="mr-3 tooltip relative before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 hover:text-primary cursor-default" data-tip="Shoes">Shoes</span>
                        <Link href={'/products/editproduct'}>
                          <BsEyeFill />
                        </Link>
                      </div>
                    </td>
                    <td className='bg-white ml-3 text-center'>
                      1
                    </td>
                    <td className='bg-white text-center'>
                      <button className="h-[2rem] text-center min-h-0 btn btn-primary btn-outline px-2 text-xs">PUSH TO STORE</button>
                    </td>
                    <td className='bg-white text-center'>0</td>
                    <td className="bg-white text-center">
                      $141
                    </td>
                    <td className="bg-white text-center">
                      <p className="line-through">$482</p>
                      <p>$241</p>
                    </td>
                    <td className="bg-white text-center">
                      <span className="font-bold text-green-400">$85</span>
                    </td>
                    <td className="bg-white text-center">
                      1%
                    </td>
                    <td className='bg-white text-center'>
                      Collection
                    </td>
                    <td className='bg-white text-center'></td>
                    <td className='bg-white text-center'>US-2022-1409</td>
                  </tr>
                </tbody>
              </table>
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
          </div>
        </div>
      </main>
    </>
  )
}

export default Myproducts