import React from 'react'
import Header from '../../Components/Header/Header'
import arrow from '../../assets/icons/next-icn.svg';

const ChangePassword = () => {
  return (
    <div>
       <div className='min-h-[100vh] bg-[linear-gradient(150deg,#1C002C,#002B31)] py-[60px] max-lg:py-[40px] relative'>
          <Header />
          <h2 className="text-white text-center text-[52px] font-medium max-lg:text-[36px] max-md:text-[24px] max-lg:mt-[60px]">
      Change Password
      </h2>
          <div className="que-box relative">
              <div className="p-[40px] max-md:p-[20px]">
              <label className='flex flex-col mb-[30px] relative ' htmlFor="">
            <span className='text-[42px] text-center font-medium text-white max-lg:text-[32px] max-md:text-[24px]'>Old Password</span>
            <input className='border border-[#1DE2FD] text-[20px] text-white rounded-[12px] p-[24px] font-normal max-lg:p-[16px] max-lg:text-[16px]' type="text" placeholder='Enter Password'/>
            <span className='text-[14px] text-[#B026FF] absolute bottom-[26px] right-[16px] cursor-pointer max-lg:bottom-[18px]'>Show</span>
        </label>
        <label className='flex flex-col mb-[30px] relative ' htmlFor="">
            <span className='text-[42px] text-center font-medium text-white max-lg:text-[32px] max-md:text-[24px]'>New Password</span>
            <input className='border border-[#1DE2FD] text-[20px] text-white rounded-[12px] p-[24px] font-normal max-lg:p-[16px] max-lg:text-[16px]' type="text" placeholder='Enter Password'/>
            <span className='text-[14px] text-[#B026FF] absolute bottom-[26px] right-[16px] cursor-pointer max-lg:bottom-[18px]'>Show</span>
        </label>
        <label className='flex flex-col mb-[30px] relative ' htmlFor="">
            <span className='text-[42px] text-center font-medium text-white max-lg:text-[32px] max-md:text-[24px]'>Confirm New Password</span>
            <input className='border border-[#1DE2FD] text-[20px] text-white rounded-[12px] p-[24px] font-normal max-lg:p-[16px] max-lg:text-[16px]' type="text" placeholder='Enter Password'/>
            <span className='text-[14px] text-[#B026FF] absolute bottom-[26px] right-[16px] cursor-pointer max-lg:bottom-[18px]'>Show</span>
        </label>
                 
                
                  <button className='btn-pri mx-auto mt-[40px]'>Save <img src={arrow} alt="" /></button>
              </div>
                  </div>

    </div>
    </div>
  )
}

export default ChangePassword
