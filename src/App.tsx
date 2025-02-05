import React, { useEffect, useState, useRef } from "react";
import ChatRoom from "./components/ChatRoom";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Chat from "./components/Chat";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/chatrooms"/>} />
                <Route path="/chatrooms" element={<ChatRoom/>}/>
                <Route path="/chatrooms/:roomId" element={<Chat/>}/>
            </Routes>
        </Router>
    )
}

export default App;
