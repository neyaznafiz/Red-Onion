import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../Images/logo2.png'

const Header = () => {
    return (
        <nav className='border flex justify-between bg-gray-50 px-16 py-4'>
            <div>
            <img className='w-32' src={logo2} alt="" />
            </div>

            <div className='flex gap-9'>
            <Link className='font-semibold pt-1' to="/login">Login</Link>
            <Link className='bg-red-500 text-white rounded-full border px-5 pt-1' to="/Signup">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;