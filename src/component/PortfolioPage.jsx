import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import graphics1 from '../assets/image/graphics-3.webp'
import graphics2 from '../assets/image/graphics-4.webp'
import graphics3 from '../assets/image/graphics-1.webp'
import graphics4 from '../assets/image/graphics-2.webp'
import graphic5 from '../assets/image/graphics-5.webp'
import logo1 from '../assets/image/logo-1.webp'
import logo2 from '../assets/image/logo-2.webp'
import logo3 from '../assets/image/logo-3.webp'
import { NavBar } from "./NavBar"
import { Contact } from './Contact'
import { Footer } from './Footer'

export function PortfolioPage(){
    AOS.init({  duration: 400,
    easing: 'ease',
    once:true})

    const [current,setCurrent]=useState('all')
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
            <main className="pt-16 bg-hero dark:bg-hero-dark dark:text-White">
                <NavBar/>
                <section>
                    <div className="w-[80%]  mx-auto grid gap-5 justify-start items-center place-content-center md:h-screen h-[70vh]">
                        <span className="font-medium text-sm" data-aos='fade-up' data-aos-delay="100">portfolio</span>
                        <h1 className="text-4xl font-medium" data-aos='fade-up' data-aos-delay="50">All Projects</h1>
                        <hr className="h-1 bg-gradient-to-r from-accent to-primary border-none my-4" data-aos='fade-up' data-aos-delay="50"/>
                        <p className="md:w-1/2" data-aos='fade-up' data-aos-delay="50">
                            A collection of things I've design for brands. all intentional.All are very thoughtful ; if something catches your eye, just reach out, and I'll get you in.
                        </p>

                        <a href="#contact" data-aos='fade-up' data-aos-delay="150">
                            <button className="group ease-in duration-300 flex items-center bg-accent text-White px-4 py-2 lg:py-1 rounded-lg gap-2 hover:bg-transparent hover:text-accent hover:border-2 hover:border-accent shadow-lg dark:hover:text-White dark:hover:border-White dark:transition-none">
                                <span className="text-md font-medium">Get In Touch</span>
                                <svg className=" h-11 w-6 stroke-white group-hover:stroke-accent dark:group-hover:stroke-White" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" strokeWidth={2}>
                                <path d="M5 12H19M19 12L13 6M19 12L13 18" />
                                </svg>
                            </button>
                        </a>
                    </div>
                </section>
            </main>
            <div className='w-[90%] mx-auto flex gap-4 p-4 pt-16 mb-10 dark:text-White' data-aos='fade-up' data-aos-delay="50">
                <button className={`${current === 'all'?'underline underline-offset-[.5rem]':''} hover:underline hover:underline-offset-[.5rem]  w-fit ease-in duration-30  underline-offset-[.5rem] decoration-2`} onClick={()=>{
                    setCurrent('all')}}>All</button>
                <button className={`${current === 'flyers'?'underline underline-offset-[.5rem]':''} hover:underline hover:underline-offset-[.5rem]  w-fit ease-in duration-30  underline-offset-[.5rem] decoration-2`} onClick={()=>{
                    setCurrent('flyers')}}>Flyers</button>
                <button className={`${current === 'logo'?'underline underline-offset-[.5rem]':''} hover:underline hover:underline-offset-[.5rem]  w-fit ease-in duration-30  underline-offset-[.5rem] decoration-2`} onClick={()=>{
                    setCurrent('logo')}}>Logos</button>
            </div>
            <div className='w-[90%] mx-auto grid gap-5 lg:grid-cols-3 md:grid-cols-2' data-aos='fade-up' data-aos-delay="50">
                <div className={`${current === 'all' || current === 'flyers'?'':'hidden'} relative overflow-hidden rounded-xl`} id='flyer'>
                    <img src={graphics1} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125' onClick={showImage}/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
                <div className={`${current === 'all' || current === 'flyers'?'':'hidden'} relative overflow-hidden rounded-xl`} id='flyer'>
                    <img src={graphics2} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125' onClick={showImage}/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
                <div className={`${current === 'all' || current === 'logo'?'':'hidden'} relative overflow-hidden rounded-xl md:h-full`} id='logo'>
                    <img src={logo1} alt="first-graphic" className='md:h-full ease-in duration-300 rounded-xl brightness-50 hover:scale-125'onClick={showImage}/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Logo</span>
                </div>
                <div className={`${current === 'all' || current === 'flyers'?'':'hidden'} relative overflow-hidden rounded-xl`} id='flyer'>
                    <img src={graphics3} alt="first-graphic" className=' ease-in duration-300 rounded-xl brightness-50 hover:scale-125' onClick={showImage}/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
                <div className={`${current === 'all' || current === 'logo'?'':'hidden'} relative overflow-hidden rounded-xl md:h-full`} id='logo'>
                    <img src={logo3} alt="first-graphic" className='md:h-full ease-in duration-300 rounded-xl brightness-50 hover:scale-125' onClick={showImage}/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Logo</span>
                </div>
                <div className={`${current === 'all' || current === 'flyers'?'':'hidden'} relative overflow-hidden rounded-xl`} id='flyer'>
                    <img src={graphics4} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125' onClick={showImage}/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
                <div className={`${current === 'all' || current === 'logo'?'':'hidden'} relative overflow-hidden rounded-xl md:h-full`} id='logo'>
                    <img src={logo2} alt="first-graphic" className='md:h-full ease-in duration-300 rounded-xl brightness-50 hover:scale-125' onClick={showImage}/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Logo</span>
                </div>
                <div className={`${current === 'all' || current === 'flyers'?'':'hidden'} relative overflow-hidden rounded-xl`} id='flyer'>
                    <img src={graphic5} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125' onClick={showImage}/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
            </div>
            <Contact/>
            <Footer/>
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