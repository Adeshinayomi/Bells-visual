import { useState } from 'react'
import { HashLink } from "react-router-hash-link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import graphics1 from '../assets/image/graphics-3.webp'
import graphics3 from '../assets/image/graphics-5.webp'
import graphics4 from '../assets/image/graphics-2.webp'
import logo1 from '../assets/image/logo-1.webp'
 
 export function Portfolio(){
        AOS.init({  duration: 400,
          easing: 'ease',
          once:true,})

    const [modal,setModal]=useState({})

    const hideImage=()=>{
        setModal({})
    }
    const showImage=(event)=>{
        setModal({
           image:event.target.src
        })
    }
    return(
        <>
        <section className="bg-hero dark:bg-hero-dark grid gap-8 justidy-center mt-[10rem] scroll-mt-[8rem]" id='works' data-aos='fade-up' data-aos-delay="50">
            <div className="grid gap-5 justify-center">
                <h1 className="text-3xl font-bold text-center dark:text-White">Featured Works</h1>
                <p className="text-sm w-5/6 mx-auto text-center font-medium dark:text-White">
                    Take a look at some of my finest works for brands that i have worked with and help grow their business visually
                </p>
            </div>
            <div className='w-[90%] mx-auto grid gap-5 lg:grid-cols-4 md:grid-cols-2'>
                <div className='relative overflow-hidden rounded-xl' onClick={showImage}>
                    <img src={graphics1} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125'/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
                <div className='relative overflow-hidden rounded-xl' onClick={showImage}>
                    <img src={graphics3} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125'/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
                <div className='relative overflow-hidden rounded-xl md:h-full' onClick={showImage}>
                    <img src={logo1} alt="first-graphic" className='md:h-full ease-in duration-300 rounded-xl brightness-50 hover:scale-125'/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Logo</span>
                </div>
                <div className='relative overflow-hidden rounded-xl' onClick={showImage}>
                    <img src={graphics4} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125'/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
            </div>
            <button className='ease-in duration-300 group bg-accent px-6 py-2 justify-self-center flex gap-2 text-white items-center rounded-xl mb-10 hover:bg-transparent hover:border-2 hover:border-accent hover:text-accent dark:hover:text-White dark:transition-none dark:hover:border-White '>
                <span className='text-lg font-medium dar'><HashLink smooth to="portfolio">View All</HashLink></span>
                <svg className=" h-10 w-6 stroke-white ease-in duration-300 group-hover:stroke-accent dark:group-hover:stroke-White" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" strokeWidth={2}>
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" />
                </svg>
            </button>


        </section>
            {Object.keys(modal).length >0?<div className='fixed top-0 w-full h-screen bg-black z-20 opacity-75'>

            </div>:''}
            {Object.keys(modal).length >0?<div className='fixed top-0 z-20 w-full h-screen flex items-center'>
                <div className='relative w-5/6 mx-auto h-1/2 md:h-2/3 lg:h-2/3 flex flex-col justify-center items-center gap-4'>
                    <svg className="w-10 h-10 absolute -top-20 right-0 md:-top-10 right-0" viewBox="0 0 32 32" fill="#FFFF"  onClick={hideImage}>
                        <line x1="7" y1="7" x2="25" y2="25" stroke="#FFFFFF" strokeWidth="4"/>
                        <line x1="7" y1="25" x2="25" y2="7" stroke="#FFFFFF" strokeWidth="4"/>
                    </svg>
                   
                    <img src={modal.image} alt="current-image" className='h-full'/>
                </div>
                
            </div>:''}
            </>
    )
}