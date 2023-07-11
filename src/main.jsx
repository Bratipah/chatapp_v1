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
import { ChatContextProvider } from './context/ChatContext';
import MainChat from './pages/MainChat';


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
