import React from 'react'
import Header from '../../Components/Header/Header'
import arrow from '../../assets/icons/next-icn.svg';

const EditProfile = () => {
  return (
    <div className='min-h-[100vh] bg-[linear-gradient(150deg,#1C002C,#002B31)] py-[60px] max-lg:py-[40px] relative'>
          <Header />
          <h2 className="text-white text-center text-[52px] font-medium max-lg:text-[36px] max-md:text-[24px] max-lg:mt-[60px]">
      Edit Profile
      </h2>
          <div className="que-box relative">
              <div className="p-[40px] max-md:p-[20px]">
              <label className='flex flex-col mb-[30px] max-md:mb-[16px]' htmlFor="">
                      <span className='text-[42px] text-center font-medium text-white max-lg:text-[32px] max-md:text-[24px]'>Edit Name</span>
                      <input className='border border-[#1DE2FD] text-[20px] text-white rounded-[12px] p-[24px] font-normal max-lg:p-[16px] max-lg:text-[16px]' type="text" placeholder='Enter email here' />
                  </label>
                  <label className='flex flex-col mb-[30px] max-md:mb-[16px]' htmlFor="">
                      <span className='text-[42px] text-center font-medium text-white max-lg:text-[32px] max-md:text-[24px]'>Edit Email Address</span>
                      <input className='border border-[#1DE2FD] text-[20px] text-white rounded-[12px] p-[24px] font-normal max-lg:p-[16px] max-lg:text-[16px]' type="text" placeholder='Enter email here' />
                  </label>
                 
                
                  <button className='btn-pri mx-auto mt-[40px]'>Save <img src={arrow} alt="" /></button>
              </div>
                  </div>

    </div>
  )
}

export default EditProfile
