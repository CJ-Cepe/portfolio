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
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() { 
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>My Portfolio</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />

        <link rel="icon" type="image/jpg" href="/your-icon-name.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </Helmet>
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
    </HelmetProvider>
  )
}

export default App
