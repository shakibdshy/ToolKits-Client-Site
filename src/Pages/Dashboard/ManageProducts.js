import React from 'react';

const ManageProducts = () => {
    return (
        <>
            <div className="dashboard-table-container overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Available</th>
                            <th>Minimum Order</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Image</td>
                            <td>Beveled Cone</td>
                            <td>100</td>
                            <td>10</td>
                            <td>$70</td>
                            <td><button className='btn btn-light-cancel btn-sm' type="button">Delete</button></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Image</td>
                            <td>Beveled Cone</td>
                            <td>100</td>
                            <td>10</td>
                            <td>$70</td>
                            <td><button className='btn btn-light-cancel btn-sm' type="button">Delete</button></td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Image</td>
                            <td>Beveled Cone</td>
                            <td>100</td>
                            <td>10</td>
                            <td>$70</td>
                            <td><button className='btn btn-light-cancel btn-sm' type="button">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </>
    );
};

export default ManageProducts;