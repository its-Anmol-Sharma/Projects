
import style from './App.module.css'
import { Hero } from './components/Hero/hero'
import { Navbar } from './components/Navbar/Navbar'

function App() {
 

  return (
    <div className={style.App}>
     <Navbar/>
     <Hero/>
    
    </div>
  )
}

export default App
