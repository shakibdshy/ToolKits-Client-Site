import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../utils/firebase.init";
import { useForm } from "react-hook-form";
import axios from 'axios';
import ReactStars from 'react-stars'

const AddAReview = () => {
    const [user] = useAuthState(auth);
    const [rating, setRating] = useState(0);

    // Catch Rating value
    const ratingChanged = (newRating) => {
        setRating(newRating);
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const clientId = '54aa09338987dbac2411ee1063e11ced';

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${clientId}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const reviewer = {
                        name: data.name,
                        displayName: data.displayName,
                        email: data.email,
                        designation: data.designation,
                        massage: data.massage,
                        image: image,
                        rating,
                    }
                    const getReview = async () => {
                        const url = 'https://toolkitsnode.herokuapp.com/add-review';
                        const { data } = await axios.post(url, reviewer);
                        console.log(data);
                    }
                    getReview();
                }
            });

        reset();
    }


    return (
        <>
            <div className='review-section'>
                <div className='container mx-auto px-14 max-w-4xl'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='dashboard-box-container flex items-center space-x-6'>
                            <div className="shrink-0">
                                <img className="h-32 w-32 object-cover rounded-3xl" src={user?.photoURL} alt="" />
                            </div>
                            <label className="block">
                                <span className="sr-only">Choose profile photo</span>
                                <input type="file"
                                    {...register("image", {
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
                                    <h2 className="text-xl text-secondary font-bold">Personal Information</h2>
                                    <p className='text-base font-medium'>User's credentials</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <input type="text" readOnly value={user?.displayName || ''} {...register("name")} placeholder="Full Name" className="input input-bordered input-secondary w-full" />
                                <input type="text" {...register("displayName")} placeholder="Display Name" className="input input-bordered input-secondary w-full" />
                                <input type="text" {...register("designation")} placeholder="Designation" className="input input-bordered input-secondary w-full" />
                                <div className="mb-3 flex items-center">
                                    <span className='text-lg mt-2'>Your rating is : <span className="font-bold">{rating}</span> / 5</span>&nbsp;&nbsp;
                                    <span>
                                        <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={44}
                                            color2={'#ffd700'} />
                                    </span>
                                </div>
                                <textarea {...register("massage")} placeholder="Your Content Here" className="textarea textarea-secondary"></textarea>
                            </div>
                        </div>
                        <div className='dashboard-box-container'>
                            <div className="mb-8 flex items-center gap-4">
                                <figure className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" className="svg-icon--material svg-icon card-icon h-8 w-8" data-name="Material--Phonelink"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M18 10h4v7h-4z" opacity="0.3"></path><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></svg>
                                </figure>
                                <div className="">
                                    <h2 className="text-xl text-secondary font-bold">Contact Information</h2>
                                    <p className='text-base font-medium'>User's contact information</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <input type="email" readOnly value={user?.email || ''} {...register("email")} placeholder="Email" className="input input-bordered input-secondary w-full" />
                            </div>
                        </div>
                        <div className='dashboard-box-container flex items-center justify-between gap-1'>
                            <button className='btn btn-light-secondary w-full' type="submit">Publish</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddAReview;