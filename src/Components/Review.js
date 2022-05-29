import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import axios from 'axios';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const url = 'https://toolkitsnode.herokuapp.com/reviews';
            const { data } = await axios.get(url);
            setReviews(data);
        }
        getProducts();
    }, [])
    return (
        <>
            
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-6xl text-3xl font-bold title-font mb-4 text-secondary">What Our Client’s About Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Professional Tools and Machine solutions</p>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination]}
                        className="review-slider"
                    >
                        {
                            reviews.map((review, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="lg:mb-0 mb-6 p-4">
                                            <div className="h-full text-center">
                                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={review.image} />
                                                <p className="leading-relaxed">{review.massage}</p>
                                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                                <div className="font-bold">{review.rating} / 5</div>
                                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{review.displayName}</h2>
                                                <p className="text-gray-500">{review.designation }</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                             })
                        }
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default Review;