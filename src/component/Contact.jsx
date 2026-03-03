export function Contact(){ 
    return(
        <form action="none" className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto mt-[7rem] grid gap-10">
            <div className="grid gap-5 lg:w-1/2 lg:mx-auto">
                <h1 className="text-3xl font-bold md:text-center md:text-4xl">Got a project? <br />
                    Let's Talk
                </h1> 
                <p className="text-md font-medium md:text-center md:w-2/3 md:mx-auto lg:w-full">
                    Launching a startup or working on an ongoing project? I'm here to help! Reach out, and let's discuss how to make your vision a success!
                </p>
            </div>
           
           <div className="grid gap-4 md:grid-cols-2">
                <input type="text" placeholder="What's your name?" className="w-full shadow-lg px-4 py-5 rounded-xl"/>
                <input type="text" placeholder="Your email address" className="w-full shadow-lg px-4 py-5 rounded-xl"/>
                <textarea placeholder="Tell me about your project" cols={30} rows={8} className="w-full shadow-lg px-4 py-5 rounded-xl md:col-span-2"></textarea>
           </div>
        </form>     
    )
}