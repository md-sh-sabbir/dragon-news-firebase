import React from 'react';
import Logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 my-10'>
           <img src={Logo} alt="" />
           <p className='text-accent'>Journalism Without Fear or Favour</p>
           <p className='font-semibold text-accent'>{format(new Date(), "EEEE , MMMM MM , yyyy")}</p>
        </div>
    );
};

export default Header;