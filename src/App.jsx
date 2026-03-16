import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Achievements from "./sections/Achievements"
import Education from "./sections/Education"
import Contact from "./sections/Contact"
import About from "./sections/About"
import ParticlesBackground from "./components/ParticlesBackground"
import Background3D from "./components/Background3D"


function App(){

return(

<div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white">
<Background3D/>
<ParticlesBackground/>

<Navbar/>

<Hero/>
<About/>
<Skills/>
<Experience/>
<Projects/>
<Education/>
<Contact/>
<Achievements/>
</div>

)

}

export default App