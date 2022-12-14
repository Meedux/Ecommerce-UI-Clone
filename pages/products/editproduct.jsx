import Image from 'next/image'
import React, { useState } from 'react'
import US from 'country-flag-icons/react/1x1/US'
import { IoInformation, IoInformationCircle } from 'react-icons/io5'
import { BsPencilFill } from 'react-icons/bs'
import ModifyPrice from '../../components/ModifyPrice'
import { BiUndo, BiRedo } from 'react-icons/bi'
import { AiOutlineBold, AiOutlineItalic, AiOutlineUnderline, AiOutlineStrikethrough } from 'react-icons/ai'
import { TfiAngleDown } from 'react-icons/tfi'
import { VscTriangleDown } from 'react-icons/vsc'
import { ImParagraphLeft, ImParagraphCenter, ImParagraphRight, ImParagraphJustify } from 'react-icons/im'

// TODO Tomorrow: Add an Edit state for this page CUNT!

const Editproduct = () => {
  const [editState, setEditState] = useState(false)
  const [edit, setEdit] = useState(false)
  return (
    <>
      <main className="container p-5">
        <p className="flex items-center justify-between">
          <span className="text-xl font-bold mb-5">
            My Products / Edit Products
          </span>
          <span className='flex items-center'>
            <span className="text-sm cursor-pointer" onClick={() => setEditState(true)}>Edit</span>
            <span className="divider divider-horizontal mx-1">|</span>
            <span className="text-sm cursor-pointer" onClick={() => setEditState(false)}>Back</span>
          </span>
        </p>


        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-6">
            <div className="card bg-white rounded-lg shadow-lg overflow-visible mb-5">
              <div className="card-body">
                <h1 className="text-xl font-bold mb-3">Title</h1>
                <p className={`mb-7 ${editState ? 'hidden' : ''}`}>Shoes</p>
                <input type="text" className={`w-full p-2 outline-none border border-gray-300 rounded-md mb-7 ${editState ? '' : 'hidden'}`} />
 
                <h1 className="text-xl font-bold mb-3">Description</h1>
                <p className={`mb-7 ${editState ? 'hidden' : ''}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam explicabo saepe voluptatum libero maiores. Odit saepe ducimus ratione exercitationem error, iusto nesciunt consequuntur sint deserunt, inventore, autem cumque aliquam aperiam!
                </p>

                <div className={`mb-7 ${editState ? '' : 'hidden'}`}>
                  <div className="p-2 border border-gray-300 flex justify-start items-center">
                    <span className="mr-5">File</span>
                    <span className="mr-5">Edit</span>
                    <span className="mr-5">View</span>
                    <span className="mr-5">Insert</span>
                    <span className="mr-5">Format</span>
                    <span className="mr-5">Tools</span>
                    <span className="mr-5">Table</span>
                    <span className="mr-3">Help</span>
                  </div>

                  <div className="border border-gray-300 border-t-0 flex">
                    <span className="p-2 border border-y-0 border-l-0 border-r-gray-300 flex items-center">
                      <BiUndo size={30} className="mr-3"/>
                      <BiRedo size={30}/>
                    </span>
                    <span className="p-2 border border-y-0 border-l-0 border-r-gray-300 flex items-center">
                      <AiOutlineBold size={28} className="mr-3" />
                      <AiOutlineItalic size={28} className="mr-3" />
                      <AiOutlineUnderline size={28} className="mr-3" />
                      <AiOutlineStrikethrough size={28} className="mr-3" />
                    </span>
                    <span className="p-2 border border-y-0 border-l-0 border-r-gray-300 flex items-center">
                      <span className="mr-3 flex items-center">
                        <span className="mr-10">
                          System Font
                        </span>
                        <TfiAngleDown size={15}/>
                      </span>

                      <span className="mr-3 flex items-center">
                        <span className="mr-10">
                          12pt
                        </span>
                        <TfiAngleDown size={15}/>
                      </span>

                      <span className="mr-3 flex items-center">
                        <span className="mr-10">
                          Paragraph
                        </span>
                        <TfiAngleDown size={15}/>
                      </span>
                    </span>
                    <span className="p-5 border border-y-0 border-l-0 border-r-gray-300 flex items-center">
                      <ImParagraphLeft size={20} className="mr-5" />
                      <ImParagraphCenter size={20} className="mr-5" />
                      <ImParagraphRight size={20} className="mr-5" />
                      <ImParagraphJustify size={20} className="mr-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white rounded-lg shadow-lg overflow-visible mb-5">
              <div className="card-body">
                <h1 className="text-xl font-bold mb-3">Images</h1>
                <div className="flex overflow-x-auto items-center">
                  <Image src={'/img.jpg'} height={500} width={500} className="mr-3"/>
                  <Image src={'/img.jpg'} height={500} width={500} className="mr-3"/>
                  <Image src={'/img.jpg'} height={500} width={500} className="mr-3"/>
                  <Image src={'/img.jpg'} height={500} width={500} className="mr-3"/>
                </div>
              </div>
            </div>

            <div className="card bg-white rounded-lg shadow-lg overflow-visible mb-5">
              <div className="card-body">
                <div className="flex mb-5">
                  <div className="w-[50%]">
                    <h1 className="text-xl font-bold mb-3">Ships to</h1>
                    <p className='flex font-bold items-center'><US className='mr-3 h-[20px] w-[40px]'/>United States</p>
                  </div>
                  <div className="w-[50%]">
                    <h1 className="text-xl font-bold mb-3">Shipping Info</h1>
                    <p className="flex items-center justify-between mb-4">
                      <span className='w-[50%]'><span className="font-bold">Weight </span>1</span>
                      <span className='w-[50%] text-start'><span className="font-bold">Weight Unit </span>kg</span>
                    </p>

                    <p className="flex items-center justify-between mb-4">
                      <span className='w-[50%]'><span className="font-bold">Length </span>28</span>
                      <span className='w-[50%] text-start'><span className="font-bold">Width </span>40</span>
                    </p>

                    <p className="flex items-center justify-between mb-4">
                      <span className='w-[50%]'><span className="font-bold">Height </span>9</span>
                      <span className='w-[50%] text-start'><span className="font-bold">Dimension Unit </span>cm</span>
                    </p>

                    <p>Average Processing: 3 days</p>
                  </div>
                </div>

                <h1 className="text-xl font-bold flex items-center">Ships to 
                  <span className="tooltip ml-3 visible relative before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="lorem ipsum">
                    <i>
                        <IoInformationCircle size={25} className="relative"/>
                    </i>
                  </span>
                </h1>

                <div className="flex">
                  <div className="w-[50%]">
                    <p className='flex font-bold items-center'><US className='mr-3 h-[20px] w-[40px]'/>United States</p>
                  </div>
                  <div className="w-[50%]">
                    <p>3 - 6 days Free</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white rounded-lg shadow-lg overflow-visible mb-5">
              <div className="card-body">
                <h1 className="text-xl font-bold mb-5">Variants</h1>
                <div className="flex">
                  <div className="w-[50%]">Colour</div>
                  <div className="w-[50%]">Brown</div>
                </div>
                <div className="flex mb-5">
                  <div className="w-[50%]">Size</div>
                  <div className="w-[50%]">M</div>
                </div>

                <p className="text-center text-xl font-bold">Variants Details</p>

                <div className="overflow-x-auto">
                  <table className="table overflow-scroll">
                    <thead>
                      <th className="bg-navbg">
                        TITLE
                      </th>
                      <th className="bg-navbg">
                        STOCK
                      </th>
                      <th className="bg-navbg">
                        <div className="flex items-center">
                          ITEM COST 
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="Price that will be pushed to your store">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                        </div>
                      </th>
                      <th className="bg-navbg">
                        <div className="flex items-center">
                          MAP
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="Price that will be pushed to your store">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                        </div>
                      </th>
                      <th className="bg-navbg">
                        <div className="flex items-center">
                          RRP
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="Price that will be pushed to your store">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                        </div>
                      </th>
                      <th className="bg-navbg">
                        <div className="flex items-center">
                          PRICE
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="Price that will be pushed to your store">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                        </div>
                      </th>
                      <th className="bg-navbg">
                        <div className="flex items-center">
                          YOUR PROFIT
                          <div className="tooltip relative ml-[10px] table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="Price that will be pushed to your store">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                        </div>
                      </th>
                      <th className="bg-navbg">
                        SKU
                      </th>
                      <th className="bg-navbg">
                        BARCODE/UPC/EAN
                      </th>
                    </thead>
                    <tbody>
                      <td className="bg-white pr-[3rem]">
                        <div className="flex items-center">
                          <Image src={'/img.jpg'} height={100} width={100} />
                          <p>Shoes</p>
                        </div>
                      </td>
                      <td className="bg-white">
                        0
                      </td>
                      <td className="bg-white">$141.32</td>
                      <td className="bg-white">$207</td>
                      <td className="bg-white">$215</td>
                      <td className="bg-white">
                        <div className="flex items-center">
                          <span className='mr-2'>
                            <p className="line-through">$482</p>
                            <p>$241</p>
                          </span>
                          <span className="cursor-pointer" htmlFor="edit-price" onClick={() => setEdit(true)}>
                            <BsPencilFill size={20} className="mr-2"/>
                          </span>
                          <div className="tooltip relative before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="Price Calculated by the Price Formula">
                              <i>
                                  <IoInformationCircle size={25} className="relative"/>
                              </i>
                          </div>
                        </div>
                      </td>
                      <td className="bg-white">
                        <span className="font-bold text-green-400">$85</span>
                      </td>
                      <td className="bg-white">
                        VCC4023
                      </td>
                      <td className="bg-white">
                        799872075314
                      </td>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="card bg-white rounded-lg shadow-lg overflow-visible mb-5">
              <div className="card-body">
                <h1 className="text-xl font-bold mb-3">Product Status</h1>
                <div className="flex">
                  <button className="p-2 border border-gray-300 bg-white outline-none text-sm rounded-lg shadow-xl">PUSH TO STORE</button>
                </div>
              </div>
            </div>

            <div className="card bg-white rounded-lg shadow-lg overflow-visible mb-5">
              <div className={`card-body ${editState ? 'hidden' : ''}`}>
                <h1 className="text-xl font-bold mb-5">Product Groups</h1>

                <h1 className="text-lg font-bold mb-3">Tags</h1>
                <h1 className="text-lg font-bold mb-3">Brand</h1>
                <h1 className="text-lg font-bold mb-1">Collections</h1>
                <p className='mb-3'>Collection</p>
                <h1 className="text-lg font-bold mb-3">Boards</h1>
              </div>


              <div className={`card-body ${editState ? '' : 'hidden'}`}>
                <h1 className="text-xl font-bold mb-5">Product Groups</h1>

                <input type="text" placeholder='Tags' className="mb-3 p-2 rounded-md border border-gray-300 outline-none" />
                <input type="text" placeholder='Brand' className="mb-3 p-2 rounded-md border border-gray-300 outline-none" />
                <div className="max-w-full w-full dropdown border border-gray-300 p-2 rounded-md mb-3">
                  <label tabIndex={0} className="text-md w-full text-gray-500 rounded-sm cursor-pointer flex items-center justify-between">Collections <VscTriangleDown /></label>
                  <ul className="dropdown-content menu w-full left-1 top-[2.8rem] shadow rounded-sm bg-white" tabIndex={0} >
                    <li className='p-3'>
                      <input type="text" placeholder='Search' className="p-1 max-w-full outline-none rounded-md mb-5 w-full border border-gray-300" />
                    </li>
                  </ul>
                </div>
                <div className="max-w-full w-full dropdown border border-gray-300 p-2 rounded-md mb-3">
                  <label tabIndex={0} className="text-md w-full text-gray-500 rounded-sm cursor-pointer flex items-center justify-between">Boards <VscTriangleDown /></label>
                  <ul className="dropdown-content menu w-full left-1 top-[2.8rem] shadow rounded-sm bg-white" tabIndex={0} >
                    <li className='p-3'>
                      <input type="text" placeholder='Search' className="p-1 max-w-full outline-none rounded-md mb-5 w-full border border-gray-300" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card bg-white rounded-lg shadow-lg overflow-visible mb-5 ">
              <div className="card-body">
                <h1 className="text-xl font-bold mb-5">Price Formula & Returns</h1>

                <div className={`max-w-full w-full dropdown border border-gray-300 p-2 rounded-md mb-3 ${editState ? '' : 'hidden'}`}>
                  <label tabIndex={0} className="text-md w-full text-gray-500 rounded-sm cursor-pointer flex items-center justify-between">Price Formula <VscTriangleDown /></label>
                  <ul className="dropdown-content menu w-full left-1 top-[2.8rem] shadow rounded-sm bg-white z-50" tabIndex={0} >
                    <li className='p-2 hover:bg-gray-200'>
                      Default
                    </li>
                    <li className='p-2 hover:bg-gray-200'>
                      300%
                    </li>
                    <li className='p-2 hover:bg-gray-200'>
                      1%
                    </li>
                  </ul>
                </div>

                <span className={`flex ${editState ? 'hidden' : ''}`}>
                  <p>Price Formula</p>
                  <p className='mb-2'>1%</p>
                </span>

                <div className="flex items-center">
                  <p className=' text-sm'>Return Policy: </p>
                  <p className="text-[#6281BC] text-sm">30 Days Return Timeframe</p>
                  <div className="tooltip relative ml-2 z-0 before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="The Timeframe within which the supplier will...">
                      <i>
                          <IoInformationCircle size={25} className="relative"/>
                      </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ModifyPrice edit={edit} setEdit={setEdit} />
    </>
  )
}

export default Editproduct