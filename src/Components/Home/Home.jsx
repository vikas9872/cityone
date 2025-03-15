import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  const [text] = useTypewriter({
    words: ['Living'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 120
  });
  return (
    <div className='flex flex-col md:flex-row justify-center items-center h-full'>
      <div className='w-full md:w-[50%]'>
        <h1 className='font-extrabold text-3xl md:text-6xl p-4'>Spotless Cleaning, Stress-Free <span>{text}<Cursor cursorStyle="|" /></span></h1>
        <p className='p-4'>Effective waste management is the key to a cleaner, greener future. "Trash today, treasure tomorrow" reminds us that proper disposal and recycling can turn waste into valuable resources. It's essential to "reduce, reuse, and recycle"</p>
      </div>
      <div className='w-full md:w-[50%]' data-aos="zoom-in">
        <img src="/Images/home.jpg" alt="home_image" />
      </div>
    </div>
  )
}

export default Home
