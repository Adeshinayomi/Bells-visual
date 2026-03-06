import { useEffect,useState,useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Owner from "../assets/image/person's-image.jpeg"
export function About(){
        AOS.init({  duration: 400,
      easing: 'ease',
      once:true,})

   const years=3
   const works=25
   const client=15
   const [scroll,setScrolled]=useState(false)
   const sectionRef = useRef(null); 
   const [count, setCount] = useState(0);
   const [workcount, setWorkcount] = useState(0);
   const [clientcount, setClientcount] = useState(0);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            
            if(scroll){
                setCount(prev => {
                    if (prev === years) {
                    clearInterval(intervalId);
                    return prev;
                    }
                    return prev + 1;
                });
            }

        }, 100);

        return () => clearInterval(intervalId);
    }, [scroll]);
    useEffect(() => {
        const intervalId = setInterval(() => {     
            if(scroll){
                setWorkcount(prev => {
                    if (prev === works) {
                    clearInterval(intervalId);
                    return prev;
                    }
                    return prev + 1;
                })                
            }

        }, 100);

        return () => clearInterval(intervalId);
    }, [scroll]);
        useEffect(() => {
        const intervalId = setInterval(() => {     
            if(scroll){
                setClientcount(prev => {
                    if (prev === client) {
                    clearInterval(intervalId);
                    return prev;
                    }
                    return prev + 1;
                })
            }

        }, 100);

        return () => clearInterval(intervalId);
    }, [scroll]);


    return(
        <section className="w-[90%] mx-auto my-10 grid md:grid-cols-2 gap-10 scroll-mt-[8rem] pt-16" id="about">
            <div className="w-full h-full" data-aos='fade-right' data-aos-delay="50">
                <img src={Owner} alt="owner-image" className="w-full h-96 rounded-xl md:h-full lg:h-[30rem]"/>
            </div>
            <div className="grid gap-2 lg:place-content-start lg:gap-5" data-aos='fade-up' data-aos-delay="100">
                <span className="text-lg font-bold dark:text-White">About Me</span>
                <h1 className="text-3xl font-bold w-5/6 dark:text-White">Hi,I'm Sonusi Abiodun</h1>
                <p className="lg:text-lg dark:text-White">
                    I’m Abiodun Emmanuel Sonusi, a passionate graphics designer based in Lagos, Nigeria. For the past 3 years, I’ve worked with over 15 clients, helping businesses bring their ideas to life through branding and creative visuals.
                    My brand, Bells Visual, is all about combining creativity with strategy to deliver designs that are not just beautiful but also effective and impactful. I stay updated with the latest design trends to ensure every project meets professional standards.
                    Let’s create something amazing together! 
                </p>
                <div className="flex gap-2" ref={sectionRef}>
                <div className="p-4 grid justify-center shadow-xl dark:bg-accent" data-aos='fade-up' data-aos-delay="50">
                    <h1 className="text-xl font-bold text-center dark:text-White" > {count}+</h1>
                    <span className="text-center dark:text-White">Years experience</span>
                </div>
                <div className="p-4 grid justify-center shadow-xl dark:bg-accent" data-aos='fade-up' data-aos-delay="100">
                    <h1 className="text-xl font-bold text-center dark:text-White">{workcount}+</h1>
                    <span className="text-center dark:text-White">Project done</span>
                </div>
                <div className="p-4 grid justify-center shadow-xl dark:bg-accent" data-aos='fade-up' data-aos-delay="150">
                    <h1 className="text-xl font-bold text-center dark:text-White">{clientcount}+</h1>
                    <span className="text-center dark:text-White">Happy client</span>
                </div>
            </div>
            </div>
            
        </section>
    )
}