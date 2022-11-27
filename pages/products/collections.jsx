import React from 'react'
import { TfiAngleLeft, TfiAngleRight, TfiAngleDoubleLeft, TfiAngleDoubleRight } from 'react-icons/tfi'

const collections = () => {
  return (
    <>
      <main className="container p-5">
        <p className="text-xl text-start font-bold mb-5">
            {"Collections (also known as product Categories)"}
        </p>
        <div className="card shadow-lg rounded-lg bg-white">
          <div className="card-body">
            <div className="mb-5">
              <input type="text" className="p-1 outline-none border w-full max-w-full border-gray-400 rounded-md" placeholder='search'/>
            </div>

            <div className='w-full max-w-full flex justify-between mb-5'>
              <button className="p-2 border border-gray-300 bg-white outline-none rounded-lg shadow-xl">+ Add new Collection</button>

              <span>
                <button className="p-2 border border-gray-300 bg-white outline-none rounded-lg shadow-xl mr-3">Delete</button>
                <button className="p-2 border border-gray-300 bg-white outline-none rounded-lg shadow-xl">Empty</button>
              </span>
            </div>

            <div className='mb-5'>
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-navbg flex items-center"> <input type="checkbox" className='checkbox mr-4'/>COLLECTION NAME</th>
                    <th className="bg-navbg">COLLECTION DESCRIPTION</th>
                    <th className="bg-navbg">PRODUCTS</th>
                    <th className="bg-navbg">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <td className="bg-white">
                    <div className="flex items-center">
                      <input type="checkbox" className='checkbox mr-4'/>
                      <p className=" text-gray-900">Slipcovers</p>
                    </div>
                  </td>
                  <td className="bg-white">
                    <p className="text-[#626A92]">{"Home, Tools & Garden > Home Decor > Slipcovers"}</p>
                  </td>
                  <td className='bg-white'>
                    0
                  </td>
                  <td className='bg-white'>
                    <button className="p-2 border border-gray-300 bg-white outline-none text-sm rounded-lg shadow-xl">ACTIONS</button>
                  </td>
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

export default collections
