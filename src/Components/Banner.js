import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner from "../Images/banner.png";
import BgBanner from "../Images/bg-banner.jpg";
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <Swiper spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]} className="banner-slider">
                <SwiperSlide>
                    <div className="text-gray-600 body-font bg-no-repeat bg-center" style={{ backgroundImage: `url(${BgBanner})` }}>
                        <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white uppercase"><span className="text-primary">high performance</span>
                                    <br className="hidden lg:inline-block" />industrial tools
                                </h1>
                                <p className="mb-8 leading-relaxed text-white">With over 4,800 tools, Shopio is the choice of demanding automotive and industrial tool users worldwide. Take a look at these innovative products in our latest downloadable catalogs.</p>
                                <div className="flex justify-center">
                                    <Link to='/products' className="btn btn-primary hover:border-transparent">Our Product <FaChevronRight className='ml-1' /></Link>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-5/6">
                                <img className="object-cover object-center rounded" alt="hero" src={banner} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-gray-600 body-font bg-no-repeat bg-center" style={{ backgroundImage: `url(${BgBanner})` }}>
                        <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white uppercase"><span className="text-primary">high performance</span>
                                    <br className="hidden lg:inline-block" />industrial tools
                                </h1>
                                <p className="mb-8 leading-relaxed text-white">With over 4,800 tools, Shopio is the choice of demanding automotive and industrial tool users worldwide. Take a look at these innovative products in our latest downloadable catalogs.</p>
                                <div className="flex justify-center">
                                    <Link to='/products' className="btn btn-primary hover:border-transparent">Our Product <FaChevronRight className='ml-1' /></Link>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-5/6">
                                <img className="object-cover object-center rounded" alt="hero" src={banner} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;