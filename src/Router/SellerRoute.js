import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthConfig/AuthProvider';
import useSeller from '../Hooks/useSeller';

const SellerRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const [isSeller,isSellerLoading] = useSeller(user?.email)
    const location = useLocation();


    if(isSellerLoading){
        return  <div className='mx-auto w-20 h-20 rounded-full border-8 border-orange-500 border-dashed animate-spin'></div>
    }

    if(isSeller){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoute;



