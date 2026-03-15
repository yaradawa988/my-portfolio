import { motion } from "framer-motion"

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import avatar from "../assets/avatar.jpg"

function Hero(){

return(

<section
id="home"
className="min-h-screen flex items-center max-w-7xl mx-auto px-6"
>

<div className="grid md:grid-cols-2 gap-10 items-center">

<motion.div
initial={{opacity:0,x:-80}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
>

<img
src={avatar}
alt="avatar"
className="w-28 h-28 rounded-full mb-6 border-4 border-blue-500"
/>

<h1 className="text-5xl font-bold mb-4">
Hi, I'm <span className="text-blue-500">Yara</span>
</h1>

<h2 className="text-3xl mb-4">
Informatics Engineer
</h2>

<p className="text-gray-500 dark:text-gray-300 mb-6">
Building smart solutions with code, creativity & passion.
</p>

<div className="flex gap-6 text-2xl">

<a href="#">
<FaLinkedin/>
</a>

<a href="#">
<FaGithub/>
</a>

<a href="#">
<FaEnvelope/>
</a>

<a href="#">
<FaWhatsapp/>
</a>

</div>

</motion.div>

<motion.div
initial={{opacity:0,x:80}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
className="flex justify-center"
>



</motion.div>

</div>

</section>

)

}

export default Hero