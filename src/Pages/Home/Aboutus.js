import React from 'react';

const Aboutus = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.unsplash.com/photo-1484639726803-f17534cedb15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=421&q=80" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl text-orange-600 font-bold">Boi Bazar!</h1>
                        <p className="py-6">Boi Bazar is an online Book resale and exchange platform. You can get old books at cheapest price from us. More than 1500 customers are selling and buying book daily. </p>
                        <button className="btn border border-orange-500 mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4  rounded">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;