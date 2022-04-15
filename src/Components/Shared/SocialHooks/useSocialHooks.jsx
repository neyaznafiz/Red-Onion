import React from 'react';
import auth from '../../../Firebase/firebase.init'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const useSocialHooks = () => {

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogel] = useSignInWithGoogle(auth);

    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);

    if(userGoogle, userFacebook){
        console.log(userGoogle);
        console.log(userFacebook);
    }

    return {userGoogle, signInWithGoogle, signInWithFacebook}
};

export default useSocialHooks;