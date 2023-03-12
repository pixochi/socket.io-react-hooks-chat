import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const [roomName, setRoomName] = useState("");
  const [username, setUsername] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation(`/room/${roomName}`, { state: { username: username } });
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-200 flex-col">
      <h1 className="text-3xl font-bold text-slate-800  ">Welcome to chat</h1>

      <div className="my-6 text-center">
        <h2 className="font-light text-2xl">Join Now </h2>
        <h2 className="font-light italic text-2xl">and</h2>
        <h2 className="font-light text-2xl"> start chat !</h2>
      </div>

      <div className="min-w-[250px] max-w-[350px] w-full  ">
        <form onSubmit={handleSubmit} className="w-full ">
          <div className="w-full  rounded-sm pr-1 bg-white shadow-xl h-9  mb-1">
            <input
              type="text"
              placeholder="your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-full px-1 text-sm rounded-sm outline-none text-slate-500"
            />
          </div>
          <div className="w-full  rounded-sm pr-1 bg-white shadow-xl h-9">
            <input
              type="text"
              placeholder="Room"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              className="w-full h-full px-1 text-sm rounded-sm outline-none text-slate-500"
            />
          </div>
          {roomName && <Button label={"Join"} disabled={roomName} />}
        </form>
      </div>
    </div>
  );
};

export default Home;
