import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";
function Chat({ id }) {
  // Use Params allows to get ids given to the router
  // Destructuring used to get roomId
  const { roomId } = useParams();
  const [roomDet, setRoomDet] = useState();
  const [roomMessages, setRooMes] = useState([]);

  useEffect(() => {
    if (roomId) {
      // Get Room Details
      db.collection("Rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDet(snapshot.data());
        });
      // Get Room Messages

      db.collection("Rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setRooMes(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);
  console.log(roomDet);
  console.log(roomMessages);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDet?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => {
          return (
            <Message
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
            />
          );
        })}
      </div>
      <ChatInput channelName={roomDet?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
