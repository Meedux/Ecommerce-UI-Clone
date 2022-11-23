import React, { useState } from 'react'
import { IoInformation, IoInformationCircle } from 'react-icons/io5'

const Orders = () => {
  const [ tab, setTab ] = useState(1)
  return (
    <>
      <main className="p-5">
        <span className="text-xl font-bold mb-12">
          My Orders
        </span>
        <div className="card bg-white shadow-lg overflow-visible" style={{width: '90vw'}}>
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

            <div className="max-w-full w-full grid grid-cols-12 gap-4 mb-5 items-center">
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

            <div className='overflow-visible'>
              {/* Table */}
              <table className="table w-full overflow-x-scroll ">
                <thead>
                  <tr>
                    <th className="bg-navbg">
                      <div className="relative flex items-center">
                        ORDER DETAILS
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Text">
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
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Text">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                      <div className="relative flex items-center">
                        FEE
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Text">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                    <div className="relative flex items-center">
                        TOTAL
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Text">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                    <div className="relative flex items-center">
                        PROFIT
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Text">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                     <div className="relative flex items-center">
                        PAYMENT
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Text">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                      <div className="relative flex items-center">
                        TRACKING NO.
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Text">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                      <div className="relative flex items-center">
                        STATUS
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Text">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                      </div>
                    </th>
                    <th className="bg-navbg">
                      <div className="relative flex items-center">
                        INVOICES
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 z-0" data-tip="Text">
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

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Orders