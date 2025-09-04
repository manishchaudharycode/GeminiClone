import React from "react";
import { useState } from "react";
import { Message } from "tabler-icons-react";
import { Settings } from "tabler-icons-react";
import { Plus } from "tabler-icons-react";
import { Menu2 } from "tabler-icons-react";
import { QuestionMark, History } from "tabler-icons-react";

function Sidebar() {
  const [extended, setExtended] = useState(false);

  return (
    <div
      style={{ display: "inline-flex" }}
      className="justify-between bg-[#f0f4f9] min-h-[100vh] flex-col px-[25px] py-[15px] b"
    >
      <div style={{}} className="Top  ">
        <Menu2 onClick={() => setExtended(prev=>!prev)} className="w-[20px]  " />
        <div style={{display: "inline-flex"}} className="new-chat mt-[10px] flex items-center gap-[10px] px-[10px] py-[15px] bg-[#e6eaf1] rounded-2xl hover:bg-[#e1eaf9] text-gray-400 cursor-pointer    ">
          <Plus className="w-[20px]" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? 
          <div className="recent flex-col ">
            <p className="recent-title mt-[30px] mb-[20px] ">Recent</p>
            <div className="recent-entry items-start gap-4 p-4 pr-4 rounded-lg text-[#282828] cursor-pointer flex hover:bg-[#c8d5e4]">
              <Message />
              <p>What is react ...</p>
            </div>
          </div>
         : null}
      </div>

      <div className="bottom mb-10  ">
        <div className="bottom-item recent-entry  mb-5 flex items-center gap-3 ">
          <QuestionMark className="w-[20px]"/>
          {extended? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry flex mb-5 gap-3 items-center">
          <History className="w-[20px]"/>
          {extended? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry flex gap-3 items-center">
          <Settings className="w-[20px]" />
         {extended?  <p className="">Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
