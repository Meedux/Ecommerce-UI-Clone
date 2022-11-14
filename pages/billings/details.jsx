import React from 'react'

const details = () => {
  return (
    <>
      <main className="p-5">
        <p className="text-xl text-start font-bold mb-5">
          Details & Invoices
        </p>

        <div className="grid grid-cols-6 gap-4 mb-5" style={{width: "90vw"}}>
          <div className="col-span-3 card rounded-lg bg-white shadow-lg">
            <div className="card-body">
              <div className='mb-3'>
                <p className='text-lg font-bold mb-5'>
                  Billing Info
                </p>

                <div className="w-full max-w-full flex justify-between mb-5">
                  <input type="text" className='input rounded-sm outline-none border border-gray-400 bg-white h-[2rem] w-[47%]' placeholder='First Name'/>
                  <input type="text" className='input rounded-sm outline-none border border-gray-400 bg-white h-[2rem] w-[47%]' placeholder='Last Name'/>
                </div>

                <div className="w-full max-w-full flex justify-between">
                  <input type="text" className='input rounded-sm outline-none border border-gray-400 bg-white h-[2rem] w-[47%]' placeholder='Company'/>
                  <input type="text" className='input rounded-sm outline-none border border-gray-400 bg-white h-[2rem] w-[47%]' placeholder='VAT Number/TAX ID'/>
                </div>
              </div>

              <div className='mb-3'>
                <p className='text-lg font-bold mb-5'>
                  Billing Address
                </p>

                <div className="w-full max-w-full flex justify-between mb-5">
                  <input type="text" className='input rounded-sm outline-none border border-gray-400 bg-white h-[2rem] w-[47%]' placeholder='Address 1'/>
                  <input type="text" className='input rounded-sm outline-none border border-gray-400 bg-white h-[2rem] w-[47%]' placeholder='Address 2'/>
                </div>

                <div className="w-full max-w-full flex justify-between mb-5">
                  <input type="text" className='input rounded-sm outline-none border border-gray-400 bg-white h-[2rem] w-[47%]' placeholder='City'/>
                  <input type="text" className='input rounded-sm outline-none border border-gray-400 bg-white h-[2rem] w-[47%]' placeholder='Region'/>
                </div>

                <div className="w-full max-w-full flex justify-between">
                  <input type="text" className='input rounded-sm outline-none border border-gray-400 bg-white h-[2rem] w-[47%]' placeholder='Postal Code/ZIP'/>
                  <input type="text" className='input rounded-sm outline-none border border-gray-400 bg-white h-[2rem] w-[47%]' placeholder='Country'/>
                </div>
              </div>

              <div className='text-end'>
                <button className="btn btn-error btn-outline mr-3 p-2 btn-md hover:text-white">Cancel</button>
                <button className="btn btn-primary btn-md">Save</button>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            
          </div>
        </div>

        <div className="card rounded-l shadow-lg bg-white" style={{width: '80vw'}}>
          <div className="card-body">
              <p className='text-lg font-bold mb-5'>
                Billing Info
              </p>

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

                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default details