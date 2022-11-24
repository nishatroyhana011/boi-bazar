import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config/firebse.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState('');

    const userReg = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userName) =>{
        setLoader(true)
        return updateProfile(auth.currentUser, userName)
    }
    const googleLoginProvider = (provider)=>{
        setLoader(true);
        return signInWithPopup(auth, provider);
    }
    const logIn =  (email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( ()=>{
        const unsubs = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoader(false)
        });
        return ()=> unsubs();
    }, [])

    const AuthInfo = {
        userReg,
        loader,
        setLoader,
        updateUser,
        user,
        googleLoginProvider,
        logIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;