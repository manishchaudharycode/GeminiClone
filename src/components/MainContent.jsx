import React from "react";
import { useState } from "react";
import { Message } from "tabler-icons-react";
import { Send } from "tabler-icons-react";
import { Code } from "tabler-icons-react";
import { Bulb } from "tabler-icons-react";
import { Compass } from "tabler-icons-react";
import { User } from "tabler-icons-react";
import { geminiClient } from "../config/Config";

function MainContent() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const onSubmit = async () => {
    setMessages((prev) => [
      ...prev,
      { role: "user", parts: [{ text: value }] },
    ]);
    const response = await geminiClient.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        ...messages,
        {
          role: "user",
          parts: [{ text: value }],
        },
      ],
    });
    setMessages((prev) => [
      ...prev,
      {
        role: "model",
        parts: [{ text: response.candidates[0].content.parts[0].text }],
      },
    ]);
    console.log("res", response.candidates[0].content.parts[0].text);
  };

  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between text-xl text-slate-700 p-5  ">
        <h1>Gemini</h1>
        <User />
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {messages.length === 0 ? (
          <>
            <div className="my-12 text-[56px] text-slate-500 font-semibold p-5 ">
              <p>
                <span className="bg-gradient-to-r from-[#3f5a28] to-[#ff5546] bg-clip-text text-transparent">
                  Hello, Manish
                </span>
              </p>
              <p className="text-slate-300">How can I help you today? </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
              <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-lg text-slate-700">
                  Suggeset top 10 best sports Game.
                </p>
                <Compass className="text-4xl p-1 absolute bottom-2 right-2" />
              </div>
              <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-lg text-slate-700">
                  what is tailwind css in React js .
                </p>
                <Bulb className="text-4xl p-1 absolute bottom-2 right-2" />
              </div>
              <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-lg text-slate-700">
                  What’s one habit you want to get rid of and one habit you want
                  to keep .
                </p>
                <Message className="text-4xl p-1 absolute bottom-2 right-2" />
              </div>
              <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-lg text-slate-700">
                  How do you track your work goals and accomplishments .
                </p>
                <Code className="text-4xl p-1 absolute bottom-2 right-2" />
              </div>
            </div>
          </>
        ) : (
          messages.map((msg, idx) => (
            <div className="flex gap-2" key={idx}>
              <div>{msg.role}</div>
              <p>{msg.parts[0].text}</p>
            </div>
          ))
        )}

        <div className="absolute bottom-0 max-w-5xl max-auto py-5  w-full">
          <div className=" flex flex-col items-end justify-center rounded-3xl bg-gray-100">
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Enter the prompt ...."
              className=" w-full bg-gray-100 p-2 rounded-3xl min-h-20 px-4 resize-none focus:ring-0 focus:outline-0  "
            />
            <div
              onClick={onSubmit}
              className="relative z-50 bg-blue-400 rounded-full p-2 m-2 flex items-center justify-center"
            >
              <Send className="size-5 text-white " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
