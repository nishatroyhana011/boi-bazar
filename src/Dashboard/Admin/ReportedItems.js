import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ReportedItems = () => {
    
    const [reportedItems, setReportedItems] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/books/reported')
        .then(data=>{
            const items = data.data;
            setReportedItems(items)
        })
    },[])

    const btnDeleteItem = (id)=>{
        fetch(`http://localhost:5000/book/${id}`, {
            method:'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('boibazarToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                toast('Item Deleted!')
            }   
        })
    }
    
    return (
        <div>
            <h1 className="text-5xl text-orange-600 font-bold my-5">Reported Items</h1>
            <table className="min-w-full text-base py-10">

                <thead className="dark:bg-gray-700">
                    <tr className="text-center">
                        <th className="p-3">Name</th>
                        <th className="p-3">Email of Seller</th>
                        <th className="p-3">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportedItems.map((item, i) =>
                            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                <td className="p-3">
                                    <p>{item.productName}</p>
                                </td>
                                <td className="p-3">
                                    <p>{item.email}</p>
                                </td>
                                <td className="p-3">
                                    <button onClick={() => btnDeleteItem(item._id)} className='bg-orange-600 text-white p-3 rounded-md'>Delete</button>
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

export default ReportedItems;