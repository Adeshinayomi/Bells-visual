import AOS from 'aos';
import 'aos/dist/aos.css';
import Owner from "../assets/image/person's-image.webp"
import adobeAi from '../assets/image/Icons/adobe-illustrator-icon.png'
import adobePhoto from '../assets/image/Icons/adobe-photoshop-icon.png'
import figma from '../assets/image/Icons/figma-icon.png'
import adobexd from '../assets/image/Icons/adobe-xd-icon.png'
export function Hero(){
    AOS.init({  duration: 400,
  easing: 'ease',
  once:true,})

    return(
        <main className="pt-16 bg-hero dark:bg-hero-dark" >
            <section className="h-screen flex flex-col justify-center items-center gap-7 lg:gap-4 ">
                <div className="w-[100px] h-[100px] rounded-full justify-self-center" data-aos='fade-up' data-aos-delay="50">
                    <img src={Owner} alt="Owner's-image"  className="w-full h-full rounded-full"/>
                </div>
                <h1 className="w-fit text-4xl text-center dark:text-White font-bold md:text-4xl md:w-1/2 lg:w-1/3" data-aos='fade-up' data-aos-delay="100">
                    Hi,I'm a Graphic Designer.
                </h1>
                <p className="text-center dark:text-White  text-xl w-5/6 mx-auto lg:w-full" data-aos='fade-up' data-aos-delay="100">
                    I create clean,engaging visuals for web and mobile
                </p>
                <div className="justify-self-center flex gap-3" data-aos='fade-up' data-aos-delay="150">
                    <a href="#contact">
                        <button className="group ease-in duration-300 flex items-center bg-accent text-White px-4 py-2 lg:py-1 rounded-lg gap-2 hover:bg-transparent hover:text-accent hover:border-2 hover:border-accent shadow-lg dark:hover:text-White dark:hover:border-White dark:transition-none">
                            <span className="text-md font-medium">Get In Touch</span>
                            <svg className=" h-11 w-6 stroke-white group-hover:stroke-accent dark:group-hover:stroke-White" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" strokeWidth={2}>
                            <path d="M5 12H19M19 12L13 6M19 12L13 18" />
                            </svg>
                        </button>
                    </a>
                    <a href="#works">
                        <button className="group ease-in duration-300  flex items-center border-2 border-accent lg:py-1 rounded-lg px-4 py-2 gap-2 hover:bg-accent hover:text-White hover:px-5 hover:shadow-lg dark:border-White dark:hover:border-none dark:transition-none">
                            <span className="text-lg font-medium dark:text-White ">View works</span>
                            <svg className="h-10 w-6 stroke-accent dark:stroke-White group-hover:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2}>
                                <path d="M12 5V19M12 19L6 13M12 19L18 13"/>
                            </svg>
                        </button>
                    </a>
                    
                </div>
                <div className="justify-self-center flex gap-4 mt-2">
                    <img src={figma} alt="figma-icon" width={60} className="rounded-xl shadow-xl" data-aos='fade-up' data-aos-delay="50"/>
                    <img src={adobePhoto} alt="adobe-photoshop-icon" width={50} className="shadow-xl" data-aos='fade-up' data-aos-delay="100"/>
                    <img src={adobexd} alt="adobe-xd-icon" width={50} className="shadow-xl" data-aos='fade-up' data-aos-delay="150"/>
                    <img src={adobeAi} alt="adobe-ai-icon" width={50} className="shadow-xl" data-aos='fade-up' data-aos-delay="200"/>
                </div>
            </section>
        </main>
        
    )
}