import React from "react";
import { useState } from "react";
import { Message } from "tabler-icons-react";
import { Settings } from "tabler-icons-react";
import { Plus } from "tabler-icons-react";
import { Menu2 } from "tabler-icons-react";
import { QuestionMark, History } from "tabler-icons-react";

function Sidebar() {
  
   const[extended, setExtended] = useState(false)

  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-[#cbdffa] py-7 px-4">
      <div>
        <Menu2 
        onClick={() => setExtended(!extended)} 
        className="text-2xl block cursor-pointer" />
        <div className="mt-2.5 inline-flex items-center gap-2.5 py-2.5 px-3.5 text-[14px] text-gray-5 00 cursor-pointer bg-gray-300 ">
          <Plus className="rounded-full"/>
          {extended? <p>New Chat</p>: null}
        </div>

        {extended? 
        <div className="flex flex-col ">
           <p className="mt-7 mb-5">Recent</p>
           <div className="flex items-center gap-2 p-2 pr-10rounded-[50px] text-slate-700 cursor-pointer hover:bg-gray-300">
            <Message className="text-2xl"/>
            <p>what is React js</p>
           </div>
        </div>
        : null}
        
      </div>
      
      <div className="flex flex-col ">
         <div className="flex items-center pr-10 p-2 gap-3 rounded-[50px] text-slate-700 cursor-pointer hover:bg-gray-300">
          <QuestionMark className="text-2xl"/>
          {extended? <p>Help </p> : null}
         </div>

         <div className="flex items-center pr-10 p-2 gap-3 rounded-[50px] text-slate-700 cursor-pointer hover:bg-gray-300">
          <History className="text-2xl"/>
         {extended?  <p>Activity </p> : null}
         </div>

         <div className="flex items-center pr-10 p-2 gap-3 rounded-[50px] text-slate-700 cursor-pointer hover:bg-gray-300">
          <Settings className="text-2xl"/>
          {extended? <p>Setting </p> : null}
         </div>
      </div>
    </div>
  );
}

export default Sidebar;
 