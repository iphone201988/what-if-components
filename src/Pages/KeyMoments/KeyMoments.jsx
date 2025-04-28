import React from 'react'
import YourChoice from './Components/YourChoice'
import starIcon from '../../assets/icons/star-icon.svg';
import starIconBlack from '../../assets/icons/star-icon-black.svg';
import Loader from '../../Components/Loader/Loader';

const KeyMoments = () => {
  return (
    <div className='min-h-[100vh] bg-[linear-gradient(150deg,#1C002C,#002B31)] py-[60px] max-lg:py-[40px] relative'>
      <div className="my-container">
      <h2 className='text-white text-center text-[52px] font-medium max-lg:text-[36px] max-md:text-[24px]'>Step Into Your New Reality</h2>
      <p className='text-[24px] text-center text-white max-lg:text-[18px]'>Explore the key moments of your alternate life and shape your destiny. <br /> Your choices are about to shape a new story.</p>

        <YourChoice/>

         {/* Buttons */}
                  <div className="flex gap-[60px] w-full items-center justify-center max-md:flex-col max-md:gap-[16px] mt-[40px]">
                    <button className="btn-pri no-shadow">
                    Play Life Sequence <img src={starIcon} alt="" />
                    </button>
                    <button className="btn-sec no-shadow">
                    Start <img src={starIconBlack} alt="" />
                    </button>
                  </div>
      </div>
      <Loader/>
    </div>
  )
}

export default KeyMoments
