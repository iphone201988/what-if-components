import React from 'react'
import year from "../../../assets/icons/year-icn.svg";

const YourDecision = () => {
  return (
    <div>
      {/* select options */}
              <div className="flex gap-[20px] mb-[24px] items-start max-lg:flex-col mt-[16px]">
                <div className="flex gap-[12px] items-center min-w-[auto] ">
                  {/* <h5 className="text-[20px] text-[#1DE2FD]">
                    <span className="text-[#B026FF]">Year</span> 2025
                  </h5> */}
                  <img className="w-[100px]" src={year} alt="" />
                </div>
                <div className="year-question ">
                  <h6 className="text-white font-medium text-[18px]">
                  What will you choose?
                  </h6>
                  <p className="text-white my-[12px]">
                   
                  </p>
                  <div className="select-box flex gap-[8px] flex-wrap">
                    <button className="active">Take the promotion</button>
                    <button className="">Join the startup</button>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default YourDecision
