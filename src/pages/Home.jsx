// import React from "react";
import Chat from '../components/Chat';
import { auth } from '../firebase/fireBaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth'
import { SignInProvider } from '../context/googleSignIn';
import SignIn from '../auth/signIn';
import '../App.css'
import Navbar from "../components/Navbar";

function Home() {
    const [user] = useAuthState(auth)
    return (
      <>
      <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
            <h2>Chat Any Day any Time</h2>
            {user 
            ? <Chat /> 
            : <SignInProvider>
                    <Navbar/>
                        <SignIn />
        
                    {/* <Footer /> */}
        </SignInProvider>
            }
        </div>
      </>
    );
  }
  export default Home; 