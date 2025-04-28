import React from 'react'
import user_chat from "../../../assets/icons/user-chat-icon.svg";

const UserMessage = () => {
  return (
     <div className='flex gap-[12px] items-start py-[6px]'>
          <img src={user_chat} alt="" />
          <p className='text-[18px] text-white font-medium max-md:text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
  )
}

export default UserMessage
