import { JSX } from 'react';

import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../redux/hooks/reduxHooks';

interface RequiredAuthProps {
  children: JSX.Element;
}

const RequiredAuth = ({ children }: RequiredAuthProps): JSX.Element => {
  const isAuth = useAppSelector((state) => state.auth.keynumber);

  return isAuth !== null ? children : <Navigate to="/login" replace />;
};

export default RequiredAuth;
