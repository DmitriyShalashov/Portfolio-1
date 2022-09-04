import React from 'react';
import { NavLink } from 'react-bootstrap';
import { COPY_ICON, DISCORD_ICON, FOOTER_IMG, GIT_ICON, VK_ICON } from '../consts/img';
import { DISCORD_LINK, GIT_LINK, VK_LINK } from '../consts/urls';

function Contacts() {
    const email='dimok.shalashov@gmail.com'
    const copy=()=>{
        navigator.clipboard.writeText(email)
    }
    return ( 
        <div className='w-full h-[350px] overflow-hidden absolute bottom-[-330%] justify-center text-white select-none' id='contacts'>
            <div className='tooltip absolute bottom-[-50px] h-[400px] left-0 '>
                <img className=' h-[400px] cursor-pointer' src={FOOTER_IMG} alt=''></img>
                <p className='tooltiptext bg-violet-600 rounded-bl-[0px] rounded-[20px] text-[18px] left-[90%] top-[5%] w-[150px]'>See you later</p>
            </div>
            <div className='h-[200px] w-full text-center bg-gradient-to-r flex items-center justify-center from-violet-900 via-purple-600 to-purple-400 mt-[150px]'>
                <div>
                    <div className='flex w-[180px] justify-between m-auto cursor-pointer mb-[20px]'>
                        <NavLink href={GIT_LINK} target='blank'><img src={GIT_ICON} alt='' className=' h-[50px] cursor-pointer hover:opacity-80 transition-all'></img></NavLink>
                        <NavLink href={VK_LINK} target='blank'><img src={VK_ICON} alt='' className=' h-[50px] cursor-pointer hover:opacity-80 transition-all'></img></NavLink>
                        <NavLink href={DISCORD_LINK} target='blank'><img src={DISCORD_ICON} alt='' className='mt-[2px] h-[50px] cursor-pointer hover:opacity-80 transition-all'></img></NavLink>
                    </div>
                    <div className='flex items-center' onClick={()=>copy()}>
                        <img src={COPY_ICON} className='h-[24px] cursor-pointer' alt=''></img><span className='ml-[10px] text-[18px] font-medium' >{email}</span>
                    </div>
                    <p className='text-[12px] mt-[30px]'>Copyright 2022 All Rights Reserved</p>
                   
                  
                </div>
            </div>
        </div>
     );
}

export default Contacts;