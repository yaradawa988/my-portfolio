import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Achievements from "./sections/Achievements"
import Education from "./sections/Education"
import Contact from "./sections/Contact"
import About from "./sections/About"
import Footer from "./sections/Footer"
import { Toaster } from "react-hot-toast"



function App(){

return(

<div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white">
<Toaster position="top-right" reverseOrder={false} />


<Navbar/>

<Hero/>
<About/>
<Skills/>
<Experience/>
<Projects/>
<Education/>
<Contact/>
<Achievements/>
 <Footer /> 
</div>

)

}

export default App