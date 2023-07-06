/* eslint-disable react/prop-types */

import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext } from '../context/AuthContext';

const Protected = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};

export default Protected;