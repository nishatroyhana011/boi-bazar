import React, { useContext } from 'react';
import { AuthContext } from '../../AuthConfig/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const BookingModal = ({booking}) => {
    const {productName, resale, image, _id } = booking;
    const { user } = useContext(AuthContext);

    const handleBook = (event) => {
        event.preventDefault();
        const buyerName = user.displayName;
        const email = user.email;
        const bookName = productName;
        const price = resale;
        const photo = image;
        const phone = event.target.phone.value;
        const location = event.target.location.value;
        const productId = _id

        const booking = {
            buyerName,
            email,
            bookName,
            price,
            phone,
            location,
            photo,
            productId
        }
        fetch('https://boi-bazar-server-opal.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('boibazarToken')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {
                if(result.acknowledged){
                    toast('Product Booked!')
                }
            })
    }

    return (
        <>
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
                            <input type="text" name='phone' placeholder="Type your phone no here" className="input input-ghost w-full p-2 my-2" />
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
        </>
    );
};

export default BookingModal;
