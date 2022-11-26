import React from 'react'

const board = () => {
  return (
    <>
      <main className="container p-5">
        <p className="text-xl text-start font-bold mb-5">
          Boards
        </p>
        <div className="card shadow-lg rounded-lg bg-white">
          <div className="card-body">
            <div className="mb-5">
              <input type="text" className="p-1 outline-none border w-full max-w-full border-gray-400 rounded-lg" placeholder='search'/>
            </div>

            <div className='w-full max-w-full flex justify-between mb-5'>
              <button className="p-2 border border-gray-300 bg-white outline-none rounded-lg shadow-xl">+ Add new Board</button>

              <span>
                <button className="p-2 border border-gray-300 bg-white outline-none rounded-lg shadow-xl mr-3">Delete</button>
                <button className="p-2 border border-gray-300 bg-white outline-none rounded-lg shadow-xl">Empty</button>
              </span>
            </div>

            <div className='mb-5'>
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-navbg flex items-center"> <input type="checkbox" className='checkbox mr-4'/> BOARD NAME</th>
                    <th className="bg-navbg">PRODUCTS</th>
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

export default board