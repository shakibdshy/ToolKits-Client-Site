import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = () => {
    const items = [
        {
            title: "Everything You Want To Know About",
            category: "Blog",
            description: "Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue.",
        },
        {
            title: "Designing Better Links For Websites And Emails",
            category: "Blog",
            description: "Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue.",
        },
        {
            title: "Creative Card Component designs graphic elements",
            category: "Blog",
            description: "Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue.",
        },
    ];
    return (
        <>
            <div className='flex flex-wrap -mx-4'>
                {items.map((item, index) => {
                    return (
                        <article key={index} className='w-full md:w-1/2 xl:w-1/3 px-4'>
                            <div className='blog-item border border-[rgba(88,86,233,.149)] rounded-lg overflow-hidden mb-10'>
                                <div className='p-8 sm:p-9 md:p-7 xl:p-9'>
                                    <span className='btn btn-secondary btn-sm text-white rounded-md mb-3'>{ item.category }</span>
                                    <h3>
                                        <Link
                                            to='#'
                                            className='
                                                font-bold
                                                text-secondary text-xl
                                                sm:text-[22px]
                                                md:text-xl
                                                lg:text-[22px]
                                                xl:text-xl
                                                2xl:text-[24px]
                                                mb-4
                                                block
                                                transition duration-150 ease-out
                                                hover:text-primary
                                            '>
                                            {item.title}
                                        </Link>
                                    </h3>
                                    <p className='text-base text-body-color leading-relaxed mb-7'>
                                        {item.description}
                                    </p>
                                    <Link
                                        to='#'
                                        className='btn btn-primary'>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </>
    );
};

export default BlogItem;