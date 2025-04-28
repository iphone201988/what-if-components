import React from "react";
import Header from "../../Components/Header/Header";
import download from '../../assets/icons/download-icn.svg'
import ChatArea from "./components/ChatArea";

const AlterChatBot = () => {
  return (
    <div className="min-h-[100vh] bg-[linear-gradient(150deg,#1C002C,#002B31)] py-[60px] max-lg:py-[40px] relative">
      <Header />
      <div className="my-container mt-[50px]">
        <h2 className="text-white text-center text-[52px] font-medium max-lg:text-[36px] max-md:text-[24px]">
          Chat with Your Alternate Self
        </h2>
      </div>
      <ChatArea/>
       {/* Buttons */}
            <div className=" flex gap-[60px] w-full items-center justify-center max-md:flex-col max-md:gap-[16px] mt-[40px]">
              <button className="btn-pri no-shadow ">
              Download Transcript <img src={download} alt="" />
              </button>
            </div>
    </div>
  );
};

export default AlterChatBot;
