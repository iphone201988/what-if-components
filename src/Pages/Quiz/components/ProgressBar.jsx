import React from 'react'

const ProgressBar = () => {
  return (
    <div className="">
        <div className='mx-auto max-w-[1000px] mt-[40px] h-[20px] bg-[hsla(0,_0%,_0%,_50%)] rounded-[30px] mb-[20px] overflow-hidden'>
      <div className="h-full w-[80%] bg-[linear-gradient(to_right,_#04D9FF,_#AF39F7)] [transition:width_0.3s_ease-in-out] rounded-[30px]"></div>
    </div>
    <h4 className='text-[36px] font-medium text-center text-white max-lg:text-[28px] max-md:text-[20px]'>Simulation Engine is Learning About You...</h4>
    </div>
  )
}

export default ProgressBar
