import React from 'react'
import { Listbox, Transition, Menu } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { BsFillFlagFill } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import Dialogue from '../components/Dialog'

const Catalog = () => {
  const [ hover, setHover ] = useState(0)
  const [ id, setId] = useState(0)
  
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

  const items = [
    {
      id: 1,
      img: "/img.jpg",
      name: "Shoes!",
      supplierID: "12345-67890",
      status: "In Stock",
      discountedPrice: "$7.00",
      originalPrice: "$14.00",
    },

    {
      id: 2,
      img: "/img.jpg",
      name: "Totally Legit Shoes",
      supplierID: "12345-67890",
      status: "In Stock",
      discountedPrice: "$7.00",
      originalPrice: "$14.00",
    },

    {
      id: 3,
      img: "/img.jpg",
      name: "Very Expensive Shoe",
      supplierID: "12345-67890",
      status: "In Stock",
      discountedPrice: "$99.9",
      originalPrice: "$500.00",
    },
  ]

  // const item = {
  //   img: "/img.jpg",
  //   name: "Shoes!",
  //   supplierID: "",
  //   status: "In Stock",
  //   price: "$10.00",
  //   discountedPrice: "$7.00",
  //   hovered: false
  // }

  const defcat = { name: "Categories" }
  const count = { name: "Set Country" }
  const [ cat, setCat ] = useState(defcat)
  const [ open, setOpen ] = useState(false)

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
                    <Listbox.Button className=" bg-slate-200 border text-start pl-2 border-slate-400 w-1/6 p-1 rounded-l-lg">
                        {cat.name}
                    </Listbox.Button>
                      <Listbox.Options as="div" className="absolute block z-30 shadow-2xl w-1/6 text-center bg-white" style={{width: '14.2vw'}}>
                        {categories.map(item => (
                          <Listbox.Option
                            key={item.id}
                            className="hover:bg-slate-300 text-start bg-white p-2 cursor-pointer list-none"
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
                  </div>
                </Listbox>
                <input type="text" placeholder='Search' className='outline-none p-1 rounded-r-lg border border-slate-400 w-4/5'/>
              </div>

              <div className='grid grid-cols-12 gap-4 items-center justify-items-center mb-5 w-full max-w-full' style={{width: '90vw'}}>
                  <div className="col-span-2 dropdown max-w-full w-full  border border-slate-400 rounded-xl px-4 py-1">
                    <label tabIndex={0} className="block text-md w-full text-gray-500 rounded-lg cursor-pointer">Select a Country</label>
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

                  <div className="col-span-2 dropdown max-w-full w-full border border-slate-400 p-1 rounded-xl">
                    <label tabIndex={0} className=" px-4 block text-md text-gray-500 rounded-lg max-w-full w-full cursor-pointer">Ships to</label>
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

                  <div className="col-span-2 max-w-full w-full">
                    <input type="number" placeholder='Max Time Delivery(Days)' className='input w-full rounded-xl bg-white border border-slate-400 px-2 h-[2rem]'/>
                  </div>

                  <div className="col-span-2 max-w-full w-full dropdown border border-slate-400 p-1 rounded-xl">
                    <label tabIndex={0} className="block px-4  text-md text-gray-500 rounded-lg w-full cursor-pointer">Supplier</label>
                    <ul className="dropdown-content menu p-2 top-8 shadow rounded-box bg-white" tabIndex={0}>
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

                  <div className="col-span-2 max-w-full w-full">
                    <input type="number" placeholder='Min Price ($)' className='input rounded-xl w-full bg-white border border-slate-400 px-2 h-[2rem]'/>
                  </div>

                  <div className="col-span-2 max-w-full w-full">
                    <input type="number" placeholder='Max Price ($)' className='input rounded-xl w-full bg-white border border-slate-400 px-2 h-[2rem]' />
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

              <div className="w-full max-w-full grid grid-cols-6 gap-4">
                <div className="col-span-2 card bg-base-100 shadow-xl image-full">
                  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Furniture</h2>
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="max-w-full w-full grid grid-cols-4 gap-4 mb-5">
                    <div className="col-span-2 card bg-base-100 shadow-xl image-full">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title">Home, Tools & Garden</h2>
                      </div>
                    </div>
                    <div className="col-span-2 card bg-base-100 shadow-xl image-full">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body items-end text-end">
                        <h2 className="card-title">Pets</h2>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-full w-full card bg-base-100 shadow-xl image-full">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title">Fashion</h2>
                      </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="max-w-full w-full card bg-base-100 shadow-xl image-full  mb-5">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body items-end text-end">
                        <h2 className="card-title">Jewelry and Watches</h2>
                      </div>
                  </div>

                  <div className="max-w-full w-full grid grid-cols-4 gap-4">
                    <div className="col-span-2 card bg-base-100 shadow-xl image-full">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title">Premium</h2>
                      </div>
                    </div>
                    <div className="col-span-2 card bg-base-100 shadow-xl image-full">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body items-center justify-end">
                        <h2 className="card-title">Show More</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{width: '90vw'}} className="grid grid-cols-8 gap-4">
              {items.map(item => (
                <div key={item.id} htmlFor="modal"  className='col-span-2 card relative overflow-visible bg-white shadow-xl card-compact'>
                  <span className={`left-[50%] top-[20%] ${hover == item.id ? "" : 'hidden'} absolute`}><AiFillEye size={100} className="text-primary relative left-[-50%] top-[-20%]"/></span>
                  <figure htmlFor="modal" onClick={() => {setOpen(!open) 
                  setId(item.id)}}  onMouseEnter={() => setHover(item.id)} onMouseLeave={() => setHover(0)}><img src={`${item.img}`}/></figure>
                  
                  <div className="card-body bg-white z-30 ">
                    
                    <h2 className="card-title mb-3">{item.name}</h2>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-500'>{item.supplierID}</span>
                        <div className="badge badge-success p-4 text-white">{item.status}</div>
                    </div>
                    <div className='flex flex-col justify-start mb-3'>
                        <span className='text-sm text-gray-500'>Item Cost</span>
                        <h1 className="text-xl font-bold">{item.discountedPrice}</h1>
                    </div>  
                    <div className='flex justify-between'>
                        <span>
                          <FaShippingFast />
                          <p className='text-xs text-gray-500'>2 - 7 Days</p>
                        </span>
                        <BsFillFlagFill size={25}/>
                    </div>
                  </div>

                  <div className={`bg-primary absolute z-10 max-w-full w-full smooth ${hover == item.id ? "top-[98%]" : "top-[65%]"} p-5 rounded-b-lg text-center font-bold text-white`}>IMPORT NOW</div>
                </div>
              ))}
          </div>

          <Dialogue items={items} id={id} isOpen={open} setOpen={setOpen} />
      </main>
    </>
  )
}

export default Catalog