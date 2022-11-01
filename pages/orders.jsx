import React, { useState } from 'react'

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
              <span className={`tab tab-lifted smooth ${tab === 1 && "tab-active text-primary"}`} onClick={() => setTab(1)}>All</span>
              <span className={`tab tab-lifted smooth ${tab === 2 && "tab-active text-primary"}`} onClick={() => setTab(2)}>On Hold</span>
              <span className={`tab tab-lifted smooth ${tab === 3 && "tab-active text-primary"}`} onClick={() => setTab(3)}>To Be Shipped</span>
              <span className={`tab tab-lifted smooth ${tab === 4 && "tab-active text-primary"}`} onClick={() => setTab(4)}>Processing</span>
              <span className={`tab tab-lifted smooth ${tab === 5 && "tab-active text-primary"}`} onClick={() => setTab(5)}>Partially Shipped</span>
              <span className={`tab tab-lifted smooth ${tab === 6 && "tab-active text-primary"}`} onClick={() => setTab(6)}>Shipped</span>
              <span className={`tab tab-lifted smooth ${tab === 7 && "tab-active text-primary"}`} onClick={() => setTab(7)}>Return Requested</span>
              <span className={`tab tab-lifted smooth ${tab === 8 && "tab-active text-primary"}`} onClick={() => setTab(8)}>Return Completed</span>
              <span className={`tab tab-lifted smooth ${tab === 9 && "tab-active text-primary"}`} onClick={() => setTab(9)}>Cancelled</span>
              <span className={`tab tab-lifted smooth ${tab === 10 && "tab-active text-primary"}`} onClick={() => setTab(10)}>Completed</span>
            </div>

            <div className='flex mb-5 justify-between items-center'>
              {/* input stuffs */}
              <input type="text" className='input border-gray-400 outline-none p-1 bg-white max-w-xl' placeholder='Search'/>
              <span className="dropdown">
                <label tabIndex={0} className="p-3 px-8 border-1 border border-gray-500 rounded-xl cursor-pointer">Supplier</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Supplier 1</a></li>
                  <li><a>Supplier 2</a></li>
                  <li><a>Supplier 3</a></li>
                </ul>
              </span>

              <span className="dropdown">
                <label tabIndex={0} className="p-3 px-8 border-1 border border-gray-500 rounded-xl cursor-pointer">Payment</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
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
            </div>

            <div className='overflow-x-scroll'>
              {/* Table */}
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-navbg">ORDER DETAILS</th>
                    <th className="bg-navbg">QTY</th>
                    <th className="bg-navbg">COST</th>
                    <th className="bg-navbg">FEE</th>
                    <th className="bg-navbg">TOTAL</th>
                    <th className="bg-navbg">PROFIT</th>
                    <th className="bg-navbg">PAYMENT</th>
                    <th className="bg-navbg">TRACKING NO.</th>
                    <th className="bg-navbg">STATUS</th>
                    <th className="bg-navbg">INVOICES</th>
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