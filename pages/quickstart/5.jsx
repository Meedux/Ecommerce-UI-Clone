import React from 'react'
import Link from 'next/link'

const Five = () => {
  return (
    <>
        <main className="p-5 flex flex-col justify-center items-center" style={{width: "96vw"}}>
            <div className="mb-5 max-w-full w-full">
                <p className="text-xl font-bold">
                    QUICK START
                </p>
            </div>

            <div className='card shadow-lg rounded-lg bg-white' style={{width: "90vw"}}>
                <div className="card-body p-5 max-w-full w-full">
                    <ul className="steps">
                        <li data-content="4" className="step step-primary font-extrabold">Price Formula</li>
                        <li data-content="5" className="step step-primary text-primary font-extrabold">$ Wallet Details</li>
                        <li data-content="6" className="step font-extrabold">Import Your First Product</li>
                    </ul>
                </div>

                <div className="card-body items-center bg-cardgray">
                  <h1 className="text-4xl text-center font-bold mb-5">Specify your profit margin!</h1>
                  <p className="text-center text-lg mb-8">
                    Set up the default price formula for your store
                  </p>

                  <div className='mb-5 max-w-full w-full' style={{width: "70vw"}}>
                    <span className='flex justify-between'>
                      <h1 className="text-lg font-bold">Wallet Details</h1>
                      <a className='text-primary text-lg'>Use same Billing Info as Subscription</a>
                    </span>

                    <select className="select w-full max-w-xs">
                      <option disabled selected>Currency</option>
                      <option>USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                    </select>
                  </div>

                  <div className='mb-3' style={{width: "70vw"}}>
                    <p className='text-lg font-bold mb-5'>
                      Billing Info
                    </p>

                    <div className="w-full max-w-full flex justify-between mb-5">
                      <input type="text" className='input border border-gray-500 bg-white rounded-md px-6 h-[2rem] w-[47%]' placeholder='First Name'/>
                      <input type="text" className='input border border-gray-500 bg-white rounded-md px-6 h-[2rem] w-[47%]' placeholder='Last Name'/>
                    </div>

                    <div className="w-full max-w-full flex justify-between">
                      <input type="text" className='input border border-gray-500 bg-white rounded-md px-6 h-[2rem] w-[47%]' placeholder='Company'/>
                      <input type="text" className='input border border-gray-500 bg-white rounded-md px-6 h-[2rem] w-[47%]' placeholder='VAT Number/TAX ID'/>
                    </div>
                  </div>

                  <div className='mb-10' style={{width: "70vw"}}>
                    <p className='text-lg font-bold mb-5'>
                      Billing Address
                    </p>

                    <div className="w-full max-w-full flex justify-between mb-5">
                      <input type="text" className='input border border-gray-500 bg-white rounded-md px-6 h-[2rem] w-[47%]' placeholder='Address 1'/>
                      <input type="text" className='input border border-gray-500 bg-white rounded-md px-6 h-[2rem] w-[47%]' placeholder='Address 2'/>
                    </div>

                    <div className="w-full max-w-full flex justify-between mb-5">
                      <input type="text" className='input border border-gray-500 bg-white rounded-md px-6 h-[2rem] w-[47%]' placeholder='City'/>
                      <input type="text" className='input border border-gray-500 bg-white rounded-md px-6 h-[2rem] w-[47%]' placeholder='Region'/>
                    </div>

                    <div className="w-full max-w-full flex justify-between">
                      <input type="text" className='input border border-gray-500 bg-white rounded-md px-6 h-[2rem] w-[47%]' placeholder='Postal Code/ZIP'/>
                      <input type="text" className='input border border-gray-500 bg-white rounded-md px-6 h-[2rem] w-[47%]' placeholder='Country'/>
                    </div>
                  </div>

                  <div className="w-full max-w-full flex justify-between">
                      <Link href={'/quickstart/4'}>
                        <button className="btn btn-outline btn-primary">Back</button>
                      </Link>
                      <Link href={'/quickstart/6'}>
                        <span className="text-primary mr-2">Skip</span>
                        <button className="btn btn-primary">Next</button>
                      </Link>
                  </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Five