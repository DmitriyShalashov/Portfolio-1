import React from 'react';
import { BOOT_ICON, FIREBASE_ICON, NODE_ICON, REACT_ICON, REDUX_ICON, SKILLS_IMG, TAILWIND_ICON, TS_ICON } from '../consts/img';

function Skills() {
    return ( 
        <div className='w-full h-fit absolute top-[100%] bg-gradient-to-tr from-purple-900 to-[rgb(3,0,60)] flex items-center justify-center select-none' id='skills'>
            <div className='w-[1300px] h-fit p-4 bg-[rgb(0,0,0,0.4)] text-white rounded-[40px] text-center mt-[120px]  mb-[70px] relative'>
                <h1 className='text-[36px] font-bold mt-[20px]'>Skills</h1>
                <div className='w-[700px] relative m-auto mt-[20px]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quaerat expedita reprehenderit nihil doloribus ab! Atque, architecto. Laborum atque tempore, natus tenetur corrupti enim officia qui.</p>
                </div>
                <div className='w-[1000px] grid grid-cols-4 m-auto mt-[40px]'>
                    <div className='text-center w-[250px]'>
                        <p className='text-[20px] mb-[20px]'>React 17-18</p>
                        <img className='h-[150px] m-auto' src={REACT_ICON} alt=''></img>
                    </div>
                    <div className='text-center w-[250px]'>
                        <p className='text-[20px] mb-[20px]'>Redux</p>
                        <img className='h-[150px] m-auto' src={REDUX_ICON} alt=''></img>
                    </div>
                    <div className='text-center w-[250px]'>
                        <p className='text-[20px] mb-[20px]'>TypeScript</p>
                        <img className='h-[150px] m-auto' src={TS_ICON} alt=''></img>
                    </div>
                    <div className='text-center w-[250px]'>
                        <p className='text-[20px] mb-[20px]'>Node.JS</p>
                        <img className='h-[150px] m-auto' src={NODE_ICON} alt=''></img>
                    </div>
                </div>
                <h1 className='text-[36px] font-bold mt-[60px]'>Tools</h1>
                <div className='w-[700px] relative m-auto mt-[20px]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quaerat expedita reprehenderit nihil doloribus ab! Atque, architecto. Laborum atque tempore, natus tenetur corrupti enim officia qui.</p>
                </div>
                <div className='w-[800px] flex justify-between m-auto mt-[40px] mb-[80px]'>
                    <div className='text-center w-[250px]'>
                        <p className='text-[20px] mb-[20px]'>Firebase</p>
                        <img className='h-[150px] m-auto' src={FIREBASE_ICON} alt=''></img>
                    </div>
                    <div className='text-center w-[250px]'>
                        <p className='text-[20px] mb-[20px]'>Tailwind</p>
                        <img className='h-[150px] m-auto' src={TAILWIND_ICON} alt=''></img>
                    </div>
                    <div className='text-center w-[250px]'>
                        <p className='text-[20px] mb-[20px]'>Bootstrap</p>
                        <img className='h-[150px] m-auto' src={BOOT_ICON} alt=''></img>
                    </div>
                </div>
                <div className='tooltip absolute top-[-20px] left-[-170px]'>
                        <img className='h-[550px] drop-shadow-2xl cursor-pointer border-b-2 border-transparent hover:border-amber-300 transition-all rounded-[20px] hover:scale-105	transition-all' src={SKILLS_IMG} alt=''></img>
                        <p className='tooltiptext bg-violet-600 rounded-[20px] rounded-bl-[0px] text-[18px] left-[80%] top-[-5%]'>
                        This guy
                        <p>really cool</p></p>
                </div>
                
            </div>
        </div>
     );
}

export default Skills;