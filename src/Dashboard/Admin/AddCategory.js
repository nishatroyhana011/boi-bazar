import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthConfig/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const AddCategory = () => {
    const { user } = useContext(AuthContext);
    //const [isAdmin] = useAdmin(user?.email)
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
        <div>
            <p>add cate</p>
            <div className='col-span-2'>
                <p className='text-orange-600 text-lg font-semibold'>WelCome Back</p>

                <p className='text-black text-2xl font-bold '>{loggedInUser.name}</p>
            </div>
        </div>
    );
};

export default AddCategory;