/* eslint-disable react/prop-types */
import {
    createContext,
    useContext,
    useReducer,
  } from "react";
  import { AuthContext } from "./AuthContext";
  
  const ChatContext = createContext();
  
  const ChatContextProvider = ({ children }) => {
    const { User } = useContext(AuthContext);
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
              User.uid > action.payload.uid
                ? User.uid + action.payload.uid
                : action.payload.uid + User.uid,
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