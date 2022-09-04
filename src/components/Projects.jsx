import React, { useEffect, useRef, useState } from 'react';
import { CURSOR_ICON, EX_ICON, FIREBASE_ICON, GIT_ICON, NODE_ICON, POSTGRE_ICON, REACT_ICON } from '../consts/img';

function Projects() {
    const projects=[
        {
            name:'RealTime-Chat',
            stack:[
                REACT_ICON,
                FIREBASE_ICON
            ],
            desc:'Realtime chat with opportunity to auth with Google'
        },
        {
            name:'OnlineStore',
            stack:[
                REACT_ICON,
                NODE_ICON,
                EX_ICON,
                POSTGRE_ICON,
            ],
            desc:'OnlineStore with DataBase, Middlewares(CheckRole, Auth, Error) and Admin Tools'
        },
        {
            name:'Audio Player',
            stack:[
                REACT_ICON,
            ],
            desc:'Frontend App with functional of Audio Player. You can add tracks from different albums to your collection'
        },

    ]
    const fullText='Projects'
    const cardRef=useRef()
    const [text, setText]=useState('')
    const [isDeleting,setIsDeleting]=useState(true)
    const typeText=async()=>{
        let index=0
        let ticker=setInterval(() => {
            if(index===fullText.length)
            {
                return ()=>clearTimeout(ticker)
            }
            tick(index)
            index++
        }, 500-Math.random()*200);
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
        }, 3500);
    },[isDeleting])


    const showDesc=(e)=>{
        e.currentTarget.style.opacity='1'
    }
    const hideDesc=(e)=>{
        e.currentTarget.style.opacity='0'
    }

    return (  
    <div className='w-full h-screen absolute top-[250%] bg-black flex justify-center' id='projects'>
           <div className='w-[1300px] h-fit p-4 bg-[rgb(0,0,0,0.4)] text-white rounded-[40px] text-center mt-[100px]  mb-[70px] relative'>
                <div className='flex items-center relative m-auto h-[40px] w-fit'>
                    <h1 className='text-[36px] font-bold '>{text}</h1>
                    <img className='h-[36px] ml-[-10px]' src={CURSOR_ICON} alt=''></img>
                </div>
                <div className='w-[700px] relative m-auto mt-[20px]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quaerat expedita reprehenderit nihil doloribus ab! Atque, architecto. Laborum atque tempore, natus tenetur corrupti enim officia qui.</p>
                </div>
                <div className='w-[1000px] h-[70px] relative border-box border-white border-2 rounded-[30px] m-auto mt-[80px] flex justify-between text-white select-none overflow-hidden cursor-pointer'>
                    <div className='border-r-2 border-white h-full relative w-[34%] flex justify-center items-center hover:bg-gradient-to-br from-violet-500 to-rose-500'>
                        Page 1
                    </div>  
                    <div className='border-white h-full relative w-[34%] flex justify-center items-center hover:bg-gradient-to-br from-violet-500 to-rose-500'>
                        Page 2
                    </div>
                    <div className='border-l-2 border-white h-full relative w-[34%] flex justify-center items-center hover:bg-gradient-to-br from-violet-500 to-rose-500'>
                        Page 3
                    </div>
                </div>
                <div className='w-[1100px] relative border-box  m-auto mt-[80px] flex justify-between text-white select-none overflow-hidden cursor-pointer'>
                   {projects.map(item=>
                   <div key={item.name} 
                        className='overflow-hidden w-[300px] h-[250px] relative bg-gradient-to-br from-violet-500 to-rose-500 rounded-[10px] flex items-center justify-center'>
                        <div>
                            <p className='text-[20px]'>{item.name}</p>
                            <div className='flex m-auto w-fit mt-[20px]'>
                            {
                                item.stack.map(el=>
                                    <>
                                    <img key={el} className='h-[50px] ml-[10px] mr-[10px]' src={el} alt=''></img>
                                    </>
                                )
                            }
                            
                            </div>
                            <div style={{opacity:'0'}} ref={cardRef} id={item.name}
                            className='z-20 w-full absolute bg-gradient-to-br from-violet-500 to-rose-500 top-0 left-0 h-full flex items-center text-center transition-all'
                            onMouseEnter={(e)=>showDesc(e)} 
                            onMouseLeave={(e)=>hideDesc(e)}
                             >
                                <p className='w-[200px] m-auto'>{item.desc}</p>
                            </div>
                            
                        </div>
                    </div>
                    )}
                </div>
                <div className='mt-[100px] flex items-center justify-center'>
                    <p className='text-[20px]'>All my projects you can see on my GitHub</p>
                    <img src={GIT_ICON} alt='' className='ml-[10px] h-[30px]'></img>
                </div>
            </div>
    </div>
    );
}

export default Projects;