import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../AuthConfig/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: books = [], refetch } = useQuery({
        queryKey: ['mybooks'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mybooks?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    const btnDeleteBook = (id) => {
        fetch(`http://localhost:5000/book/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('boibazarToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast('Deleted!')
                    refetch()
                }
            })
    }
    const btnAdvertise = (id) => {
        fetch(`http://localhost:5000/books/advertise/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('boibazarToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount> 0){
                toast('Set for Advertise!')
                refetch()
            }
        })
    }
    return (
        <div>
            <h1 className="text-5xl text-orange-600 font-bold">My Books</h1>
            <table className="min-w-full text-base py-10">

                <thead className="dark:bg-gray-700">
                    <tr className="text-center">
                        <th className="p-3">Name</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Delete</th>
                        <th className="p-3">Action</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, i) =>
                            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                <td className="p-3">
                                    <p>{book.productName}</p>
                                </td>
                                <td className="p-3">
                                    <p>{book.resale}</p>
                                </td>
                                <td className="p-3">
                                    <button onClick={() => btnDeleteBook(book._id)} className='bg-orange-600 text-white p-3 rounded-md'>Delete</button>
                                </td>

                                <td className="p-3">
                                    {
                                        book.isSold ? '' :  <button onClick={() => btnAdvertise(book._id)} className='btn btn-outline text-orange-600 border-orange-600 p-4 rounded'>Advertise</button>
                                    }
                                   
                                </td>
                                <td className="p-3">
                                    <p className='text-orange-600 text-lg font-semibold'>{book.isSold ? 'Sold' : 'Available'}</p>
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

export default MyProducts;