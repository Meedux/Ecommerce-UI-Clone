import React from 'react'
import { BsFillTagsFill } from 'react-icons/bs'
import { FaBriefcase, FaGlobeAfrica, FaTags } from 'react-icons/fa'
import { AiFillCheckCircle, AiFillCreditCard } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import Link from 'next/link'
import Image from 'next/image'

const Six = () => {
  return (
    <>
        <main className="p-5 container">
            <div className="mb-5 max-w-full w-full">
                <p className="text-xl font-bold">
                    QUICK START
                </p>
            </div>

            <div className='card shadow-lg rounded-lg bg-white'>
                <div className="card-body p-5 max-w-full w-full">
                    <ul className="steps">
                        <li data-content="5" className="step step-primary font-extrabold">Wallet Details</li>
                        <li data-content="6" className="step step-primary text-primary font-extrabold"><span className="flex items-center text-primary"><BsFillTagsFill size={30} className="mr-3" />Import Your First Product</span></li>
                    </ul>
                </div>

                <div className="card-body justify-center bg-cardgray">
                <div className="mt-10 text-center items-center mb-5">
                        <h1 className="text-4xl mb-3 font-bold">One last step, import your first product</h1>
                        <p>Import products to your store and complete your quickstart setup.</p>
                    </div>

                    <div className="w-full max-w-full grid grid-cols-6 gap-4 mb-5 self-center" style={{width: "70%"}}>
                        <div className="col-span-3 p-2">
                            <div className="mb-3 flex items-center">
                                <AiFillCheckCircle size={25} className="mr-3 text-primary"/>
                                <span>
                                    <span className="text-lg font-bold">1. Add store</span>
                                    <p>Connect your first store</p>
                                </span>
                            </div>

                            <div className="mb-3 flex items-center">
                                <AiFillCheckCircle size={25} className="mr-3 text-primary"/>
                                <span>
                                    <span className="text-lg font-bold">2. Select Plan</span>
                                    <p>Pick your subscription plan</p>
                                </span>
                            </div>

                            <div className="mb-3 flex items-center">
                                <AiFillCheckCircle size={25} className="mr-3 text-primary"/>
                                <span>
                                    <span className="text-lg font-bold">3. Shipping Details</span>
                                    <p>Configure your shipping information</p>
                                </span>
                            </div>

                            <div className="mb-3 flex items-center">
                                <AiFillCheckCircle size={25} className="mr-3 text-primary"/>
                                <span>
                                    <span className="text-lg font-bold">4. Price Formula</span>
                                    <p>Setup your profit margin</p>
                                </span>
                            </div>

                            <div className="mb-3 flex items-center">
                                <AiFillCheckCircle size={25} className="mr-3 text-primary"/>
                                <span>
                                    <span className="text-lg font-bold">5. Wallet Details</span>
                                    <p>Configure Store Wallet</p>
                                </span>
                            </div>

                            <div className="mb-3 flex items-center">
                                <FaTags size={25} className="mr-3 text-primary"/>
                                <span>
                                    <span className="text-lg font-bold">1. Your First Product</span>
                                    <p>Import products from catalogue</p>
                                </span>
                            </div>
                        </div>

                        <div className="col-span-3 p-2">
                            <Image src="/8500.png" height={1000} width={1000}/>
                        </div>
                    </div>

                    <div className="w-full max-w-full flex justify-between">
                      <Link href={'/quickstart/5'}>
                        <button className="btn btn-outline btn-primary">Back</button>
                      </Link>
                      <Link href={'/catalog'}>
                        <button className="btn btn-primary">Import Products</button>
                      </Link>
                  </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Six