import Image from 'next/image'
import React from 'react'
import US from 'country-flag-icons/react/1x1/US'
import { IoInformation, IoInformationCircle } from 'react-icons/io5'
import { BsPencilFill } from 'react-icons/bs'

const editproduct = () => {
  return (
    <>
      <main className="container p-5">
        <p className="flex items-center justify-between">
          <span className="text-xl font-bold mb-5">
            My Products / Edit Products
          </span>
          <span className='flex items-center'>
            <span className="text-sm">Edit</span>
            <span className="divider divider-horizontal mx-1">|</span>
            <span className="text-sm">Back</span>
          </span>
        </p>


        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-6">
            <div className="card bg-white rounded-lg shadow-lg overflow-visible mb-5">
              <div className="card-body">
                <h1 className="text-xl font-bold mb-3">Title</h1>
                <p className='mb-7'>Shoes</p>

                <h1 className="text-xl font-bold mb-3">Description</h1>
                <p className="mb-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam explicabo saepe voluptatum libero maiores. Odit saepe ducimus ratione exercitationem error, iusto nesciunt consequuntur sint deserunt, inventore, autem cumque aliquam aperiam!
                </p>
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
                          <BsPencilFill size={20} className="mr-2"/>
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
              <div className="card-body">
                <h1 className="text-xl font-bold mb-5">Product Groups</h1>

                <h1 className="text-lg font-bold mb-3">Tags</h1>
                <h1 className="text-lg font-bold mb-3">Brand</h1>
                <h1 className="text-lg font-bold mb-1">Collections</h1>
                <p className='mb-3'>Collection</p>
                <h1 className="text-lg font-bold mb-3">Boards</h1>
              </div>
            </div>

            <div className="card bg-white rounded-lg shadow-lg overflow-visible mb-5">
              <div className="card-body">
                <h1 className="text-xl font-bold mb-5">Price Formula & Returns</h1>

                <p>Price Formula</p>
                <p className='mb-2'>1%</p>

                <div className="flex items-center">
                  <p className=' text-sm'>Return Policy: </p>
                  <p className="text-[#6281BC] text-sm">30 Days Return Timeframe</p>
                  <div className="tooltip relative ml-2 table-cell before:whitespace-pre before:content-[attr(data-tip)] tooltip-top opacity-100" data-tip="The Timeframe within which the supplier will...">
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
    </>
  )
}

export default editproduct