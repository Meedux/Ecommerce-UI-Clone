import React, { useEffect, useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FaFlagUsa, FaShippingFast, FaBoxOpen } from 'react-icons/fa'
import { BsCheckLg, BsStarFill } from 'react-icons/bs'
import { IoInformation, IoInformationCircle } from 'react-icons/io5'

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

    if(data === undefined){
        return <></>
    }


  return (
    <>
        <input type="checkbox" ref={checkbox} id="my-modal" className="modal-toggle" />
        <div className="modal overflow-y-scroll">

        <div className="modal-box overflow-visible bg-white max-w-full w-[80%] indicator block top-[6rem] absolute" style={{maxHeight: "none"}}>
        <span className="indicator-item badge badge-primary rounded-full p-2 py-2 cursor-pointer fixed" onClick={() => setOpen(false)}>X</span> 
            <div className="flex justify-between mb-5">
                <span className="text-sm breadcrumbs">
                    <ul>
                        <li><a>Category</a></li> 
                        <li><a>Category</a></li> 
                        <li>Category</li>
                    </ul>
                </span>

                {/* <span className="btn btn-primary btn-circle" htmlFor="modal" onClick={() => setOpen(false)}>X</span> */}
            </div>
            <div className='relative'>
            <span className={`left-[13%] top-[3%] ${data.isPremium ? "" : 'hidden'} bg-yellow-500 p-1 px-3 flex rounded-box text-sm items-center absolute z-50`}><BsStarFill className='text-white mr-2'/><h1 className="font-bold text-xs]'/ text-white">PREMIUM</h1></span>
                <div className="grid grid-cols-4 h-[60%] gap-4">
                    <div className="col-span-2 max-h-[40%] h-full grid grid-cols-4 gap-4">
                        <div className="col-span-1 flex flex-col justify-center items-stretch">
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
                            <span className='p-2 bg-gray-300 flex items-center relative'>
                                <span className="mr-4">From:</span>
                                <span className="flex flex-col mr-[3rem]">
                                    <span className="text-xl font-extrabold">{data.discountedPrice}</span>
                                    <span className="text-lg text-gray-400 line-through">{data.originalPrice}</span>
                                </span>
                                <div className="tooltip before:whitespace-pre before:content-[attr(data-tip)] left-[85%] tooltip-top opacity-100" data-tip="This product price is available">
                                    <i>
                                        <IoInformationCircle size={25} className="text-primary"/>
                                    </i>
                                </div>
                            </span>
                        </div>

                        <div className="mb-10">
                            <span className="font-extrabold text-success">{data.status}</span>
                        </div>

                        <div className='mb-10 flex flex-col text-sm'>
                            <p>Shipping to <span className="font-extrabold">United States</span></p>
                            {/* <p>Shipping to {(data.shipsTo!== undefined) && (data["shipsTo"].length > 1) ? <><span className="font-extrabold">{(data.shipsTo[0]) && data.shipsTo[0]}</span> + <span className="text-primary">{(data["shipsTo"].length - 1)} other countries</span></> : <span className="font-extrabold">{(data.shipsTo[0] != undefined) && data.shipsTo[0]}</span>}</p> */}
                            <p className='flex items-center'><FaShippingFast  className='mr-1'/>{" 1 - 4 days ($20.82 first item, $60.12 per additional item, free shipping available*)"}</p>
                            <p className='flex items-center'><FaBoxOpen  className='mr-1'/>{"1 day avg. processing time"}</p>
                        </div>

                        <button className="btn btn-primary font-extrabold px-[5rem]">IMPORT NOW</button>
                    </div>
                </div>

                <div className='mt-[2rem]'>
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
                        {data.description}
                    </div>
                    <div className={`p-2 ${tab === 2 ? "" : "hidden"}`}>
                        <h1 className="font-bold text-lg">Product Codes</h1>
                        <table className='table w-full mb-5'>
                            <tbody>
                                <tr>
                                    <td className='text-gray-400'>SKU:</td>
                                    <td>1234560</td>
                                </tr>

                                <h1 className='font-bold text-lg mt-5 mb-5'>Shipping Dimensions</h1>
                                <tr>
                                    <td className='text-gray-400'>Weight:</td>
                                    <td>1.43 kg</td>
                                </tr>

                                <tr>
                                    <td className='text-gray-400'>Length:</td>
                                    <td>9 cm</td>
                                </tr>

                                <tr>
                                    <td className='text-gray-400'>Width:</td>
                                    <td>15 cm</td>
                                </tr>

                                <tr>
                                    <td className='text-gray-400'>Height:</td>
                                    <td>21 cm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={`p-2 ${tab === 3 ? "" : "hidden"}`}>
                        <table className="table bg-white w-full">
                            <tbody>
                                <tr> 
                                    <td className='bg-white'>
                                        <div className="flex justify-start">
                                            <img src="/img.jpg" width={120} height={120} className="mr-2"/>
                                            <h1 className="font-extrabold text-lg">Original</h1>
                                        </div>
                                    </td>
                                    <td className='bg-white'>
                                        <div className="flex flex-col items-end justify-center">
                                            <h1 className="text-gray-400">Price:</h1>
                                            <h1 className="text-lg font-bold">{data.discountedPrice}</h1>
                                            <hi className="text-lg text-gray-300 line-through">{data.originalPrice}</hi>
                                        </div>
                                    </td>

                                    <td className="bg-white">
                                        <div className="flex justify-end items-start">
                                            <h1 className=" text-green-400 text-lg font-extrabold">In Stock</h1>
                                        </div>
                                    </td>
                                </tr>

                                <tr> 
                                    <td className='bg-white'>
                                        <div className="flex justify-start">
                                            <img src="/img.jpg" width={120} height={120} className="mr-2"/>
                                            <h1 className="font-extrabold text-lg">Large</h1>
                                        </div>
                                    </td>
                                    <td className='bg-white'>
                                        <div className="flex flex-col items-end justify-center">
                                            <h1 className="text-gray-400">Price:</h1>
                                            <h1 className="text-lg font-bold ">$10.00</h1>
                                            <hi className="text-lg text-gray-300 line-through">$20.00</hi>
                                        </div>
                                    </td>

                                    <td className="bg-white">
                                        <div className="flex justify-end items-start">
                                            <h1 className=" text-green-400 text-lg font-extrabold">In Stock</h1>
                                        </div>
                                    </td>
                                </tr>

                                <tr> 
                                    <td className='bg-white'>
                                        <div className="flex justify-start">
                                            <img src="/img.jpg" width={120} height={120} className="mr-2"/>
                                            <h1 className="font-extrabold text-lg">Extra Large</h1>
                                        </div>
                                    </td>
                                    <td className='bg-white'>
                                        <div className="flex flex-col items-end justify-center">
                                            <h1 className="text-gray-400">Price:</h1>
                                            <h1 className="text-lg font-bold">$15.00</h1>
                                            <hi className="text-lg text-gray-300 line-through">$25.00</hi>
                                        </div>
                                    </td>

                                    <td className="bg-white">
                                        <div className="flex justify-end items-start">
                                            <h1 className=" text-green-400 text-lg font-extrabold">In Stock</h1>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={`p-2 ${tab === 4 ? "" : "hidden"}`}>
                        <h1 className='mb-3'><span className="font-bold">Return Timeframe: </span><span className="font-bold text-primary">5 days</span></h1>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo quaerat architecto dolor ea? Quis quisquam quidem voluptatibus dolore fugit quae quasi eum nam, ea debitis voluptates accusamus similique voluptatum laudantium enim? Est in minus dolores quasi labore incidunt dolor officiis, assumenda quo sint dolorem quae voluptatum corrupti. Molestias, magni architecto exercitationem ex neque quod ea alias! Provident aliquam recusandae unde nihil. Sit tempore animi, iure architecto natus alias non nesciunt quidem vitae eligendi, vero ducimus reprehenderit reiciendis dignissimos mollitia consectetur porro quam, molestiae dicta qui sapiente aliquam perspiciatis a. Reiciendis aliquam nisi voluptatum excepturi ea maiores quasi quod nemo?</p>
                        <h1 className="font-bold mb-5 text-lg">
                            Return Policy
                        </h1>
                        <p className='bg-[#F2F3FD] p-3 rounded-lg mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto ea enim animi sit illum facilis non unde voluptas quasi impedit sequi harum molestias, placeat dolore vero aperiam ratione consectetur, amet nobis eius autem officia eveniet incidunt. Eos iste incidunt cumque? Harum, laborum! Exercitationem officia quas porro eligendi ducimus dicta, iste quae alias autem sit ullam, iure fugiat magni quisquam omnis hic praesentium. Non, ut ipsam. Eos ipsam, dignissimos amet, incidunt adipisci ducimus nihil facere nostrum officiis asperiores sequi sint numquam harum modi odit laboriosam quam deleniti? Corporis temporibus quasi voluptatem deleniti cumque dolorem blanditiis eius ratione nihil, praesentium aliquam vel maxime quam saepe, necessitatibus nulla magni deserunt commodi beatae. Minima, vel at veniam laborum doloremque enim velit. Architecto cum expedita animi neque delectus id mollitia sit perferendis odit obcaecati quos ipsa quae, atque repudiandae provident esse reiciendis deleniti quia magnam? Quam, architecto! Aliquam esse commodi molestiae odit assumenda ipsa mollitia maiores tenetur veritatis, aspernatur vero quos ut quidem recusandae id porro, corrupti unde culpa laboriosam earum? Consectetur ducimus, reprehenderit provident a explicabo quia maiores itaque enim neque dolores saepe expedita temporibus, laudantium accusamus, corrupti alias. Aut, nesciunt soluta? Nihil vitae sunt ex, laudantium distinctio quos assumenda debitis, laborum quae id ipsa error voluptates nam placeat quas quod, provident corporis! Ipsum laborum explicabo quaerat, error voluptas labore? Animi officiis sint mollitia, culpa consequuntur rem incidunt repudiandae suscipit molestiae. Non deleniti accusamus ipsam? Aliquid velit pariatur labore, quod cum cumque dolor. Numquam earum perspiciatis labore omnis eligendi est soluta? Perferendis amet eligendi nesciunt commodi possimus! Soluta provident itaque voluptas voluptatum laudantium saepe deleniti, eos necessitatibus reprehenderit sed molestias quod officia dicta iste consectetur placeat beatae eius sequi nostrum ipsam. Consequatur voluptas minus ullam eius ducimus saepe praesentium assumenda dicta illum. Quas, blanditiis alias! Maxime consequuntur, officia eveniet fuga modi nisi amet enim accusamus officiis id quisquam cupiditate ex perspiciatis voluptatum optio odio quis sint exercitationem vel blanditiis nobis doloribus, nemo repellendus! Quos, at dolorum laborum doloribus fugit ipsam hic officiis, illum voluptatum placeat qui eaque sit, distinctio incidunt possimus. Minus maiores sint explicabo quo similique molestiae pariatur eveniet commodi deserunt eum tenetur accusamus nulla officia cumque blanditiis aliquid iusto, excepturi dolorum vero molestias iure quisquam rerum! Dolores molestias laudantium porro laboriosam voluptate error et impedit debitis voluptates iste cupiditate vitae, eligendi dignissimos ipsum quisquam! Id eos, pariatur veritatis animi harum praesentium itaque non minima eaque aliquid velit ullam impedit reprehenderit dolore deserunt voluptatem sit necessitatibus explicabo quaerat iste a quidem? Voluptatem praesentium, obcaecati consequatur architecto, corporis quia similique et sapiente quos dignissimos quasi, expedita provident dolore. Velit eligendi mollitia esse assumenda, sint quos ad deleniti, incidunt cumque adipisci rem facilis reprehenderit minima fugit odit temporibus nostrum veritatis vero est illum odio consectetur quidem sed! Sed culpa doloremque, neque in pariatur, natus reprehenderit illum sequi amet adipisci nisi hic cum alias sint quae fugit ipsam vel? Blanditiis voluptas laborum sunt omnis ipsa aliquid ab perspiciatis nemo optio laboriosam? Cumque, corrupti voluptates beatae atque voluptate, ipsum facere sapiente incidunt natus, at consequuntur dicta.</p>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-2 mb-10">
                                <h1 className="text-lg font-bold text-gray-400">PRODUCT DAMAGED</h1>
                                <span className="flex items-center">
                                    <BsCheckLg className='text-green-500 mr-2'/>
                                    <p>I am happy to offer replacement</p>
                                </span>
                            </div>

                            <div className="col-span-2 mb-10">
                                <h1 className="text-lg font-bold text-gray-400">WRONG PRODUCT</h1>
                                <span className="flex items-center">
                                    <BsCheckLg className='text-green-500 mr-2'/>
                                    <p>I am happy to offer replacement</p>
                                </span>
                            </div>

                            <div className="col-span-2">
                                <h1 className="text-lg font-bold text-gray-400">PRODUCT NOT AS DESCRIBED</h1>
                                <span className="flex items-center">
                                    <BsCheckLg className='text-green-500 mr-2'/>
                                    <p>I am happy to offer replacement</p>
                                </span>
                            </div>

                            <div className="col-span-2">
                                <h1 className="text-lg font-bold text-gray-400">WRONG QUANTITY</h1>
                                <span className="flex items-center">
                                    <BsCheckLg className='text-green-500 mr-2'/>
                                    <p>I am happy to offer replacement</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`p-2 ${tab === 5 ? "" : "hidden"}`}>
                        <p>You are allowed to sell on any marketplace</p>
                    </div>
                    <div className={`p-2 ${tab === 6 ? "" : "hidden"}`}>
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className=' bg-slate-200'>SHIPS TO</th>
                                    <th className=' bg-slate-200'>
                                        <div className="relative flex">
                                            DELIVERY TIME
                                            <div className="tooltip table-cell before:whitespace-pre before:content-[attr(data-tip)] left-[25%] top-[-30%] tooltip-top opacity-100" data-tip="Text">
                                                <i>
                                                    <IoInformationCircle size={25} className="relative left-[-20%]"/>
                                                </i>
                                            </div>
                                        </div>
                                    </th>
                                    <th className=' bg-slate-200'>
                                        <div className="relative flex">
                                            SHIPPING COST 
                                            <div className="tooltip table-cell before:whitespace-pre before:content-[attr(data-tip)] left-[25%] top-[-30%] tooltip-top opacity-100" data-tip="Text">
                                                <i>
                                                    <IoInformationCircle size={25} className="relative left-[-20%]"/>
                                                </i>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
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