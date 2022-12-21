import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthConfig/AuthProvider';

const BookCard = ({ book, setBooking }) => {

    const { user } = useContext(AuthContext);
    const { _id, productName, image, location, resale, original, year, time, sellerName, conatct, description, email } = book
    const [isVerified, setIsVerified] = useState({})

    const url = `https://boi-bazar-server-opal.vercel.app/users?email=${email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setIsVerified(data)
            })
    }, [email])

    const date = (time) => {
        return new Date(time).toLocaleString();
    }

    const reportToAdmin = (id) => {
        fetch(`https://boi-bazar-server-opal.vercel.app/books/reported/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('boibazarToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                
            }
        })
    }

    return (
        <div>
            <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <div className="text-start">
                            <div className='flex'>
                            <h2 className="text-md font-semibold leading-none">Posted by: {sellerName}</h2>
                            {
                                isVerified.verified ? <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="blue" className="flex-shrink-0 w-4 h-4 dark:text-violet-400">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                </> : <>

                                </>
                            }
                            </div>
                            <span className=" text-xs leading-none dark:text-gray-400">{conatct}</span>
                            <p className="text-xs leading-none dark:text-gray-400">{location}</p>
                        </div>
                    </div>
                </div>
                <img src={image} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                <p className='text-orange-600 text-2xl font-semibold'>{productName}</p>
                <div className="p-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <button type="button" className="flex items-center justify-center tooltip" data-tip="Add to wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                            </button>
                        </div>
                        <button onClick={() => reportToAdmin(_id)} type="button" className="flex items-center justify-center tooltip" data-tip="Report to Admin">
                            <img className="w-5 h-5 fill-current" src="https://static.thenounproject.com/png/5070527-200.png" alt="" />
                        </button>
                    </div>
                    <div className="flex justify-between items-center pt-3 pb-1">
                        <p>Current Price: {resale}</p>
                        <p>Buying Price: {original}</p>
                    </div>
                    <div className='text-start'>
                        <p>Year of usage: {year}</p>
                        <p>Posted at: {date(time)}</p>
                    </div>
                    <hr className='my-2' />
                    <div className="space-y-3">
                        <p className="text-sm text-start">
                            {description}
                        </p>
                        {
                            user.email===email ? <>
                            <button  className="btn border border-orange-500 w-full mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4  rounded" disabled>Book Now</button>
                            </> : <>
                            <label htmlFor="my-modal-6" onClick={()=>setBooking(book)} className="btn border border-orange-500 w-full mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4  rounded ">Book Now</label>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;