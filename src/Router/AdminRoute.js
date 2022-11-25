import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthConfig/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if(isAdminLoading){
        return <div className='w-20 h-20 border-8 border-orange-500 border-dashed animate-spin'></div>
    }

    if(isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;