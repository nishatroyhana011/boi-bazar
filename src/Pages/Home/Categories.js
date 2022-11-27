import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data;
        }
    })


    return (
        <div className='my-20'>
            <h1 className="text-5xl text-orange-600 font-bold">Categories</h1>
            <hr className='w-1/12 mx-auto mb-10 mt-5' />
            <div className='grid grid-cols-4 m-12 mx-auto gap-5 w-5/6'>
                {
                    categories.map(cate=> 
                       <div className=' border border-orange-300  bg-orange-300 text-black p-14  rounded-lg'><Link to={`/categories/${cate._id}`}><p className='text-3xl font-bold'>{cate.categoryName}</p></Link></div> 
                    )
                }
            </div>
        </div>
    );
};

export default Categories;