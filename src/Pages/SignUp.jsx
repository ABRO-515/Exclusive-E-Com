import React from 'react'


const SignUp = () => {
    return (
        <>
            <main className='w-full h-full' >
  
                <div className='flex flex-col lg:h-[50vh] lg:flex-row items-center   my-6  justify-center gap-16' >
                    <img className='rounded-lg h-[18rem] md:max-w-[30rem] md:w-full w-[88vw]' fetchPriority="high"   loading="eager" src="https://e-commerce-chi-eight-35.vercel.app/_next/image?url=%2Flogin%2Fsign-in.png&w=1200&q=75" alt="" />
                    <div className="flex flex-col gap-3">
                    <h1 className='text-2xl font-medium' >Sign in with the Github </h1>
                    <h3 className='text-gray-600' >Use your GitHub account to sign in</h3>
                    <button className='bg-red-500 text-white px-6 py-3 rounded-lg' >Sign In</button>
                               
                    </div>
                </div>
           
            </main>
        </>
    )
}

export default SignUp
