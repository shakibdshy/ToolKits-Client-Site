import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import HashLoader from "react-spinners/HashLoader";

const MakeAdmin = () => {
    // const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/all-users', {
    //     method: 'GET',
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));
    // console.log(users);

    // if (isLoading) {
    //     return <HashLoader className='mx-auto mt-4' color={"#36D7B7"} size={30} />;
    // }

    // const makeAdmin = () => {
    //     console.log('making admin');
    //     // const email = users.email;
    //     fetch(`http://localhost:5000/user/admin/${users.email}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => {
    //             if (res.status === 403) {
    //                 toast.error('Failed to Make an admin');
    //             }
    //             return res.json()
    //         })
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 refetch();
    //                 toast.success(`Successfully made an admin`);
    //             }
    //         })
    // }
    return (
        <>
            {/* <div className="dashboard-table-container overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Image</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Role</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td className='flex items-center gap-2'>
                                <button className='btn btn-light-cancel btn-sm' type="button">Remove User</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
        </>
    );
};

export default MakeAdmin;