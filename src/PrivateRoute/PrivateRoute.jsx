import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const { user } = use(AuthContext)
    console.log(user);

    if(user && user?.email){

        return children
    }

    return <Navigate to='/auth/login'></Navigate>
     
};

export default PrivateRoute;