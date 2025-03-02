import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const FirstSection = () => {
    return (
        <>
            <div className='flex w-full items-center justify-center overflow-x-hidden  pb-3  ' >
                <div className="left-column pl-[22px] pr-[2rem] lg:pl-[7vw] xl:pl-[7.5rem] pt-9  h-fit md:flex hidden  border-r-[1px] border-gray-300 ">
                    <div className="flex flex-col gap-1 ">

                        <div className='flex items-center gap-7 cursor-pointer  ' >
                            <h2 className='font-[600] text-lg ' >Women's Fashion</h2>
                            <MdOutlineArrowForwardIos />
                        </div>
                        <div className='flex items-center gap-14 cursor-pointer mt-2 ' >
                            <h2 className='font-[600] text-lg ' >Man's Fashion</h2>
                            <MdOutlineArrowForwardIos />
                        </div>
                        <div className='flex items-center gap-7 mt-2 cursor-pointer' >
                            <h2 className='font-[600] text-lg ' >Electronics</h2>
                        </div>
                        <div className='flex items-center gap-7 mt-2 cursor-pointer' >
                            <h2 className='font-[600] text-lg ' >Home & Lifestyle</h2>
                        </div>
                        <div className='flex items-center gap-7 mt-2 cursor-pointer' >
                            <h2 className='font-[600] text-lg ' >Medicine</h2>
                        </div>
                        <div className='flex items-center gap-7 mt-2 cursor-pointer' >
                            <h2 className='font-[600] text-lg ' >Sports & Outdoor</h2>
                        </div>
                        <div className='flex items-center gap-7 mt-2 cursor-pointer' >
                            <h2 className='font-[600] text-lg ' >Baby & Toys</h2>
                        </div>
                        <div className='flex items-center gap-7 mt-2 cursor-pointer' >
                            <h2 className='font-[600] text-lg ' >Groceries & Pets</h2>
                        </div>
                        <div className='flex items-center gap-7 mt-2 cursor-pointer' >
                            <h2 className='font-[600] text-lg ' >Health & Beauty</h2>
                        </div>
                    </div>
                </div>

                <div className="right-column  items-center h-full justify-center font-montserrat lg:mx-3 w-[100%] mt-2 text-white bg-black flex  ">
                    <div className="text-box  flex flex-col mx-3 px-1 gap-4 md:px-8 lg:px-28 justify-center">
                        <div className="apple flex items-center gap-2">
                            <img className='h-[1.6rem] md:h-[2.2rem] ' loading='eager' fetchpriority="high" src="/apple.png" alt="apple" />

                            <h2>iPhone 16 Series</h2>
                        </div  >
                        <h1 className='xl:text-5xl md:text-3xl lg:text-4xl text-xl font-semibold'>Up to 10% <br />off Voucher</h1>
                        <div className='flex items-center ' >
                           <NavLink to="/phones" ><h3>Shop Now</h3></NavLink> 
                            <IoIosArrowRoundForward className='text-2xl' />
                        </div>
                    </div>
                    <div className="img w-[12rem] md:w-[19rem]  flex items-center justify-center">

                        <img src="/iphoneHand.jpg"   loading="eager" fetchpriority="high" alt='iphone in hand' />

                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstSection
