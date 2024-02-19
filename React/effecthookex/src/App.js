import { useEffect, useState } from "react";
import "./App.css";
import { createConnection } from "./CreateConnection";

function App() {
  return (
    <div className="App">
      <ChatRoom />
    </div>
  );
}

function Chat({ roomId }) {
  let [serverUrl, setServerUrl] = useState("http://localhost:1234/");
  // console.log(roomId)
  useEffect(() => {
    let connection = createConnection(roomId, serverUrl);

    connection.connect();

    return ()=>{
      connection.disconnect();
    }
  }, [roomId,serverUrl]);

  return(
    <>
      <h2>You are in this {roomId}</h2>
    </>
  )
  
}

function ChatRoom() {
  let [room, setRoom] = useState("gen");
  let [show, setShow] = useState(false);
  return (
    <>
      Choose your room :
      <select>
        <option>---Select Room----</option>
        <option>General</option>
        <option>Music</option>
        <option>Travel</option>
      </select>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Close Chat" : "Open Chat"}
      </button>
      <Chat roomId={room} />
    </>
  );
}

export default App;
