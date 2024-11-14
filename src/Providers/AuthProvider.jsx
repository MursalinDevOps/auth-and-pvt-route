import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // got access of the children bcz Router Provider is a children of the Auth Provider on the main.jsx file
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Create an User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
        setLoading(true)
    }
    // Sign in the User
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
        setLoading(true)
    }
    // Sign in with Google
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, provider)
    }
    // Sign out User
    const signOutUser = () =>{
        signOut(auth)
        .then((result)=>{})
        .catch((error)=>{})
        setLoading(true)
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
            setUser(currentUser);
            setLoading(false)
        })
        // component unmount (clean-up fn)
        return ()=>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
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