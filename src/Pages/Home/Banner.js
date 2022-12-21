import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Best place for
                            <span className="text-orange-600"> Bookworms </span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Books are your best friend, stay connected with books</p>
                            <p className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem</p>
                        
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/allcategories' className="px-8 py-3 text-lg font-semibold rounded bg-orange-600 text-gray-900">Buy Now</Link>
                          
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://img.freepik.com/free-vector/bestseller-books-stand-wooden-bookshelf-booklet-diary-volumes-with-colorful-paperback-lying-pile-flying-shelf-hanging-wall-library-store-cartoon-vector-illustration_107791-4208.jpg?w=900&t=st=1671617065~exp=1671617665~hmac=c2325f80c395d42ab939efc6d885f25fb2ca219f3215df806e784f58ca65b1e0" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;