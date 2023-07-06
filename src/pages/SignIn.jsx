<<<<<<< HEAD
// import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
 import { UserAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  // const navigate = useNavigate();
=======
import  { useContext, useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { googleSignIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
>>>>>>> 5327f8dc1ed0d9ffea15f311e1e81ce755dc5379

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (user != null) {
  //     navigate('/account');
  //   }
  // }, [user]);

  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
     </div>
  );
};

export default Signin;