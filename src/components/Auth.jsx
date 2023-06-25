import React from 'react';
import {auth,provider} from "../firebase-config.jsx";
import {signInWithPopup} from "firebase/auth";
const Auth = () => {
    const signInwithGoogle = async() => {

    }
    return ( 
        <React.Fragment>
        <div>
        <p>
            Sign in with Google to continue
        </p>
        <button onClick={signInwithGoogle}>
            Sign in with Google
            </button>
        </div>
        </React.Fragment>
     );
}
 
export default Auth;