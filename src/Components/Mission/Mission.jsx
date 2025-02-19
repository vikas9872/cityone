import React from 'react'

const Mission = () => {
    return (
        <div className='h-full bg-[url(/Images/mission.jpg)] bg-cover flex flex-col items-center'>
            <div className='flex'>
                <h1 className='font-bold md:font-extrabold text-4xl md:text-8xl text-white'>OUR MISSION</h1>
            </div>
            <div className='flex w-[100%] md:w-[80%] mt-[30px] text:2xl md:text-3xl backdrop-blur-0 backdrop-saturate-200 bg-white/60 rounded-lg border border-gray-300/30 shadow-lg'>
                <ul className='list-disc list-inside p-4'>
                    <li className='pt-8 pb-8'>Enhance city hygiene by bridging the gap between residents and municipal authorities.</li>
                    <li className='pt-8 pb-8'>Encourage community participation in keeping public spaces clean.</li>
                    <li className='pt-8 pb-8'>Leverage technology to track and resolve sanitation issues efficiently.</li>
                    <li className='pt-8 pb-8'>Create a sustainable urban environment by promoting responsible waste management.</li>
                </ul>
            </div>
        </div>
    )
}

export default Mission
