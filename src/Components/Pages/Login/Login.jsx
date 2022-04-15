import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../Images/logo2.png'
import SocialSignin from '../SocialSignin/SocialSignin';

const Login = () => {

    return (
        <div>
            <div className='py-36 border'>

                <div className='flex justify-center'>
                    <img className='w-64' src={logo2} alt="" />
                </div>

                <div className='flex justify-evenly'>
                    <div className='grid gap-4 my-28  px-3 ml-36 border-l-2 border-b-2 border-red-500 rounded-bl '>

                        <h2 className='justify-center text-2xl font-semibold border-b-2 border-r-2 border-red-500 w-6/12 px-4 rounded-br'>Please Login</h2>

                        <form className='grid gap-4 justify-center'>

                            <input type="email" name="email" id="" placeholder='Email' className='border rounded bg-zinc-100 px-2  w-96' />
                            <input type="password" name="password" id="password" placeholder='Password' className='border rounded bg-zinc-100 px-2  w-96' />

                        </form>

                        <input type="submit" value="Sign Up" className='border rounded bg-red-500 text-white w-96' />

                        <Link to='/signup' className='text-center text-red-500 font-semibold'> Are you new heere ?</Link>
                    </div>

                    <div className='justify-around py-44 px-16 w-2/6'>

                        <SocialSignin></SocialSignin>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;