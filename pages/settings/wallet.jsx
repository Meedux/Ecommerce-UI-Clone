import React, { useState } from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
 
const Wallet = () => {
  const [editState, setEditState] = useState(false)
  const [viewEdit, setViewEdit] = useState(false)

  const view = () => {
    setViewEdit(true)
    setEditState(false)
  }

  const edit = () => {
    setEditState(true)
    setViewEdit(false)
  }

  const returnView = () => {
    setViewEdit(false)
    setEditState(false)
  }


  return (
    <>
      <main className="container p-5">
        <p className="text-xl text-start font-bold mb-5">
          Shipping Settings
        </p>

        <div className="flex">
        <div className={`card rounded-lg bg-white inline-flex shadow-lg mb-5 w-[50%] ${viewEdit || editState ? 'hidden' : ''}`}>
          <div className="w-full bg-primary p-10">
            <div className="flex justify-end">
              <BsFillPencilFill size={20} className="text-white cursor-pointer" onClick={() => view()}/>
            </div>
            <span className="text-center flex flex-col">
              <span className="text-4xl font-extrabold text-white mb-4">Wallet</span>
              <span className="font-bold text-white">This is your active wallet for store <span className="font-extrabold">User</span></span>
              <span className="text-white">It will be used to pay your orders on AppScenic.</span>
            </span>
          </div>
          <div className="card-body ">
            <div className="w-full mt-10 flex justify-between">
              <span className="text-primary text-xl">
                <span className="font-bold">$0.00</span>/mo
              </span>
              <button className="btn btn-primary p-3 shadow-md">ADD FUNDS</button>
            </div>
          </div>
        </div>


        <div className={`card rounded-lg bg-white inline-flex shadow-lg mb-5 w-[50%] ${viewEdit ? '' : 'hidden'}`}>

          <div className="card-body">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold mb-5">
                Wallet Details
              </h1>
              <BsFillPencilFill size={20} className="cursor-pointer" onClick={() => edit()}/>
            </div>

            <h1 className="font-bold">
              Currency
            </h1>
            <p className='mb-10'>USD</p>

            <h1 className="text-xl font-bold mb-5">Billing Info</h1>
            <div className="flex">
              <div className="w-1/2">
                <h1 className="font-bold">
                  First Name
                </h1>
                <p className='mb-5'>Test Name</p>

                <h1 className="font-bold">
                  Company
                </h1>
                <p className="mb-10"></p>
              </div>
              <div className="w-1/2">
                <h1 className="font-bold">
                  Last Name
                </h1>
                <p className='mb-5'>Test Name</p>

                <h1 className="font-bold">
                  VAT Number/Tax ID
                </h1>
                <p className="mb-10"></p>
              </div>
            </div>


            <h1 className="text-xl font-bold mb-5">Billing Address</h1>
            <div className="flex">
              <div className="w-1/2">
                <h1 className="font-bold">
                  Address 1
                </h1>
                <p className='mb-5'>Test Name</p>

                <h1 className="font-bold">
                  City
                </h1>
                <p className='mb-5'>Test City</p>

                <h1 className="font-bold">
                  POSTAL code/ZIP
                </h1>
                <p className="mb-10">123456</p>
              </div>
              <div className="w-1/2">
                <h1 className="font-bold">
                  Address 2
                </h1>
                <p className='mb-5'>Test Name</p>

                <h1 className="font-bold">
                  Region
                </h1>
                <p className="mb-5">text region</p>

                <h1 className="font-bold">
                  Country
                </h1>
                <p className="mb-10">country</p>
              </div>
            </div>

            <button className="btn-primary font-bold w-[20%] btn" onClick={() => returnView()}>BACK</button>
          </div>
        </div>

        <div className={`card rounded-lg bg-white inline-flex shadow-lg mb-5 w-[50%] ${editState ? '' : 'hidden'}`}>
          <div className="card-body">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold mb-5">
                Wallet Details
              </h1>
              <BsFillPencilFill size={20} className="cursor-pointer" onClick={() => edit()}/>
            </div>

            <h1 className="font-bold">
              Currency
            </h1>
            <input type="text" className="w-1/2 p-2 outline-none rounded-md border border-gray-300 mb-10" />

            <h1 className="text-xl font-bold mb-5">Billing Info</h1>
            <div className="flex">
              <div className="w-1/2">
                <h1 className="font-bold">
                  First Name
                </h1>
                <input type="text" className="w-[90%] p-2 outline-none rounded-md border border-gray-300 mb-5" />

                <h1 className="font-bold">
                  Company
                </h1>
                <input type="text" className="w-[90%] p-2 outline-none rounded-md border border-gray-300 mb-10" />
              </div>
              <div className="w-1/2">
                <h1 className="font-bold">
                  Last Name
                </h1>
                <input type="text" className="w-[90%] p-2 outline-none rounded-md border border-gray-300 mb-5" />

                <h1 className="font-bold">
                  VAT Number/Tax ID
                </h1>
                <input type="text" className="w-[90%] p-2 outline-none rounded-md border border-gray-300 mb-10" />
              </div>
            </div>


            <h1 className="text-xl font-bold mb-5">Billing Address</h1>
            <div className="flex">
              <div className="w-1/2">
                <h1 className="font-bold">
                  Address 1
                </h1>
                <input type="text" className="w-[90%] p-2 outline-none rounded-md border border-gray-300 mb-5" />

                <h1 className="font-bold">
                  City
                </h1>
                <input type="text" className="w-[90%] p-2 outline-none rounded-md border border-gray-300 mb-5" />

                <h1 className="font-bold">
                  POSTAL code/ZIP
                </h1>
                <input type="text" className="w-[90%] p-2 outline-none rounded-md border border-gray-300 mb-10" />
              </div>
              <div className="w-1/2">
                <h1 className="font-bold">
                  Address 2
                </h1>
                <input type="text" className="w-[90%] p-2 outline-none rounded-md border border-gray-300 mb-5" />

                <h1 className="font-bold">
                  Region
                </h1>
                <input type="text" className="w-[90%] p-2 outline-none rounded-md border border-gray-300 mb-5" />

                <h1 className="font-bold">
                  Country
                </h1>
                <input type="text" className="w-[90%] p-2 outline-none rounded-md border border-gray-300 mb-10" />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button className="btn-info btn-outline font-bold w-[20%] btn mr-3" onClick={() => view()}>CANCEL</button> 
              <button className="btn-primary font-bold w-[20%] btn" onClick={() => returnView()}>SAVE</button> 
            </div>
          </div>
        </div>

        <div className="w-[50%] max-w-1/2 flex justify-center">
          <label htmlFor='payment' className="btn btn-primary text-center">Add New Payment Method</label>
        </div>

        </div>
        
        <div className="card bg-white shadow-lg rounded-lg mb-5">
          <div className="card-body">
            <span className="text-lg font-bold mb-5">Transactions</span>
            <div className="w-full max-w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-navbg">ID</th>
                    <th className="bg-navbg">DATE</th>
                    <th className="bg-navbg">AMOUNT</th>
                    <th className="bg-navbg">TRANSACTION TYPE</th>
                    <th className="bg-navbg">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                <div className="px-4 py-1">
                  <p className="text-lg font-bold">No Transactions</p>
                </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="card bg-white shadow-lg rounded-lg">
          <div className="card-body">
            <span className="text-lg font-bold mb-5">Invoices</span>
            <div className="w-full max-w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-navbg">NUMBER</th>
                    <th className="bg-navbg">ISSUED DATE</th>
                    <th className="bg-navbg">DUE DATE</th>
                    <th className="bg-navbg">AMOUNT</th>
                    <th className="bg-navbg">REFUNDED</th>
                    <th className="bg-navbg">STATUS</th>
                    <th className="bg-navbg">DOWNLOAD</th>
                  </tr>
                </thead>
                <tbody>
                  <div className="px-4 py-1">
                    <p className="text-lg font-bold">No Invoices</p>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>



      <input type="checkbox" id="payment" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg mb-5">Credit or Debit Card</h3>
          <input type="text" className="w-full p-2 border outline-none' border-gray-300 rounded-md mb-4" placeholder='Card Number'/>

          <div className="flex mb-7">
            <input type="checkbox" className="checkbox mr-3"/>
            <p>I allow AppScenic to save this payment method and use it for future payments.</p>
          </div>
          <div className="modal-action">
            <label htmlFor="payment" className="btn font-bold">CANCEL</label>
            <label htmlFor="payment" className="btn btn-primary font-bold">SAVE</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wallet