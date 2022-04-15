import React from 'react';

const Search = () => {
    return (
        <div className='py-36 mx-auto bg-orange-100'>

            <div className='text-center '>
                <h2 className='font-serif text-2xl pb-3'>BEST FOOD WAITING FOR YOUR BELLY</h2>

                <div className='flex justify-center'>
                    <div className=' rounded-full w-full'>
                    <input className='rounded-l-full w-3/12 py-1' type="search" name="Search" id="" />

                    <button className='rounded-full text-white bg-red-500 px-5 py-1'>Search</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Search;