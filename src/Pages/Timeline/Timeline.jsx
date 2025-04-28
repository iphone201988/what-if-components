import React from "react";
import Header from "../../Components/Header/Header";
import replay from "../../assets/icons/replay-icn.svg";
import chat from "../../assets/icons/chat-icn.svg";
import save from "../../assets/icons/save-icn.svg";
import TimelineBox from "./Components/TimelineBox";

const Timeline = () => {
  return (
    <div className="min-h-[100vh] bg-[linear-gradient(150deg,#1C002C,#002B31)] py-[60px] max-lg:py-[40px] relative">
      <Header />
      <div className="my-container mt-[50px]">
        <h2 className="text-white text-center text-[52px] font-medium max-lg:text-[36px] max-md:text-[24px]">
          Your Life Timeline
        </h2>
        <TimelineBox />
        {/* Buttons */}
        <div className=" flex gap-[60px] w-full items-center justify-center max-md:flex-col max-md:gap-[16px] mt-[40px]">
          <button className="btn-pri no-shadow !bg-[#fff] !text-[#B026FF]">
          Replay your life <img src={replay} alt="" />
          </button>
          <button className="btn-pri no-shadow">
          Save Timeline <img src={save} alt="" />
          </button>
          <button className="btn-sec no-shadow">
          Chat with Alt-Me <img src={chat} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
