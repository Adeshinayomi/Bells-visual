import ThemeToggle from './component/ThemeToggle'
import { NavBar } from './component/NavBar'
import { Hero } from './component/Hero'
import { About } from './component/About'
import { Services } from './component/Services'
import { Portfolio } from './component/Portfolio'
import { Testimonial } from './component/Testimonial'
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
    </>
  )
}

export default App
