import React, { useEffect, useRef } from 'react'
import { Dialog } from '@headlessui/react'
import { FaFlagUsa } from 'react-icons/fa'

const Dialogue = ({ item, isOpen, setOpen }) => {
    const checkbox = useRef()

    useEffect(() => {
        checkbox.current.checked = isOpen
    }, [isOpen])


  return (
    <>
        <input type="checkbox" ref={checkbox} id="my-modal" className="modal-toggle" />
        <div className="modal">
        
        <div className="modal-box max-w-full w-[80%]" style={{ height: "90vh"}}>
            <div className="flex justify-between mb-5">
                <span className="text-sm breadcrumbs">
                    <ul>
                        <li><a>Category</a></li> 
                        <li><a>Category</a></li> 
                        <li>Category</li>
                    </ul>
                </span>

                <span className="btn btn-primary" htmlFor="modal" onClick={() => setOpen(false)}>X</span>
            </div>
            <div className="grid grid-cols-4 h-[60%] gap-4">
                <div className="col-span-2 card image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                </div>
                <div className="col-span-2">
                    <p className="text-xl font-bold mb-5">Item Title</p>

                    <div className='flex justify-between mb-5'>
                        <span className='flex flex-col'>
                            <span className="text-gray-400">Supplier: </span>
                            <span className="font-extrabold text-primary">US-2022-1405</span>
                        </span>

                        <span className="flex flex-col">
                            <span className="text-gray-400">From: </span>
                            <span className="font-extrabold text-primary"><FaFlagUsa size={40} /></span>
                        </span>
                    </div>

                    <div className='flex mb-2'>
                        <span className="p-5 bg-primary text-bold flex flex-col rounded-md">
                            <span className="text-white text-lg font-extrabold">Best Price:</span>
                            <span className="text-white text-xl font-extrabold">-15%</span>
                        </span>
                        <span className='p-5 bg-gray-300 flex items-center'>
                            <span className="mr-4">From:</span>
                            <span className="flex flex-col">
                                <span className="text-xl font-extrabold">$7.00</span>
                                <span className="text-lg text-gray-400 line-through">$10.00</span>
                            </span>
                        </span>
                    </div>

                    <div className="mb-10">
                        <span className="font-extrabold text-success">In Stock</span>
                    </div>

                    <div className='mb-10 flex flex-col'>
                        <p>Shipping to <span className="font-extrabold">United States</span></p>
                        <p>{" 1 - 4 days ($20.82 first item, $60.12 per additional item, free shipping available*)"}</p>
                        <p>{"1 day avg. processing time"}</p>
                    </div>

                    <button className="btn btn-primary font-extrabold">IMPORT NOW</button>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Dialogue