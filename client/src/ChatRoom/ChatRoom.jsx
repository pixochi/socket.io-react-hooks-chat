import React, { useState } from "react";

import useChat from "../useChat";
import { useLocation, useParams } from "react-router-dom";
import Button from "../components/Button";

const ChatRoom = () => {
  const { id } = useParams();
  const {state: {username}} = useLocation();

  const [newMessage, setNewMessage] = useState("");
  const { messages, sendMessage } = useChat(id);

  
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(newMessage,username);
    setNewMessage("");
  };

  return (
    <div className="bg-slate-200 w-full h-screen py-3">
      <div className="min-w-[350px] w-full max-w-[750px] m-auto flex rounded  h-full bg-white flex-col">
        <div className="border-b h-10 w-full flex items-center px-1" >
          <h1 >Room: {id}</h1>
        </div>
        <div className="flex-1   overflow-auto">
          <div>
            {messages && messages.map((message, i) => (
              <div
                key={i}
                className={`${message.username === username ? "text-right mb-1 bg-slate-100 px-1": 'text-left mb-1 bg-slate-100 px-1'}`}
              >
                <h6 className='text-sm font-semibold text-slate-500'>{message.username}</h6>
                <p className='text-sm font-light'>{message.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mt-auto   h-10 flex items-center border-t border pr-1">
          <form className="w-full flex items-center" onSubmit={handleSendMessage}>
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="message..."
              className="w-full px-1 text-sm outline-none "
            />
            {newMessage && <Button label={"Send"} disabled={newMessage} />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
