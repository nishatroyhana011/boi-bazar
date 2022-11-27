import React from 'react';
import Aboutus from './Aboutus';
import Advertise from './Advertise';
import Banner from './Banner';
import Categories from './Categories';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboutus></Aboutus>
            <Categories></Categories>
            <Advertise></Advertise>
           <Review></Review>
        </div>
    );
};

export default Home;