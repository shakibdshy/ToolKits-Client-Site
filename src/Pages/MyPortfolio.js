import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../utils/firebase.init';

const MyPortfolio = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img src='https://moryphea.sirv.com/shakib.jpg' alt="" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Md Habibur Rahman Shakib</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <ul className='flex gap-3 py-2'>
                                        <li><Link to='https://github.com/shakibdshy'>Github</Link></li>
                                        <li><Link to='https://linkedin.com/shakibdshy'>LinkedIn</Link></li>
                                    </ul>
                                    <ul className='flex gap-2 py-2'>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JS</li>
                                        <li>Node JS</li>
                                        <li>React JS</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">Hi, My Name Is Md Habibur Rahman Shakib. I didn't know anything when I started my journey. And web development is not so popular in my district still now. So I had to suffer a lot.</p>
                                <p className="leading-relaxed text-lg mb-4">At first I thought I would be a web developer, but as the days went by I realized that web development is a deep sea.</p>
                                <p className="leading-relaxed text-lg mb-4">Now my only purpose is to learn to work well and spend time learning something new. Inshallah, if all goes well, apply for an international job. And Work with Awesome Team. This Is My Main Goal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyPortfolio;