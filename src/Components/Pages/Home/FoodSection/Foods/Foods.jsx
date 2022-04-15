import React from 'react';
import { Link } from 'react-router-dom';
import CoustomLink from '../../../../Shared/CoustomLink/CoustomLink';

const Foods = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-center gap-16 font-semibold'>
                <CoustomLink className='px-3' to='/breakfast'>Breakfast</CoustomLink>
                <CoustomLink className='px-3' to='/lunch'>Lunch</CoustomLink>
                <CoustomLink className='px-3' to='/dinner'>Dinner</CoustomLink>
            </div>
        
        </div>
    );
};

export default Foods;