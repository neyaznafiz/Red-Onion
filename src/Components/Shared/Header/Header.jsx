import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../Images/logo2.png'
import {FiShoppingCart} from 'react-icons/fi'

const Header = () => {
    return (
        <nav className='border flex justify-between bg-gray-50 px-16 py-4'>

            <div>
            <Link to="/">
            <img className='w-32' src={logo2} alt="" />
            </Link>
            </div>

            <div className='flex gap-9'>

                <Link to='/cart' className='pt-2  '><FiShoppingCart></FiShoppingCart></Link>

            <Link to="/login" className='font-semibold pt-1'>Login</Link>

            <Link to="/signup" className='bg-red-500 text-white rounded-full px-5 pt-1'>Sign Up</Link>

            </div>

        </nav>
    );
};

export default Header;