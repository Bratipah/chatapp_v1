// import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import  { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { googleSignIn, User } = useContext(AuthContext);
   const navigate = useNavigate();
// >>>>>>> 5327f8dc1ed0d9ffea15f311e1e81ce755dc5379

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

   useEffect(() => {
    if (User) {
      navigate('/');
     }
   }, [User]);

  return (
    <div  className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
          <div className='max-w-[240px] m-auto py-4'>
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div>
      </div>
     </div>
  );
};

export default Signin;
