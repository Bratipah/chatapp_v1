/* eslint-disable react/prop-types */
import {
    createContext,
    useContext,
    useReducer,
  } from "react";
  import { AuthContext } from "./AuthContext.jsx";
  
  const ChatContext = createContext();
  
<<<<<<< HEAD:src/context/ChatContext.jsx
  export const ChatContextProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
=======
  const ChatContextProvider = ({ children }) => {
    const { User } = useContext(AuthContext);
>>>>>>> 3d9f7e514f63bba465bc0602cfb619216d428b11:src/context/ChatContext.js
    const INITIAL_STATE = {
      chatId: "null",
      user: {},
    };
  
    const chatReducer = (state, action) => {
      switch (action.type) {
        case "CHANGE_USER":
          return {
            user: action.payload,
            chatId:
<<<<<<< HEAD:src/context/ChatContext.jsx
              user.uid > action.payload.uid
                ? user.uid + action.payload.uid
                : action.payload.uid + user.uid,
=======
              User.uid > action.payload.uid
                ? User.uid + action.payload.uid
                : action.payload.uid + User.uid,
>>>>>>> 3d9f7e514f63bba465bc0602cfb619216d428b11:src/context/ChatContext.js
          };
  
        default:
          return state;
      }
    };
  
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  
    return (
      <ChatContext.Provider value={{ data:state, dispatch }}>
        {children}
      </ChatContext.Provider>
    );
  };
  export {ChatContext, ChatContextProvider};