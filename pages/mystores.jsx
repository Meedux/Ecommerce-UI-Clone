import Image from 'next/image'
import React, { useState } from 'react'
import { BsArrowRepeat } from 'react-icons/bs'

const Mystores = () => {
  const [ tab, setTab ] = useState(1)
  return (
    <>
      <main className="container p-5">
        <span className="text-xl font-bold mb-12">
          My Stores
        </span>

        <div className="card bg-white shadow-lg overflow-visible">
          <div className="card-body">
            <div className='tabs mb-5'>
              {/* Tabs */}
              <span className={`tab tab-bordered smooth font-bold ${tab === 1 && "tab-active text-primary"}`} onClick={() => setTab(1)}>All</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 2 && "tab-active text-primary"}`} onClick={() => setTab(2)}>Connecting</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 3 && "tab-active text-primary"}`} onClick={() => setTab(3)}>Connected</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 4 && "tab-active text-primary"}`} onClick={() => setTab(4)}>Offline</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 5 && "tab-active text-primary"}`} onClick={() => setTab(5)}>Disconnecting</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 6 && "tab-active text-primary"}`} onClick={() => setTab(6)}>Failed</span>
             </div>

             <div className='overflow-auto'>
              {/* Table */}
              <table className="table overflow-x-scroll">
                <thead>
                  <tr>
                    <th className="bg-navbg">NAME</th>
                    <th className="bg-navbg">PLATFORM</th>
                    <th className="bg-navbg">STORE URL</th>
                    <th className="bg-navbg">STATUS</th>
                    <th className="bg-navbg">NO. OF PRODUCTS</th>
                    <th className="bg-navbg">STORE CURRENCY</th>
                    <th className="bg-navbg">WALLET BALANCE</th>
                    <th className="bg-navbg">SYNC STATUS</th>
                    <th className="bg-navbg">AUTO-FUNDING</th>
                    <th className="bg-navbg">AUTO-PUSH</th>
                    <th className="bg-navbg">AUTO-PUSH COLLECTIONS</th>
                    <th className="bg-navbg">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-white">
                      <p className="font-bold">Store Name</p>
                      <p>{"(Active Store)"}</p>
                    </td>
                    <td className='bg-white'>
                      <Image src={'/shopify.png'} height={100} width={100} />
                    </td>
                    <td className='bg-white'>
                      store.myshopify.com
                    </td>
                    <td className='bg-white'>
                      <span className="p-2 rounded-md font-bold bg-slate-700 text-white">OFFLINE</span>
                    </td>
                    <td className='bg-white'>
                      0
                    </td>
                    <td className='bg-white'>
                      <div className="flex">
                        HKD
                        <BsArrowRepeat size={20} />
                      </div>
                    </td>
                    <td className='bg-white'>
                      $0.00
                    </td>
                    <td className="bg-white">
                      <p>All Synced</p>
                    </td>
                    <td className="bg-white">
                      No
                    </td>
                    <td className="bg-white">
                      No 
                    </td>
                    <td className="bg-white">
                      Yes 
                    </td>
                    <td className="bg-white">
                      <button className="p-2 border border-gray-300 bg-white outline-none text-sm rounded-lg shadow-xl">ACTIONS</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Mystores