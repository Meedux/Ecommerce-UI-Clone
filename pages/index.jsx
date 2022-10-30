import Link from "next/link"

export default function Home() {
  return (
    <>
      <main className="p-5">
        {/* First Four Cards */}
          <span className="text-start font-bold mb-5">Dashboard</span>
          <div className="grid md:grid-cols-6 grid-cols-3	gap-4 mb-5" style={{width: "90vw"}}>
            <div className="grid col-span-3 gap-4">
              <div className="card col-span-6 rounded-lg bg-white inline-flex shadow-lg">
                <div className="w-full bg-primary p-10">
                  <span className="text-center flex flex-col">
                    <span className="text-4xl font-extrabold text-white">Hello User!</span>
                    <span className="font-bold text-white">Welcome to Your Ecommerce Account!</span>
                    <span className="text-white">Here are you Stats for today!</span>
                  </span>
                </div>
                <div className="card-body ">
                  <div className="w-full mt-10 flex justify-between">
                    <span className="text-primary flex flex-col">
                      Active Subscription
                      <span className="font-extrabold text-3xl">FREE</span>
                    </span>
                    <span className="text-primary text-xl">
                      <span className="font-bold">$0</span>/mo
                    </span>
                    <button className="btn btn-accent p-3 shadow-md">Upgrade Now</button>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="grid grid-cols-2 col-span-3 grid-rows-2 gap-4">
                {/* Four Smol Cards*/}
                <div className="card bg-white shadow-lg">
                  <div className="card-body mt-4">
                    <div className="text-center flex flex-col">
                      <span className="text-xl">Total Sales Today</span>
                      <span className="text-4xl font-bold">$ 0.00</span>
                    </div>
                  </div>
                </div>

                <div className="card bg-white shadow-lg">
                  <div className="card-body">
                    <span className="text-end text-primary">
                      <Link href={'/settings/wallet'}>
                        View Wallet
                      </Link>
                    </span>
                    <div className="text-center flex flex-col">
                      <span className="text-xl">Wallet Funds</span>
                      <span className="text-4xl font-bold text-green-400">$ 0.00</span>
                    </div>
                  </div>
                </div>

                <div className="card bg-white shadow-lg">
                <div className="card-body">
                    <span className="text-end text-primary">
                      <Link href={'/orders'}>
                        View Orders
                      </Link>
                    </span>
                    <div className="text-center flex flex-col">
                      <span className="text-xl">Orders Today</span>
                      <span className="text-4xl font-bold">0</span>
                    </div>
                  </div>
                </div>

                <div className="card bg-white shadow-lg">
                  <div className="card-body mt-4">
                    <div className="text-center flex flex-col">
                      <span className="text-xl">Opened Returned Request</span>
                      <span className="text-4xl font-bold">0</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="grid md:grid-cols-6 grid-cols-3	gap-4 mb-5" style={{width: "90vw"}}>
            <div className="grid col-span-3">
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <div className="mb-4 flex flex-col">
                    <span className="">TOTAL SALES (LAST 30 DAYS)</span>
                    <span className="text-xl font-extrabold">$ 0.00</span>
                  </div>

                  <div>
                    {/* Graph Goes Here */}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid col-span-3">
              <div className="card bg-white shadow-lg">
              <div className="card-body">
                <div className="mb-4 flex flex-col">
                    <span className="">TOTAL ORDERS (LAST 30 DAYS)</span>
                    <span className="text-xl font-extrabold">0</span>
                  </div>

                  <div>
                    {/* Graph Goes Here */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-6 grid-cols-3	gap-4 mb-5" style={{width: "90vw"}}>
            <div className="col-span-4">
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <div className="w-full flex justify-between">
                    <span className=" text-gray-500 font-semibold">RECENT ORDERS</span>
                    <span className="text-end text-primary">
                      <Link href={'/orders'}>
                        View Orders
                      </Link>
                    </span>
                  </div>

                  <div className="table w-full">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Order ID</th>
                        <th>Deliver To</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>QTY</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Table Data Goes Here */}
                    </tbody>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <div>
                    <span className=" text-gray-500 font-semibold">STORE STATISTICS</span>
                  </div>
                  <div className="flex flex-col mb-5">
                    <span className=" text-gray-700 font-semibold">Orders</span>
                    <span className="text-2xl text-primary font-bold">0</span>
                  </div>
                  <div className="flex flex-col mb-5">
                    <span className=" text-gray-700 font-semibold">Total Sales (in store currency)</span>
                    <span className="text-2xl text-primary font-bold">$ 0.00</span>
                  </div>
                  <div className="flex flex-col mb-5">
                    <span className=" text-gray-700 font-semibold">Products connected</span>
                    <span className="text-2xl text-primary font-bold">0</span>
                  </div>
                  <div className="flex flex-col mb-5">
                    <span className=" text-gray-700 font-semibold">Products sold</span>
                    <span className="text-2xl text-primary font-bold">0</span>
                  </div>
                  <div className="flex flex-col mb-5">
                    <span className=" text-gray-700 font-semibold">Returns</span>
                    <span className="text-2xl text-primary font-bold">0</span>
                  </div>
                  <div className="flex flex-col mb-5">
                    <span className=" text-gray-700 font-semibold">Return rate</span>
                    <span className="text-2xl text-primary font-bold">0%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-6 grid-cols-3	gap-4" style={{width: "90vw"}}>
            <div className="col-span-2">
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <div className="w-full flex justify-between mb-3">
                    <span className=" text-gray-500 font-semibold">BLOG</span>
                    <span className="text-end text-primary">
                      <Link href={'#'}>
                        Go to Blog
                      </Link>
                    </span>
                  </div>

                  <div>
                    {/* Blog Items Goes Here */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <div className="w-full flex justify-between mb-3">
                    <span className=" text-gray-500 font-semibold">BLOG</span>
                    <span className="text-end text-primary">
                      <Link href={'#'}>
                        Go to Blog
                      </Link>
                    </span>
                  </div>
                  <div className=" mb-5 border-x-0 border border-t-0 border-b-gray-500">
                    <span>Question?</span>
                  </div>
                  <div className=" mb-5 border-x-0 border border-t-0 border-b-gray-500">
                    <span>Question?</span>
                  </div>
                  <div className=" mb-5 border-x-0 border border-t-0 border-b-gray-500">
                    <span>Question?</span>
                  </div>
                  <div className=" mb-5 border-x-0 border border-t-0 border-b-gray-500">
                    <span>Question?</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <div className="w-full flex justify-between mb-3">
                    <span className=" text-gray-500 font-semibold">Contact Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>
    </>
  )
}
