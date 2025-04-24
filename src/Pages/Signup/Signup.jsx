import React from 'react'
import logo from '../../assets/logo.png';
import arrow from '../../assets/icons/next-icn.svg';

const Signup = () => {
  return (
   <div className='blur-bg min-h-[100vh] relative bg-black py-[60px] max-lg:py-[40px]'>
         <div className="my-container relative">
           <img className='w-[120px] mx-auto max-lg:w-[80px]' src={logo} alt="" />
           <h2 className='text-grad text-[52px] font-medium max-lg:text-[36px] max-md:text-[24px]'>Create your alternate life</h2>
    
           <div className="que-box relative">
       <div className="p-[40px] max-md:p-[20px]">
       <label className='flex flex-col mb-[30px] max-md:mb-[16px]' htmlFor="">
               <span className='text-[42px] text-center font-medium text-white max-lg:text-[32px] max-md:text-[24px]'>Full Name</span>
               <input className='border border-[#1DE2FD] text-[20px] text-white rounded-[12px] p-[24px] font-normal max-lg:p-[16px] max-lg:text-[16px]' type="text" placeholder='Enter full name' />
           </label>
           <label className='flex flex-col mb-[30px] max-md:mb-[16px]' htmlFor="">
               <span className='text-[42px] text-center font-medium text-white max-lg:text-[32px] max-md:text-[24px]'>Email Address</span>
               <input className='border border-[#1DE2FD] text-[20px] text-white rounded-[12px] p-[24px] font-normal max-lg:p-[16px] max-lg:text-[16px]' type="text" placeholder='Enter email here' />
           </label>
           <label className='flex flex-col mb-[30px] relative ' htmlFor="">
               <span className='text-[42px] text-center font-medium text-white max-lg:text-[32px] max-md:text-[24px]'>Password</span>
               <input className='border border-[#1DE2FD] text-[20px] text-white rounded-[12px] p-[24px] font-normal max-lg:p-[16px] max-lg:text-[16px]' type="text" placeholder='Enter Password'/>
               <span className='text-[14px] text-[#B026FF] absolute bottom-[26px] right-[16px] cursor-pointer max-lg:bottom-[18px]'>Show</span>
           </label>
           <button className='btn-pri mx-auto mt-[40px]'>Signup <img src={arrow} alt="" /></button>
       </div>
           </div>
           <span className='text-[20px] block text-center text-[#B026FF] mt-[20px]'>  Already have an account? <a href="#" className='text-[#1DE2FD]'>[Log In]</a></span>
         </div>
       </div>
  )
}

export default Signup
