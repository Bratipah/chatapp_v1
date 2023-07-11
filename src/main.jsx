import React from 'react'
import ReactDOM from 'react-dom/client';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { AuthContextProvider } from "./context/AuthContext";
<<<<<<< HEAD
import Chat from './components/OldChat';
=======
import { ChatContextProvider } from './context/ChatContext';
import MainChat from './pages/MainChat';
>>>>>>> 3d9f7e514f63bba465bc0602cfb619216d428b11


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/chats",
    element:<MainChat/>
  },
  {
    path: "/chats",
    element: <Chat />
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChatContextProvider>
        <RouterProvider router={router} />
      </ChatContextProvider>
    </AuthContextProvider>
    
  </React.StrictMode>
);
