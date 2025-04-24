import React from 'react'
import logo from '../../assets/logo.png';
import starIcon from '../../assets/icons/star-icon.svg';
import starIconBlack from '../../assets/icons/star-icon-black.svg';
import Header from '../../Components/Header/Header';
import MultiStep from './Components/MultiStep';

const Home = () => {
  return (
    <div className=' relative'>
        <Header/>
        <section className="banner relative">
      <div className="my-container">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="relative w-[300px] max-lg:w-[180px]">
            <div className="blur-back" />
            <img src={logo} alt="WhatIf Logo" className="relative z-10 w-full" />
          </div>

          {/* Headline */}
          <h1 className="text-grad font-bold text-[62px] pt-[60px] pb-[100px] leading-[normal] max-lg:text-[42px] max-md:text-[28px] max-md:pb-[40px] max-md:pt-[30px] max-sm:text-[26px]">
            Rewrite Your Past. <br />Live Your Alternate Future.
          </h1>

          {/* Buttons */}
          <div className="flex gap-[60px] w-full items-center justify-center max-md:flex-col max-md:gap-[16px]">
            <button className="btn-pri">
              Start Your Simulation <img src={starIcon} alt="" />
            </button>
            <button className="btn-sec">
              Watch a Demo <img src={starIconBlack} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
    <MultiStep/>
    </div>
  )
}

export default Home
