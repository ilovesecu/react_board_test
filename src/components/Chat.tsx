import React, { useState, useEffect, useRef } from "react";
import { connectWebsocket } from "../config/websocketService";
import apiClient from "../api/apiClient";
import {useParams} from "react-router-dom";

const Chat = (/*{roomId}: {roomId:string}*/) => {
    const {roomId} = useParams<{roomId:string}>();

    const [messages, setMessages] = useState<{ sender: string; content: string }[]>([]);
    const [message, setMessage] = useState("");
    const [client, setClient] = useState<any>(null);
    const memberNumbers = useRef<number[]>([1,2,3,4,5]);
    const [selectedMem, setSelectedMem] = useState<number>(1);

    useEffect(()=>{
        if(!roomId)return ;
        const newClient = connectWebsocket((msg)=>{
            setMessages((prev)=>[...prev, msg]);
        },roomId);
        setClient(newClient);

        //이전 메시지 조회 및 셋팅
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
            client.publish({destination:`/pub/send`, body: JSON.stringify({ sender: `User${selectedMem}`, content: message, roomId:`${roomId}`, writerId:selectedMem }) });
            setMessage("");
        }
    }

    const changeMember = (member:number) => {
        setSelectedMem(member);
    }

    if(!roomId){
        return <div>잘못된 채팅방 ID입니다.</div>;
    }

    return (
        <div>
            <h2>Chat Room: {roomId}</h2>
            <h3>Member: {selectedMem}</h3>
            <ul className="mebmer_list">
                {
                    memberNumbers.current.map((member)=>{
                        return (
                            <li key={member} onClick={()=>{changeMember(member)}}>{member}번 회원</li>
                        )
                    })
                }
            </ul>
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