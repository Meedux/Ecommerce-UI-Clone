import React, { useState } from 'react'
import { GoCircleSlash } from 'react-icons/go'
import { IoInformation, IoInformationCircle } from 'react-icons/io5'
import { VscCircleSlash } from 'react-icons/vsc'
import { TfiAngleLeft, TfiAngleRight, TfiAngleDoubleLeft, TfiAngleDoubleRight } from 'react-icons/tfi'
import EU from 'country-flag-icons/react/3x2/EU'
import Image from 'next/image'

const Orders = () => {
  const [ tab, setTab ] = useState(1)
  return (
    <>
      <main className="container p-5">
        <span className="text-xl font-bold mb-12">
          My Orders
        </span>
        <div className="card bg-white shadow-lg overflow-visible">
          <div className="card-body">
            <div className='tabs mb-5'>
              {/* Tabs */}
              <span className={`tab tab-bordered smooth font-bold ${tab === 1 && "tab-active text-primary"}`} onClick={() => setTab(1)}>All</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 2 && "tab-active text-primary"}`} onClick={() => setTab(2)}>On Hold</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 3 && "tab-active text-primary"}`} onClick={() => setTab(3)}>To Be Shipped</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 4 && "tab-active text-primary"}`} onClick={() => setTab(4)}>Processing</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 5 && "tab-active text-primary"}`} onClick={() => setTab(5)}>Partially Shipped</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 6 && "tab-active text-primary"}`} onClick={() => setTab(6)}>Shipped</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 7 && "tab-active text-primary"}`} onClick={() => setTab(7)}>Return Requested</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 8 && "tab-active text-primary"}`} onClick={() => setTab(8)}>Return Completed</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 9 && "tab-active text-primary"}`} onClick={() => setTab(9)}>Cancelled</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 10 && "tab-active text-primary"}`} onClick={() => setTab(10)}>Completed</span>
            </div>

            <div className="max-w-full w-full grid grid-cols-12 gap-4 mb-5 items-end">
              <span className="col-span-4">
                <input type="text" className='p-1 border-gray-400 w-full outline-none border rounded-sm bg-white' placeholder='Search'/>
              </span>

              <span className="dropdown col-span-2">
                <label tabIndex={0} className="p-1 max-w-full block w-full border-1 border border-gray-400 rounded-sm text-gray-400 text-start cursor-pointer">Supplier</label>
                <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-52">
                  <li><a>Supplier 1</a></li>
                  <li><a>Supplier 2</a></li>
                  <li><a>Supplier 3</a></li>
                </ul>
              </span>

              <span className="dropdown col-span-2">
                <label tabIndex={0} className="p-1 block w-full border-1 border border-gray-400 rounded-sm text-gray-400 text-start cursor-pointer">Payment</label>
                <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-52">
                  <li><a>Unpaid & Scheduled</a></li>
                  <li><a>Failed</a></li>
                  <li><a>Failed Partially</a></li>
                  <li><a>Paid</a></li>
                </ul>
              </span>

              <span className='flex flex-col col-span-2'>
                <span className='text-xs text-gray-400'>From Date</span>
                <input type="date" className='px-4 outline-none py-1 border border-gray-400 rounded-sm'/>
              </span>

              <span className='flex flex-col col-span-2'>
                <span className='text-xs text-gray-400'>To Date</span>
                <input type="date" className='px-4 outline-none py-1 border border-gray-400 rounded-sm'/>
              </span>
            </div>

            {/* <div className='flex mb-5 justify-between items-center'>
              <input type="text" className='p-2 border-gray-400 outline-none border rounded-md bg-white max-w-xl' placeholder='Search'/>
              <span className="dropdown">
                <label tabIndex={0} className="p-2 px-8 border-1 border border-gray-500 rounded-md cursor-pointer">Supplier</label>
                <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-52">
                  <li><a>Supplier 1</a></li>
                  <li><a>Supplier 2</a></li>
                  <li><a>Supplier 3</a></li>
                </ul>
              </span>

              <span className="dropdown">
                <label tabIndex={0} className="p-2 px-8 border-1 border border-gray-500 rounded-md cursor-pointer">Payment</label>
                <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-52">
                  <li><a>Unpaid & Scheduled</a></li>
                  <li><a>Failed</a></li>
                  <li><a>Failed Partially</a></li>
                  <li><a>Paid</a></li>
                </ul>
              </span>

              <span className='flex flex-col'>
                <span className='text-xs text-gray-400'>From Date</span>
                <input type="date" className='px-4 outline-none py-1 border border-gray-500 rounded-xl'/>
              </span>

              <span className='flex flex-col'>
                <span className='text-xs text-gray-400'>To Date</span>
                <input type="date" className='px-4 outline-none py-1 border border-gray-500 rounded-xl'/>
              </span>
            </div> */}

            <div className='overflow-auto'>
              {/* Table */}
              <table className="table overflow-x-scroll ">
                <thead>
                  <tr>
                    <th className="bg-navbg">
                      <div className="relative flex items-center">
                        ORDER DETAILS
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Contains the order id, the date, and the time">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">QTY</th>
                    <th className="bg-navbg">
                      <div className="relative flex items-center">
                        COST
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="The cost of the item(s) in the order">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                      <div className="relative flex items-center">
                        FEE
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Appscenic Transaction fee">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                    <div className="relative flex items-center">
                        TOTAL
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="The sum of cost of item(s)">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                    <div className="relative flex items-center">
                        PROFIT
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Profit after all costs had been deducted">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                     <div className="relative flex items-center">
                        PAYMENT
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Status of your Payment for the order">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                      <div className="relative flex items-center">
                        TRACKING NO.
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Tracking number for the order provided by supplier">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                      <div className="relative flex items-center">
                        STATUS
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Status of the Order">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                      <div className="relative flex items-center">
                        INVOICES
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Invoices from Suplier for this order">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-white">
                      <div className="flex">
                        <span className="mr-1">
                          <p className="font-bold text-gray-900">ID: 10616</p>
                          <p className="text-xs text-gray-900">2022 Jul 23</p>
                          <p className='text-xs text-gray-900'>21:22</p>
                        </span>
                        <span>
                          <p className="flex items-center">
                            <EU className='mr-2 h-[20px] w-[40px]'/>
                            Test Test
                          </p>
                          <p className="flex items-center">
                            <Image src={'/shopify.svg'} height={20} width={30} className="mr-4"/>
                            1234567890
                          </p>
                        </span>
                      </div>
                    </td>
                    <td className='bg-white'>
                      1
                    </td>
                    <td className="bg-white">
                      <p>Items Cost: $114.00</p>
                      <p>Shipping: $0.00</p>
                    </td>
                    <td className='bg-white'>
                      <p>$6.84</p>
                    </td>
                    <td className="bg-white">
                      <p className="font-bold">$120.92</p>
                    </td>
                    <td className="bg-white">
                      <p className="font-bold text-green-400">$93.17</p>
                    </td>
                    <td className='bg-white'>
                      <span className="p-2 text-sm font-bold bg-red-500 text-white rounded-md">FAILED</span>
                    </td>
                    <td className='bg-white'>
                      <VscCircleSlash size={20} />
                    </td>
                    <td className='bg-white'>
                      <span className="p-2 rounded-md font-bold bg-slate-700 text-white">CANCELLED</span>
                    </td>
                    <td className='bg-white'>
                      <VscCircleSlash size={20} />
                    </td>
                    <td className="bg-white">
                      <button className="p-2 border border-gray-300 bg-white outline-none text-sm rounded-lg shadow-xl">ACTIONS</button>
                    </td>
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

export default Orders