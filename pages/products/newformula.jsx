import React from 'react'
import Link from 'next/link'
import { IoInformation, IoInformationCircle } from 'react-icons/io5'

const newformula = () => {
  return (
    <>
      <main className="container p-2">
        <p className="text-xl text-start font-bold mb-5">
          My Products / Price Formulas / New Formula
        </p>

        <div className="card bg-white rounded-lg shadow-2xl">
          <div className="card-body">
            <div className="mb-5">
              <input type="text" className="border border-gray-300 rounded-md p-1 w-[40%] outline-none" placeholder='Price Formula Name'/>
            </div>

            <div className="grid grid-cols-10 gap-4 mb-7">
              <div className="col-span-4 flex items-center">
                <input type="text" className="border border-gray-300 rounded-md p-1 w-[60%] outline-none" placeholder='Price Range Min'/>
                <span className="divider">+</span>
                <input type="text" className="border border-gray-300 rounded-md p-1 w-[60%] outline-none" placeholder='Price Range Max'/>
              </div>

              <div className="col-span-4 flex items-center">
                <input type="text" className="border border-gray-300 rounded-md p-1 w-[60%] outline-none" placeholder='Profit %'/>
                <span className="divider">+</span>
                <input type="text" className="border border-gray-300 rounded-md p-1 w-[60%] outline-none" placeholder='Fixed Price'/>
              </div>

              <div className="col-span-2 flex items-center">
                <input type="checkbox" className="checkbox mr-3" />
                <p>Round Up</p>
              </div>
            </div>

            <div className="flex mb-5">
              <button className="p-2 border border-gray-300 bg-white w-[14%] outline-none text-xs rounded-lg shadow-xl">+ ADD ADDITIONAL RANGE</button>
            </div>

            <div className="mb-5 flex flex-col justify-center items-start">
              <span className="mb-3 flex items-center">
                <input type="checkbox" className="checkbox mr-3" />
                <p className="">Define Interval</p>
                <div className="tooltip z-0 relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="Does the Formula have a start and end time?">
                    <i>
                        <IoInformationCircle size={25} className="relative"/>
                    </i>
                </div>
              </span>

              <span className="mb-3 flex items-center">
                <input type="checkbox" className="checkbox mr-3" />
                <p className="">Use compare at price (this is a sale price formula)</p>
                <div className="tooltip z-0 relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="Use this if you store integration supports compare at price">
                    <i>
                        <IoInformationCircle size={25} className="relative"/>
                    </i>
                </div>
              </span>

              <span className="mb-3 flex items-center">
                <input type="checkbox" className="checkbox mr-3" />
                <p className="">Include shipping cost to main location in the product price</p>
                <div className="tooltip z-0 relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="The costs of shipping the product to your location">
                    <i>
                        <IoInformationCircle size={25} className="relative"/>
                    </i>
                </div>
              </span>

              <span className="mb-3 flex items-center">
                <input type="checkbox" className="checkbox mr-3" />
                <p className="">{"If product has RRP and Selling Price < RRP, set the Selling Price to equal RRP (Retail Recommended Price)"}</p>
              </span>
            </div>

            <div className="flex justify-end items-center">
              <Link className="btn btn-primary text-end font-bold w-[5%]" href={'/products/priceformulas'}>SAVE</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default newformula