import React from "react";
import Home from "./Home/Home";
import ChatRoom from "./ChatRoom/ChatRoom";
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/room/:id" element={<ChatRoom/>} />
      </Routes>
  );
}

export default App;
