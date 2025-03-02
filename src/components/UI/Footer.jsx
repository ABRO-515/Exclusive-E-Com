import React from 'react'
import { BiSend } from "react-icons/bi";

const Footer = () => {
    return (
        <>
        <main className='w-full h-full bg-black' >
            <div className="flex  items-center pt-8  justify-center  bg-black">
                <div className='grid  md:grid-cols-2  lg:grid-cols-3  gap-16 lg:mx-20' >

                    
                    <div className="text-1 flex flex-col text-white  gap-4 ">
                        <h1 className='font-bold text-2xl ' >Exclusive</h1>
                        <h2 className='font-semibold  text-lg ' >Subscribe</h2>
                        <p>Get 10% off on your first order</p>
                        <div className="flex border-white border items-center lg:mr-8 w-fit">
                            <input type="email" placeholder='Enter your email' className='py-3 w-fit pl-4 lg:pr-0 bg-black text-white border-none' />
                            <BiSend className='ml-3 mr-3 text-xl' />
                        </div>
                    </div>
                    <div className="text-1 flex flex-col text-white gap-4   md:mt-0  ">

                        <h2 className='font-semibold  text-lg ' >Support</h2>
                        <p className='text-sm' >111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p className='text-sm' >exclusive@gmail.com</p>
                        <p className='text-sm' >+88015-88888-9999</p>

                    </div>
                    <div className="text-1 flex flex-col text-white gap-4   md:mt-0  ">

                        <h2 className='font-semibold  text-lg ' >Account</h2>
                        <p className='text-sm' >My Account</p>
                        <p className='text-sm' >Login/Register</p>
                        <p className='text-sm' >Cart</p>
                        <p className='text-sm' >Wishlist</p>
                        <p className='text-sm' >Shop</p>

                    </div>
                    <div className="text-1 flex flex-col text-white gap-4   md:mt-0  ">

                        <h2 className='font-semibold  text-lg ' >Quick Link</h2>
                        <p className='text-sm' >Privacy Policy</p>
                        <p className='text-sm' >Terms Of Use</p>
                        <p className='text-sm' >FAQ</p>
                        <p className='text-sm' >Contact</p>

                    </div>
                    <div className="text-1 flex flex-col text-white gap-4   md:mt-0 lg:w-fit ">

                        <h2 className='font-semibold  text-lg ' >Download App</h2>
                        <p className='text-sm' >Save $3 with App New User Only</p>


                        <div className="images flex gap-4 item-center pb-8 ">
                            <img className='bg-white h-[95px] w-[80px] ' src="/QRCode.png" alt="" />

                            <div className="flex flex-col gap-2">
                                <div className="google bg-white border border-white rounded-lg">
                                    <img className=' bg-black rounded-lg h-[40px] w-[6.25rem] ' src="/e.png" alt="" />
                                </div>
                                <div className="google bg-white border border-white rounded-lg">
                                    <img className=' bg-black rounded-lg h-[40px] w-[6.25rem] ' src="/a.png" alt="" />
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

export default Footer