import { useState } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import Marquee from './Marquee'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <header>
      <Nav/>
    </header>
    <main>
      <Hero/>
      <div>
        <Marquee/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </main>
    <footer>
    Copyright©2024, CJ-CEPE
    </footer>
    </>
  )
}

export default App
