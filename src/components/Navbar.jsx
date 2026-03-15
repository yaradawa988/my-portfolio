import { useState } from "react"
import { motion } from "framer-motion"
import { FaMoon, FaSun } from "react-icons/fa"

function Navbar() {

const [dark,setDark] = useState(false)

const toggleTheme = () => {
document.documentElement.classList.toggle("dark")
setDark(!dark)
}

return (

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

<li>
<a href="#home" className="hover:text-blue-500">
Home
</a>
</li>

<li>
<a href="#about" className="hover:text-blue-500">
About me
</a>
</li>

<li>
<a href="#skills" className="hover:text-blue-500">
Skills
</a>
</li>

<li>
<a href="#experience" className="hover:text-blue-500">
Experience
</a>
</li>

<li>
<a href="#projects" className="hover:text-blue-500">
Projects
</a>
</li>

<li>
<a href="#contact" className="hover:text-blue-500">
Contact me
</a>
</li>

</ul>

{/* Dark Mode */}

<button
onClick={toggleTheme}
className="text-xl text-blue-500"
>

{dark ? <FaSun/> : <FaMoon/>}

</button>

</div>

</motion.nav>

)

}

export default Navbar