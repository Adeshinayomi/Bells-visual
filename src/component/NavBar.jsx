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
          className={`fixed top-0 z-20 w-full flex justify-between p-4 items-center transition-all duration-300
           ${
            scrolled
                ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-slate-900/80"
                : "bg-transparent"
            }`}>
            <div>
                <img src={LightLogo} alt="light-logo" width={70}/>
            </div>
            <div>
                <img src={Menu} alt="Menu-bar" width={70}/>
            </div>
        </header>
    )
}