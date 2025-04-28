import React from 'react'
import year from "../../../assets/icons/year-icn.svg";


const ChapterInfo = () => {
  return (
    <div className="flex gap-[20px] mb-[16px] items-start max-lg:flex-col">
                  <div className="flex gap-[12px] items-center min-w-[200px]">
                    <h5 className="text-[20px] text-[#1DE2FD]">
                      <span className="text-[#B026FF]">Chapter-1</span>
                    </h5>
                    <img className="w-[100px]" src={year} alt="" />
                  </div>
               <p className='text-[18px] font-medium text-white'>The Day Everything Changed</p>
                </div>
  )
}

export default ChapterInfo
