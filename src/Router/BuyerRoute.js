import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthConfig/AuthProvider';
import useBuyer from '../Hooks/useBuyer';

const BuyerRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);

    const [isBuyer,isBuyerLoading] = useBuyer(user?.email)
    const location = useLocation();

    // if(loader || isBuyerLoading){
    //     return <p>loading...</p>
    // }

    if(user && isBuyer){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default BuyerRoute;
