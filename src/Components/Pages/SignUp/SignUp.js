import React from 'react'
import { Link } from 'react-router-dom';
import logo2 from '../../../Images/logo2.png'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import useSocialHooks from '../../Shared/SocialHooks/useSocialHooks';

const SignUp = () => {

    const { signInWithGoogle, signInWithFacebook, user } = useSocialHooks()

    console.log(user);

    return (
        <div>

            <div className='py-36 border'>

                <div className='flex justify-center'>
                    <img className='w-64' src={logo2} alt="" />
                </div>

                <div className='flex justify-evenly'>
                    <div className='grid gap-4 my-16 pb-3 px-3 ml-36 border-l-2 border-b-2 border-red-500 rounded-bl '>

                        <h2 className='justify-center text-2xl font-semibold border-b-2 border-r-2 border-red-500 w-6/12 py-1 px-4 rounded-br'>Please SignUp</h2>

                        <form className='grid gap-4 justify-center'>

                            <input type="text" name="Name" id="" placeholder='Name' className='border rounded bg-zinc-100 px-2 py-2 w-96' />
                            <input type="email" name="email" id="" placeholder='Email' className='border rounded bg-zinc-100 px-2 py-2 w-96' />
                            <input type="password" name="password" id="password" placeholder='Password' className='border rounded bg-zinc-100 px-2 py-2 w-96' />
                            <input type="password" name="Name" id="confirm-password" placeholder='Confirm Password' className='border rounded bg-zinc-100 px-2 py-2 w-96' />

                        </form>

                        {
                            user ?
                                <input type="submit" value="Sign Out" className='border rounded bg-red-500 text-white py-4 w-96' />
                                :
                                <input type="submit" value="Sign Up" className='border rounded bg-red-500 text-white py-4 w-96' />


                        }


                        <Link to='/login' className='text-center text-red-500 font-semibold'> Already have an account ?</Link>
                    </div>

                    <div className='justify-around py-44 px-16 w-2/6'>

                        <div>
                            <button onClick={() => signInWithGoogle()} className=' rounded-full flex pl-6 pr-5 py-2 text-white bg-red-500'> <AiFillGoogleCircle className='mt-1 mr-2'></AiFillGoogleCircle> Continue witth google</button>
                        </div>

                        <div className='my-3'>
                            <button className=' rounded-full flex pl-6 pr-5 pr-9 py-2 text-white bg-red-500'> <AiFillTwitterCircle className='mt-1 mr-2'></AiFillTwitterCircle> Continue witth Twitter</button>
                        </div>

                        <div>
                            <button onClick={() => signInWithFacebook()} className=' rounded-full flex pl-6 pr-9 py-2 text-white bg-red-500'> <BsFacebook className='mt-1 mr-2'></BsFacebook> Continue witth Facebook</button>
                        </div>



                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;