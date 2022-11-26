import React from 'react'
import CountryInput from '../../components/CountryInput'
import Link from 'next/link'
import { TbTruckDelivery } from 'react-icons/tb'

const Three = () => {
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
                        <li data-content="2" className="step step-primary font-extrabold">Get Started</li>
                        <li data-content="3" className="step step-primary font-extrabold flex"><span className="flex items-center text-primary"><TbTruckDelivery size={30} className='mr-3'/>Shipping Details</span></li>
                        <li data-content="4" className="step font-extrabold">Select Plan</li>
                    </ul>
                </div>

                <div className="card-body bg-cardgray">
                  <span className="text-4xl text-center font-bold mb-5">Select your main shipping location</span>
                  <div className="mb-5">
                    <div className="form-control">
                      <span className="text-lg text-center mb-3 ">
                        Select the country where most of your customers are located
                      </span>
                      <CountryInput />
                    </div>

                    <p className='mb-3'>Specifying where your most customers are located is important to ensure that AppScenic platform is showing indicative profits as close as possible to reality.</p>
                    <p className='mb-3'>Under View my products, the {"\"Your Profit (From)\""} column will take into consideration the costs for shipping to your main location.</p>
                    <p>Also, under {"\"Price Formula\""} you have the option to include the costs of shipping to your main location in the product price.</p>
                  </div>

                  <div className="mb-5">
                    <div className="form-control mb-4">
                      <label className="cursor-pointer mb-2">
                        <input type="checkbox" className="checkbox-primary mr-3"/>
                        <span className="font-bold">Do you also ship to other countries (internationally)?</span> 
                      </label>
                      <p>{"Tick this option if you intend to ship internationally; If you don't tick this option you'll be able to import only products that ship to your main location."}</p>
                    </div>

                    <p className='mb-5'><span className="font-bold text-lg">Example 1: </span>{"If your main location is the UK and you only sell to UK customers, then you don't need to tick this option and you will get access only to products that ship to the UK."}</p>
                    <p className='mb-5'><span className="font-bold text-lg">Example 2: </span>Example 2: If your main location is the UK but you also accept international orders, please tick this option. AppScenic platform will let you know in case you are trying to import a product that does not ship to your main location.</p>
                    <p>Also, please be aware that shipping internationally means you always need to ensure your profit margins are covering the shipping costs (which in most of the cases is different from country to country and supplier to supplier).</p>
                  </div>

                  <div className='mb-3'>
                    <h1 className='text-lg font-bold'>Please add a default phone number for your orders.</h1>
                    <p>{"This number will be sent to the shipping company only if the end customer doesn't fill in the phone field and the order can not be delivered."}</p>
                    <p className='mb-3'>We recommend making the phone number mandatory in your store to avoid situations when the shipping company can not reach the end customer.</p>
                    <input type="text" className='px-1 outline-none border max-w-full border-gray-400 rounded-lg' placeholder='Default Phone Number'/>
                  </div>

                  <div className="w-full max-w-full flex justify-between">
                    <Link href={'/quickstart/2'}>
                      <button className="btn btn-outline btn-primary">Back</button>
                    </Link>
                    <Link href={'/quickstart/4'}>
                      <button className="btn btn-primary">Next</button>
                    </Link>
                  </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Three