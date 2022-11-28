import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ cate }) => {
    return (
        <div>
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl mx-auto">
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <Link to={`/categories/${cate._id}`}><h2 className="text-xl font-semibold sm:text-2xl">{cate.categoryName}</h2></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;