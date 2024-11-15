import React, { useContext, useRef } from 'react';
import { AuthContext } from '../ContextProvider/Providers';

const Login = () => {

    const {loginUser,resetPassword,user} = useContext(AuthContext)

    const handleLogin =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password);

        loginUser(email,password)
        .then(result=>{
            console.log(result);
            alert('login succefully')
            
        })
        .catch(err=>{
            console.log(err);
            
        })
        

    }

    const emailRef = useRef()
    const handleforgetPassword=()=>{

        const email= emailRef.current.value
        
        resetPassword(email)
        .then(res=>{
            console.log(res);
            
        })
        .catch(err=>{
            console.log(err.message);
            
        })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card bg-base-100 w-[470px] max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" onClick={handleforgetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            {

                            }
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;