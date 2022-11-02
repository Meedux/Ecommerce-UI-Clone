import React from 'react'
import { FaCogs } from 'react-icons/fa'
import Link from 'next/link'

const Four = () => {
  return (
    <>
        <main className="p-5 flex flex-col justify-center items-center" style={{width: "96vw"}}>
            <div className="mb-5 max-w-full w-full">
                <p className="text-xl font-bold">
                    QUICK START
                </p>
            </div>

            <div className='card shadow-lg rounded-lg bg-white' style={{width: "90vw"}}>
                <div className="card-body p-5 max-w-full w-full">
                    <ul className="steps">
                        <li data-content="3" className="step step-primary font-extrabold">Shipping Details</li>
                        <li data-content="4" className="step step-primary font-extrabold"><span className="flex items-center text-primary"><FaCogs size={30}  className="mr-3"/>Price Formula</span></li>
                        <li data-content="5" className="step font-extrabold">Wallet Details</li>
                    </ul>
                </div>

                <div className="card-body items-center bg-cardgray">
                    <h1 className="text-4xl text-center font-bold mb-5">Specify your profit margin!</h1>
                    <p className="text-center text-lg mb-8">
                      Set up the default price formula for your store
                    </p>

                    <div className='mb-5' style={{width: "70%"}}>
                      <p className="mb-5 text-center" >This is your default pricing formula</p>
                      <div className="flex justify-center max-w-full w-full">
                        <input type="text" className="px-1 outline-none border max-w-full border-gray-400 rounded-lg py-0 w-[40%]" placeholder='Profit%'/>
                        <div className="divider divider-horizontal">+</div>
                        <input type="text" className="px-1 outline-none border max-w-full border-gray-400 rounded-lg w-[40%]" placeholder='Fixed Price USD'/>
                      </div>
                    </div>

                    <div className="mb-10" style={{width: "60%"}}>
                      <div className="form-control flex-row mb-3">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">{"Use compare at price (this is a sale price formula)"}</span> 
                        </label>
                      </div>
                      <div className="form-control flex-row mb-3">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">Include shipping cost to main location in the product price</span> 
                        </label>
                      </div>
                      <div className="form-control flex-row mb-3">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">{"If product has RRP and Selling Price < RRP, set the Selling Price to equal RRP (Retail Recommended Price)"}</span> 
                        </label>
                      </div>

                      <p className="mb-3">{"*This is your default pricing formula. This formula applies only if you didn't assign a custom pricing formula to your products."}</p>
                      <p>{"*Don't worry, you'll be able to create more complex pricing formulas later, define price ranges and apply them to specific products or group of products."}</p>
                    </div>

                    <div className="w-full max-w-full flex justify-between">
                      <Link href={'/quickstart/3'}>
                        <button className="btn btn-outline btn-primary">Back</button>
                      </Link>
                      <Link href={'/quickstart/5'}>
                        <button className="btn btn-primary">Next</button>
                      </Link>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Four