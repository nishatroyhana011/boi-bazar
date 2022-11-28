import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../AuthConfig/AuthProvider';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUPError] = useState('')
    const { userReg, updateUser, setLoader } = useContext(AuthContext);

    const navigate = useNavigate();

    //user save to db
    const saveUser = (name, email, image, role) => {
        const user = { name, email, image, role }
        fetch('https://boi-bazar-server-opal.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then((data) => {
            verifyUser(email)
            navigate('/');
        })
    }

    //jwt 
    const verifyUser = (email) => {
        fetch(`https://boi-bazar-server-opal.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('boibazarToken', data.accessToken); 
                }
            })
    }

    //sign in with email
    const handleRegister = (data) => {
        const myname = data.name;
        const role = data.role;
        const image = data.image;

        userReg(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userName = {
                    displayName: myname,
                    photoURL: image
                }
                updateUser(userName)
                    .then(() => {
                        setLoader(false)
                        toast('User Created Succcessfully!');
                        saveUser(myname, user.email, image, role);

                    })
                    .catch(err => setSignUPError(err.message))
            })
            .catch(err => setSignUPError(err.message))
        setSignUPError('');
    }


    return (
        <div className='flex flex-col-reverse md:flex-row justify-around items-center w-11/12 mx-auto'>
            <div>
                <img className='w-3/4 mx-auto' src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1669306643~exp=1669307243~hmac=b5bc989dc729574475cee767d5afb99e76d4189548c511436f20939e143a81c4" alt="" />
            </div>
            <div className='w-1/2'>
                <p className='text-2xl text-orange-500 font-semibold'>SignUp</p>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                        })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="text" {...register("image", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full p-4 border border-slate-300 rounded-md" />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>
                    <label className="label"> <span className="label-text">Want to be a seller? please select</span></label>
                    <select {...register("role")} className="select w-full  border border-slate-300 rounded-md">
                        <option>Buyer</option>
                        <option>Seller</option>
                    </select>


                    <input className='btn border border-orange-500 w-full mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4  rounded' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}

                </form>
                <Toaster />
                <p>Already have an account <Link className='text-orange-600' to="/login">Please Login</Link></p>
                
            </div>
        </div>
    );
};

export default Signup;
