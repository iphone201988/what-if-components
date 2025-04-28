import React from 'react'
import ai_chat from "../../../assets/icons/ai-chat-icon.svg";

const AiMessage = () => {
  return (
    <div className='flex gap-[12px] items-start py-[6px]'>
      <img src={ai_chat} alt="" />
      <p className='text-[18px] text-white font-medium max-md:text-[16px]'>Hi, I’m... you — but from the life where you chose passion. I remember the sleepless nights building that startup, and the way Berlin changed us. What’s on your mind?”</p>
    </div>
  )
}

export default AiMessage
