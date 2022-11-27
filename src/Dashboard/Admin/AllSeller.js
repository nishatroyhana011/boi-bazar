import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AllSeller = () => {
   
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allsellers')
            const data = await res.json()
            return data;
        }
    })
    
    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/seller/${id}`, {
            method:'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('boibazarToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                toast('Seller Deleted!')
               refetch()
            }   
        })
    }
    const handleVerify = ()=>{

    }
    return (
        <div>
            <p className='text-orange-600 text-3xl font-bold text-start my-8'>All Sellers</p>
            <table className="min-w-full text-base py-8">

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
                                <td className="p-2">
                                    <p>{seller.name}</p> 
                                </td>
                                <td className="p-2">
                                    <p>{seller.email}</p>
                                </td>
                               
                                <td className="p-2">
                                    <button onClick={() => handleDelete(seller._id)} className='btn border border-orange-500 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4  rounded'>delete</button>
                                </td>
                                <td className="p-2">
                                    <button onClick={() => handleVerify(seller._id)} className='btn btn-outline text-orange-600 border-orange-600 p-4 rounded'>Verify</button>
                                </td>
                            </tr>
                       )
                    }
                    <Toaster />
                </tbody>
            </table>
        </div>
    );
};

export default AllSeller;
