import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/firebase.Config';

const PrivateRoute = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation()

    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace />

    }
    return children;
};

export default PrivateRoute;