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
                       
                        <div className=" grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3">
                            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
                                        <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                                        <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                                        <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                                        <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <p className="text-3xl font-semibold leading-none">98%</p>
                                    <p className="capitalize">Satisfection</p>
                                </div>
                            </div>
                            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
                                        <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                                        <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                                        <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <p className="text-3xl font-semibold leading-none">4000</p>
                                    <p className="capitalize">Orders</p>
                                </div>
                            </div>
                            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
                                        <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                                        <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                                        <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                                        <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <p className="text-3xl font-semibold leading-none">2500</p>
                                    <p className="capitalize">Customers</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Aboutus;