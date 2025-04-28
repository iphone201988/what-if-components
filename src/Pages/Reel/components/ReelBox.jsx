import React from 'react'
import ai_img from '../../../assets/ai-img.jpg';
import NextArrow from "../../../assets/icons/next-black-icn.svg";
import backArrow from "../../../assets/icons/back-arrow-pink.svg";


const ReelBox = () => {
  return (
    <div className='reel-container'>
       <div className="p-[20px] overflow-auto h-full">
         {/* ai imag */}
         <img className='h-[250px] min-h-[250px] object-cover rounded-[16px] max-md:min-h-[230px] max-md:h-[230px]' src={ai_img} alt="" />
         {/* ai content */}
         <p className='text-[18px] text-white pt-[16px] max-md:text-[16px]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       
       {/* Buttons */}
              <div className=" flex gap-[20px] w-full items-center justify-center max-md:flex-col max-md:gap-[16px] mt-[40px]">
                <button className="btn-pri no-shadow !bg-[#fff] !text-[#B026FF]">
                <img src={backArrow} alt="" /> Back 
                </button>
                <button className="btn-sec no-shadow">
                Next <img src={NextArrow} alt="" />
                </button>
              </div>

         </div>
    </div>
  )
}

export default ReelBox
