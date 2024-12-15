
import style from './App.module.css'
import { About } from './components/About/About'
import { Hero } from './components/Hero/hero'
import { Navbar } from './components/Navbar/Navbar'

function App() {
 

  return (
    <div className={style.App}>
     <Navbar/>
     <Hero/>
     <About/>

    
    </div>
  )
}

export default App
