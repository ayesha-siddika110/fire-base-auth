import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css"
import { AuthContext } from '../ContextProvider/Providers';

const Navbar = () => {

    const {user,signOutuser} = useContext(AuthContext)
    // const {name} = useContext(AuthContext)
    // console.log(amarname);
    // console.log(name);

    const handleSignOut=()=>{
        signOutuser()
        .then(res=>{
            log(res)
        })
        .catch(err=>{
            console.log(err);
            
        })
    }
    
    
    

    const navStyle ={
        border: '2px solid green',
        padding: '10px',
        borderRadius: '10px'
        
    }
    const links = <>
            <NavLink className={`hover:bg-green-700 hover:text-white`} style={navStyle} to="/">Home</NavLink>              
            <NavLink style={navStyle} to="/register">Register</NavLink>
            {
                user? <Link onClick={handleSignOut}>sign out</Link> : <NavLink style={navStyle} to="/login">Login</NavLink>
            }              
                          
            
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-8 ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;