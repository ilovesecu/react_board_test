import React, { useEffect, useState, useRef } from "react";
import ChatRoom from "./components/ChatRoom";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Chat from "./components/Chat";
import Calculator from "./components/Temp/Calculator";
import DarkOrLight from "./components/Context/DarkOrLight";
import LanguageMain from "./components/Context/Language/LanguageMain";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/chatrooms"/>} />
                <Route path="/chatrooms" element={<ChatRoom/>}/>
                <Route path="/chatrooms/:roomId" element={<Chat/>}/>
                <Route path="/temp" element={<Calculator/>}/>
                <Route path="/theme" element={<DarkOrLight/>}/>
                <Route path="/lang" element={<LanguageMain/>}/>
            </Routes>
        </Router>
    )
}

export default App;
