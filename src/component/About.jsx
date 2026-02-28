import Owner from "../assets/image/person's-image.jpeg"
export function About(){
    return(
        <section className="w-[90%] mx-auto my-10 grid gap-10">
            <div className="w-full">
                <img src={Owner} alt="owner-image" className="w-full h-96 rounded-xl"/>
            </div>
            <div className="grid gap-2">
                <span className="text-lg font-bold">About Me</span>
                <h1 className="text-3xl font-bold w-5/6">Hi,I'm Sonusi Abiodun</h1>
                <p>
                    I’m Abiodun Emmanuel Sonusi, a passionate graphics designer based in Lagos, Nigeria. For the past 3 years, I’ve worked with over 15 clients, helping businesses bring their ideas to life through branding and creative visuals.
                    My brand, Bells Visual, is all about combining creativity with strategy to deliver designs that are not just beautiful but also effective and impactful. I stay updated with the latest design trends to ensure every project meets professional standards.
                    Let’s create something amazing together! 
                </p>
            </div>
            <div className="flex gap-2">
                <div className="p-4 grid justify-center shadow-xl">
                    <h1 className="text-xl font-bold text-center">3+</h1>
                    <span className="text-center">Years experience</span>
                </div>
                <div className="p-4 grid justify-center shadow-xl">
                    <h1 className="text-xl font-bold text-center">25+</h1>
                    <span className="text-center">Project done</span>
                </div>
                <div className="p-4 grid justify-center shadow-xl">
                    <h1 className="text-xl font-bold text-center">15+</h1>
                    <span className="text-center">Happy client</span>
                </div>
            </div>
        </section>
    )
}