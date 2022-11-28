import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthConfig/AuthProvider';
import {  Buttons} from "../components/Buttons";
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const { logIn, googleLoginProvider } = useContext(AuthContext)
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
                    navigate('/');
                }
            })
    }

    const handleLogin = data => {

        logIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                verifyUser(user.email)
                setLoginError('');
            })
            .catch(err => setLoginError(err.message))
    }

    //google login
    const handleGoogleLogin = () => {
        googleLoginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                const role = 'Buyer';
                saveUser(user.displayName, user.email, user.photoURL, role)

            })
            .catch(error => console.error(error))
    }


    return (
        <div className='flex justify-around items-center w-11/12 mx-auto'>
            <div>
                <img className='w-3/4' src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=740&t=st=1669285226~exp=1669285826~hmac=302f6b04e78195c68aab97de91ff0cc11dfc2b833659d877531804ebbac47d4d" alt="" />
            </div>
            <div className='w-1/2'>
                <p className='text-2xl text-orange-500 font-semibold'>Sign In</p>
                <form onSubmit={handleSubmit(handleLogin)}>
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

                    <input className='btn border border-orange-500 w-full mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4  rounded' value="Login" type="submit" />
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                    
                </form>
                <p>Don't have an account <Link className='text-orange-600' to="/signup">Please Register</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full text-orange-600 border-orange-600 p-4 rounded'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;