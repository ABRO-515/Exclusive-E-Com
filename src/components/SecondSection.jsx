
import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";

const SecondSection = () => {
    return (
        <>
            <div className="main  ">

                <div className="our-products mx-4 md:mx-6 xl:mx-12 flex flex-col mt-3 border-t border-gray-300 pt-7 ">
                    <div className="flex gap-3 items-center" >
                        <div className="bg-red-500 h-10 rounded-md w-5" ></div>
                        <h3 className="text-red-500 font-[400]" >Categories</h3>
                    </div>
                    <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl pt-5" >Browse By Category</h1>
                </div>

                <div className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-4 md:mx-6 xl:mx-12 mt-8 pb-11 border-b border-gray-300 " >
                    <div className="box border-2 border-gray-300 flex flex-col text-xl items-center justify-center gap-2 rounded-md   px-3 py-6">
                        <FaMobileAlt className='text-5xl font-semibold' />
                        <h2>Phones</h2>
                    </div>
                    <div className="box border-2 border-gray-300 flex flex-col text-xl items-center justify-center gap-2 rounded-md   px-3 py-6">
                        <FaLaptop  className='text-5xl font-semibold' />
                        <h2>Computer</h2>
                    </div>
                    <div className="box border-2 border-gray-300 flex flex-col text-xl items-center justify-center gap-2 rounded-md   px-3 py-6">
                        <FaCamera className='text-5xl font-semibold' />
                        <h2>Camera</h2>
                    </div>
                    <div className="box border-2 border-gray-300 flex flex-col text-xl items-center justify-center gap-2 rounded-md   px-3 py-6">
                        <FaHeadphones className='text-5xl font-semibold' />
                        <h2>Headphones</h2>
                    </div>
                    <div className="box border-2 border-gray-300 flex flex-col text-xl items-center justify-center gap-2 rounded-md   px-3 py-6">
                        <IoGameController className='text-5xl font-semibold' />
                        <h2>Gaming</h2>
                    </div>


                </div>

            </div>
        </>
    )
}

export default SecondSection
