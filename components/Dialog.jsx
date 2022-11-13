import React, { useEffect, useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FaFlagUsa, FaShippingFast, FaBoxOpen } from 'react-icons/fa'

const Dialogue = ({ items, id,  isOpen, setOpen }) => {
    const checkbox = useRef()
    const [ tab, setTab ] = useState(1) 
    const [ data, setData ] = useState({})
    useEffect(() => {
        checkbox.current.checked = isOpen
        items.forEach(item => {
            if(item.id === id){
                setData(item);
            }
        })
    }, [isOpen])


  return (
    <>
        <input type="checkbox" ref={checkbox} id="my-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box max-w-full w-[80%] indicator block" style={{ height: "90vh"}}>
        {/* <span className="indicator-item badge badge-secondary" onClick={() => setOpen(false)}>X</span>  */}
            <div className="flex justify-between mb-5">
                <span className="text-sm breadcrumbs">
                    <ul>
                        <li><a>Category</a></li> 
                        <li><a>Category</a></li> 
                        <li>Category</li>
                    </ul>
                </span>

                <span className="btn btn-primary btn-circle" htmlFor="modal" onClick={() => setOpen(false)}>X</span>
            </div>
            <div className="grid grid-cols-4 h-[60%] gap-4">
                <div className="col-span-2 max-h-[40%] h-full grid grid-cols-4 gap-4">
                    <div className="col-span-1 flex flex-col justify-center items-center">
                    <a href="#img-1" className='mb-3'><img src="https://placeimg.com/400/225/arch" alt="Shoes" width={100} height={100}/></a> 
                    <a href="#img-2" className='mb-3'><img src="https://placeimg.com/400/225/arch" alt="Shoes" width={100} height={100}/></a> 
                    <a href="#img-3" className='mb-3'><img src="https://placeimg.com/400/225/arch" alt="Shoes" width={100} height={100}/></a> 
                    <a href="#img-4"><img src="/img.jpg" alt="Shoes" width={100} height={100}/></a>
                    </div>
                    <div className="carousel mr-0 card   img-full col-span-3">
                        <figure className='h-full mr-0 mb-3 rounded-lg carousel-item' id='img-1'><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <figure className='h-full mr-0 mb-3 rounded-lg carousel-item' id='img-2'><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <figure className='h-full mr-0 mb-3 rounded-lg carousel-item' id='img-3'><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <figure className='h-full mr-0 mb-3 rounded-lg carousel-item' id='img-4'><img src="/img.jpg" alt="Shoes" /></figure>
                    </div>
                </div>
                <div className="col-span-2">
                    <p className="text-xl font-bold mb-5">{data.name}</p>

                    <div className='flex justify-between mb-5'>
                        <span className='flex flex-col'>
                            <span className="text-gray-400 text-sm">Supplier: </span>
                            <span className="font-extrabold text-primary">US-2022-1405</span>
                        </span>

                        <span className="flex">
                            <span className="text-gray-400 text-sm mr-1">From: </span>
                            <span className="font-extrabold text-primary"><FaFlagUsa size={20} /></span>
                        </span>
                    </div>

                    <div className='flex mb-2'>
                        <span className="p-2 bg-primary text-bold flex flex-col rounded-md">
                            <span className="text-white  font-extrabold text-sm">Best Price:</span>
                            <span className="text-white text-3xl font-extrabold">-15%</span>
                        </span>
                        <span className='p-2 bg-gray-300 flex items-center'>
                            <span className="mr-4">From:</span>
                            <span className="flex flex-col">
                                <span className="text-xl font-extrabold">{data.discountedPrice}</span>
                                <span className="text-lg text-gray-400 line-through">{data.originalPrice}</span>
                            </span>
                        </span>
                    </div>

                    <div className="mb-10">
                        <span className="font-extrabold text-success">{data.status}</span>
                    </div>

                    <div className='mb-10 flex flex-col text-sm'>
                        <p>Shipping to <span className="font-extrabold">United States</span></p>
                        <p className='flex items-center'><FaShippingFast  className='mr-1'/>{" 1 - 4 days ($20.82 first item, $60.12 per additional item, free shipping available*)"}</p>
                        <p className='flex items-center'><FaBoxOpen  className='mr-1'/>{"1 day avg. processing time"}</p>
                    </div>

                    <button className="btn btn-primary font-extrabold">IMPORT NOW</button>
                </div>
            </div>

            <div className='mt-[8rem]'>
                <div className='tabs mb-5 max-w-full justify-between w-full'>
                {/* Tabs */}
                    <span className={`tab  smooth font-bold text-lg border-b-info ${tab === 1 && "tab-active text-primary tab-bordered "}`} onClick={() => setTab(1)}>Description</span>
                    <span className={`tab  smooth font-bold text-lg border-b-info ${tab === 2 && "tab-active text-primary tab-bordered "}`} onClick={() => setTab(2)}>Specifications</span>
                    <span className={`tab  smooth font-bold text-lg border-b-info ${tab === 3 && "tab-active text-primary tab-bordered "}`} onClick={() => setTab(3)}>Product Variants</span>
                    <span className={`tab  smooth font-bold text-lg border-b-info ${tab === 4 && "tab-active text-primary tab-bordered "}`} onClick={() => setTab(4)}>Return Policy</span>
                    <span className={`tab  smooth font-bold text-lg border-b-info ${tab === 5 && "tab-active text-primary tab-bordered "}`} onClick={() => setTab(5)}>Supplier Policy</span>
                    <span className={`tab  smooth font-bold text-lg border-b-info ${tab === 6 && "tab-active text-primary tab-bordered "}`} onClick={() => setTab(6)}>Shipping</span>

                </div>


                <div className={`p-2 ${tab === 1 ? "" : "hidden"}`}>
                    <h1>Description</h1>
                </div>
                <div className={`p-2 ${tab === 2 ? "" : "hidden"}`}>
                    <h1>Specifications</h1>
                </div>
                <div className={`p-2 ${tab === 3 ? "" : "hidden"}`}>
                    <h1>Product Variants</h1>
                </div>
                <div className={`p-2 ${tab === 4 ? "" : "hidden"}`}>
                    <h1>Return Policy</h1>
                </div>
                <div className={`p-2 ${tab === 5 ? "" : "hidden"}`}>
                    <h1>Supplier Policy</h1>
                </div>
                <div className={`p-2 ${tab === 6 ? "" : "hidden"}`}>
                    <h1>Shipping</h1>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Dialogue