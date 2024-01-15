import { useState } from 'react'
import Nav from './Nav'
import Home from './Hero'
import About from './About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Nav/>
    </header>
    <main>
      <Home/>
      <About/>
    </main>
    </>
  )
}

export default App
