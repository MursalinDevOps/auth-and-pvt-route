import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // got access of the children bcz Router Provider is a children of the Auth Provider on the main.jsx file

    const [user, setUser] = useState(null)


    const name = 'Mursalin';

    // Create an User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Sign in the User
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Sign out User
    const signOutUser = () =>{
        signOut(auth)
        .then((result)=>{})
        .catch((error)=>{})
    }




    // OBSERVER //

    // METHOD-1 (improper)
    // onAuthStateChanged(auth, (currentUser)=>{
    //     if(currentUser){
    //         console.log("Currently Logged in user", currentUser)
    //     }else{
    //         console.log("No user logged in")
    //     }
    // })

    // METHOD-2 (recommended)

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log("Current USER" , currentUser)
            setUser(currentUser)
        })
        // component unmount (clean-up fn)
        return ()=>{
            unSubscribe();
        }
    },[])







    const authInfo = {
        name,
        user,
        createUser,
        signInUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {/* main part that'll get access of this context's value */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// STEPS TO CREATE A CONTEXT
/*
    1. create context with null as default value
    2. create Provider
    3. set a value (in this case - authInfo)
    4. wrap the router provider by the context (in this case -  AuthContext)     [!imp] 
    5. access the children as a prop inside the AuthProvider file (received from the main.jsx file )
    6. export AuthContext (as in line 3 )
*/ 