import React, { useState } from 'react'
import { BsCartFill } from 'react-icons/bs'

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

             <div className=''>
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
                  <td className='bg-white'>Default</td>
                  <td className='bg-white'>Always</td>
                  <td className="flex items-center bg-white"><BsCartFill size={20} className='mr-2' /> name</td>
                  <td className='bg-white'><span className="p-2 text-sm font-bold text-white bg-green-400 rounded-md">ACTIVE</span></td>
                  <td className='bg-white'>
                   <span className="dropdown dropdown-bottom">
                      <button tabIndex={0} className="p-2 border border-gray-300 bg-white outline-none text-sm rounded-lg shadow-xl">ACTIONS</button>
                      <ul tabIndex={0} className="dropdown-content bg-white menu p-2 shadow-2xl rounded-md w-52 ">
                        <li className='hover:text-primary p-2 cursor-pointer'>Edit</li>
                      </ul>
                    </span>
                  </td>
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