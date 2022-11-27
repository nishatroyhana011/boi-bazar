import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthConfig/AuthProvider';

const AllSeller = () => {
    const {user} = useContext(AuthContext);
    const { data: sellers = [] } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allsellers')
            const data = await res.json()
            return data;
        }
    })
    console.log(sellers)
    const handleDelete = ()=>{

    }
    const handleVerify = ()=>{

    }
    return (
        <div>
            <p className='text-orange-600 text-3xl font-bold text-start my-10'>All Sellers</p>
            <table className="min-w-full text-base py-10">

                <thead className="dark:bg-gray-700">
                    <tr className="text-center">
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Delete</th>
                        <th className="p-3">Verify</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       sellers.map((seller, i) =>
                            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                <td className="p-3">
                                    <p>{seller.name}</p> 
                                </td>
                                <td className="p-3">
                                    <p>{seller.email}</p>
                                </td>
                               
                                <td className="p-3">
                                    <button onClick={() => handleDelete(seller._id)} className='bg-green-600 text-white p-3 rounded-md'>delete</button>
                                </td>
                                <td className="p-3">
                                    <button onClick={() => handleVerify(seller._id)} className='bg-green-600 text-white p-3 rounded-md'>Verify</button>
                                </td>
                            </tr>
                       )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSeller;
