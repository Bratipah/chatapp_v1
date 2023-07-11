import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  
    return (
      <>
        <div>
          <Navbar />
          <Link to='/chats'>Chat away</Link>
        </div>
      </>
    );
  }
  export default Home; 