import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaMoon, FaSun, FaDownload } from "react-icons/fa"

function Navbar(){

const [dark,setDark] = useState(false)

useEffect(()=>{

const savedTheme = localStorage.getItem("theme")

if(savedTheme === "dark"){

document.documentElement.classList.add("dark")
setDark(true)

}

},[])

const toggleTheme = () => {

if(dark){

document.documentElement.classList.remove("dark")
localStorage.setItem("theme","light")

}else{

document.documentElement.classList.add("dark")
localStorage.setItem("theme","dark")

}

setDark(!dark)

}

<motion.button
onClick={toggleTheme}
whileTap={{ rotate: 180 }}
className="text-xl text-blue-500 hover:scale-110 transition"
>
{dark ? <FaSun/> : <FaMoon/>}
</motion.button>
return(

<motion.nav
initial={{y:-100}}
animate={{y:0}}
transition={{duration:0.6}}
className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow z-50"
>

<div className="max-w-7xl mx-auto flex justify-between items-center p-4">

{/* Logo */}

<div className="text-2xl font-bold text-blue-500">
&lt;Yara.dev/&gt;
</div>

{/* Menu */}

<ul className="hidden md:flex gap-8 font-medium">

<li><a href="#home" className="hover:text-blue-500">Home</a></li>
<li><a href="#about" className="hover:text-blue-500">About</a></li>
<li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
<li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
<li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
<li><a href="#contact" className="hover:text-blue-500">Contact</a></li>

</ul>

{/* Right Buttons */}

<div className="flex items-center gap-4">

{/* CV Download */}

<a
href="/Yara-Dawa-Software-Engineer-cv.pdf"
download
className="p-3 rounded-full bg-blue-500 text-white hover:scale-110 transition shadow-lg"
title="Download My CV"
>
<FaDownload/>
</a>

{/* Dark Mode */}

<button
onClick={toggleTheme}
className="text-xl text-blue-500 hover:scale-110 transition"
>

{dark ? <FaSun/> : <FaMoon/>}

</button>

</div>

</div>

</motion.nav>

)

}

export default Navbar