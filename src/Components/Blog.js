import React from 'react';
import BlogItem from '../Shared/BlogItem';

const Blog = () => {
    return (
        <>
            <section className="py-24 px-5 bg-[#fafafb]">
                <div className='container mx-auto'>
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-6xl text-3xl font-bold title-font mb-4 text-secondary">Latest News & Blogs</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Professional Tools and Machine solutions</p>
                    </div>
                    <BlogItem />
                </div>
            </section>
        </>
    );
};

export default Blog;