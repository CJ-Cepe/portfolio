import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import Marquee from './Marquee'
import './styles/App.css'
import './styles/animation.css'
import { useEffect } from 'react'

function App() { 
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <>
    <Nav/>
    <main>
      <Hero/>
      <div>
        <Marquee/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <footer>
          Made with ❤️ | © 2024 CJ-Cepe
        </footer>
      </div>
    </main>
    </>
  )
}

export default App
