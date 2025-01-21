import React from 'react'
import CountdownTimer from './CountdownTimer'
import speaker from "../assets/speaker.png";

const JBL = () => {
    return (
        <>
            <div className="main w-full  ">
                <div className=' bg-black flex-col md:flex-row lg:gap-16  test-white border-t-2 border-red-300  mx-3  pt-6 my-8 flex items-center justify-center' >


                    <div className="text-box flex flex-col my-6 items-center gap-8 justify-center">
                        <h3 className='text-green-500' >Categories</h3>
                        <h1 className='text-white text-center mx-1 text-4xl'>Enhance Your Music Experience</h1>
                        {/* <CountdownTimer/> */}
                        <button className='bg-green-500 w-28 py-2 rounded-lg text-white' >Buy Now</button>
                        <CountdownTimer/>
                    </div>

                    <img  className='    h-[20rem]' src={speaker} alt="Speaker" />
                </div>
            </div>
        </>
    )
}

export default JBL
