import React from 'react';

const ManageAllOrders = () => {
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
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Jessica Moore</td>
                            <td>100</td>
                            <td><span className='badge badge-warning'>Pending</span></td>
                            <td><button className='btn btn-light-cancel btn-sm' type="button">Cancel</button></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Cy Ganderton</td>
                            <td>Jessica Moore</td>
                            <td>100</td>
                            <td><span className='badge badge-success'>Success</span></td>
                            <td><button className='btn btn-success btn-sm' type="button">Shipped</button></td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Cy Ganderton</td>
                            <td>Jessica Moore</td>
                            <td>100</td>
                            <td><span className='badge badge-error'>Cancel</span></td>
                            <td><button className='btn btn-light-cancel btn-sm' type="button">Cancel</button></td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </>
    );
};

export default ManageAllOrders;