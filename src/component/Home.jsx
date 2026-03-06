import { NavBar } from "./NavBar"
import { Loader } from "./Loader"
import { Hero } from "./Hero"
import { About } from "./About"
import { Services } from "./Services"
import { Portfolio } from "./Portfolio"
import { Testimonial } from "./Testimonial"
import { Contact } from "./Contact"
import { Footer } from "./Footer"
export function Home(){
    return(
        <>
            <Loader/>
            <NavBar/>
            <Hero/>
            <About/>
            <Services/>
            <Portfolio/>
            <Testimonial/>
            <Contact/>
            <Footer />
        </>
    )
}