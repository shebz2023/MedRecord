import React from "react";
import Typewriter from "typewriter-effect";
import { ChatCircleDots } from "@phosphor-icons/react";


export default function ChatBot() {
  return (
    <div>
      <div className="absolute bottom-[10%] -right-[25%] z-20 w-96 h-96 cursor-pointer">
        <ChatCircleDots size={60} color="blue" />

        <Typewriter
          options={{
            strings: ["chat", "chat..."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}
