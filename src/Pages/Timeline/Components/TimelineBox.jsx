import React from "react";
import ChapterInfo from "./ChapterInfo";
import StatOverview from "./StatOverview";
import reel from "../../../assets/icons/reel-icn.svg";

const TimelineBox = () => {
  return (
    <div className="chatbox-container">
      <div className="p-[20px] overflow-auto h-full">
        <h6 className="text-[20px] font-medium text-[#1DE2FD]">
          Total Chapter: 3
        </h6>
        <div className="mt-[20px]">
          <ChapterInfo />
          <ChapterInfo />
          <ChapterInfo />
        </div>
        <div className="mb-[20px]">
        <StatOverview/>
        </div>
        <button className="btn-sec no-shadow">
            Highlight Reel
            <img src={reel} alt="" />
            </button>
      </div>
    </div>
  );
};

export default TimelineBox;
