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
        
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@200;300;400;600;800;900&display=swap" rel="stylesheet" />
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
