import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Stomp } from "@stomp/stompjs";
import Chat from "./chat/Chat";
function App() {
    return (
        <Chat roomId="1"></Chat>
    )
}

export default App;
