import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../utils/firebase.init';

const AddAProduct = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '54aa09338987dbac2411ee1063e11ced';

    const onSubmit = async data => {
        console.log(data);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        toast.warn('Adding product. It may take a while');
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const name = data.name;
                    const content = data.content;
                    const newAvailable = parseInt(data.available);
                    const newMinQuantity = parseInt(data.minQuantity);
                    const newPrice = parseInt(data.price);
                    const product = {
                        name: name,
                        content: content,
                        available: newAvailable,
                        minQuantity: newMinQuantity,
                        price: newPrice,
                        img: img
                    };
                    console.log(product);
                    //adding item to database
                    fetch('https://toolkitsnode.herokuapp.com/tools', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.success) {
                                toast.success("Product added successfully !");
                            }
                        })
                }
            })
        reset();
    }

    return (
        <>
            <div className='review-section'>
                <div className='container mx-auto px-14 max-w-4xl'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='dashboard-box-container flex items-center space-x-6'>
                            <div className="shrink-0">
                                <img className="h-32 w-32 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="" />
                            </div>
                            <label className="block">
                                <span className="sr-only">Choose profile photo</span>
                                <input type="file"
                                    {...register("img", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        }
                                    })}
                                    className="block w-full text-sm text-[#323232]
                                bg-[#f8f9fa] rounded-2xl border border-solid border-[#f8f9fa]
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100
                                "/>
                            </label>
                        </div>
                        <div className='dashboard-box-container'>
                            <div className="mb-8 flex items-center gap-4">
                                <figure className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" className="svg-icon--material svg-icon card-icon h-8 w-8" data-name="Material--Person"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity="0.3"></path><circle cx="12" cy="8" opacity="0.3" r="2"></circle><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path></svg>
                                </figure>
                                <div className="">
                                    <h2 className="text-xl text-secondary font-bold">Product Details</h2>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <input type="text" placeholder="Product Name" {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Product Name is Required'
                                    }
                                })} className="input input-bordered input-secondary w-full" />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.name.message}</span>}
                                </label>
                                <textarea {...register("content", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    }
                                })} placeholder="Short description" className="textarea textarea-secondary" />
                                <label className="label">
                                    {errors.content?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.content.message}</span>}
                                </label>
                                <input type="number"
                                    {...register("minQuantity", {
                                        required: {
                                            value: true,
                                            message: 'Minimum Quantity is Required'
                                        }
                                    })}
                                    placeholder="Minimum order quantity" className="input input-bordered input-secondary w-full" />
                                <label className="label">
                                    {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.minQuantity.message}</span>}
                                </label>
                                <input type="number"
                                    {...register("available", {
                                        required: {
                                            value: true,
                                            message: 'Available Quantity is Required'
                                        }
                                    })}
                                    placeholder="Available quantity" className="input input-bordered input-secondary w-full" />
                                <label className="label">
                                    {errors.available?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.available.message}</span>}
                                </label>
                                <input type="number"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'Price is Required'
                                        }
                                    })}
                                    placeholder="Price" className="input input-bordered input-secondary w-full" />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.price.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className='dashboard-box-container'>
                            <div className="mb-8 flex items-center gap-4">
                                <figure className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" className="svg-icon--material svg-icon card-icon h-8 w-8" data-name="Material--Phonelink"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M18 10h4v7h-4z" opacity="0.3"></path><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></svg>
                                </figure>
                                <div className="">
                                    <h2 className="text-xl text-secondary font-bold">Contact Information</h2>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <input type="email"
                                    {...register("email")}
                                    placeholder="Email" value={user?.email} readOnly className="input input-bordered input-secondary w-full" />
                            </div>
                        </div>
                        <div className='dashboard-box-container flex items-center justify-between gap-1'>
                            <button className='btn btn-light-secondary w-full' type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddAProduct;