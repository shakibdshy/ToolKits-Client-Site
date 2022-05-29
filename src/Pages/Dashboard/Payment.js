import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_30u396Kw2ysh2Cq2PB30Ywod00N0syIx8K');

const Payment = () => {
    const { id } = useParams();
    const url = `https://toolkitsnode.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <HashLoader className='mx-auto mt-4' color={"#36D7B7"} size={30} />;
    }
    console.log(order);

    return (
        <div className='lg:mx-auto text-[black] lg:w-2/4'>
            <div className="card bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {order.buyerName}</p>
                    <h2 className="card-title">Please Pay for {order.name}</h2>
                    <p>Please pay: ${order.totalPrice}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    )
};

export default Payment;