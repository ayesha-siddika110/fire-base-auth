import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/Providers';
import { Link } from 'react-router-dom';

const Register = () => {
    
    // const myname = useContext(AuthContext)
        const { creatUser } = useContext(AuthContext)
        const {updateUser, user} = useContext(AuthContext)
        const {resetPassword} = useContext(AuthContext)

// 
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password);


        // const { creatUser } = useContext(AuthContext)
        
        // console.log(myname);
        
        creatUser(email, password)
        .then(res=>{
            console.log(res);
            
            const currentUser = {
                displayName : name
            }


            const user = res.user //user theke data nilam
            updateUser(user, currentUser) //profile e data add kora holo
            .then(res=>{
                console.log(res);
                
            })
            .catch(err=>{
                console.log(err.message);
                
    
            })

            alert('login successfully')
        }).catch(err=>{
            console.log('errorrrrrrrrrr',err);
            
        })



    }

    // const handlePasswordReset=(e)=>{
    //     console.log('passsss',e);
        
    // }
    
 



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="">
                <div className="card bg-base-100 w-[470px] max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;