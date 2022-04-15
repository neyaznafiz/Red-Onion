import React from 'react';
import bannerbackground from '../../../../Images/bannerbackground.png'
// import './Search.css'

const Search = () => {
    return (
        <div style={ { backgroundImage: `url(${bannerbackground})`} } className="py-60">



            <div className='text-center relative'>
                <h2 className='font-serif text-2xl pb-3'>BEST FOOD WAITING FOR YOUR BELLY</h2>

                <div className='flex justify-center pr-20'>
                    <input className='rounded-l-full border border-red-500 w-2/12 py-1' type="search" name="Search" id="" />

                    <button className='absolute ml-80 rounded-full text-white bg-red-500 px-5 py-1 border border-red-500'>Search</button>
                </div>
            </div>

        </div>
    );
};

export default Search;