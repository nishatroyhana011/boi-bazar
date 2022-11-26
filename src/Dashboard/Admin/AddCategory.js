import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthConfig/AuthProvider';


const AddCategory = () => {
    const { user } = useContext(AuthContext);
    const [loggedInUser, setLoggedInUser] = useState('')


    const url = `http://localhost:5000/users?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoggedInUser(data)
            })
    }, [user?.email])

    const addCategory = (event) => {
        event.preventDefault();
        const category = event.target.category.value;
        const setCategory = {
            categoryName: category
        }
        fetch('http://localhost:5000/categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('boibazarToken')}`
            },
            body: JSON.stringify(setCategory)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    }

    return (
        <div>
            
            <div className='my-6'>
                <p className='text-orange-600 text-lg font-semibold'>WelCome Back</p>

                <p className='text-black text-2xl font-bold '>{loggedInUser.name}</p>

            </div>
            <p>Enter book categories here</p>
            <div className='w-1/2 mx-auto'>
                <form onSubmit={addCategory}>
                    <input type="text" placeholder="Type here" name='category' className="input w-full" />
                    <button type='submit' className='btn btn-outline my-4 w-full text-orange-600 border-orange-600 p-4 rounded'>Add Category</button>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;