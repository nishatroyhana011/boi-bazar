import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthConfig/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import AddProduct from './Seller/AddProduct';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const [loggedInUser, setLoggedInUser] = useState('')

    const url = `http://localhost:5000/users?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoggedInUser(data)
            })
    }, [user?.email])

    return (
        <div className=' text-start w-10/12 mx-auto'>
            <div className='col-span-2'>
                <p className='text-orange-600 text-lg font-semibold'>WelCome Back</p>

                <p className='text-black text-2xl font-bold '>{loggedInUser.name}</p>
            </div>
            

        </div>
    );
};

export default Profile;