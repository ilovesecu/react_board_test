import React, { useState, useEffect } from "react";
import { connectWebsocket } from "../config/websocketService";

const Chat = ({roomId}: {roomId:string}) => {
    const [messages, setMessages] = useState<{ sender: string; content: string }[]>([]);
    const [message, setMessage] = useState("");
    const [client, setClient] = useState<any>(null);

    useEffect(()=>{
        const newClient = connectWebsocket((msg)=>{
            setMessages((prev)=>[...prev, msg]);
        },roomId);
        setClient(newClient);
        return ()=>{
            (async ()=>{
                await newClient.deactivate();
            })();
        }
    },[roomId]);

    const sendMessage = () => {
        if(client && message){
            client.publish({destination:`/chat/send/${roomId}`, body: JSON.stringify({ sender: "User", content: message }) });
            setMessage("");
        }
    }


    return (
        <div>
            <h2>Chat Room: {roomId}</h2>
            <div>
                {messages.map((msg,idx)=>(<div key={idx}>
                    <strong>{msg.sender}:</strong>{msg.content}
                </div>))}
            </div>
            <input value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;