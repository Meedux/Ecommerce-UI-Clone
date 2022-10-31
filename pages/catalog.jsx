import React from 'react'
import { Listbox, Transition, Menu } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { BsFillFlagFill } from 'react-icons/bs'

const catalog = () => {
  const categories = [
      { name: "category 1", id: 1 },
      { name: "category 2", id: 2 },
      { name: "category 3", id: 3 },
      { name: "category 4", id: 4 },
      { name: "category 5", id: 5 },
  ]

  const countries = [
    { name: "Country 1" },
    { name: "Country 2" },
    { name: "Country 3" },
    { name: "Country 4" },
    { name: "Country 5" },
  ]

  const supplier = [
    { name: "Supplier 1" },
    { name: "Supplier 2" },
    { name: "Supplier 3" },
    { name: "Supplier 4" },
    { name: "Supplier 5" },
  ]

  const Cat = { name: "Categories" }
  const count = { name: "Set Country" }
  const [ cat, setCat ] = useState(Cat)

  return (
    <>
      <main className='p-5'>
          <span className='text-xl font-bold mb-5'>
            Products
          </span>
          <div className="card bg-white shadow-lg overflow-visible mb-6" style={{width: '90vw'}}>
            <div className="card-body justify-center">
              <div className='w-full p-2 mb-5'>
                <Listbox value={cat} onChange={setCat}> 
                  <div className="relative inline">
                    <Listbox.Button className=" bg-slate-200 border border-slate-400 w-1/6 p-1 rounded-l-lg">
                        {cat.name}
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options as="div" className="absolute block  w-1/6 text-center bg-white" style={{width: '14.2vw'}}>
                        {categories.map(item => (
                          <Listbox.Option
                            key={item.id}
                            className="hover:bg-slate-300 cursor-pointer list-none"
                            style={{width: '14.2vw'}}
                            value={item}
                          >
                            {({ active, selected }) => (
                              <span className={`p-2 w-full text-center`}>
                                {item.name}
                              </span>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
                <input type="text" placeholder='Search' className='outline-none p-1 rounded-r-lg border border-slate-400 w-4/5'/>
              </div>

              <div className='grid grid-cols-12 gap-4 items-center justify-items-center mb-5' style={{width: '90vw'}}>
                  <div className="col-span-2 dropdown justify-self-center border border-slate-400 p-2 rounded-xl">
                    <label tabIndex={0} className="p-2 px-4  text-md text-gray-500 rounded-lg cursor-pointer">Select a Country</label>
                    <ul className="dropdown-content menu p-2 top-8 shadow rounded-box bg-white" tabIndex={0} style={{width: '13rem'}}>
                      {countries.map((item, index) => (
                        <li key={index}>
                          <div className="form-control">
                            <label className="label cursor-pointer">
                              <input type="checkbox" className="checkbox mr-4" />
                              <span className="label-text font-bold">{item.name}</span> 
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-2 dropdown justify-self-center border border-slate-400 p-2 rounded-xl">
                    <label tabIndex={0} className="p-2 px-4  text-md text-gray-500 rounded-lg w-full cursor-pointer">Ships to</label>
                    <ul className="dropdown-content menu p-2 top-8 shadow rounded-box bg-white" tabIndex={0} style={{width: '13rem'}}>
                      {countries.map((item, index) => (
                        <li key={index}>
                          <div className="form-control">
                            <label className="label cursor-pointer">
                              <input type="checkbox" className="checkbox mr-4" />
                              <span className="label-text font-bold">{item.name}</span> 
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-2">
                    <input type="number" placeholder='Max Time Delivery(Days)' className='input input-bordered'/>
                  </div>

                  <div className="col-span-2 dropdown justify-self-center border border-slate-400 p-1 rounded-xl">
                    <label tabIndex={0} className="p-2 px-4  text-md text-gray-500 rounded-lg w-full cursor-pointer">Supplier</label>
                    <ul className="dropdown-content menu p-2 top-8 shadow rounded-box bg-white" tabIndex={0} style={{width: '13rem'}}>
                      {supplier.map((item, index) => (
                        <li key={index}>
                          <div className="form-control">
                            <label className="label cursor-pointer">
                              <input type="checkbox" className="checkbox mr-4" />
                              <span className="label-text font-bold">{item.name}</span> 
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-2">
                    <input type="number" placeholder='Min Price ($)' className='input input-bordered input-md' style={{width: '10rem'}}/>
                  </div>

                  <div className="col-span-2">
                    <input type="number" placeholder='Max Price ($)' className='input input-bordered input-md mr-10' style={{width: '8.5rem'}}/>
                  </div>
              </div>

              <div className='flex justify-start items-center mb-5'>
                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">In Stock</span> 
                  </label>

                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">Premium Only</span> 
                  </label>

                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">Free Shipping</span> 
                  </label>

                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">Free Returns</span> 
                  </label>

                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">Newest Products</span> 
                  </label>

                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">Exclude Adult</span> 
                  </label>

                  <label className="label cursor-pointer mr-5">
                    <input type="checkbox" className="checkbox mr-2 checkbox-primary" />
                    <span className="label-text">Exclude already imported products</span> 
                  </label>
              </div>
            </div>
          </div>

          <div style={{width: '90vw'}} className="grid grid-cols-8 gap-4">
              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>
              
              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>

              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>

              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>

              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>

              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>
              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>
              
              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>

              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>

              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>

              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>

              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>

              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>
              
              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>

              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>

              <div className='col-span-2 card bg-white shadow-xl card-compact'>
                  <figure><img src="/img.jpg"/></figure>
                  <div className="card-body">
                    <h2 className="card-title mb-3">Shoes!</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>Generic Supplier ID</span>
                        <div className="badge badge-success p-4 text-white">In Stock</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">$10.00</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>
              </div>
          </div>
      </main>
    </>
  )
}

export default catalog