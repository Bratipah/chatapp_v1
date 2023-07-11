import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import "../style.scss";

function MainChat() {
  
    return (
      <>
        <div>
          <Sidebar />
          <Chat />
        </div>
      </>
    );
  }
  export default MainChat; 