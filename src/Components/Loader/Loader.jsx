import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-full absolute left-0 top-0 bg-[rgba(0,0,0,0.60)] flex flex-col items-center justify-center backdrop-blur-[6px] z-[999]'>
      <span class="loader"></span>
      <h5 className='text-[38px] font-medium text-white'>Generating Your Alternate Life…</h5>
    </div>
  )
}

export default Loader
