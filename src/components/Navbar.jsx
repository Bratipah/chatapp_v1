// import React from 'react'
import '../App.css'
import logo from "../assets/icons8-chat-bubble-50.png"

function Navbar() {
 

  return (
    <>
    <div className="bg-white shadow-lg container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <img src={logo} />
     </a>
     <div className="flex flex-wrap items-center text-base justify-center">
       <a className="mr-5">Home</a>
       <a className="mr-5">Chats</a>
       <a className="mr-5">Messages</a>
       <a className="mr-5">Sign In</a>
     </div>
     <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0">Get Started</button>
</div>
    </>
  )
}

export default Navbar
