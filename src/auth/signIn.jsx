// import React from 'react';
import { useContext } from "react";
import { SignInContext } from "../context/googleSignInContext";

function SignIn() {
    const {handleClick} = useContext(SignInContext)
    return (
        <div>
           <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"onClick={handleClick}>Sign In With Google</button>
        </div>
    )
}

export default SignIn