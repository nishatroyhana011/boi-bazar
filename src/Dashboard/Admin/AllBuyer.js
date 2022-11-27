import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AllBuyer = () => {

    const { data: Buyers = [], refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allbuyers')
            const data = await res.json()
            return data;
        }
    })

    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/buyer/${id}`, {
            method:'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('boibazarToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                toast('Buyer Deleted!')
               refetch()
            }   
        })
    }
    return (
        <div>
            <p className='text-orange-600 text-3xl font-bold text-start my-8'>All Buyers</p>
            <table className="min-w-full text-base py-8">

                <thead className="dark:bg-gray-700">
                    <tr className="text-center">
                        <th className="p-3">Verify</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       Buyers.map((Buyer, i) =>
                            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                <td className="p-3">
                                    <img className='h-20 w-20 rounded-full shadow-lg' src={Buyer.photo} alt="" />
                                </td>
                                <td className="p-2">
                                    <p>{Buyer.name}</p> 
                                </td>
                                <td className="p-2">
                                    <p>{Buyer.email}</p>
                                </td>
                                <td className="p-2">
                                    <button onClick={() => handleDelete(Buyer._id)} className='btn border border-orange-500 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4  rounded'>delete</button>
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

export default AllBuyer;