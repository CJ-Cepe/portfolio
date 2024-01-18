import { useState } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
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
      <About/>
    </main>
    </>
  )
}

export default App
