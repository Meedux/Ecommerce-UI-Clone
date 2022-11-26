import React, { useState } from 'react'
import { BsEmojiHeartEyes } from 'react-icons/bs'
import { FaUser, FaUserCog } from 'react-icons/fa'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'

const Subscription = () => {
  const [ btn, setBtn ] = useState("m")
  const [ show, setShow ] = useState(false)
  return (
    <>
      <main className="container p-5">
        <p className="text-xl text-start font-bold mb-5">
          My Subscription
        </p>

        <div className="grid grid-cols-6 gap-4 mb-5">
          <div className="col-span-2 card bg-primary shadow-lg">
            <div className="card-body">
              <div className="w-full max-w-full flex justify-between items-center mb-5">
                <span className='text-white font-bold'>
                  Active Subscription
                </span>

                <span className='text-white font-extrabold text-2xl'>
                  Free
                </span>
              </div>

              <div className='pl-3 mb-5'>
                <ul>
                  <li className='text-white text-sm list-disc'>Support: <span className='font-bold text-white'>Tickets and Chat</span></li>
                  <li className="text-white text-sm list-disc">Price & Stock sync every 24h</li>
                  <li className="text-white text-sm list-disc">Integrations available: <span className='font-bold text-white'>All</span></li>
                  <li className="text-white text-sm list-disc">Premium Products: <span className='font-bold text-white'>NO</span></li>
                </ul>
              </div>

              <div className="w-full max-w-full flex justify-center">
                <BsEmojiHeartEyes size={40} style={{color: 'white'}}/>
              </div>
            </div>
          </div>

          <div className="col-span-4 grid grid-cols-4 gap-4">
            <div className="col-span-4 card-compact card bg-white shadow-lg">
                <div className="card-body flex justify-center flex-col items-center">
                    <span className='text-xl font-bold'><span className='text-3xl text-success font-extrabold'>0</span>/500</span>
                    <span className='text-xl'>Products Imported</span>
                </div>
            </div>
            <div className="col-span-2 card-compact card bg-white shadow-lg">
              <div className="card-body flex flex-row justify-around items-center">
                <span className='text-xl font-bold'><span className='text-3xl font-extrabold text-primary'>1</span>/1</span>
                <span className='text-xl'>Store(s) Available</span>
              </div>
            </div>
            <div className="col-span-2 card bg-white shadow-lg">
              <div className="card-body flex flex-row justify-around items-center">
                <FaUserCog size={40} style={{color: '#45C939'}}/>
                <span className='text-xl flex flex-col'>
                  <span className='text-xl'>Support SLA: <span className='font-bold'>24 Hours</span></span>
                  <span className='text-xl font-bold'>24x7</span>
                </span>
              </div>
            </div>
          </div>
        </div>


        <div className="card bg-white shadow-lg" style={{widht: '75vw'}}>
          <div className="card-body">
            <div className="w-full max-w-full mb-8 flex flex-col justify-center items-center">
              <span className='text-3xl font-extrabold mb-3'>Select a plan and Start your 7-day FREE trial</span>
              <span className='text-lg'>Choose Elite to get a 15% discount on over 1 million products</span>
            </div>

            <div className="mb-5 w-full max-w-full flex flex-col justify-center items-center">
              <div className="btn-group mb-5">
                <button className={`btn ${btn === 'm' ? '' : 'btn-outline'} btn-primary smooth`} onClick={() => { setBtn("m") }}>Monthly</button>
                <button className={`btn ${btn === 'a' ? '' : 'btn-outline'} btn-primary smooth`} onClick={() => { setBtn("a") }}>Annually</button>
              </div>

              <div className='flex w-full max-w-full justify-center items-center'>
                <input type="text" className='input h-[2.5rem] px-6 w-[30%] mr-5' placeholder='Coupon'/>
                <button className="btn btn-primary text-white">Apply!</button>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-4 w-full max-w-full">
              <div className="card col-span-2 border border-gray-300 rounded-lg shadow-lg">
                <div className="card-body">
                  <div className="mt-3 flex flex-col justify-center items-center mb-5">
                    <span className='text-4xl text-gray-500 mb-3'>Standard</span>
                    <span className="text-3xl text-gray-500">$<span className='text-6xl font-extrabold'>{ btn === "m" ? 24 : btn === "a" && 19.08 }</span>/mo</span>
                  </div>

                  <div className={`mb-5 flex flex-col justify-center items-center ${btn === "m" ? "hidden" : ""}`}>
                    <span className="text-base text-ecomgray">$229 billed yearly</span>
                    <span className="text-base text-ecomgray font-extrabold">{"(20% off)"}</span>
                  </div>

                  <div className='flex flex-col justify-center items-center mb-5'>
                    <button className="btn bg-ecomgray border-none py-1 shadow-lg mb-2 text-sm">START 7 DAY FREE TRIAL</button>
                    <span className='text-sm text-ecomgray'>You will get charged only when the trial expires.</span>
                  </div>

                  <div className='flex flex-col justify-center items-center'>
                    <ul>
                      <li className='text-ecomgray text-xl'><span className='text-sm p-1 bg-ecomgray text-white rounded-lg mr-4'>0%</span>Products Price Discount</li>
                      <li className='text-ecomgray'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Pushed products: <span className="font-bold">500</span></li>
                      <li className='text-ecomgray'><ImCheckboxUnchecked className='mr-4 inline' style={{color: "#5C6389"}}/>Premium Products: <span className="font-bold">NO</span></li>
                      <li className='text-ecomgray'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Transaction Free: <span className="font-bold">3%</span></li>
                      <li className='text-ecomgray'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Connected Stores: <span className="font-bold">1</span></li>
                      <span className={`${show ? "" : "hidden"} smooth`}>
                        <li className='text-ecomgray'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Support: <span className="font-bold">Tickets and Chat</span></li>
                        <li className='text-ecomgray'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Support SLA: <span className="font-bold">12 hours 24x7</span></li>
                        <li className='text-ecomgray'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Automatic Ordering</li>
                        <li className='text-ecomgray'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Price & Stock sync instant</li>  
                        <li className='text-ecomgray'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Auto-import tracking</li>
                        <li className='text-ecomgray'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Integrations available: <span className="font-bold">All</span></li>
                      </span>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card col-span-2 border border-gray-300 rounded-lg shadow-lg">
                <div className="card-body">
                  <div className="mt-3 flex flex-col justify-center items-center mb-5">
                    <span className='text-4xl text-primary mb-3'>Pro</span>
                    <span className="text-3xl text-primary">$<span className='text-6xl font-extrabold'>{ btn === "m" ? 47 : btn === "a" && 35.25 }</span>/mo</span>
                  </div>

                  <div className={`mb-5 flex flex-col justify-center items-center ${btn === "m" ? "hidden" : ""}`}>
                    <span className="text-base text-primary">$423 billed yearly</span>
                    <span className="text-base text-primary font-extrabold">{"(25% off)"}</span>
                  </div>

                  <div className='flex flex-col justify-center items-center mb-5'>
                    <button className="btn btn-primary border-none py-1 shadow-lg mb-2 text-sm">START 7 DAY FREE TRIAL</button>
                    <span className='text-sm text-ecomgray'>You will get charged only when the trial expires.</span>
                  </div>

                  <div className='flex flex-col justify-center items-center'>
                    <ul>
                      <li className='text-primary text-xl'><span className='text-sm p-1 bg-primary text-white rounded-lg mr-4'>5%</span>Products Price Discount</li>
                      <li className='text-primary'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Pushed products: <span className="font-bold">10,000</span></li>
                      <li className='text-primary'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Premium Products: <span className="font-bold">Yes</span></li>
                      <li className='text-primary'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Transaction Free: <span className="font-bold">2%</span></li>
                      <li className='text-primary'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Connected Stores: <span className="font-bold">3</span></li>
                      <span className={`${show ? "" : "hidden"} smooth`}>
                        <li className='text-primary'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Support: <span className="font-bold">Tickets and Chat</span></li>
                        <li className='text-primary'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Support SLA: <span className="font-bold">4 hours 24x7</span></li>
                        <li className='text-primary'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Automatic Ordering</li>
                        <li className='text-primary'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Price & Stock sync instant</li>  
                        <li className='text-primary'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Auto-import tracking</li>
                        <li className='text-primary'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Integrations available: <span className="font-bold">All</span></li>
                      </span>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card col-span-2 border border-gray-300 rounded-lg shadow-lg">
                <div className="card-body">
                <div className="mt-3 flex flex-col justify-center items-center mb-5">
                    <span className='text-4xl text-violetish mb-3'>Elite</span>
                    <span className="text-3xl text-violetish">$<span className='text-6xl font-extrabold'>{ btn === "m" ? 78 : btn === "a" && 54.67 }</span>/mo</span>
                  </div>

                  <div className={`mb-5 flex flex-col justify-center items-center ${btn === "m" ? "hidden" : ""}`}>
                    <span className="text-base text-primary">$656 billed yearly</span>
                    <span className="text-base text-primary font-extrabold">{"(33% off)"}</span>
                  </div>

                  <div className='flex flex-col justify-center items-center mb-5'>
                    <button className="btn bg-violetish border-none py-1 shadow-lg mb-2 text-sm">START 7 DAY FREE TRIAL</button>
                    <span className='text-sm text-ecomgray'>You will get charged only when the trial expires.</span>
                  </div>

                  <div className='flex flex-col justify-center items-center'>
                    <ul>
                      <li className='text-violetish text-xl'><span className='text-sm p-1 bg-violetish text-white rounded-lg mr-4'>15%</span>Products Price Discount</li>
                      <li className='text-violetish'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Pushed products: <span className="font-bold">30,000</span></li>
                      <li className='text-violetish'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Premium Products: <span className="font-bold">Yes</span></li>
                      <li className='text-violetish'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Transaction Free: <span className="font-bold">1%</span></li>
                      <li className='text-violetish'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Connected Stores: <span className="font-bold">10</span></li>
                      <span className={`${show ? "" : "hidden"} smooth`}>
                        <li className='text-violetish'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Support: <span className="font-bold">Tickets and Chat</span></li>
                        <li className='text-violetish'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Support SLA: <span className="font-bold">15 mins 24x7</span></li>
                        <li className='text-violetish'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Automatic Ordering</li>
                        <li className='text-violetish'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Price & Stock sync instant</li>  
                        <li className='text-violetish'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Auto-import tracking</li>
                        <li className='text-violetish'><ImCheckboxChecked className='mr-4 inline' style={{color: "#39B54A"}}/>Integrations available: <span className="font-bold">All</span></li>
                      </span>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full flex justify-center">
              <button className='btn btn-outline' onClick={() => { setShow(!show) }}>{show ? "Show less" : "Show More"}</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Subscription