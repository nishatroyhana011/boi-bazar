import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from './cards/BookCard';

const Category = () => {
    const bookData = useLoaderData();
    return (

        <div>
            <div className='w-5/6 mx-auto my-10'>
                {
                    bookData.map(book =>
                        <BookCard book={book} key={book._id}></BookCard>)
                }
            </div>
            
        </div>

    );
};

export default Category;