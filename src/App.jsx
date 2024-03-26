import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Destinations from './Components/Destinations'
import Serach from './Components/Serach'
import Selects from './Components/Selects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'



const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Destinations/>
     <Serach/>
     <Selects/>
     <Contact/>
     <Footer/>
     
     
    </div>
  )
}

export default App