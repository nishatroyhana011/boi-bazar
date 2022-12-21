import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const CheckoutForm = ({ pay }) => {
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState('')
  const [transectionId, setTransectionId] = useState("");
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { _id, price, productId, buyerName, email } = pay;

  useEffect(() => {

    fetch('https://boi-bazar-server-opal.vercel.app/create-payment-intent', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem('boibazarToken')}`
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error)
      console.log('[error]', error);
    } else {
      setCardError('')
    }
    setSuccess('');
    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: email
          },
        },
      },
    );
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        booking: _id,
        productId,
      }
      fetch('https://boi-bazar-server-opal.vercel.app/payments', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem('boibazarToken')}`
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount > 0) {
            toast('Payment completed successfully!')
            setSuccess('Payment completed successfully!')
            setTransectionId(paymentIntent.id)
            setPaymentComplete(true)
          }
        }
        )
    }
    setProcessing(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn border border-orange-500 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4  rounded' type="submit" disabled={!stripe || !clientSecret || processing || paymentComplete}>
          Pay
        </button>
        <p>{cardError?.message}</p>
        {
          success && <div className='my-5'>
            <p className='text-orange-600 text-xl'>{success}</p>
            <p>Your Transaction id: {transectionId}</p>
          </div>
        }
      </form>
      <Toaster />
    </div>
  );
};

export default CheckoutForm;