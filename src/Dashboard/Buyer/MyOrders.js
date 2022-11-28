import React, { useContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthConfig/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    
    useEffect(()=>{
        fetch(`https://boi-bazar-server-opal.vercel.app/myorders?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('boibazarToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            setOrders(data)   
        })
    },[user.email])
    
    return (
        <div>
            <p className='text-orange-600 text-3xl font-bold text-start my-10'>My Orders</p>
            <table className="min-w-full text-base py-10">

                <thead className="dark:bg-gray-700">
                    <tr className="text-center">
                        <th className="p-3">Image</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, i) =>
                            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                <td className="p-3">
                                    <img className='h-20 w-20 rounded-full shadow-lg' src={order.photo} alt="" />
                                </td>
                                <td className="p-3">
                                    <p>{order.bookName}</p>
                                </td>
                                <td className="p-3">
                                    <p>{order.price}</p>
                                </td>
                                <td className="p-3">
                                    {
                                        order.paid ? <>
                                        <p className='text-orange-600 text-lg font-semibold'>PAID</p>
                                        </> : <>
                                        <Link to={`/dashboard/payment/${order._id}`} className='btn border border-orange-500 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4  rounded'>Pay</Link>
                                        </>
                                    }
                                    
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Toaster />
        </div>
    );
};

export default MyOrders;