import React from "react";
import { AuthContextProvider } from '../context/AuthContext';
import Navbar from "../components/Navbar";

function Home() {
  
    return (
      <>
        <div>
        <AuthContextProvider>
          <Navbar />
          <h1  className='text-center text-3xl font-bold py-8'>Wii Chat</h1>
        </AuthContextProvider>
        </div>
      </>
    );
  }
  export default Home; 