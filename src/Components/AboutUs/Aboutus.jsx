import React from 'react'

const Aboutus = () => {
    return (
        <div className='h-full bg-[url(/Images/aboutus.jpg)] bg-cover flex flex-col items-center'>
            <div className='flex'>
                <h1 className='font-bold md:font-extrabold text-4xl md:text-8xl text-white'>About Us</h1>
            </div>
            <div className='flex w-[100%] md:w-[80%] mt-[30px] text:2xl md:text-3xl backdrop-blur-0 backdrop-saturate-200 bg-white/60 rounded-lg border border-gray-300/30 shadow-lg'>
                <p className='p-[20px]'>CleanCity Initiative is a dedicated platform designed to empower communities and municipalities to work together in keeping our city clean. Whether it’s reporting uncollected garbage, fixing broken streetlights, or addressing sanitation issues, we provide an efficient and user-friendly solution for residents to raise concerns and ensure a cleaner environment.</p>
            </div>
        </div>
    )
}

export default Aboutus
