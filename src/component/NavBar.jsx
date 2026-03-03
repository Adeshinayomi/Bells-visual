import { useState,useEffect } from 'react';
import LightLogo from '../assets/image/Logo-variant-light.png'
import Menu from '../assets/image/Icons/menu-icon.svg'
export function NavBar(){
    const [scrolled, setScrolled] = useState(false);

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
                <div className='w-[90%] mx-auto flex justify-between items-center '>
                    <div >
                        <a href="#"><img src={LightLogo} alt="light-logo" width={70}/></a>
                    </div>

                    <ul className='hidden md:flex gap-4 justify-center'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#works">Portfolio</a></li>
                    </ul>  
                    
                    <div>

                        <img src={Menu} alt="Menu-bar" width={70} className='md:hidden'/>
                        <button className="hidden md:flex group ease-in duration-300 flex items-center bg-accent text-White px-4 py-2 rounded-lg gap-2 hover:bg-transparent hover:text-accent hover:border-2 hover:border-accent">
                            <span className="text-md font-medium group-hover:"><a href="#contact">Get In Touch</a></span>
                        </button>
                    </div>
                </div>
                
        </header>
    )
}