import React from 'react'

const AboutPage = () => {
    return (
        <>
            <main className='w-full h-full' >

          
                    {/* Our Story */}


                    {/* Text-box */}
                    <div className='flex flex-col mx-6' >
                        <h1 className='text-3xl font-semibold mt-10 mb-6' >Our Story</h1>
                        <p className='mb-5 text-sm' >Launched in 2015, Exclusive is South Asias premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.</p>
                        <p className='text-sm' >Exclusive has more than 1 Million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer goods to electronics.</p>
                        <div className='flex items-center justify-center' >
                    <img className='my-8  md:max-w-[30rem] md:w-full w-[88vw]' fetchPriority="high" src="https://e-commerce-chi-eight-35.vercel.app/_next/image?url=%2Fabout%2Fsection1.png&w=1920&q=75" alt="" />
                    </div>
                    </div>

              

            </main>
        </>
    )
}

export default AboutPage
