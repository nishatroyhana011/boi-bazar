import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../AuthConfig/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUPError] = useState('')
    const { userReg, updateUser, googleLoginProvider } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    //user save to db
    const saveUser = (name, email, image, role) => {
        const user = { name, email, image, role }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then((data) => {
                verifyUser(email)
            })
    }

    //jwt 
    const verifyUser = (email) => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('boibazarToken', data.accessToken);
                    navigate('/login')
                }
            })
    }

    //sign in with email
    const handleRegister = (data) => {
        console.log(data)
        const myname = data.name;
        const role= data.role;
        const image = data.image;

        userReg(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userName = {
                    displayName: myname,
                    photoURL:image
                }
                updateUser(userName)
                    .then(() => {
                        toast('User Created Succcessfully!');
                        saveUser(myname, user.email, image, role)
                    })
                    .catch(err => setSignUPError(err.message))
            })
            .catch(err => setSignUPError(err.message))
        setSignUPError('');
        

    }

    //google login
    const handleGoogleLogin = () => {
        googleLoginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                const role = 'buyer';
                saveUser(user.displayName, user.email, user.photoURL, role )
                toast('User Created Succcessfully!');
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='flex justify-around items-center w-11/12 mx-auto'>
            <div>
                <img className='w-3/4' src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=740&t=st=1669285226~exp=1669285826~hmac=302f6b04e78195c68aab97de91ff0cc11dfc2b833659d877531804ebbac47d4d" alt="" />
            </div>
            <div className='w-1/2'>

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
                        <option>Seller</option>
                        <option>buyer</option>     
                    </select>

                    <input className='btn btn-accent w-full mt-4 bg-blue-500 text-white p-4  rounded' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    
                </form>
                <Toaster />
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full bg-green-500 text-white p-4 rounded'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;
