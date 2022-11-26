import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthConfig/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data;
        }
    })

    const AddProduct = (data) => {
        const product = {
            productName: data.name,
            image: data.image,
            location: data.location,
            condition: data.condition,
            resale: data.reprice,
            original: data.mainprice,
            year: data.year,
            category: data.category,
            time: new Date(),
            sellerName:data.seller,
            conatct:data.phone,
            description:data.description,
            email:user.email
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('boibazarToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                toast('Book added!')
                if (result.acknowledged) {
                    navigate('/dashboard/myproducts');
                }
            })
    }

    return (
        <div className='my-20'>
            <h1 className="text-3xl text-orange-600 font-bold">Add a Book</h1>
            <form className='w-3/4 mx-auto ' onSubmit={handleSubmit(AddProduct)}>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="text" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                    {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                </div>
                <div className='flex gap-2'>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Location is Required"
                        })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Condition</span></label>
                        <input type="text" {...register("condition", {
                            required: "condotion is Required"
                        })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                        {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className="form-control w-1/2">
                        <label className="label"> <span className="label-text">Resale Price</span></label>
                        <input type="text" {...register("reprice", {
                            required: "Resale Price is Required"
                        })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                        {errors.reprice && <p className='text-red-500'>{errors.reprice.message}</p>}
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label"> <span className="label-text">Original Price</span></label>
                        <input type="text" {...register("mainprice", {
                            required: "Original Price is Required"
                        })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                        {errors.mainprice && <p className='text-red-500'>{errors.mainprice.message}</p>}
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Year of use</span></label>
                        <input type="text" {...register("year", {
                            required: "Year is Required"
                        })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                        {errors.year && <p className='text-red-500'>{errors.year.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Select an option</span></label>
                        <select {...register("category")} className="select w-full p-2 border border-slate-300 rounded-md">
                            {
                                categories?.map((ct) => <option value={ct._id}>{ct.categoryName}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Seller name</span></label>
                        <input type="text" {...register("seller", {
                            required: "Seller is Required"
                        })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                        {errors.seller && <p className='text-red-500'>{errors.seller.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Seller Contact</span></label>
                        <input type="text" {...register("phone", {
                            required: "phone is Required"
                        })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                    </div>
                </div>
                <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <textarea type="text" {...register("description", {
                            required: "description is Required"
                        })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                        {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                    </div>
                <input className='btn border border-orange-500 w-full mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4  rounded' value="Add a Book" type="submit" />
            </form>
            <Toaster />
        </div>
    );
};

export default AddProduct;