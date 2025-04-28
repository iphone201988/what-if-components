import React from "react";
import audio from "../../assets/icons/audio-icn.svg";
import nextIconBlack from "../../assets/icons/next-black-icn.svg";
import save from "../../assets/icons/save-icn.svg";
import ChapterBox from "./components/ChapterBox";

const ChapterSceen = () => {
  return (
    <div className="min-h-[100vh] bg-[linear-gradient(150deg,#1C002C,#002B31)] py-[60px] max-lg:py-[40px] relative">
      <div className="my-container">
        <h2 className="text-white text-center text-[52px] font-medium max-lg:text-[36px] max-md:text-[24px]">
          Chapter 1: A New Beginning
        </h2>

        <ChapterBox />

        {/* Buttons */}
        <div className=" flex gap-[60px] w-full items-center justify-center max-md:flex-col max-md:gap-[16px] mt-[40px]">
        <button className="btn-pri no-shadow !bg-[#fff] !text-[#B026FF]">
        Play narration <img src={audio} alt="" />
          </button>
          <button className="btn-pri no-shadow">
          Save Point <img src={save} alt="" />
          </button>
          <button className="btn-sec no-shadow">
          See Timeline <img src={nextIconBlack} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterSceen;
