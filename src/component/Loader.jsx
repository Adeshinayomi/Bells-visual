import { useState,useEffect } from 'react'
import logo from '../assets/image/Logo-variant-light.png'
export function Loader(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(()=>{
         setLoading(false);
      },2000)
     
    });
  }, []);

    return(
        loading?
        <div className="fixed top-0 z-30 w-full h-screen bg-primary grid justify-center items-center">
            <img src={logo} alt="Logo" width={100} className='animate-pulse'/>
        </div>:''
    )
}