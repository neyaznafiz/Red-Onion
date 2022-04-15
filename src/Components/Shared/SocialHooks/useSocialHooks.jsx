import React from 'react';
import auth from '../../../Firebase/firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const useSocialHooks = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return {signInWithGoogle}
};

export default useSocialHooks;