import React from 'react'
import { FaBriefcase, FaGlobeAfrica, FaTags } from 'react-icons/fa'
import { AiFillCheckCircle, AiFillCreditCard } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import Link from 'next/link'

const QuickStart = () => {
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
                        <li data-content="🚀" className="step step-primary text-primary font-extrabold">Get Started</li>
                        <li data-content="1" className="step font-extrabold">Connect Your Store</li>
                        <li data-content="2" className="step font-extrabold">Select Plan</li>
                    </ul>
                </div>

                <div className="card-body justify-center bg-cardgray">
                    <div className="mt-10 text-center items-center mb-5">
                        <h1 className="text-4xl mb-3 font-bold">Welcome! Click the Button below to get started</h1>
                        <p>Follow the next steps to connect your store and set up your account.</p>
                        <p>{"(Don't worry, it takes less than 5 minutes)"}</p>
                    </div>

                    <div className="w-full max-w-full grid grid-cols-6 gap-4 mb-5 self-center" style={{width: "70%"}}>
                        <div className="col-span-3 p-2">
                            <div className="mb-3 flex items-center">
                                <FaBriefcase size={25} className="mr-3 text-primary"/>
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
                                <TbTruckDelivery size={25} className="mr-3 text-primary"/>
                                <span>
                                    <span className="text-lg font-bold">3. Shipping Details</span>
                                    <p>Configure your shipping information</p>
                                </span>
                            </div>

                            <div className="mb-3 flex items-center">
                                <FaGlobeAfrica size={25} className="mr-3 text-primary"/>
                                <span>
                                    <span className="text-lg font-bold">4. Price Formula</span>
                                    <p>Setup your profit margin</p>
                                </span>
                            </div>

                            <div className="mb-3 flex items-center">
                                <AiFillCreditCard size={25} className="mr-3 text-primary"/>
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
                            <img src="/get-started.jpg"/>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link legacyBehavior href={'/quickstart/1'}>
                            <button className="btn btn-primary px-10 font-extrabold">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default QuickStart