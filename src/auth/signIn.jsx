// import React from 'react';
import { useContext } from "react";
import { SignInContext } from "../context/googleSignIn";
// import Navbar from "../components/Navbar";
import Chat from '../components/Chat';
import { auth } from '../firebase/fireBaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth'
import { SignInProvider } from '../context/googleSignIn';

function SignIn() {
    const {handleClick} = useContext(SignInContext)
    const [user] = useAuthState(auth)
    return (
        <>
            {
            user ? <Chat /> 
                : <SignInProvider>
                    <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
                        <h2>Chat Any Day any Time</h2>
                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"onClick={handleClick}>Sign In With Google</button>
                    
                        </div>
                </SignInProvider>
            }
        </> 
    )
}

export default SignIn