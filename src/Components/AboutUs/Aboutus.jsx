import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Aboutus = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className='h-full flex flex-col-reverse md:flex-row'>
            <div className="w-full md:w-[50%]">
                <img src="/Images/aboutus.jpg" alt="aboutus_img" data-aos="fade-left" />
            </div>
            <div className='flex flex-col w-full md:w-[50%]'>
                <div className='p-[20px]'>
                    <h1 className='font-bold text-4xl md:text-6xl' data-aos="fade-up">About Us</h1>
                    <p className='pt-2 text-1xl' data-aos="fade-down">CleanCity Initiative is a dedicated platform designed to empower communities and municipalities to work together in keeping our city clean. Whether it’s reporting uncollected garbage, fixing broken streetlights, or addressing sanitation issues, we provide an efficient and user-friendly solution for residents to raise concerns and ensure a cleaner environment.</p>
                </div>
                <div className='p-[20px]'>
                    <h1 className='font-bold text-4xl md:text-6xl' data-aos="fade-up">Mission</h1>
                    <ul className='list-disc list-inside p-4' data-aos="fade-down">
                    <li className='pb-1 md:pb-2 text-1xl'>Enhance city hygiene by bridging the gap between residents and municipal authorities.</li>
                    <li className='pt-2 md:pt-4 pb-1 md:pb-2 text-1xl'>Encourage community participation in keeping public spaces clean.</li>
                    <li className='pt-2 md:pt-4 pb-1 md:pb-2 text-1xl'>Leverage technology to track and resolve sanitation issues efficiently.</li>
                    <li className='pt-2 md:pt-4 pb-1 md:pb-2 text-1xl'>Create a sustainable urban environment by promoting responsible waste management.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
