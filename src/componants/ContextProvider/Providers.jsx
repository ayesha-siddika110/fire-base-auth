import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';

export const AuthContext = createContext(null)

const Providers = ({children}) => {

    const creatUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const updateUser = (user, currentUser)=>{
        return updateProfile(user, currentUser)
    }

    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const [user , setuser] = useState(null)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            
                setuser(currentUser);
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    const signOutuser = ()=>{
        signOut(auth)
        
    }




    const myname = {
        name: 'ayesha',
        creatUser,
        updateUser,
        resetPassword,
        loginUser,
        user,
        signOutuser
    }
    return (
        <AuthContext.Provider value={myname}>
            {children}
        </AuthContext.Provider>
    );
};

export default Providers;