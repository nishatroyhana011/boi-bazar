import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from './cards/BookCard';
import BookingModal from './cards/BookingModal';

const Category = () => {
    const bookData = useLoaderData();
    const [booking, setBooking] = useState(null)
    return (
        <div>
            <div className='w-5/6 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                {
                    bookData.map(book => book.isSold ? <>
                        
                    </> : <>
                    <BookCard book={book} key={book._id} setBooking={setBooking}></BookCard>
                    </>
                    )
                }
            </div> 
            <div>
                {
                    booking &&
                    <BookingModal booking={booking}></BookingModal>
                }
            </div>   
        </div>
    );
};

export default Category;