import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../Images/logo2.png'
import { FiShoppingCart } from 'react-icons/fi'
import auth from '../../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { FcCheckmark } from 'react-icons/fc'



const Header = () => {

    const [user] = useAuthState(auth)

    console.log(user);

    const handleSignout = () => {
        signOut(auth);
    }

    return (
        <nav className='flex justify-between px-20 py-4'>

            <div>
                <Link to="/">
                    <img className='w-32' src={logo2} alt="" />
                </Link>
            </div>

            <div className='flex gap-9'>

                <Link to='/cart' className='pt-2  '><FiShoppingCart></FiShoppingCart></Link>

                {
                    !user ?
                        <Link to="/login" className='font-semibold pt-1'>Login</Link>
                        :
                        <Link to="/home" className='font-semibold pt-1' onClick={handleSignout}>Log Out</Link>
                }

                {
                    !user ?
                        <Link to="/signup" className='bg-red-500 text-white rounded-full px-5 pt-1'>Sign Up</Link>
                        :
                       <p className='pt-2'><FcCheckmark></FcCheckmark></p>
                        
                }
            </div>

        </nav>
    );
};

export default Header;