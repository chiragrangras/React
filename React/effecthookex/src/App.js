import { useEffect, useState } from "react";
import "./App.css";
import { createConnection } from "./CreateConnection";
import TriggerSrcoll from "./TriggerSrcoll";

function App() {
  return (
    <div className="App">
      <TriggerSrcoll/>
      {/* <ChatRoom /> */}
    </div>
  );
}

function Chat({ roomId }) {
  let [serverUrl, setserverUrl] = useState("http://localhost:1234/");

  // console.log(roomId)
  useEffect(() => {
    let connection = createConnection(roomId, serverUrl);

    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <div>
        Server :{" "}
        <input
          type="text"
          onChange={(e) => {
            setserverUrl(e.target.value);
          }}
          value={serverUrl}
        ></input>
        <h2>You are in this {roomId}</h2>
      </div>
    </>
  );
}

function ChatRoom() {
  let [room, setRoom] = useState("");
  let [show, setShow] = useState(false);
  return (
    <>
      Choose your room :
      <select
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      >
        <option>---Select Room ---</option>
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
