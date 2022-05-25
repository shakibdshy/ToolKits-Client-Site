import React from 'react';
import logo from '../logo.jpg';
import { Link } from 'react-router-dom';
import { FaChevronRight  } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import auth from '../utils/firebase.init';
import { toast } from 'react-toastify';

const Header = () => {
    const [user] = useAuthState(auth);

    const handelSignOut = () => {
        signOut(auth);
        toast.success("Sign out successfully");
        // console.log(signOut(auth));
    };
    return (
        <>
            <header>
                <div className='container mx-auto'>
                    <nav className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/products'>Product</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/dashboard'>Dashboard</Link></li>
                                </ul>
                            </div>
                            <Link to='/'>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal p-0">
                                <li><Link to='/'>Home</Link></li>                            
                                <li><Link to='/products'>Product</Link></li>
                                {
                                    user && (
                                        <li><Link to='/dashboard'>Dashboard</Link></li>
                                    )
                                }
                                <li><Link to='/blog'>Blog</Link></li>
                            </ul>
                        </div>
                        {
                            user ? (
                                <div className="navbar-end">
                                    <Link to='/' onClick={handelSignOut} className="btn btn-light-primary">SignOut</Link>
                                </div>
                            ) : (
                                <div className="navbar-end">
                                    <Link to='/sign-in' className="btn btn-primary">SignIn <FaChevronRight className='ml-1' /></Link>
                                </div>
                                    
                            )
                        }
                    </nav>  
                </div>
            </header>
        </>
    );
};

export default Header;