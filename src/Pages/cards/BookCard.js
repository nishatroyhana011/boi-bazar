import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../AuthConfig/AuthProvider';

const BookCard = ({ book }) => {

    const { user } = useContext(AuthContext);
    const { productName, image, location, resale, original, year, time, sellerName, conatct, description } = book
    const date = (time) => {
        return new Date(time).toLocaleString();
    }

    const handleBook = (event)=>{
        event.preventDefault();
        const buyerName = user.displayName;
        const email = user.email;
        const bookName = productName;
        const price = resale;
        const photo = image;
        const phone = event.target.phone.value;
        const location = event.target.location.value;

        const booking = {
            buyerName,
            email,
            bookName,
            price,
            phone,
            location,
            photo

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('boibazarToken')}`
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(result => {
            toast('Product Booked!')
            console.log(result)
        })
    }

    return (
        <div>
            <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <div className="text-start">
                            <h2 className="text-sm font-semibold leading-none">Posted by: {sellerName}</h2>
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
                        <button type="button" className="flex items-center justify-center tooltip" data-tip="Report to Admin">
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
                        <label htmlFor="my-modal-6" className="btn border border-orange-500 w-full mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4  rounded">Book Now</label>

                    </div>
                </div>
            </div>
            <div>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{productName}</h3>
                        <div className="py-2 px-10 text-start">
                            <form onSubmit={handleBook}>
                                <input type="text" name='productname' value={productName} readOnly className="input input-ghost w-full p-2" />
                                <input type="text" name='price' value={resale} readOnly className="input input-ghost w-full p-2" />
                                <input type="text" name='username' value={user.displayName} readOnly className="input input-ghost w-full p-2" />
                                <input type="text" name='email' value={user.email} readOnly className="input input-ghost w-full p-2" />
                                <input type="text" name='phone' placeholder="Type your phone no here" className="input input-ghost w-full p-2" />
                                <input type="text" name='location' placeholder="Type your location here" className="input input-ghost w-full p-2" />
                                <button type='submit' className='btn btn-outline my-4 w-full text-orange-600 border-orange-600 p-4 rounded'>Submit</button>
                            </form>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" type="submit" className="btn border border-orange-500 bg-gradient-to-r from-orange-500 to-yellow-500">Close</label>
                            <Toaster></Toaster>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;