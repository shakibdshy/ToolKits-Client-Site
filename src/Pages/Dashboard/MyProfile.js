import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faLocationDot,
    faEnvelope,
    faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import auth from '../../utils/firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { displayName, email, photoURL } = user;
    const [defaultUser, setDefault] = useState({});
    const { education, skill, address, phone, project1, project2, project3 } = defaultUser;
    useEffect(() => {
        fetch(`https://toolkitsnode.herokuapp.com/user?email=${email}`)
            .then(res => res.json())
            .then(data => setDefault(data))
    }, [])
    console.log(defaultUser);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(email, data);
        fetch(`https://toolkitsnode.herokuapp.com/user-info-update/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Profile information successfully added");
                };
                reset();
            })
    };
    return (
        <>
            <div className='profile-section'>
                <div className='container mx-auto'>
                    <div className='flex flex-wrap md:flex-nowrap gap-8'>
                        <div className='md:w-1/2'>
                            <div className='dashboard-box-container'>
                                <div className='profile-card'>
                                    {photoURL ? (
                                        <img src={photoURL} alt="" />
                                    ) : (
                                            <img
                                                className='w-24 h-24 rounded-full object-cover mx-auto'
                                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                            alt=""
                                        />
                                    )}
                                    <ul>
                                        <li><span className='font-bold'>Name:</span> {displayName}</li>
                                        <li><FontAwesomeIcon icon={faEnvelope} /> <span className='font-bold'>Email:</span> {email}</li>
                                        <li><FontAwesomeIcon icon={faGraduationCap} /> <span className='font-bold'>Educational:</span> {education ? education : 'No information'}</li>
                                        <li><FontAwesomeIcon icon={faLocationDot} /><span className='font-bold'>Skill:</span> { skill}</li>
                                        <li><FontAwesomeIcon icon={faLocationDot} /><span className='font-bold'>Location:</span> {address ? address : 'No information'}</li>
                                        <li><FontAwesomeIcon icon={faLocationDot} /> <span className='font-bold'>Project Link 1:</span> {project1 ? project1 : ''}</li>
                                        <li><FontAwesomeIcon icon={faLocationDot} /> <span className='font-bold'>Project Link 2:</span> {project2 ? project2 : ''}</li>
                                        <li><FontAwesomeIcon icon={faLocationDot} /> <span className='font-bold'>Project Link 3:</span> {project3 ? project3 : ''}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2'>
                            <form onSubmit={handleSubmit(onSubmit)}>
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
                                        <input type="text"
                                            {...register("displayName", {
                                                required: {
                                                    value: true,
                                                    message: 'Your Name is required'
                                                }
                                            })}
                                            placeholder="Display Name" className="input input-bordered input-secondary w-full" />
                                        <input type="text"
                                            {...register("education", {
                                                required: {
                                                    value: true,
                                                    message: 'Your Education is required'
                                                }
                                            })}
                                            placeholder="Educational Background" className="input input-bordered input-secondary w-full" />
                                        <input type="text"
                                            {...register("skill", {
                                                required: {
                                                    value: true,
                                                    message: 'Your Skill is required'
                                                }
                                            })}
                                            placeholder="Skill" className="input input-bordered input-secondary w-full" />
                                        <input type="text"
                                            {...register("project1")}
                                            placeholder="Project Link 1" className="input input-bordered input-secondary w-full" />
                                        <input type="text" {...register("project2")} placeholder="Project Link 2" className="input input-bordered input-secondary w-full" />
                                        <input type="text" {...register("project3")} placeholder="Project Link 3" className="input input-bordered input-secondary w-full" />
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
                                    <div className="grid grid-cols-2 gap-6">
                                        <input type="email" placeholder="Email" value={user.email} {...register("email")} readOnly className="input input-bordered input-secondary w-full" />
                                        <input type="text" {...register("phone")} placeholder="Phone" className="input input-bordered input-secondary w-full" />
                                    </div>
                                </div>
                                <div className='dashboard-box-container flex items-center justify-between gap-1'>
                                    <p className='text-warning flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" className="svg-icon--material svg-icon svg-icon-lg me-2" fill='hsl(var(--wa))' data-name="Material--Warning"><path d="M4.47 19h15.06L12 5.99 4.47 19zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z" opacity="0.3"></path><path d="M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z"></path></svg>
                                        Not saved yet</p>
                                    <button className='btn btn-light-primary' type="submit">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;