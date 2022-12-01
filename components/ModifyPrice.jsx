import React, { useEffect, useRef, useState } from 'react'

const ModifyPrice = ({ edit, setEdit }) => {
    const checkbox = useRef()
    useEffect(() => {
        checkbox.current.checked = edit
    }, [edit])

    return (
        <>
            <input type="checkbox" ref={checkbox} id="edit-price" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-white max-w-[30%]">
                    <div className="card card-compact bg-white shadow-2xl mb-5">
                        <div className="card-body">
                            <h1 className="text-lg font-bold mb-5">Modify the Price Manually</h1>
                            <p className='mb-4'>The price will no longer be automatically calculated by the assigned formula. You will need to ensure that the price remains profitable.</p>

                            <span className='flex flex-col mb-5'>
                                <span className='text-xs text-gray-400'>Selling Price</span>
                                <input type="text" className='px-4 outline-none py-1 border border-gray-400 rounded-sm'/>
                            </span>

                            <p className='mb-5'>{"Minimum advertising price(MAP): $100.00"}</p>

                            <span className='flex flex-col mb-5'>
                                <span className='text-xs text-gray-400'>Markup on Sale Price</span>
                                <input type="text" className='px-4 outline-none py-1 border border-gray-400 rounded-sm'/>
                            </span>

                            <p className='mb-10'>{"Markup Price: $100.00"}</p>

                            <div className="flex">
                                <input type="checkbox" className="checkbox mr-2"/>
                                <p>Switch back to formula prices {"(1% formula selected)"}</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="p-1 flex justify-end items-center">
                        <button className="bg-white border-none p-2 shadow-2xl rounded-lg mr-3" onClick={() => setEdit(!edit)}>Cancel</button>
                        <button className="bg-primary text-white font-bold border-none p-2 shadow-2xl rounded-lg">Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModifyPrice