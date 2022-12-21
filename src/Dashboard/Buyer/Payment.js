import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigation } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

const Payment = () => {
    const pay = useLoaderData();
    const navigation = useNavigation()
    if(navigation.state === 'loading'){
        return <p>Loading</p>

    }
    return (
        <div>
            <p className='text-orange-600 text-xl my-5'>Payment for: {pay.bookName}</p>
            <p>Please pay <strong>{pay.price} BDT </strong></p>
            <div className='w-3/4 m-auto'>
            <Elements stripe={stripePromise}>
                <CheckoutForm pay={pay}></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;