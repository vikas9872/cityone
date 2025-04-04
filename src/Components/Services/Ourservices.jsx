import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Ourservices = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className='h-full flex flex-col items-center'>
      <h1 className='font-extrabold text-4xl md:text-8xl mb-8' data-aos="fade-left">Solutions To</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-[80%]'>
        <div className='bg-white p-4 flex flex-col items-center justify-center hover:shadow-lg' data-aos="fade-up">
          <img src="/Images/garbagedump.jpg" alt="image_not_found" className='h-[200px] w-[200px]' />
          <p>Garbage dumps</p>
        </div>
        <div className='bg-white p-4 flex flex-col items-center justify-center hover:shadow-lg' data-aos="fade-up">
          <img src="/Images/garbagevehicle.jpg" alt="image_not_found" className='h-[200px] w-[200px]' />
          <p>Garbage vehicle not arrived</p>
        </div>
        <div className='bg-white p-4 flex flex-col items-center justify-center hover:shadow-lg' data-aos="fade-up">
          <img src="/Images/potholes.jpg" alt="image_not_found" className='h-[200px] w-[200px]' />
          <p>Potholes</p>
        </div>
        <div className='bg-white p-4 flex flex-col items-center justify-center hover:shadow-lg' data-aos="fade-down">
          <img src="/Images/sweeping.jpg" alt="image_not_found" className='h-[200px] w-[200px]' />
          <p>Sweeping not done</p>
        </div>
        <div className='bg-white p-4 flex flex-col items-center justify-center hover:shadow-lg' data-aos="fade-down">
          <img src="/Images/watersupply.jpg" alt="image_not_found" className='h-[200px] w-[200px]' />
          <p>No water supply</p>
        </div>
        <div className='bg-white p-4 flex flex-col items-center justify-center hover:shadow-lg' data-aos="fade-down">
          <img src="/Images/streetlight.jpg" alt="image_not_found" className='h-[200px] w-[200px]' />
          <p>Streetlights not working</p>
        </div>
      </div>
    </div>
  )
}

export default Ourservices
