import { createContext } from "react";
 
export const AuthContext = createContext(null);

 const AuthProvider = ({children}) => {
    // got access of the children bcz Router Provider is a children of the Auth Provider on the main.jsx file
    const authInfo = {
        user : 'Max'
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