import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom';

const ChatNavbar = () => {
  const { User } = useContext(AuthContext);
  const handleSignOut = () => {
    localStorage.removeItem('Email');
    window.location.reload();
  };

  return (
    <div className='navbar'>
      <span className="logo">We Chat</span>
      <div className="user">
        {User && User.photoURL && <img src={User.photoURL} alt="" />}
        {User && User.displayName && <span>{User.displayName}</span>}
        {User && User.displayName ? (
          <button onClick={handleSignOut}>Logout</button>
        ) : (
          <Link to='/signin'>Sign in</Link>
        )}
      </div>
    </div>
  );
};
export default ChatNavbar;
