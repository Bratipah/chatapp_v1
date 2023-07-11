/* eslint-disable no-unused-vars */
import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase/fireBaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { User } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      if (User && User.uid) {
        const unsub = onSnapshot(doc(db, "userChats", User.uid), (doc) => {
          if (doc.exists()) { // Check if the document exists
            setChats(doc.data());
          } else {
            setChats([]); // Set an empty array if the document doesn't exist
          }
        });
        return () => {
          unsub();
        };
      }
    };
  
    getChats();
  }, [User]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  if (!User || !User.uid) {
    return <div>Loading...</div>; // Add a loading state or return null while user is being fetched
  }

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].User)}
        >
          <img src={chat[1].User.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].User.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;