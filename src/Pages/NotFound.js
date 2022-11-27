import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className='mx-auto' src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=740&t=st=1669508868~exp=1669509468~hmac=b4ff3c55fed84753fddc431cc661c1e5338cf6284693f7c399061544df790e49" alt="" />
            <Link className='my-10 bg-orange-500 text-white font-semibold text-lg p-5 rounded-md shadow-md' to='/'> Return to Home</Link>
        </div>
    );
};

export default NotFound;