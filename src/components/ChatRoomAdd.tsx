import React from "react";

interface ChatRoomAddProps {
    newRoomTitle: string;
    setNewRoomTitle: React.Dispatch<React.SetStateAction<string>>;
    handleAddRoom: () => void;
}

const ChatRoomAdd:React.FC<ChatRoomAddProps> = React.memo(({newRoomTitle, setNewRoomTitle, handleAddRoom})=>{

    return(
        <div className="chatroom-add">
            <input
                type="text"
                placeholder="채팅방 제목 입력"
                value={newRoomTitle}
                onChange={(e) => setNewRoomTitle(e.target.value)}
            />
            <button onClick={handleAddRoom}>추가</button>
        </div>
    )
});

export default ChatRoomAdd;