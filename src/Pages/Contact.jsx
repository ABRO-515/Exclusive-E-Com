import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const ContactPage = () => {
  return (
    <>
      <main className='h-full w-full' >
   
        <div className='flex  flex-col bg-[#F8F8F8]' >

          <div className="flex gap-8  flex-col bg-white  md:mx-20 mx-7 py-6 px-4 my-12 justify-center">
            {/* Call to us */}
            <div className='flex flex-col gap-3  lg:border-none border-b border-black pb-8' >
              <div className="flex gap-4  items-center pb-2">
                <IoCallOutline className='bg-red-500 p-2 rounded-full text-white text-5xl  ' />
                <h1 className='font-medium' >Call to Us</h1>
              </div>
              <h5 className='text-sm' >We are available 24/7, 7 days a week.</h5>
              <h5 className='text-sm' >Phone: +8801611112222</h5>
            </div>

            {/* Write to us */}
            <div className='flex flex-col gap-3  lg:border-none border-b border-black pb-8' >
              <div className="flex gap-4  items-center pb-2">

                <CiMail className='bg-red-500 p-2 rounded-full text-white text-5xl  ' />
                <h1 className='font-medium' >Write To Us</h1>
              </div>
              <h5 className='text-sm' >Fill out our form and we will contact you within 24 hours.</h5>
              <h5 className='text-sm' >Emails: customer@exclusive.com</h5>
              <h5 className='text-sm' >Emails: support@exclusive.com</h5>
            </div>
          </div>

          {/* Text-box */}
          <div className="flex gap-6 flex-col bg-white md:mx-20 mx-7  pb-6 pt-4 px-4 mt-2 md:mb-16 mb-6 rounded-sm   justify-center">
            <input type="name" placeholder='Your Name' className='text-[#9CA3AF] bg-[#F5F5F5] rounded-md py-3 px-4' />
            <input type="email" placeholder='Your Email' className='text-[#9CA3AF] bg-[#F5F5F5] rounded-md py-3 px-4' />
            <input type="number" placeholder='Your Phone' className='text-[#9CA3AF] bg-[#F5F5F5] rounded-md py-3 px-4' />
       

            <textarea placeholder='Your Message' className='text-[#9CA3AF] bg-[#F5F5F5] rounded-md py-3 px-4' ></textarea>
    


            <div className='flex items-end justify-end' >
              <button className='bg-red-500 text-white px-4 py-4' >Send Message</button>
            </div>
          </div>

        </div>
      
      </main>
    </>
  )
}

export default ContactPage
