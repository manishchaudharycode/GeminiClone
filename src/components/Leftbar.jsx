import React from "react";
import { Message } from "tabler-icons-react";
import { PhotoPlus } from "tabler-icons-react";
import { Send } from "tabler-icons-react";
import { Microphone } from "tabler-icons-react";
import { Code } from "tabler-icons-react";
import { Bulb } from "tabler-icons-react";
import { Compass } from "tabler-icons-react";
import { UserCircle } from "tabler-icons-react";

function Leftbar() {
  return (
    <div className="main flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="nav flex items-center justify-between font-bold  p-[20px] text-[#585858]">
        <p>Gemini</p>
        <UserCircle className="size-15" />
      </div>
      <div className="main-container max-w-[900px] m-auto ">
        <div className="greet mx-[50px] py-[0px] text-[#c4c7c5] p-[20px] text-6xl">
          <p>
            <span className=" bg-gradient-to-r from-[#4b90ff] via-[#ff5546] to-[#ffcc00] bg-clip-text text-transparent  ">
              Hello, Dev.
            </span>
          </p>
          <p className=" ">How can I help you today? </p>
        </div>
        <div className="cards grid [grid-template-columns:repeat(auto-fill,minmax(180px,1fr))] gap-10 p-[20px]">
          <div className="card h-[200px] p-[15px] cursor-pointer bg-[#f0f4f9] hover:bg-[#dfe4ea] rounded-lg">
            <p className="text-[#585858]  ">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <Compass className="w-[35px] p-[5px] absolute bg-white mt-19 ml-30 size-8 rounded-2xl" />
          </div>
          <div className="card h-[200px] p-[15px] cursor-pointer bg-[#f0f4f9] rounded-lg hover:bg-[#dfe4ea]">
            <p className="text-[#585858] ">
              Briefy summarize this concept: urban planning
            </p>
            <Bulb className="w-[35px] p-[5px] absolute bg-white mt-19 ml-30 size-8  rounded-2xl" />
          </div>
          <div className="card h-[200px] p-[15px] cursor-pointer bg-[#f0f4f9] rounded-lg hover:bg-[#dfe4ea]">
            <p className="text-[#585858] ">
              Brainstorm team bonding activites for our work retreat{" "}
            </p>
            <Message className="w-[35px] p-[5px] absolute bg-white mt-19 ml-30 size-8  rounded-2xl" />
          </div>
          <div className="card h-[200px] p-[15px] cursor-pointer bg-[#f0f4f9] rounded-lg hover:bg-[#dfe4ea]">
            <p className="text-[#585858] ">
              Impove the readability of the following code
            </p>
            <Code className="w-[35px] p-[5px] absolute bg-white mt-19 ml-30 size-8  rounded-2xl" />
          </div>
        </div>
        <div className="main-bottom absolute b-0 w-[100%] max-w-[900px] px-0 py-[10px] m-auto">
          <div className="search-box flex mt-55 items-center justify-between gap-50 bg-[#f0f4f9] px-[10px] py-[20px] rounded-lg">
            <input type="text" placeholder="Enter a prompt here" className="flex-1 bg-transparent border-none outline-none p-[8px] size-[18px]" />
            <div className="flex  gap-3 ">
              <PhotoPlus className="w-[24px] cursor-pointer"/>
              <Microphone className="w-[24px] cursor-pointer"/>
              <Send className="w-[24px] cursor-pointer"/>
            </div>      
          </div>
          <div  className="mt-4">
            <p className="bottom-Infon flex items-center justify-center ml-20 mr-20 ">
                Gemini may display inasccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
