export function Contact(){
    return(
        <form action="none" className="w-[90%] mx-auto mt-[7rem] grid gap-10">
            <div className="grid gap-5">
                <h1 className="text-3xl font-bold">Got a project? <br />
                    Let's Talk
                </h1> 
                <p className="text-md font-medium">
                    Launching a startup or working on an ongoing project? I'm here to help! Reach out, and let's discuss how to make your vision a success!
                </p>
            </div>
           
           <div className="grid gap-4">
                <input type="text" placeholder="What's your name?" className="w-full border-2 border-accent px-4 py-5 rounded-xl"/>
                <input type="text" placeholder="Your email address" className="w-full border-2 border-accent px-4 py-5 rounded-xl"/>
                <textarea placeholder="Tell me about your project" cols={30} rows={8} className="w-full border-2 border-accent px-4 py-5 rounded-xl"></textarea>
           </div>
        </form>     
    )
}