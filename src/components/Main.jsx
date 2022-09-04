import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { ARROW_RIGHT, BG_IMG, CURSOR_ICON, MAIN_IMG } from '../consts/img';
import { WIKI } from '../consts/urls';

function Main() {
    const fullText='Welcome to my portfolio'
    const [text, setText]=useState('')
    const [isDeleting,setIsDeleting]=useState(false)
    const typeText=async()=>{
        let index=0
        let ticker=setInterval(() => {
            if(index===fullText.length)
            {
                return ()=>clearTimeout(ticker)
            }
            tick(index)
            index++
        }, 300-Math.random()*100);
    }

    const tick=(index)=>{
        isDeleting
        ?setText(fullText.substring(0, fullText.length-index-1))
        :setText(fullText.substring(0, index+1))
    }

    useEffect(()=>{
        typeText()
        setTimeout(() => {
            setIsDeleting(!isDeleting)
        }, 6800);
    },[isDeleting])
    
    return (
        <>
            <div className='w-full h-screen opacity-[0.55] bg-black absolute z-10'></div>
            <div id='home' className='w-full h-screen flex justify-center items-center bg-black absolute top-0 left-0' style={{background:`url(${BG_IMG}) no-repeat 0 0`, backgroundSize:'cover'}}>
                <div className='relative w-fit  h-[400px] z-20 mt-[-160px]'>
                    
                    <div className='m-auto text-white flex items-center select-none'>
                        <div className='tooltip mr-[40px]'>
                            <img className='h-[600px] mt-[40px] m-auto drop-shadow-2xl pulse cursor-pointer border-b-4 border-transparent hover:border-amber-300 transition-all rounded-[20px]' src={MAIN_IMG} alt=''></img>
                            <p className='tooltiptext bg-violet-600 rounded-l-[20px] rounded-tr-[20px] text-[18px] left-[-20%] top-[20%]'>Hi! I'm 
                            <span className='font-bold '><a href={WIKI} target='blank'> Flynn</a></span>
                            <p>And I'm guide on this website</p></p>
                        </div>
                        <div>
                            <div className='relative m-auto p-2 bg-gradient-to-r from-violet-700 via-violet-500 w-[400px] flex items-center h-[50px]'>
                                <h1 className='text-white text-[30px] font-medium'>{text}</h1><img src={CURSOR_ICON} className='h-[32px] ml-[-10px]' alt=''></img>
                            </div>    
                            <div className='border-l-4 border-violet-300 h-fit p-2 desc mt-[30px]'>
                                <p className='text-[24px] w-[300px]'>Hello, my name is <span className='font-bold text-[24px]'>Dmitriy</span></p>
                                <p className='text-[24px] w-[200px]'>I'm glad to see you on this page</p>
                            </div>
                            <NavLink href='#contacts'><div className='relative mt-[30px] p-4 border border-white w-fit font-medium text-[18px] hover:bg-black cursor-pointer'>
                                <div  className='z-20 relative flex items-center select-none '>
                                    <p>Lets Connect</p>
                                    <img src={ARROW_RIGHT} className='h-[24px] ml-[10px]' alt=''></img>
                                </div>
                                <div className='absolute top-0 left-0 w-full h-full opacity-50 bg-black'></div>
                            </div>
                            </NavLink>
                            
                        </div>
                    </div>
                </div>
            </div>
        </> 
     );
}

export default Main;