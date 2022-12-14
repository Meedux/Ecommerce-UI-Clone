import Link from "next/link"
import Image from "next/image"
import { GrMail } from 'react-icons/gr'
import { RiBillFill } from 'react-icons/ri'
import { FaHandshake, FaQuestionCircle } from 'react-icons/fa'
import { IoInformation, IoInformationCircle } from 'react-icons/io5'
import EU from 'country-flag-icons/react/3x2/EU'

export default function Home() {
  return (
    <>
      <main className="container p-2">
        {/* First Four Cards */}
          <span className="text-start font-bold mb-5">Dashboard</span>
          <div className="grid md:grid-cols-6 grid-cols-3	gap-4 mb-5">
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
                      <span className="text-sm font-bold text-gray-500 mb-4">TOTAL SALES TODAY</span>
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
                      <span className="text-sm font-bold text-gray-500">WALLET FUNDS</span>
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
                      <span className="text-sm font-bold text-gray-500">ORDERS TODAY</span>
                      <span className="text-4xl font-bold">0</span>
                    </div>
                  </div>
                </div>

                <div className="card bg-white shadow-lg">
                  <div className="card-body mt-4">
                    <div className="text-center flex flex-col">
                      <span className="text-sm font-bold text-gray-500 mb-4">OPENED RETURNED REQUESTS</span>
                      <span className="text-4xl font-bold">0</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="grid md:grid-cols-6 grid-cols-3	gap-4 mb-5">
            <div className="grid col-span-3">
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <div className="mb-4 flex flex-col">
                    <span className="text-sm font-bold text-gray-500 mb-4">TOTAL SALES (LAST 30 DAYS)</span>
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
                    <span className="text-sm font-bold text-gray-500 mb-4">TOTAL ORDERS (LAST 30 DAYS)</span>
                    <span className="text-xl font-extrabold">0</span>
                  </div>

                  <div>
                    {/* Graph Goes Here */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-6 grid-cols-3	gap-4 mb-5">
            <div className="col-span-4">
              <div className="card overflow-visible bg-white shadow-lg">
                <div className="card-body">
                  <div className="w-full flex justify-between">
                    <span className=" text-sm font-semibold text-gray-500">RECENT ORDERS</span>
                    <span className="text-end text-primary">
                      <Link href={'/orders'}>
                        View Orders
                      </Link>
                    </span>
                  </div>

                  <div className="table w-full">
                    <thead>
                      <tr>
                        <th className="bg-slate-200 relative">
                          <div className="relative flex items-center">
                            <span className="font-bold">

                            ID
                            </span>
                            <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="AppScenic Platform ID">
                                <i>
                                    <IoInformationCircle size={25}/>
                                </i>
                            </div>
                          </div> 
                        </th>
                        <th className="bg-slate-200 relative">
                          <div className="relative flex items-center">
                            <span className="font-bold">

                            ORDER ID
                            </span>
                            <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="Your integration order ID">
                                <i>
                                    <IoInformationCircle size={25}/>
                                </i>
                            </div>
                          </div> 
                        </th>
                        <th className="bg-slate-200 relative">
                            <span className="font-bold">
                              
                            Deliver To
                            </span>
                          </th>
                        <th className="bg-slate-200 relative">
                            <span className="font-bold">
                              
                            Date
                            </span>
                          </th>
                        <th className="bg-slate-200 relative">
                          <div className="relative flex items-center">
                            <span className="font-bold">

                            TOTAL
                            </span>
                            <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="The sum of cost of item(s), shipping and fee">
                                <i>
                                    <IoInformationCircle size={25}/>
                                </i>
                            </div>
                          </div> 
                        </th>
                        <th className="bg-slate-200 relative"><span className="font-bold">QTY</span></th>
                        <th className="bg-slate-200 relative">
                          <div className="relative flex items-center">
                            <span className="font-bold">

                            STATUS
                            </span>
                            <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="The status of the order">
                                <i>
                                    <IoInformationCircle size={25}/>
                                </i>
                            </div>
                          </div> 
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Table Data Goes Here */}
                      <tr>
                        <td>
                          <a className=" text-gray-500 border border-b-gray-500">10616</a>
                        </td>
                        <td>
                          1234567890
                        </td>
                        <td>
                          <span className="flex">
                            {/* Flag Marker */}
                            <span className="tooltip relativebefore:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100 mr-3" data-tip="Europe">
                              <EU className="mr-1 h-[20px] w-[40px]" />
                            </span>
                            <p>Test Test</p>
                          </span>
                        </td>
                        <td>
                          <p>2022-07-23 21:22</p>
                        </td>
                        <td>
                          <p className="font-bold">
                            $120.00
                          </p>
                        </td>
                        <td>1</td>
                        <td>
                          <span className="p-2 rounded-md font-bold bg-slate-700 text-white">CANCELLED</span>
                        </td>
                      </tr>
                    </tbody>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <div>
                    <span className=" text-gray-500 font-semibold text-sm">STORE STATISTICS</span>
                  </div>
                  <div className="flex flex-col mb-5">
                    <span className=" text-gray-500 font-semibold text-sm">Orders</span>
                    <span className="text-2xl text-primary font-bold">0</span>
                  </div>
                  <div className="flex flex-col mb-5">
                    <span className=" text-gray-500 font-semibold text-sm">Total Sales (in store currency)</span>
                    <span className="text-2xl text-primary font-bold">$ 0.00</span>
                  </div>
                  <div className="flex flex-col mb-5">
                    <span className=" text-gray-500 font-semibold text-sm">Products connected</span>
                    <span className="text-2xl text-primary font-bold">0</span>
                  </div>
                  <div className="flex flex-col mb-5">
                    <span className=" text-gray-500 font-semibold text-sm">Products sold</span>
                    <span className="text-2xl text-primary font-bold">0</span>
                  </div>
                  <div className="flex flex-col mb-5">
                    <span className=" text-gray-500 font-semibold text-sm">Returns</span>
                    <span className="text-2xl text-primary font-bold">0</span>
                  </div>
                  <div className="flex flex-col mb-5">
                    <span className=" text-gray-500 font-semibold text-sm">Return rate</span>
                    <span className="text-2xl text-primary font-bold">0%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-6 grid-cols-3	gap-4">
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
                    <div className=" flex">
                      <Image src={"/img.jpg"} width={100} height={100} className={"mr-3"}/>
                      <Link href={'#'} legacyBehavior>
                        <span className="hover:text-primary cursor-pointer ">
                          <p className=" text-base ">A Very Very Long And Generic Blog Title<p className="text-primary text-sm ml-3 inline">{"Read More >"}</p></p>
                        </span>
                      </Link>
                    </div>

                    <div className="flex">
                      <Image src={"/img.jpg"} width={100} height={100} className={"mr-3"}/>
                      <Link href={'#'} legacyBehavior>
                        <span className="hover:text-primary cursor-pointer ">
                          <p className=" text-base ">A Very Very Long And Generic Blog Title<p className="text-primary text-sm ml-3 inline">{"Read More >"}</p></p>
                        </span>
                      </Link>
                    </div>

                    <div className="flex">
                      <Image src={"/img.jpg"} width={100} height={100} className={"mr-3"}/>
                      <Link href={'#'} legacyBehavior>
                        <span className="hover:text-primary cursor-pointer ">
                          <p className=" text-base ">A Very Very Long And Generic Blog Title<p className="text-primary text-sm ml-3 inline">{"Read More >"}</p></p>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <div className="w-full flex justify-between mb-3">
                    <span className=" text-gray-500 font-semibold">FAQ</span>
                    <span className="text-end text-primary">
                      <Link href={'#'}>
                        View All
                      </Link>
                    </span>
                  </div>
                  <div className=" mb-2 flex items-center">
                    <FaQuestionCircle size={20} className="mr-3 text-primary" />
                    <span className="hover:text-primary cursor-pointer">Question?</span>
                  </div >
                  <div className=" mb-2 flex items-center">
                    <FaQuestionCircle size={20} className="mr-3 text-primary" />
                    <span className="hover:text-primary cursor-pointer">Question?</span>
                  </div >
                  <div className=" mb-2 flex items-center">
                    <FaQuestionCircle size={20} className="mr-3 text-primary" />
                    <span className="hover:text-primary cursor-pointer">Question?</span>
                  </div>
                  <div className=" mb-2 flex items-center">
                    <FaQuestionCircle size={20} className="mr-3 text-primary" />
                    <span className="hover:text-primary cursor-pointer">Question?</span>
                  </div>
                  <div className=" mb-2 flex items-center">
                    <FaQuestionCircle size={20} className="mr-3 text-primary" />
                    <span className="hover:text-primary cursor-pointer">Question?</span>
                  </div>
                  <div className=" flex items-center">
                    <FaQuestionCircle size={20} className="mr-3 text-primary" />
                    <span className="hover:text-primary cursor-pointer">Question?</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <div className="w-full flex flex-col mb-5">
                    <span className=" text-gray-500 font-semibold mb-5">Contact Us</span>
                    <span className="flex items-center mb-3">
                      <GrMail className="mr-3 text-primary"/>
                      <p>General: <span className="text-primary">support@appscenic.com</span></p> 
                    </span>

                    <span className="flex items-center mb-3">
                      <RiBillFill className="mr-3 text-primary"/>
                      <p>Billing: <span className="text-primary">billing@appscenic.com</span></p> 
                    </span>

                    <span className="flex items-center mb-3">
                      <FaHandshake className="mr-3 text-primary"/>
                      <p>Sales: <span className="text-primary">sales@appscenic.com</span></p> 
                    </span>
                  </div>

                  <div>
                    <span className=" text-gray-500 font-semibold mb-5">Ask us anything. Anytime</span>
                    <div className="flex">
                      <button className="btn btn-primary mr-4 font-bold text-white">Send Email</button>
                      <button className="btn btn-success font-bold text-white">Live Chat</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>
    </>
  )
}