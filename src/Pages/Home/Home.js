import React from 'react';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Categories from './Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboutus></Aboutus>
            <Categories></Categories>
            {/* The button to open modal */}

        </div>
    );
};

export default Home;