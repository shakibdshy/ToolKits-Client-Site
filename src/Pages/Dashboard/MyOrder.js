import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import DeleteConfirmModal from '../../Components/DeleteConfirmModal';
import auth from '../../utils/firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [deletingOrder, setDeletingOrder] = useState(null);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`https://toolkitsnode.herokuapp.com/orders?email=${user.email}`, {
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
                                            <div className='flex gap-5 justify-center'>
                                                {
                                                    order.paid ?
                                                        <>
                                                            <span className='btn btn-success btn-sm'>Paid</span>
                                                            <p>TrxId: <span className='text-error'>{order.transactionId}</span></p>
                                                        </>
                                                        :
                                                        <>
                                                            <Link to={`/dashboard/payment/${order._id}`}  className='btn btn-success btn-sm' type="button">Pay Now</Link>
                                                            <label htmlFor='my-modal-3' onClick={() => setDeletingOrder(order)} className='btn btn-light-cancel btn-sm' type="button">Cancel</label>
                                                        </>
                                                }

                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {deletingOrder && <DeleteConfirmModal
                    deletingOrder={deletingOrder}
                    orders={orders}
                    setOrders={setOrders}
                    setDeletingOrder={setDeletingOrder}
                ></DeleteConfirmModal>}
            </div>   
        </>
    );
};

export default MyOrder;