import { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import logo from '../assets/image/Logo-variant-light.png'

export function Loader(){
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      },2000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

    return(
        loading?
        <div className="fixed top-0 z-30 w-full h-screen bg-primary grid justify-center items-center">
            <img src={logo} alt="Logo" width={100} className='animate-pulse'/>
        </div>:''
    )
}