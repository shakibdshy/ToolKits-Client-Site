import React, { useState } from 'react';
import { useQuery } from 'react-query';
import HashLoader from "react-spinners/HashLoader";
import DeleteModal from '../../Components/DeleteModal';

const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://toolkitsnode.herokuapp.com/tools', {
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
                                            <label htmlFor="my-modal-3" className="btn btn-light-cancel btn-sm modal-button " onClick={() => setDeleteProduct(tool)}>Delete Product</label>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {
                    deleteProduct && <DeleteModal
                        deleteProduct={deleteProduct}
                        tools={tools}
                        refetch={refetch}
                    ></DeleteModal>
                }
            </div> 
        </>
    );
};

export default ManageProducts;