import React from 'react';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Categories from './Categories';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboutus></Aboutus>
            <Categories></Categories>
           <Review></Review>
        </div>
    );
};

export default Home;