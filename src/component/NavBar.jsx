import { HashLink } from "react-router-hash-link"
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LightLogo from '../assets/image/Logo-variant-light.png'
import DarkLogo from '../assets/image/Logo-variant-dark.png'
import ThemeToggle from "./ThemeToggle";
export function NavBar(){
    const [isOpen,setIsOpen]=useState(false)
    const [current,setCurrent]=useState('home')
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();

      useEffect(() => {
    if (location.pathname === "/portfolio") {
        setCurrent('portfolio')
    }
  }, [location.pathname]);

    function ToggleMenu(){
        console.log('clicked')
        if(!isOpen){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    }
    function closeMenu(){
        if(isOpen){
            setIsOpen(false)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return(
        <header 
          className={`fixed top-0 z-20 w-full p-4 transition-all duration-300
           ${
            scrolled
                ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-slate-900/80"
                : "bg-transparent"
            }`}>
                <div className={`${isOpen?'':'hidden'} fixed h-screen w-full bg-black right-0 opacity-25 top-0`}>

                </div>
                <div className='w-full md:w-[90%] mx-auto flex justify-between items-center '>
                    <div className="dark:hidden">
                        <a href="/#"><img src={LightLogo} alt="light-logo" width={70} /></a>
                    </div>
                    <div className="hidden dark:grid  items-center">
                        <a href="/#"><img src={DarkLogo} alt="dark-logo" width={80} /></a>
                    </div>

                    <ul className={`${isOpen?'':'hidden'} dark:bg-accent fixed top-0 left-0 bg-primary grid items-start py-10 gap-5 md:w-2/3 w-full h-screen md:relative md:h-fit md:flex gap-4 md:justify-center md:bg-transparent dark:md:bg-transparent md:py-0`}>

                        <div className='grid h-1/2 px-4 mt-10 md:flex md:mt-0 md:gap-4 '>
                            <li className={`${current === 'home'?'underline':''} md:hover:underline md:underline-offset-[1rem] dark:text-White`} ><HashLink smooth to="/#" onClick={()=>{
                                closeMenu
                                setCurrent('home')
                            } }>Home</HashLink></li>
                            <li className={`${current === 'about'?'underline':''} md:hover:underline md:underline-offset-[1rem] dark:text-White`}  ><HashLink smooth to="/#about" onClick={()=>{
                                closeMenu
                                setCurrent('about')
                            } }>About</HashLink></li>
                            <li className={`${current === 'services'?'underline':''} md:hover:underline md:underline-offset-[1rem] dark:text-White`} ><HashLink smooth to="/#services" onClick={()=>{
                                closeMenu
                                setCurrent('services')
                            } }>Services</HashLink></li>
                            <li className={`${current === 'portfolio'?'underline':''} md:hover:underline md:underline-offset-[1rem] dark:text-White`} ><HashLink smooth to="/portfolio" onClick={()=>{
                                closeMenu
                                setCurrent('portfolio')
                            } }>Portfolio</HashLink></li>
                        </div>    
                    </ul>  
                    
                    <div className="flex gap-3 items-center">
                        <ThemeToggle/>
                        <svg className={`${isOpen?'hidden':''} w-14 h-14 relative md:hidden z-20 `} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={ToggleMenu}>
                            <path d="M20 7L4 7" className="stroke-black dark:stroke-White" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M20 12L4 12" className="stroke-black dark:stroke-White" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M20 17L4 17" className="stroke-black dark:stroke-White" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <svg className={`${isOpen?'':'hidden'} w-14 h-14 relative md:hidden z-20`} viewBox="0 0 32 32"  onClick={ToggleMenu}>
                            <line x1="7" y1="7" x2="25" y2="25" className='stroke-black dark:stroke-White' strokeWidth="1.5"/>
                            <line x1="7" y1="25" x2="25" y2="7" className='stroke-black dark:stroke-White' strokeWidth="1.5"/>
                        </svg>


                        <a href="#contact">
                            <button className="hidden ease-in duration-300 bg-accent text-White px-4 py-2  rounded-lg gap-2 hover:bg-transparent hover:text-accent hover:border-2 hover:border-accent shadow-lg dark:hover:text-White dark:hover:border-White dark:transition-none md:flex">
                                <span className="text-md font-medium">Get In Touch</span>
        
                            </button>
                        </a>
                    </div>
                </div>
                
        </header>
    )
}