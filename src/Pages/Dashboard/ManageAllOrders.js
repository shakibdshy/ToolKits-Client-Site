import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://toolkitsnode.herokuapp.com/all-orders', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })

            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleShipment = (id) => {
        console.log(id);
        fetch(`https://toolkitsnode.herokuapp.com/ship-order/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Successfully shipped the order');
                }
            })
    }

    return (
        <>
            <div className="dashboard-table-container overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Customer Name</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => {
                                console.log(order);
                                return (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{order.name}</td>
                                        <td>{order.buyerName}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.paid ? <span className='btn btn-xs btn-success'>{order.shipped ? 'shipped' : 'pending'}</span> : <span className='btn btn-xs btn-light-cancel'>unpaid</span>}</td>
                                        <td>
                                            <div className='flex gap-3'>
                                                {
                                                    order.shipped ?
                                                        <span className='btn btn-xs btn-success'>shipped</span>
                                                        :

                                                        order.paid ?
                                                            <button className='btn btn-xs btn-warning' onClick={() => handleShipment(order._id)}>Ship</button>
                                                            :
                                                            <span className='btn btn-xs btn-light-cancel'>Not paid yet</span>

                                                }
                                            </div>
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

export default ManageAllOrders;