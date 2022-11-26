import React, { useState } from 'react'

const Priceformulas = () => {
  const [ tab, setTab ] = useState(1)
  return (
    <>
      <main className="container p-5">
        <div className='mb-5 flex justify-between items-center'>
          <p className="text-xl text-start font-bold ">
            My Products/ Price Formulas
          </p>
          <button className="text-end btn btn-primary px-2 py-0 shadow-lg font-bold">NEW PRICE FORMULA</button>
        </div>

        <div className="card bg-white shadow-lg overflow-visible">
          <div className="card-body">
            <div className='tabs mb-5'>
              {/* Tabs */}
              <span className={`tab tab-bordered smooth font-bold ${tab === 1 && "tab-active text-primary"}`} onClick={() => setTab(1)}>All</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 2 && "tab-active text-primary"}`} onClick={() => setTab(2)}>Active</span>
              <span className={`tab tab-bordered smooth font-bold ${tab === 3 && "tab-active text-primary"}`} onClick={() => setTab(3)}>Draft</span>
             </div>

             <div className="mb-5">
             <input type="text" className="p-1 outline-none border w-full max-w-full border-gray-400 rounded-sm" placeholder='search'/>
             </div>

             <div className='overflow-x-scroll'>
              {/* Table */}
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-navbg">PRICE FORMULA NAME</th>
                    <th className="bg-navbg">INTERVAL</th>
                    <th className="bg-navbg">APPLIES TO</th>
                    <th className="bg-navbg">STATUS</th>
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

export default Priceformulas