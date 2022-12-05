import Image from 'next/image'
import React, { useState } from 'react'
import { BsArrowRepeat } from 'react-icons/bs'
import Link from 'next/link'

const Mystores = () => {
  const [ tab, setTab ] = useState(1)
  return (
    <>
      <main className="container p-5">
      <div className='mb-5 flex justify-between items-center'>
          <p className="text-xl text-start font-bold ">
            My Stores
          </p>
          <Link href={'/addstores'}>
            <button className="text-end btn btn-primary px-2 py-0 shadow-lg font-bold">ADD NEW STORE</button>
          </Link>
        </div>

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
              <table className="table-auto w-full overflow-x-scroll">
                <thead>
                  <tr>
                    <th className="bg-navbg text-xs p-4">NAME</th>
                    <th className="bg-navbg text-xs p-4">PLATFORM</th>
                    <th className="bg-navbg text-xs p-4">STORE URL</th>
                    <th className="bg-navbg text-xs p-4">STATUS</th>
                    <th className="bg-navbg text-xs p-4">NO. OF PRODUCTS</th>
                    <th className="bg-navbg text-xs p-4">STORE CURRENCY</th>
                    <th className="bg-navbg text-xs p-4">WALLET BALANCE</th>
                    <th className="bg-navbg text-xs p-4">SYNC STATUS</th>
                    <th className="bg-navbg text-xs p-4">AUTO-FUNDING</th>
                    <th className="bg-navbg text-xs p-4">AUTO-PUSH</th>
                    <th className="bg-navbg text-xs p-4">AUTO-PUSH COLLECTIONS</th>
                    <th className="bg-navbg text-xs p-4">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-white text-xs">
                      <p className="font-bold">Store Name</p>
                      <p>{"(Active Store)"}</p>
                    </td>
                    <td className='bg-white flex justify-center'>
                      <Image src={'/shopify.png'} height={80} width={80} />
                    </td>
                    <td className='bg-white text-xs'>
                      store.myshopify.com
                    </td>
                    <td className='bg-white text-center'>
                      <span className="p-2 rounded-md font-bold bg-slate-700 text-white text-xs">OFFLINE</span>
                    </td>
                    <td className='bg-white text-xs text-center'>
                      0
                    </td>
                    <td className='bg-white'>
                      <div className="flex text-xs items-center justify-center">
                        <span className="mr-3">HKD</span>
                        <BsArrowRepeat size={20} />
                      </div>
                    </td>
                    <td className='bg-white text-xs text-center'>
                      $0.00
                    </td>
                    <td className="bg-white">
                      <p className='text-center text-xs'>All Synced</p>
                    </td>
                    <td className="bg-white text-xs text-center">
                      No
                    </td>
                    <td className="bg-white text-xs text-center">
                      No 
                    </td>
                    <td className="bg-white text-xs text-center">
                      Yes 
                    </td>
                    <td className="bg-white text-center">
                      <button className="p-2 border border-gray-300 bg-white outline-none rounded-lg shadow-xl text-xs">ACTIONS</button>
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