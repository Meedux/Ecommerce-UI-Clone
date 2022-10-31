import React, { useState } from 'react'

const mystores = () => {
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
                    <td>NAME</td>
                    <td>PLATFORM</td>
                    <td>STORE URL</td>
                    <td>STATUS</td>
                    <td>NO. OF PRODUCTS</td>
                    <td>STORE CURRENCY</td>
                    <td>WALLET BALANCE</td>
                    <td>SYNC STATUS</td>
                    <td>AUTO-FUNDING</td>
                    <td>AUTO-PUSH</td>
                    <td>ACTIONS</td>
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

export default mystores