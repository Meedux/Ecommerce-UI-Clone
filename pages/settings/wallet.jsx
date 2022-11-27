import React from 'react'

const Wallet = () => {
  return (
    <>
      <main className="container p-5">
        <p className="text-xl text-start font-bold mb-5">
          Shipping Settings
        </p>

        <div className="card rounded-lg bg-white inline-flex shadow-lg mb-5">
          <div className="w-full bg-primary p-10">
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

    </>
  )
}

export default Wallet