import {useEffect, useState} from "react";
import '../css/ChatRoom.css';
import apiClient from "../api/apiClient";
import ChatRoomAdd from "./ChatRoomAdd";
import {Link} from "react-router-dom";

interface ChatRoom {
    id:number,
    title:string,
    createdAt:string,
}

const ChatRoom = () => {
    const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
    const [newRoomTitle, setNewRoomTitle] = useState<string>('');
    const handleAddRoom = () => {
        if(!newRoomTitle.trim()) return ;
        apiClient.post('/chat/room/create',{title:newRoomTitle}).then((res)=>{
            setChatRooms((prev)=>[...prev, res.data]);
            setNewRoomTitle('');
        }).catch((err)=>console.error('채팅방 추가 실패!',err));
    };

    useEffect(()=>{
        apiClient.get('/chat/rooms').then((res)=>{
            setChatRooms(res.data);
        });
    },[]);


    return (
        <div className="chatroom-container">
            <ChatRoomAdd newRoomTitle={newRoomTitle}
                         setNewRoomTitle={setNewRoomTitle}
                         handleAddRoom={handleAddRoom}/>
            <h2>채팅방 목록</h2>
            <ul className="chatroom-list">
                {chatRooms.map((room,index) => (
                    <li key={room.id}>
                        <Link to={`/chatrooms/${room.id}`}>{room.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatRoom;