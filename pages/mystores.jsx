import React, { useState } from 'react'

const Mystores = () => {
  const [ tab, setTab ] = useState(1)
  return (
    <>
      <main className="p-5">
        <span className="text-xl font-bold mb-12">
          My Stores
        </span>

        <div className="card bg-white shadow-lg overflow-visible" style={{width: '90vw'}}>
          <div className="card-body">
            <div className='tabs mb-5'>
              {/* Tabs */}
              <span className={`tab tab-lifted smooth ${tab === 1 && "tab-active text-primary"}`} onClick={() => setTab(1)}>All</span>
              <span className={`tab tab-lifted smooth ${tab === 2 && "tab-active text-primary"}`} onClick={() => setTab(2)}>Connecting</span>
              <span className={`tab tab-lifted smooth ${tab === 3 && "tab-active text-primary"}`} onClick={() => setTab(3)}>Connected</span>
              <span className={`tab tab-lifted smooth ${tab === 4 && "tab-active text-primary"}`} onClick={() => setTab(4)}>Offline</span>
              <span className={`tab tab-lifted smooth ${tab === 5 && "tab-active text-primary"}`} onClick={() => setTab(5)}>Disconnecting</span>
              <span className={`tab tab-lifted smooth ${tab === 6 && "tab-active text-primary"}`} onClick={() => setTab(6)}>Failed</span>
             </div>

             <div className='overflow-x-scroll'>
              {/* Table */}
              <table className="table w-full">
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

export default Mystores