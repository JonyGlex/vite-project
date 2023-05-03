import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import Gig from "./pages/gig/Gig";
import Orders from "./pages/orders/Orders";
import MyGigs from "./pages/myGigs/MyGigs";
import Add from "./pages/add/Add";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import "./app.css";
import Gigs from "./pages/gigs/Gigs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route extct path="/" element={<Home />} />
        <Route extct path="/gigs" element={<Gigs />} />
        <Route extct path="/gig" element={<Gig />} />
        <Route extct path="/orders" element={<Orders />} />
        <Route extct path="/mygigs" element={<MyGigs />} />
        <Route extct path="/add" element={<Add />} />
        <Route extct path="/message/:id" element={<Message />} />
        <Route extct path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
