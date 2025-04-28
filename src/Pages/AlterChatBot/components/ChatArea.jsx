import React from "react";
import AiMessage from "./AiMessage";
import UserMessage from "./UserMessage";
import EnterMessage from "./EnterMessage";

const ChatArea = () => {
  return (
    <div className="chatbox-container relative">
      <div className="p-[20px] overflow-auto h-full ">
        <AiMessage />
        <UserMessage />

      </div>
        <EnterMessage/>
    </div>
  );
};

export default ChatArea;
