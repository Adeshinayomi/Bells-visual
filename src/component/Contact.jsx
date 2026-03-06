import emailjs from "@emailjs/browser";
import { useRef,useState } from "react";
export function Contact(){
    
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true)
        setSuccess(false)
        setError(false)

        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE,
            import.meta.env.VITE_EMAIL_TEMPLATE,
            form.current,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )
        .then(() => {
            setLoading(false)
            setSuccess(true)
            form.current.reset()
            setTimeout(()=>{
                setSuccess(false)
            },3000)
        })
        .catch(() => {
            setLoading(false)
            setError(true)
            // setTimeout(()=>{
            //     setError(false)
            // },3000)
        })
       
    }
    


    return(
        <form action="none" ref={form} className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto mt-[7rem] grid gap-10 scroll-mt-[8rem]" id="contact" onSubmit={sendEmail}>
            <div className="grid gap-5 lg:w-1/2 lg:mx-auto">
                <h1 className="text-3xl font-bold md:text-center md:text-4xl dark:text-White">Got a project? <br />
                    Let's Talk
                </h1> 
                <p className="text-md font-medium md:text-center md:w-2/3 md:mx-auto lg:w-full dark:text-White">
                    Launching a business or working on an ongoing project? I'm here to help! Reach out, and let's discuss how to bring your brand to life!
                </p>
            </div>
           
           <div className="grid gap-4 md:grid-cols-2">
                <input type="text" name="name" placeholder="What's your name?" className="w-full shadow-lg px-4 py-5 rounded-xl" required/>
                <input type="email" name="email" placeholder="Your email address" className="w-full shadow-lg px-4 py-5 rounded-xl" required/>
                <textarea placeholder="Tell me about your project" name="message" cols={30} rows={8} className="w-full shadow-lg px-4 py-5 rounded-xl md:col-span-2"></textarea>
           </div>
           <button
                type="submit"
                disabled={loading}
                className="w-fit bg-accent text-white p-3  rounded-lg hover:bg-transparent hover:border-2 hover:text-accent hover:border-accent transition flex items-center justify-self-center gap-2 disabled:opacity-60 dark:transition-none dark:hover:text-White dark:hover:border-White"
            >

                {loading ? (
                    <>
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                    Sending...
                    </>
                ) : (
                    "Send Message"
                )}
            </button>
            {/* <button type="submit" className="w-fit justify-self-center bg-accent rounded-lg p-4 text-white text-lg">Send Message</button> */}

            {success && (
                <p className="text-green-600 md:text-lg mt-4 text-center">
                Message sent successfully!
                </p>
            )
            }

            {error && (
                <p className="text-red-600 mt-4 text-center">
                Something went wrong. Try again.
                </p>
            )}
        </form>     
    )
}