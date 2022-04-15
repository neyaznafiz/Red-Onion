import React from 'react';
import auth from '../../../Firebase/firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signInWithPopup } from 'firebase/auth';

const useSocialHooks = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);




    // const handleGoogleSignup = () => {
    //     signInWithPopup(auth, signInWithGoogle)

    // }

    return {signInWithGoogle}
};

export default useSocialHooks;