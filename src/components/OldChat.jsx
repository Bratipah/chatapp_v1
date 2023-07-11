import { useState, useEffect } from 'react'
import {db,auth } from '../firebase/fireBaseConfig'
import SendMessage from '../pages/SendMessage'
import { collection, query, limit, orderBy, onSnapshot } from "firebase/firestore";

function Chat() {
    const [messages, setMessages] = useState([])
    const { userID } = auth.User
  

  useEffect(() => {
        const q = query(
          collection(db, "messages"),
          orderBy("createdAt"),
          limit(50)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
              let messages = [];
              QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
              });
              setMessages(messages) 
          
        });
        return () => data; 
   
  }, []);
 
    return (
           <div>
             <button onClick={() => auth.signOut()}>Sign Out</button>
              {messages && messages.map((message, id,  ) => 
                 <div 
               key={id} 
               className={`msg ${userID === auth.User.uid ? 'sent' : 'received'}`}>
                  <img src={message.photoURL} />
                  <p>{message.text}</p>
               </div>
              )} 
           <SendMessage />
         </div>
    )
}
export default Chat