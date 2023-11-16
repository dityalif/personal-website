import { useState } from 'react'
import Navbar from './component/navbar'
import Hero from './component/Hero.jsx'
import Intro from './component/Intro.jsx'
import Contact from './component/Contact.jsx'
import ContactCard from './component/ContactCard.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="bg-[#E7E7DE] font-sans min-h-screen">
      <Navbar/>
      <Hero/>
      <Intro/>
      <Contact/>
    </div>
  )
}

export default App
