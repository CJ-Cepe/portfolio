import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import Marquee from './Marquee'
import './styles/App.css'

function App() { 
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.querySelector('#root').setAttribute('data-theme', 'light');
    console.log('prefers light')
  } else {
    document.querySelector('#root').setAttribute('data-theme', 'dark');
    console.log('prefers dark')
  }
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const systemTheme = event.matches ? 'dark' : 'light';
    document.querySelector('#root').setAttribute('data-theme', systemTheme);
    console.log('theme change')
  });

  const selectedTheme = localStorage.getItem('selectedTheme');

  if(!selectedTheme){
    selectedTheme = 'light';
    localStorage.setItem('selectedTheme', selectedTheme)
  }

  //apply theme to docu


  

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
          Copyright©2024, CJ-Cepe
        </footer>
      </div>
    </main>
    
    </>
  )
}

export default App
