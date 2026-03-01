import ThemeToggle from './component/ThemeToggle'
import { NavBar } from './component/NavBar'
import { Hero } from './component/Hero'
import { About } from './component/About'
import { Services } from './component/Services'
import { Portfolio } from './component/Portfolio'
import { Testimonial } from './component/Testimonial'
import { Contact } from './component/Contact'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Portfolio/>
      <Testimonial />
      <Contact />
    </>
  )
}

export default App
