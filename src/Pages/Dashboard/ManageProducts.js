import React, { useState } from 'react';
import { useQuery } from 'react-query';
import HashLoader from "react-spinners/HashLoader";

const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/tools', {
        method: 'GET',
    }).then(res => res.json()));
    if (isLoading) {
        return <HashLoader className='mx-auto mt-4' color={"#36D7B7"} size={30} />;
    }
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
                        {
                            tools.map((tool, index) => {
                                console.log(tool);
                                return (
                                    <tr key={index} refetch={refetch}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={tool.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{tool.name}</td>
                                        <td>{tool.available}</td>
                                        <td>{tool.minOrder}</td>
                                        <td>{tool.price}</td>
                                        <td>
                                            <button
                                                className="btn btn-light-cancel btn-sm"
                                                type="button"
                                                onClick={() => {
                                                    setDeleteProduct(tool.id);
                                                }}
                                            >
                                                Delete
                                            </button>
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

export default ManageProducts;