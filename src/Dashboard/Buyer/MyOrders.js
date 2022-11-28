import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthConfig/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: orders = [], refetch } = useQuery({
        queryKey: ['myorders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myorders?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    console.log(orders)
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