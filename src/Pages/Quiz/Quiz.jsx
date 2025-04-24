import React from 'react'
import QuizQuestions from './components/QuizQuestions'

const Quiz = () => {
  return (
    <div className='min-h-[100vh] bg-[linear-gradient(150deg,#1C002C,#002B31)] py-[60px] max-lg:py-[40px]'>
      <div className="my-container">
      <h2 className='text-white text-center text-[52px] font-medium max-lg:text-[36px] max-md:text-[24px]'>Unlock Your True Potential</h2>
      <p className='text-[24px] text-center text-white max-lg:text-[18px]'>Our AI is analyzing your choices to craft your alternate reality.</p>
      <QuizQuestions/>
      </div>
    </div>
  )
}

export default Quiz
