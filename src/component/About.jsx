import { useEffect,useState,useRef } from "react";
import Owner from "../assets/image/person's-image.jpeg"
export function About(){
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
        <section ref={sectionRef} className="w-[90%] mx-auto my-10 grid md:grid-cols-2 gap-10 scroll-mt-[8rem] pt-16" id="about">
            <div className="w-full h-full">
                <img src={Owner} alt="owner-image" className="w-full h-96 rounded-xl md:h-full lg:h-[30rem]"/>
            </div>
            <div className="grid gap-2 lg:place-content-start lg:gap-5">
                <span className="text-lg font-bold">About Me</span>
                <h1 className="text-3xl font-bold w-5/6">Hi,I'm Sonusi Abiodun</h1>
                <p className="lg:text-lg">
                    I’m Abiodun Emmanuel Sonusi, a passionate graphics designer based in Lagos, Nigeria. For the past 3 years, I’ve worked with over 15 clients, helping businesses bring their ideas to life through branding and creative visuals.
                    My brand, Bells Visual, is all about combining creativity with strategy to deliver designs that are not just beautiful but also effective and impactful. I stay updated with the latest design trends to ensure every project meets professional standards.
                    Let’s create something amazing together! 
                </p>
                <div className="flex gap-2">
                <div className="p-4 grid justify-center shadow-xl">
                    <h1 className="text-xl font-bold text-center"> {count}+</h1>
                    <span className="text-center">Years experience</span>
                </div>
                <div className="p-4 grid justify-center shadow-xl">
                    <h1 className="text-xl font-bold text-center">{workcount}+</h1>
                    <span className="text-center">Project done</span>
                </div>
                <div className="p-4 grid justify-center shadow-xl">
                    <h1 className="text-xl font-bold text-center">{clientcount}+</h1>
                    <span className="text-center">Happy client</span>
                </div>
            </div>
            </div>
            
        </section>
    )
}