import React from 'react'
import ai_img from '../../../assets/ai-img.jpg';
import StatsTracker from './StatsTracker';
import YourDecision from './YourDecision';

const ChapterBox = () => {
  return (
   <div className="chatbox-container">
         <div className="p-[20px] overflow-auto h-full">
         {/* ai imag */}
         <img className='h-[420px] min-h-[420px] object-cover rounded-[16px] max-md:min-h-[320px] max-md:h-[320px]' src={ai_img} alt="" />
         {/* ai content */}
         <p className='text-[18px] text-white pt-[16px] max-md:text-[16px]'>At 22, you stepped off the train in Berlin, heart pounding with both fear and excitement. The job offer was modest,
         the apartment tiny, but this was freedom the kind you only dream about in quiet classrooms.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
       
       <YourDecision/>

       <StatsTracker/>

         </div>
       </div>
  )
}

export default ChapterBox
