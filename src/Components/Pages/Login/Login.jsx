import React, { useRef, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import logo2 from '../../../Images/logo2.png'
import SocialSignin from '../SocialSignin/SocialSignin';

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);


    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    if(user){
        navigate('/home')
    }

// const handleLogin = event =>{
//     event.preventDefault()

//     signInWithEmailAndPassword(email, password)
// }

const handleLogin = event => {
    event.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    signInWithEmailAndPassword(email, password)

}

    return (
        <div className=''>
            <div className='py-36 border'>

                <div className='flex justify-center'>
                    <img className='w-64' src={logo2} alt="" />
                </div>

                <div className='flex justify-evenly mt-32 pr-32'>
                    <div style={{height: '350px'}} className='grid gap-4  px-3 ml-36 border-l-2 border-b-2 border-red-500 rounded-bl '>

                        <h2 className='justify-center text-2xl font-semibold border-b-2 border-r-2 border-red-500 w-6/12 px-4 rounded-br'>Please Login</h2>

                        <form onSubmit={handleLogin} className='grid gap-4 justify-center'>

                            <input type="email" name="email" ref={emailRef} id="" placeholder='Email' className='border rounded bg-zinc-100 px-2 py-2 w-96' />

                            <input type="password" name="password" ref={passwordRef} id="password" placeholder='Password' className='border rounded bg-zinc-100 px-2 py-2 w-96' />

                        <input type="submit" value="Log In" className='border rounded bg-red-500 text-white w-96 py-2' />
                        </form>


                        <Link to='/signup' className='text-center text-red-500 font-semibold'> Are you new heere ?</Link>

                    </div>

                   <div>
                   <SocialSignin></SocialSignin>
                   </div>
                </div>
                </div>
          
                  
        </div>
    );
};

export default Login;