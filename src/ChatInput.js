import React, { useState, useEffect } from "react";
import "./ChatInput.css";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  useEffect(() => {}, [setInput]);

  const sendMessage = (e) => {
    e.preventDefault();
    if ((channelId && input.length != 0) || input != " ") {
      console.log(channelId);
      const data = {
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp,
        user: user.displayName,
        userImage: user.photoURL,
      };
      console.log(data);
      db.collection("Rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.Timestamp.now(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="Submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
