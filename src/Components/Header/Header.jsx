import React from 'react'
import starIcon from '../../assets/icons/star-icon.svg';

const Header = () => {
  return (
    <div className=' absolute left-0 top-0 w-full z-20 py-[20px]'>
        <div className="my-container flex justify-between items-center">
      <h2 className='text-grad text-[32px] font-bold !ml-0 max-md:text-[26px]'>WhatIf Ai</h2>
      <button className='btn-pri !w-[160px] max-md:!w-[120px] no-shadow'>  
        Login<img src={starIcon} alt="" />
      </button>
        </div>
    </div>
  )
}

export default Header
