import { HashLink } from "react-router-hash-link"
import { useState,useEffect } from 'react';
import LightLogo from '../assets/image/Logo-variant-light.png'
import Menu from '../assets/image/Icons/menu-icon.svg'
import close from '../assets/image/Icons/close-icon.svg'
import ThemeToggle from "./ThemeToggle";
export function NavBar(){
    const [isOpen,setIsOpen]=useState(false)
    const [scrolled, setScrolled] = useState(false);

    function ToggleMenu(){
        console.log('clicked')
        if(!isOpen){
            setIsOpen(true)
        }else{
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
                <div className='w-[90%] mx-auto flex justify-between items-center '>
                    <div>
                        <a href="#"><img src={LightLogo} alt="light-logo" width={70}/></a>
                    </div>
                   
                    <ul className={`${isOpen?'':'hidden'} fixed top-0 left-0 bg-primary grid items-start py-10 gap-5 w-2/3 h-screen md:relative md:h-fit md:flex gap-4 md:justify-center md:bg-transparent md:py-0`}>
                        <div className='grid h-1/2 px-4 mt-10 md:flex md:mt-0 md:gap-4 '>
                            <li className='hover:underline underline-offset-[1rem]'><HashLink smooth to="/#">Home</HashLink></li>
                            <li className=' hover:underline underline-offset-[1rem]'><HashLink smooth to="/#about">About</HashLink></li>
                            <li className=' hover:underline hover:underline-offset-[1rem]'><HashLink smooth to="/#services">Services</HashLink></li>
                            <li className=' hover:underline underline-offset-[1rem]'><HashLink smooth to="portfolio">Portfolio</HashLink></li>
                        </div>    
                    </ul>  
                    
                    <div className="flex gap-3 items-center">
                        <ThemeToggle/>
                        <img src={Menu} alt="Menu-bar" width={50} className={`${isOpen?'hidden':''} relative md:hidden z-20 `}onClick={ToggleMenu}/>
                        <img src={close} alt="Menu-bar" width={50} className={`${isOpen?'':'hidden'} relative md:hidden z-20`}onClick={ToggleMenu}/>

                        <button className="hidden md:flex group ease-in duration-300 flex items-center bg-accent text-White px-4 py-2 rounded-lg gap-2 hover:bg-transparent hover:text-accent hover:border-2 hover:border-accent">
                            <span className="text-md font-medium group-hover:"><a href="#contact">Get In Touch</a></span>
                        </button>
                    </div>
                </div>
                
        </header>
    )
}