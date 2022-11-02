import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const One = () => {
  const [ show, setShow ] = useState(false)
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
                        <li data-content="🚀" className="step step-primary font-extrabold">Get Started</li>
                        <li data-content="1" className="step step-primary text-primary font-extrabold">Connect Your Store</li>
                        <li data-content="2" className="step font-extrabold">Select Plan</li>
                    </ul>
                </div>

                <div className="card-body justify-center bg-cardgray">
                  <div className="mt-10 text-center items-center mb-5">
                        <h1 className="text-4xl mb-3 font-bold">Right, here we go, let's add a new store!</h1>
                        <p>Select below your store's platform to integrate it with AppScenic</p>
                  </div>

                  <div className="w-full max-w-full grid grid-cols-8 gap-4 mb-5 self-center">
                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <figure className="pt-10 pr-10 p-5">
                        <Image src='/shopify.png' height={165} width={130}/>
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">The ecommerce platform of the moment</h2>
                        <p className='mb-5'>Having your own ecommerce website has never been easier, faster, or more scalable.</p>
                        <div className="card-actions">
                          <button className="btn btn-primary">Connect Store</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <figure className="pt-14 pr-10 p-5">
                        <Image src='/woocommerce.png' height={400} width={220}/>
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">The #1 open-source ecommerce solution</h2>
                        <p className='mb-5'>An ecommerce platform built on WordPress, WooCommerce helps you set up a store in minutes.</p>
                        <div className="card-actions">
                          <button className="btn btn-primary">Connect Store</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <figure className="pt-10 pb-0 pr-10 p-5">
                        <Image src='/wix.png' height={100} width={100}/>
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">A world-class website builder</h2>
                        <p className='mb-5'>This is the platform that gives you the freedom to create, design, manage and develop a unique online store.</p>
                        <div className="card-actions">
                          <button className="btn btn-primary">Connect Store</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <figure className="pt-10 pr-10 p-5">
                        <Image src="/ebay.png" width={80} height={100}/>
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">The world's online marketplace</h2>
                        <p className='mb-5'>With eBay, it's easy to set up a store that tells a story and represents your brand.</p>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-outline">Get Notified</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${show ? "" : "hidden"} grid grid-cols-10 gap-4 w-full max-w-full self-center mb-5`}>
                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <div className="text-end mb-3">
                        <p className="text-grey p-5">COMING SOON</p>
                      </div>
                      <figure className="pt-0 pr-10 p-5">
                        <Image src="/bigcommerce.png" width={170} height={100}/>
                      </figure>
                      <div className="card-body">
                        <p className='mb-5'>An ecommerce platform that gives you limitless possibilities to build, innovate and grow.</p>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-outline">Get Notified</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <div className="text-end mb-3">
                        <p className="text-grey p-5">COMING SOON</p>
                      </div>
                      <figure className="pt-0 pr-10 p-5">
                        <Image src="/amazon.png" width={80} height={100}/>
                      </figure>
                      <div className="card-body">
                        <p className='mb-5'>With Amazon, you can reach hundreds of millions of customers and build a powerful brand.</p>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-outline">Get Notified</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <div className="text-end mb-3">
                        <p className="text-grey p-5">COMING SOON</p>
                      </div>
                      <figure className="pt-0 pr-10 p-5">
                        <Image src="/magento.png" width={100} height={100}/>
                      </figure>
                      <div className="card-body">
                        <p className='mb-5'>Adobe Commerce platform gives you endless flexibility and scalability.</p>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-outline">Get Notified</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <div className="text-end mb-3">
                        <p className="text-grey p-5">COMING SOON</p>
                      </div>
                      <figure className="pt-0 pr-10 p-5">
                        <Image src="/opencart.png" width={130} height={100}/>
                      </figure>
                      <div className="card-body">
                        <p className='mb-5'>OpenCart free platform has everything you need to create, scale and run your business.</p>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-outline">Get Notified</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <div className="text-end mb-3">
                        <p className="text-grey p-5">COMING SOON</p>
                      </div>
                      <figure className="pt-0 pr-10 p-5">
                        <Image src="/walmart.png" width={130} height={100}/>
                      </figure>
                      <div className="card-body">
                        <p className='mb-5'>The world's largest omnichannel has big ideas and a bright future.</p>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-outline">Get Notified</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${show ? "" : "hidden"} grid grid-cols-10 gap-4 w-full max-w-full self-center mb-5`}>
                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <div className="text-end mb-3">
                        <p className="text-grey p-5">COMING SOON</p>
                      </div>
                      <figure className="pt-0 mb-1 pr-10 p-5">
                        <Image src="/prestashop.png" width={300} height={100}/>
                      </figure>
                      <div className="card-body">
                        <p className='mb-5'>PrestaShop is an innovative ecommerce solution to build an online store</p>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-outline">Get Notified</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <div className="text-end mb-3">
                        <p className="text-grey p-5">COMING SOON</p>
                      </div>
                      <figure className="pt-0 pr-10 p-5">
                        <Image src="/3dcart.png" width={70} height={100}/>
                      </figure>
                      <div className="card-body">
                        <p className='mb-5'>Shift4Shop makes it easy to build the perfect website and start selling your products.</p>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-outline">Get Notified</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <div className="text-end mb-3">
                        <p className="text-grey p-5">COMING SOON</p>
                      </div>
                      <figure className="pt-0 pr-10 p-5">
                        <Image src="/ecwid.png" width={40} height={100}/>
                      </figure>
                      <div className="card-body">
                        <p className='mb-5'>Ecwid offers free ecommerce solutions to unlock your store's potential in a matter of minutes.</p>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-outline">Get Notified</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <div className="text-end mb-3">
                        <p className="text-grey p-5">COMING SOON</p>
                      </div>
                      <figure className="pt-0 mb-2 pr-10 p-5">
                        <Image src="/squarespace.png" width={250} height={100}/>
                      </figure>
                      <div className="card-body">
                        <p className='mb-5'>This is an all-in-one ecommerce platform that has everything to power your online store.</p>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-outline">Get Notified</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <div className="text-end mb-3">
                        <p className="text-grey p-5">COMING SOON</p>
                      </div>
                      <figure className="pt-0 pr-10 p-5">
                        <Image src="/volusion.png" width={45} height={100}/>
                      </figure>
                      <div className="card-body">
                        <p className='mb-5'>Volusion's ecommerce solution lets you easily create, manage and expand your store.</p>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-outline">Get Notified</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${show ? "" : "hidden"} grid grid-cols-10 justify-item-center gap-4 w-full max-w-full self-center mb-5`}>
                    <div className="col-span-2 card bg-white card-compact rounded-lg shadow-lg">
                      <div className="text-end mb-3">
                        <p className="text-grey p-5">COMING SOON</p>
                      </div>
                      <figure className="pt-0 pr-10 p-5">
                        <Image src="/etsy.png" width={45} height={100}/>
                      </figure>
                      <div className="card-body">
                        <p className='mb-5'>Etsy is a global online marketplace, where people come together to make, sell, buy and collect unique items</p>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-outline">Get Notified</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-center items-center">
                    <button className="btn btn-primary btn-outline" onClick={() => { setShow(!show) }}>
                      { show ? "Show Less" : "Show More" }
                    </button>
                  </div>

                  <div className='flex flex-col justify-center items-center text-center mb-5'>
                    <p className='mb-3'>Let us know if you would like to see any other platform integrated.</p>
                    <button className='btn btn-primary btn-outline'>SUBMIT A REQUEST</button>
                  </div>

                  <div className='flex justify-end items-center p-4'>
                    <Link href={'/quickstart/2'}>
                      <button className="btn btn-primary">Next</button>
                    </Link>
                  </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default One