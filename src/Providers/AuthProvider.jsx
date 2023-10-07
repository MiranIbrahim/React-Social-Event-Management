import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)



const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null);

    const createUser = (email,password)=> {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log("observed");
            setUser(currentUser);
        });
        return () =>{
            unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;