
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Signin from '../pages/SignIn';

const Navbar = () => {
  const { User } = useContext(AuthContext);
  console.log(User);

  const handleSignOut =  () => {
    localStorage.removeItem('Email')
    window.location.reload()
  }

  return (
    <>
    {User === null ?
      <Signin/>
      :
      <>
        <div  className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
            <p className="py-6">
            <Link to={"/chats"}><a className="btn btn-ghost normal-case text-xl text-emerald-400">Chats</a></Link>
            <button onClick={handleSignOut} className="btn btn-ghost normal-case text-xl text-emerald-400">Logout</button>
            </p>
            </div>
          </div>
        </div>
     </>
        }
    </>
  );
};

export default Navbar;
