import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <>
            <section className="text-gray-600 body-font bg-[#fafafb]">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-6xl text-4xl font-bold title-font mb-4 text-secondary">Why People’s Like Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Professional Tools and Machine solutions</p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="counter-item p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-150 ease-out hover:shadow-lg hover:shadow-[rgba(89,86,233,.1)]">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                </svg>
                                <CountUp start={0} end={100} delay={0} suffix="+">
                                    {({ countUpRef }) => (
                                        <div>
                                            <h2 ref={countUpRef} className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                        </div>
                                    )}
                                </CountUp>
                                
                                <p className="leading-relaxed">We Served</p>
                            </div>
                        </div>
                        <div className="counter-item p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-150 ease-out hover:shadow-lg hover:shadow-[rgba(89,86,233,.1)]">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <CountUp start={0} end={120} delay={0} suffix="M">
                                    {({ countUpRef }) => (
                                        <div>
                                            <h2 ref={countUpRef} className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                        </div>
                                    )}
                                </CountUp>
                                <p className="leading-relaxed">Customers</p>
                            </div>
                        </div>
                        <div className="counter-item p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-150 ease-out hover:shadow-lg hover:shadow-[rgba(89,86,233,.1)]">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                </svg>
                                <CountUp start={0} end={33} delay={0} suffix="K">
                                    {({ countUpRef }) => (
                                        <div>
                                            <h2 ref={countUpRef} className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                        </div>
                                    )}
                                </CountUp>
                                <p className="leading-relaxed">Annual revenue</p>
                            </div>
                        </div>
                        <div className="counter-item p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-150 ease-out hover:shadow-xl hover:shadow-[rgba(89,86,233,.1)]">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                <CountUp start={0} end={50} delay={0} suffix="+">
                                    {({ countUpRef }) => (
                                        <div>
                                            <h2 ref={countUpRef} className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                        </div>
                                    )}
                                </CountUp>
                                <p className="leading-relaxed">Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Counter;