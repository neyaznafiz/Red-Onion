import React from 'react'
import { Link } from 'react-router-dom';
import logo2 from '../../../Images/logo2.png'
import {FcGoogle} from 'react-icons/fc'

const SignUp = () => {
    return (
        <div>

            <div className='py-36 border'>

                <div className='flex justify-center'>
                    <img className='w-64' src={logo2} alt="" />
                </div>

                <div className='flex justify-around'>
                    <div className='grid justify-center gap-4 py-16 '>

<h2 className='text-2xl font-semibold border-b-2 border-l-2 border-red-500 w-6/12 py-1 px-2 rounded-bl'>Please SignUp</h2>

                        <form className='grid gap-4 justify-center'>

                            <input type="text" name="Name" id="" placeholder='Name' className='border rounded bg-zinc-100 px-2 py-2 w-96' />
                            <input type="email" name="email" id="" placeholder='Email' className='border rounded bg-zinc-100 px-2 py-2 w-96' />
                            <input type="password" name="password" id="password" placeholder='Password' className='border rounded bg-zinc-100 px-2 py-2 w-96' />
                            <input type="password" name="Name" id="confirm-password" placeholder='Confirm Password' className='border rounded bg-zinc-100 px-2 py-2 w-96' />

                        </form>

                        <input type="submit" value="Sign Up" className='border rounded bg-red-500 text-white py-4 w-96' />

                        <Link to='/login' className='text-center text-red-500 font-semibold'> Already have an account ?</Link>
                    </div>

                    <div className='grid gap-4 justify-center py-16 border'>
                        <button className='border flex px-5 py-2'> <FcGoogle></FcGoogle> Continue witth google</button>
                        <button className=''> <FcGoogle></FcGoogle> Continue witth google</button>
                        <button className=''> <FcGoogle></FcGoogle> Continue witth google</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;