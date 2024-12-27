
import style from './App.module.css'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Hero } from './components/Hero/hero'
import { Navbar } from './components/Navbar/Navbar'
import { Projects } from './components/projects/Projects'
import { Contact} from './components/Contact/contact'
// import Card from './components/Projects/CardProject'

function App() {
 

  return (
    <div className={style.App}>
     <Navbar/>
     <Hero/>
     <About/>
     <Experience/>
    
     <Projects/>
     <Contact/>
     

    </div>
  )
}

export default App
