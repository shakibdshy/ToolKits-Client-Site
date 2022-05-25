import React from 'react';
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';
import Counter from '../Components/Counter';
import Review from '../Components/Review';

const Home = () => {
    return (
        <>
            <Banner />
            <Counter />
            <Review />
            <Contact />
        </>
    );
};

export default Home;