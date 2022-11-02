import React, { useState } from 'react'

const Myproducts = () => {
  const [ tab, setTab ] = useState(1)
  return (
    <>
      <main className="p-5">
        <p className="text-xl text-start font-bold mb-5">
          Products
        </p>

        <div className="card bg-white rounded-lg shadow-lg overflow-visible mb-5" style={{width: "90vw"}}>
          <div className="card-body">
            <div className='tabs mb-5'>
              {/* Tabs */}
              <span className={`tab tab-lifted smooth font-bold ${tab === 1 && "tab-active text-primary"}`} onClick={() => setTab(1)}>All</span>
              <span className={`tab tab-lifted smooth font-bold ${tab === 2 && "tab-active text-primary"}`} onClick={() => setTab(2)}>In Store</span>
              <span className={`tab tab-lifted smooth font-bold ${tab === 3 && "tab-active text-primary"}`} onClick={() => setTab(3)}>Push to Store</span>
             </div>

             <div className="mb-5">
             <input type="text" className="p-1 outline-none border w-full max-w-full border-gray-400 rounded-lg" placeholder='search'/>
             </div>
             <div className="mb-5 flex flex-wrap w-full max-w-full">
             <span className="dropdown max-w-full mr-3" style={{width: "23%"}}>
                <button tabIndex={0} className="p-1 border outline-none border-gray-300 rounded-lg mr-3 mb-5 cursor-pointer w-full text-start" >Supplier</button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Supplier 1</a></li>
                  <li><a>Supplier 2</a></li>
                  <li><a>Supplier 3</a></li>
                  <li><a>Supplier 4</a></li>
                </ul>
              </span>
              <span className="dropdown max-w-full mr-3" style={{width: "23%"}}>
                <button tabIndex={0} className="p-1 border outline-none border-gray-300 rounded-lg mr-3 mb-5 cursor-pointer w-full text-start" >Ships to</button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Country 1</a></li>
                  <li><a>Country 2</a></li>
                  <li><a>Country 3</a></li>
                  <li><a>Country 4</a></li>
                </ul>
              </span>
              <input type="number" className="p-1 border outline-none border-gray-300 rounded-lg mr-3 mb-5" style={{width: "23%"}} placeholder="Max Delivery Time(Days)"/>
              <span className="dropdown max-w-full mr-3" style={{width: "23%"}}>
                <button tabIndex={0} className="p-1 border outline-none border-gray-300 rounded-lg mr-3 mb-5 cursor-pointer w-full text-start" >Boards</button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Board 1</a></li>
                  <li><a>Board 2</a></li>
                  <li><a>Board 3</a></li>
                  <li><a>Board 4</a></li>
                </ul>
              </span>

              <span className="dropdown max-w-full mr-3" style={{width: "23%"}}>
                <button tabIndex={0} className="p-1 border outline-none border-gray-300 rounded-lg mr-3 mb-5 cursor-pointer w-full text-start" >Price Formula</button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Formula 1</a></li>
                  <li><a>Formula 2</a></li>
                  <li><a>Formula 3</a></li>
                  <li><a>Formula 4</a></li>
                </ul>
              </span>

              <span className="dropdown max-w-full mr-3" style={{width: "23%"}}>
                <button tabIndex={0} className="p-1 border outline-none border-gray-300 rounded-lg mr-3 mb-5 cursor-pointer w-full text-start" >Tags</button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Tag 1</a></li>
                  <li><a>Tag 2</a></li>
                  <li><a>Tag 3</a></li>
                  <li><a>Tag 4</a></li>
                </ul>
              </span>

              <span className="dropdown max-w-full mr-3" style={{width: "23%"}}>
                <button tabIndex={0} className="p-1 border outline-none border-gray-300 rounded-lg mr-3 mb-5 cursor-pointer w-full text-start" >Stock</button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>In Stock</a></li>
                  <li><a>Out of Stock</a></li>
                  <li><a>All</a></li>
                </ul>
              </span>
             </div>

             <div className='flex'>
              <span className="mr-5 flex">
                <input type="checkbox" className='checkbox checkbox-primary mr-3'/>
                <p>Free Shipping</p>
              </span>

              <span className="mr-5 flex">
                <input type="checkbox" className='checkbox checkbox-primary mr-3'/>
                <p>Free Returns</p>
              </span>
             </div>
          </div>
        </div>

        <div className="card bg-white shadow-lg rounded-lg overflow-visible" style={{width: "90vw"}}>
          <div className="card-body">
            <div className="max-w-full w-full flex justify-between items-center mb-5">
              <span className='flex max-w-full w-3/4 items-center'>
                <span className="dropdown max-w-full mr-3" style={{width: "33%"}}>
                  <button tabIndex={0} className="p-1 border outline-none border-gray-300 rounded-lg mr-3 mb-5 cursor-pointer w-full text-start" >Push to Store</button>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Push to Store</a></li>
                    <li><a>Remove from Store</a></li>
                  </ul>
                </span>
                <span className="dropdown max-w-full mr-3" style={{width: "33%"}}>
                  <button tabIndex={0} className="p-1 border outline-none border-gray-300 rounded-lg mr-3 mb-5 cursor-pointer w-full text-start" >Update Boards</button>
                  <div tabIndex={0} className="dropdown-content menu p-2 shadow-2xl bg-white rounded-box w-52">
                    <label className="flex cursor-pointer mb-5">
                      <input type="checkbox" className="checkbox checkbox-primary mr-5" />
                      <span className="label-text">Add to Boards</span> 
                    </label>

                    <label className="flex cursor-pointer mb-5">
                      <input type="checkbox" className="checkbox checkbox-primary mr-5" />
                      <span className="label-text">Remove to Boards</span> 
                    </label>

                    <input type="text" placeholder='Search' className="p-1 max-w-full outline-none rounded-md mb-5 w-full border border-gray-300" />
                  
                    <div className='mb-5'>
                      {/* Items Goes Here! */}
                    </div>

                    <div className="max-w-full w-full  text-center">
                      <button className="btn btn-primary">Apply</button>
                    </div>
                  </div>
                </span>
                  <span className="dropdown max-w-full mr-3" style={{width: "33%"}}>
                    <button tabIndex={0} className="p-1 border outline-none border-gray-300 rounded-lg mr-3 mb-5 cursor-pointer w-full text-start" >Assign Price Formula</button>
                    <div tabIndex={0} className="dropdown-content menu p-2 shadow-2xl bg-white rounded-box w-52">
                      <label className="flex cursor-pointer mb-5">
                        <input type="checkbox" className="checkbox checkbox-primary mr-5" />
                        <span className="label-text">Default</span> 
                      </label>

                      <label className="flex cursor-pointer mb-5">
                        <input type="checkbox" className="checkbox checkbox-primary mr-5" />
                        <span className="label-text">Update Price Formula</span> 
                      </label>

                      <input type="text" placeholder='Search' className="p-1 max-w-full outline-none rounded-md mb-5 w-full border border-gray-300" />
                    
                      <div className='mb-5'>
                        {/* Items Goes Here! */}
                      </div>

                      <div className="max-w-full w-full  text-center">
                        <button className="btn btn-primary">Apply</button>
                      </div>
                    </div>
                    
                  </span>
                </span>
                
              <button className="btn btn-error btn-outline">Delete</button>
            </div>

            <div className='mb-5'>
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-navbg flex items-center"> <input type="checkbox" className='checkbox mr-4'/> PRODUCTS</th>
                    <th className="bg-navbg">VARIANTS</th>
                    <th className="bg-navbg">STATUS</th>
                    <th className="bg-navbg">STOCK</th>
                    <th className="bg-navbg">{"ITEM COST(from)"}</th>
                    <th className="bg-navbg">{"PRICE(from)"}</th>
                    <th className="bg-navbg">{"PROFIT(from)"}</th>
                    <th className="bg-navbg">PRICE FORMULA</th>
                    <th className="bg-navbg">BOARDS</th>
                    <th className="bg-navbg">SUPPLIER</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default mMproducts