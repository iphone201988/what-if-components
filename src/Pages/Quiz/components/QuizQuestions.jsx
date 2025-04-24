import React from 'react'
import arrow from '../../../assets/icons/next-icn.svg';
import backArrow from '../../../assets/icons/back-icn.svg';
import tick from '../../../assets/icons/tick-icn.svg';
import ProgressBar from './ProgressBar';

const QuizQuestions = () => {
  return (
  <>
    <div className='relative mt-[50px] p-[40px] bg-[hsla(0,_0%,_100%,_20%)] rounded-[24px] max-w-[1000px] text-[#fff] mx-auto max-md:p-[20px]'>
      <div className="bg-[#B026FF] p-[8px] rounded-[8px] absolute top-[12px] left-[12px] cursor-pointer">
        <img src={backArrow} alt="" />
        </div>

        <h3 className='text-[36px] text-center font-medium text-white max-lg:text-[32px] max-md:text-[24px]'>How do you handle unexpected challenges?</h3>
        <div className=" flex flex-col gap-[12px] mt-[20px]">
            <div className="p-[16px] rounded-[12px] bg-[hsla(0,_0%,_0%,_50%)] flex justify-between items-center cursor-pointer">
                <p className='text-[24px] max-lg:text-[16px]'>A. Face them head-on with confidence.</p>
            </div>
            <div className="active bg-[linear-gradient(150deg,_#B026FF,_#1DE2FD)] p-[16px] rounded-[12px]  flex justify-between items-center cursor-pointer">
                <p className='text-[24px] max-lg:text-[16px]'>B. Analyze the situation and strategize.</p>
                <img className='bg-[hsla(0,_0%,_0%,_50%)] rounded-[100%] p-[6px] flex' src={tick} alt="" />
            </div>
            <div className="p-[16px] rounded-[12px] bg-[hsla(0,_0%,_0%,_50%)] flex justify-between items-center cursor-pointer">
                <p className='text-[24px] max-lg:text-[16px]'>C. Adapt quickly and improvise.</p>
            </div>
            <div className="p-[16px] rounded-[12px] bg-[hsla(0,_0%,_0%,_50%)] flex justify-between items-center cursor-pointer">
                <p className='text-[24px] max-lg:text-[16px]'>D. Avoid risks and seek stability.</p>
            </div>
        </div>
        <button className='btn-pri mt-[20px] mx-auto' >Next <img src={arrow} alt="" /></button>
    </div>
    <ProgressBar/>
    </>
  )
}

export default QuizQuestions
