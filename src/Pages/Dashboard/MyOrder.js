import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../utils/firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [deletingOrder, setDeletingOrder] = useState(null);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user])
    return (
        <>
            <div className="dashboard-table-container overflow-x-auto">
                <h2>My Orders: {orders.length}</h2>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{ index + 1 }</th>
                                        <th>{ order.name }</th>
                                        <th>{order.quantity }</th>
                                        <th>${order.totalPrice}</th>
                                        <td className='flex items-center gap-2'>
                                            <button className='btn btn-success btn-sm' type="button">Pay Now</button>
                                            <button className='btn btn-light-cancel btn-sm' type="button">Cancel</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>   
        </>
    );
};

export default MyOrder;