import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center h-full'>
      <div className='w-full md:w-[50%]'>
        <h1 className='font-extrabold text-3xl md:text-6xl p-4'>Spotless Cleaning, Stress-Free Living</h1>
        <p className='p-4'>Effective waste management is the key to a cleaner, greener future. "Trash today, treasure tomorrow" reminds us that proper disposal and recycling can turn waste into valuable resources. It's essential to "reduce, reuse, and recycle"</p>
      </div>
      <div className='w-full md:w-[50%]'>
        <img src="/Images/home.jpg" alt="home_image" />
      </div>
    </div>
  )
}

export default Home
