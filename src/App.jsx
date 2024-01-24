import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import Marquee from './Marquee'
import './styles/App.css'

function App() {
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
        <footer>
          Copyright©2024, CJ-Cepe
        </footer>
      </div>
    </main>
    
    </>
  )
}

export default App
