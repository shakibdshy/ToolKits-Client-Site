import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../utils/firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <div className='profile-section'>
                <div className='container mx-auto'>
                    <div className='flex flex-wrap md:flex-nowrap gap-8'>
                        <div className='md:w-1/2'>
                            <div className='dashboard-box-container'>
                                <div className='profile-card'>
                                    <img className='w-24 h-24 rounded-full object-cover mx-auto' src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="" />
                                    <ul>
                                        <li><span className='font-bold'>Name:</span> { user.displayName }</li>
                                        <li><span className='font-bold'>Email:</span> { user.email }</li>
                                        <li><span className='font-bold'>Educational:</span></li>
                                        <li><span className='font-bold'>Skill:</span></li>
                                        <li><span className='font-bold'>Project Link 1:</span></li>
                                        <li><span className='font-bold'>Project Link 2:</span></li>
                                        <li><span className='font-bold'>Project Link 3:</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2'>
                            <form>
                                <div className='dashboard-box-container flex items-center space-x-6'>
                                    <div className="shrink-0">
                                        <img className="h-32 w-32 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="" />
                                    </div>
                                    <label className="block">
                                        <span className="sr-only">Choose profile photo</span>
                                        <input type="file" className="block w-full text-sm text-[#323232]
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
                                        <input type="text" placeholder="First Name" className="input input-bordered input-secondary w-full" />
                                        <input type="text" placeholder="Display Name" className="input input-bordered input-secondary w-full" />
                                        <input type="text" placeholder="Educational Background" className="input input-bordered input-secondary w-full" />
                                        <input type="text" placeholder="Skill" className="input input-bordered input-secondary w-full" />
                                        <input type="text" placeholder="Project Link 1" className="input input-bordered input-secondary w-full" />
                                        <input type="text" placeholder="Project Link 2" className="input input-bordered input-secondary w-full" />
                                        <input type="text" placeholder="Project Link 3" className="input input-bordered input-secondary w-full" />
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
                                        <input type="email" placeholder="Email" value={user.email} readOnly className="input input-bordered input-secondary w-full" />
                                        <input type="text" placeholder="Phone" className="input input-bordered input-secondary w-full" />
                                    </div>
                                </div>
                                <div className='dashboard-box-container flex items-center justify-between gap-1'>
                                    <p className='text-warning flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" className="svg-icon--material svg-icon svg-icon-lg me-2" fill='hsl(var(--wa))' data-name="Material--Warning"><path d="M4.47 19h15.06L12 5.99 4.47 19zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z" opacity="0.3"></path><path d="M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z"></path></svg>
                                        Not saved yet</p>
                                    <button className='btn btn-light-primary' type="button">Update</button>
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