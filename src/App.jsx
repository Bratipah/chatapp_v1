import React from 'react'
import ReactDOM from 'react-dom/client';
import './App.css'
// import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Account from './pages/Account';
import SignIn from './pages/SignIn';
import Protected from './components/Protected';


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
    path: "/account",
    element:<Protected> <Account /></Protected>
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
