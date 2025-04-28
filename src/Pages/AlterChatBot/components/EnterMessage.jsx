import React from 'react'
import send_message from '../../../assets/icons/send-message-icon.svg'

const EnterMessage = () => {
  return (
    <div className='bg-[#000] border border-[#1DE2FD] rounded-[32px] flex items-center mt-auto absolute bottom-[20px] left-[20px] w-[calc(100%-40px)]'>
      <input className='py-[16px] px-[24px] text-white w-full' type="text" placeholder='Enter message here' />
      <button className='min-w-[42px] h-[42px] bg-[#1DE2FD] flex justify-center items-center rounded-full cursor-pointer mr-[5px]'>
        <img src={send_message} alt="" />
      </button>
    </div>
  )
}

export default EnterMessage
