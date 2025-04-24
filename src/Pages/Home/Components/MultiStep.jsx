import React from 'react'
import arrow from '../../../assets/icons/next-icn.svg';
import backArrow from '../../../assets/icons/back-icn.svg';

const MultiStep = () => {
  return (
     <div className='blur-bg min-h-[100vh] relative bg-black py-[60px] max-lg:py-[40px]'>
          <div className="my-container relative">
            <h2 className='text-grad text-[52px] font-medium max-lg:text-[36px] max-md:text-[24px]'>Step Into Your Alternate Reality</h2>
            <p className='text-[24px] text-center text-white'>Answer a few questions to shape your alternate life journey.</p>
    
            <div className="que-box relative">
                <div className="bg-[#B026FF] p-[8px] rounded-[8px] absolute top-[12px] left-[12px] cursor-pointer">
                    <img src={backArrow} alt="" />
                </div>
        <div className="p-[40px] max-md:p-[20px]">
            <label className='flex flex-col mb-[30px] max-md:mb-[16px]' htmlFor="">
                <span className='text-[42px] text-center font-medium text-white max-lg:text-[32px] max-md:text-[24px]'>What’s your name?</span>
                <input className='border border-[#1DE2FD] text-[20px] text-white rounded-[12px] p-[24px] font-normal max-lg:p-[16px] max-lg:text-[16px]' type="text" placeholder='Enter name here' />
            </label>
            <label className='flex flex-col mb-[30px] relative ' htmlFor="">
                <span className='text-[42px] text-center font-medium text-white max-lg:text-[32px] max-md:text-[24px]'>What’s your age?</span>
                <input className='border border-[#1DE2FD] text-[20px] text-white rounded-[12px] p-[24px] font-normal max-lg:p-[16px] max-lg:text-[16px]' type="text" placeholder='Enter your age'/>
            </label>
            <label className='flex flex-col mb-[30px] relative ' htmlFor="">
                <span className='text-[42px] text-center font-medium text-white max-lg:text-[32px] max-md:text-[24px]'>What is your zodiac sign?</span>
                <input className='border border-[#1DE2FD] text-[20px] text-white rounded-[12px] p-[24px] font-normal max-lg:p-[16px] max-lg:text-[16px]' type="text" placeholder='Enter your zodiac sign'/>
            </label>
            <button className='btn-pri mx-auto mt-[40px]'>Next <img src={arrow} alt="" /></button>
        </div>
            </div>
            
          </div>
        </div>
  )
}

export default MultiStep
