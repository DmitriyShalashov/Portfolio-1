import React from 'react';
import { NavLink } from 'react-bootstrap';
import { DISCORD_ICON, GIT_ICON, VK_ICON } from '../consts/img';
import { DISCORD_LINK, GIT_LINK, VK_LINK } from '../consts/urls';

function NavBar() {
    return ( 
        <div className='w-full h-[70px] bg-[rgb(0,0,0,0.4)] fixed z-30 flex items-center '>
            <div className='container w-[1300px] mx-auto flex h-[100px] items-center justify-between '>
                <button className='border-4 border-white pl-[15px] pr-[15px] h-[50px] hover:border-purple-200 hover:text-purple-200 transition-all text-white'>
                <NavLink href='#home'><p className='text-[30px] font-bold '>LOGO</p></NavLink>
                </button>
                <div className='flex justify-between w-[600px] text-[20px] font-medium text-white items-center'>
                    <NavLink href='#home'><p className='cursor-pointer hover:text-purple-200'>Home</p></NavLink>
                    <NavLink href='#skills'><p className='cursor-pointer hover:text-purple-200'>Skills</p></NavLink>
                    <NavLink href='#projects'><p className='cursor-pointer hover:text-purple-200'>Projects</p></NavLink>
                    <NavLink href='#contacts'><p className='cursor-pointer hover:text-purple-200'>Contacts</p></NavLink>
                    <div className='flex justify-between w-[170px] items-center'>
                        <NavLink href={GIT_LINK} target='blank'><img src={GIT_ICON} alt='' className=' h-[40px] cursor-pointer hover:opacity-80 transition-all'></img></NavLink>
                        <NavLink href={VK_LINK} target='blank'><img src={VK_ICON} alt='' className=' h-[40px] cursor-pointer hover:opacity-80 transition-all'></img></NavLink>
                        <NavLink href={DISCORD_LINK} target='blank'><img src={DISCORD_ICON} alt='' className='mt-[4px] h-[40px] cursor-pointer hover:opacity-80 transition-all'></img></NavLink>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default NavBar;