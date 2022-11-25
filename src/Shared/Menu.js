import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthConfig/AuthProvider';

const Menu = () => {
    const { user, logout } = useContext(AuthContext)

    const btnLogout = ()=>{
        logout()
        .then(()=>{})
    }

    return (
        <div>
            <div className="navbar bg-stone-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Categories</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Boi Bazar</Link>
                </div>
                <label htmlFor="my-drawer-2" tabIndex={1} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <div className="navbar-end">
                    {
                        user?.uid ? <>
                            <Link to='/dashboard/'>Dashboard</Link>
                            <button onClick={btnLogout} className="btn btn-ghost">Log Out </button>
                        </> : <>
                            <button className="btn btn-ghost "><Link to='/login'>Login</Link>
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;