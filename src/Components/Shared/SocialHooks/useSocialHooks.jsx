import React from 'react';
import auth from '../../../Firebase/firebase.init'
import { useSignInWithFacebook, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';


const useSocialHooks = () => {

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogel] = useSignInWithGoogle(auth);

    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);

    const [signInWithTwitter, userFaceTwitter, loadingTwitter, errorTwitter] = useSignInWithTwitter(auth);

    if(userGoogle, userFacebook){
        console.log(userGoogle);
        console.log(userFacebook);
    }

    return {userGoogle, signInWithGoogle, signInWithFacebook, signInWithTwitter}
};

export default useSocialHooks;