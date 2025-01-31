import {Client} from "@stomp/stompjs";
import SockJS from "sockjs-client";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const SOCKET_URL = "http://localhost:8080/ws";
export const connectWebsocket = (onMessage:(message:any)=>void, roomId:string) => {
    const client = new Client({
        webSocketFactory: () => new SockJS(SOCKET_URL),
        onConnect: ()=>{
            console.log(`연결되었다능 roomId:${roomId}`);
            client.subscribe(`/topic/room/${roomId}`, (msg)=>{
                onMessage(JSON.parse(msg.body));
            })
        },
        onStompError: (frame) => {
            console.error("호호호호 STOMP ERROR!:",frame);
        }
    });

    client.activate();
    return client;
}