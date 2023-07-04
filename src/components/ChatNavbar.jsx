import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom';

const ChatNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = async () => {
        try {
          await logOut()
        } catch (error) {
          console.log(error)
        }
      }

  return (
    <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={user.photoURL} alt="" />
        <span>{user.displayName}</span>
        {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to='/signin'>Sign in</Link>
      )}
      </div>
    </div>
  )
}
export default ChatNavbar
