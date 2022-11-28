import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../cards/CategoryCard';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://boi-bazar-server-opal.vercel.app/categories')
            const data = await res.json()
            return data;
        }
    })


    return (
        <div className='my-20'>
            <h1 className="text-5xl text-orange-600 font-bold">Categories</h1>
            <hr className='w-1/12 mx-auto mb-10 mt-5' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 w-5/6'>
                {
                    categories.map(cate=> 
                        <CategoryCard cate={cate}></CategoryCard>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;