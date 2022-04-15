
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo2 from '../../../Images/logo2.png'

import auth from '../../../Firebase/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { updateProfile } from 'firebase/auth';
import SocialSignin from '../SocialSignin/SocialSignin';

const SignUp = () => {


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate()

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    //   if(user){
    //       navigate('/home')
    //   }

    const handleSignup = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value


        createUserWithEmailAndPassword(email, password)
        navigate('/home')

    }

    return (
        <div>

            <div className='py-36 border'>

                <div className='flex justify-center'>
                    <img className='w-64' src={logo2} alt="" />
                </div>

                <div className='lg:flex lg:justify-evenly mr-36 md:grid'>
                    <div className='grid gap-4 mt-28 pb-3 px-3 ml-36 border-l-2 border-b-2 border-red-500 rounded-bl'>

                        <h2 className='justify-center text-2xl font-semibold border-b-2 border-r-2 border-red-500 w-6/12 py-1 px-4 rounded-br'>Please SignUp</h2>

                        <form onSubmit={handleSignup} className='grid gap-4 justify-center'>

                            <input type="text" name="Name" id="" placeholder='Name' className='border rounded bg-zinc-100 px-2 py-2 w-96' required />

                            <input type="email" name="email" id="" placeholder='Email' className='border rounded bg-zinc-100 px-2 py-2 w-96' required />

                            <input type="password" name="password" id="password" placeholder='Password' className='border rounded bg-zinc-100 px-2 py-2 w-96' required />

                            <input type="password" name="Name" id="confirm-password" placeholder='Confirm Password' className='border rounded bg-zinc-100 px-2 py-2 w-96' required />

                            <input type="submit" value="Sign Up" className='border rounded bg-red-500 text-white py-4 w-96' />

                        </form>

                        <Link to='/login' className='text-center text-red-500 font-semibold'> Already have an account ?</Link>
                    </div>

                    <div className='pt-36'>
                        <SocialSignin></SocialSignin>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;