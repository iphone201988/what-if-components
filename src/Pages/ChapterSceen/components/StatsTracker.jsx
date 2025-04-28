import React from 'react'

const StatsTracker = () => {
  return (
 <div className=" py-[16px] border-t border-[#FFF] mt-[20px]">
       <div className='flex gap-[60px] max-md:flex-col max-lg:gap-[40px] max-md:gap-[30px]'>
      <div className="w-full">
    <h4 className='text-[20px] mb-[8px] font-medium text-center text-[#1DE2FD] max-lg:text-[28px] max-md:text-[20px]'>Happiness</h4>
        <div className='mx-auto max-w-[100%] h-[10px] bg-[rgba(255,255,255,0.10)] rounded-[30px] overflow-hidden'>
      <div className="h-full w-[80%] bg-[linear-gradient(to_right,_#04D9FF,_#AF39F7)] [transition:width_0.3s_ease-in-out] rounded-[30px]"></div>
    </div>
    </div>
      <div className="w-full">
    <h4 className='text-[20px] mb-[8px] font-medium text-center text-[#1DE2FD] max-lg:text-[28px] max-md:text-[20px]'>Career</h4>
        <div className='mx-auto max-w-[100%] h-[10px] bg-[rgba(255,255,255,0.10)] rounded-[30px] overflow-hidden'>
      <div className="h-full w-[40%] bg-[linear-gradient(to_right,_#04D9FF,_#AF39F7)] [transition:width_0.3s_ease-in-out] rounded-[30px]"></div>
    </div>
    </div>
      <div className="w-full">
    <h4 className='text-[20px] mb-[8px] font-medium text-center text-[#1DE2FD] max-lg:text-[28px] max-md:text-[20px]'>Relationships</h4>
        <div className='mx-auto max-w-[100%] h-[10px] bg-[rgba(255,255,255,0.10)] rounded-[30px] overflow-hidden'>
      <div className="h-full w-[10%] bg-[linear-gradient(to_right,_#04D9FF,_#AF39F7)] [transition:width_0.3s_ease-in-out] rounded-[30px]"></div>
    </div>
    </div>
    </div>
 </div>
  )
}

export default StatsTracker
