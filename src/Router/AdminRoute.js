import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthConfig/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if(loader || isAdminLoading){
        return <p>loading...</p>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;