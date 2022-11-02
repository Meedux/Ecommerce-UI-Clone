import React from 'react'

const profile = () => {
  return (
    <>
      <main className="p-5">
        <p className="text-xl text-start mb-5 font-bold">
          Profile
        </p>

        <div className="grid grid-cols-6 gap-4 mb-5" style={{width: "90vw"}}>
          <div className="col-span-4 card bg-white shadow-lg rounded-lg">
            <div className="card-body">
              <span className="text-lg font-bold mb-4">
                Profile Details
              </span>

              <div className="mb-5 max-w-full w-full grid grid-cols-6 gap-4">
                <div className="col-span-5 flex flex-wrap max-w-full w-full">
                  <input type="text" className='p-1 outline-none border border-gray-300 rounded-lg w-[40%] mb-3 mr-4' placeholder='First Name'/>
                  <input type="text" className='p-1 outline-none border border-gray-300 rounded-lg w-[40%] mb-3 mr-4' placeholder='Last Name'/>
                  <input type="text" className='p-1 outline-none border border-gray-300 rounded-lg w-[40%] mr-4' placeholder='Email Address'/>
                </div>

                <div className="col-span-1 max-w-full w-full">
                  <button className="p-2 bg-gray-200 rounded-lg shadow-lg">Profile Picture Input</button>
                </div>
              </div>

              <span className="text-lg font-bold mb-5">
                Notification Settings
              </span>

              <div>
                <div className="mb-4">
                  <span>
                    Types of Notification
                  </span>
                </div>
                <div className="max-w-full w-full flex justify-between items-center mb-4">
                  <span className='flex items-center'>
                    <input type="checkbox" className='checkbox mr-3'/>
                    Products
                  </span>

                  <span className='flex items-center'>
                    <input type="checkbox" className='checkbox mr-3'/>
                    Orders
                  </span>

                  <span className='flex items-center'>
                    <input type="checkbox" className='checkbox mr-3'/>
                    Payments
                  </span>

                  <span className='flex items-center'>
                    <input type="checkbox" className='checkbox mr-3'/>
                    Errors
                  </span>

                  <span className='flex items-center'>
                    <input type="checkbox" className='checkbox mr-3'/>
                    Actions
                  </span>
                </div>
                <div>
                  <span className='flex items-center'>
                    <input type="checkbox" className='checkbox mr-3'/>
                    <p>I would like to receive occasional email updates and special offers for AppScenic products, services and events.</p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 card bg-white shadow-lg rounded-lg">
            <div className="card-body">
              <div className="mb-5">
                <span className="text-lg font-extrabold">
                  Change Password
                </span> 
              </div>

              <div className="form-control max-w-full w-full mb-5">
                <input type="text" className='p-1 outline-none border border-gray-300 rounded-lg w-full mb-3 mr-4' placeholder='Current Password'/>
                <input type="text" className='p-1 outline-none border border-gray-300 rounded-lg w-full mb-3 mr-4' placeholder='New Password'/>
                <input type="text" className='p-1 outline-none border border-gray-300 rounded-lg w-full mb-3 mr-4' placeholder='Confirm New Password'/>
              </div>

              <div className='text-center'>
                <button className="btn btn-outline btn-primary shadow-xl">CHANGE PASSWORD</button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary">Save</button>
        </div>
      </main>
    </>
  )
}

export default profile
