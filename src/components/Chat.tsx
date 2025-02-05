import React, { useState, useEffect } from "react";
import { connectWebsocket } from "../config/websocketService";
import apiClient from "../api/apiClient";
import {useParams} from "react-router-dom";

const Chat = (/*{roomId}: {roomId:string}*/) => {
    const {roomId} = useParams<{roomId:string}>();

    const [messages, setMessages] = useState<{ sender: string; content: string }[]>([]);
    const [message, setMessage] = useState("");
    const [client, setClient] = useState<any>(null);

    useEffect(()=>{
        if(!roomId)return ;
        const newClient = connectWebsocket((msg)=>{
            setMessages((prev)=>[...prev, msg]);
        },roomId);
        setClient(newClient);

        //이전 메시지 조회
        apiClient.get(`/chat/contents/${roomId}`).then((res)=>{
            setMessages(res.data);
        });

        return ()=>{
            (async ()=>{
                await newClient.deactivate();
            })();
        }
    },[roomId]);

    const sendMessage = () => {
        if(client && message){
            client.publish({destination:`/pub/send`, body: JSON.stringify({ sender: "User", content: message, roomId:`${roomId}`, writerId:1 }) });
            setMessage("");
        }
    }

    if(!roomId){
        return <div>잘못된 채팅방 ID입니다.</div>;
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