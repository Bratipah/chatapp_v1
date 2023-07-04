import ChatNavbar from "./ChatNavbar";
import Chats from "./Chats";

const Sidebar = () => {
    return (
      <div className="sidebar">
        <ChatNavbar />
        <search/>
        <Chats/>
      </div>
    );
  };
  
  export default Sidebar;