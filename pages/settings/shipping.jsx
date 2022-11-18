import React from 'react'
import CountryInput from '../../components/CountryInput'

const Shipping = () => {
  return (
    <>
      <main className="p-5">
        <p className="text-xl text-start font-bold mb-5">
          Shipping Settings
        </p>

        <div className="card bg-white shadow-lg rounded-lg" style={{width: "75vw"}}>
          <div className="card-body">
            <span className="text-xl font-bold mb-5">Main Location</span>
            <div className="mb-5">
              <div className="form-control">
                <span className="text-lg font-bold mb-3">
                  Select the country where most of your customers are located
                </span>
                <CountryInput />
              </div>

              <p className='mb-3'>Specifying where your most customers are located is important to ensure that AppScenic platform is showing indicative profits as close as possible to reality.</p>
              <p className='mb-3'>Under View my products, the {"\"Your Profit (From)\""} column will take into consideration the costs for shipping to your main location.</p>
              <p>Also, under {"\"Price Formula\""} you have the option to include the costs of shipping to your main location in the product price.</p>
            </div>

            <div className="mb-5">
              <div className="form-control mb-4">
                <label className="cursor-pointer mb-2">
                  <input type="checkbox" className="checkbox-primary mr-3"/>
                  <span className="font-bold">Do you also ship to other countries (internationally)?</span> 
                </label>
                <p>{"Tick this option if you intend to ship internationally; If you don't tick this option you'll be able to import only products that ship to your main location."}</p>
              </div>

              <p className='mb-5'><span className="font-bold text-lg">Example 1: </span>{"If your main location is the UK and you only sell to UK customers, then you don't need to tick this option and you will get access only to products that ship to the UK."}</p>
              <p className='mb-5'><span className="font-bold text-lg">Example 2: </span>Example 2: If your main location is the UK but you also accept international orders, please tick this option. AppScenic platform will let you know in case you are trying to import a product that does not ship to your main location.</p>
              <p>Also, please be aware that shipping internationally means you always need to ensure your profit margins are covering the shipping costs (which in most of the cases is different from country to country and supplier to supplier).</p>
            </div>

            <div className='mb-3'>
              <h1 className='text-lg font-bold'>Please add a default phone number for your orders.</h1>
              <p>{"This number will be sent to the shipping company only if the end customer doesn't fill in the phone field and the order can not be delivered."}</p>
              <p>We recommend making the phone number mandatory in your store to avoid situations when the shipping company can not reach the end customer.</p>
              <input type="text" className='input py-1 w-[35%] rounded-sm bg-white mt-1 border border-gray-400 px-1 h-auto' placeholder='Default Phone Number'/>
            </div>

            <div className='text-end'>
              <button className="btn btn-primary shadow-lg">Save</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Shipping