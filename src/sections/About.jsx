import { motion } from "framer-motion"
import {
FaLaravel,
FaReact,
FaDatabase,
FaServer,
FaCloud,
FaCode
} from "react-icons/fa"

import {
SiMysql,
SiTailwindcss,
SiFirebase,
SiStripe
} from "react-icons/si"

function About(){

const skills = [

{
icon:<FaLaravel size={28}/>,
title:"Backend Development",
desc:"Building secure APIs and scalable systems with Laravel."
},

{
icon:<FaReact size={28}/>,
title:"Frontend Development",
desc:"Creating modern UI using React, TailwindCSS and responsive design."
},

{
icon:<FaDatabase size={28}/>,
title:"Database Design",
desc:"Designing optimized relational databases with MySQL."
},

{
icon:<FaServer size={28}/>,
title:"API Development",
desc:"Developing REST APIs and integrating third-party services."
},

{
icon:<FaCloud size={28}/>,
title:"Cloud & Integrations",
desc:"Integrating services like Stripe, Google APIs and payment systems."
},

{
icon:<FaCode size={28}/>,
title:"Clean Code",
desc:"Writing maintainable, scalable and well-structured applications."
}

]

const whatIDo = [

"Develop secure and scalable APIs using Laravel",

"Build full-stack web applications using Laravel, MySQL and React",

"Implement authentication systems with JWT, Sanctum and SSO",

"Integrate third-party services such as Stripe, PayPal and Google APIs",

"Create multilingual applications with translation management",

"Build dynamic PDF generation and document management systems",

"Implement notifications using Firebase Cloud Messaging",

"Optimize performance and improve user experience",

"Deploy and maintain production-ready applications"

]

const tech = [

<FaLaravel size={40}/>,
<FaReact size={40}/>,
<SiMysql size={40}/>,
<SiTailwindcss size={40}/>,
<SiFirebase size={40}/>,
<SiStripe size={40}/>

]

return(

<section
id="about"
className="py-32 max-w-7xl mx-auto px-6"
>

{/* ABOUT TEXT */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}
className="text-center max-w-3xl mx-auto mb-20"
>

<h2 className="text-4xl font-bold mb-6">
About <span className="ml-3 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Me</span>
</h2>

<p className="text-lg text-gray-500 dark:text-gray-300 leading-relaxed">

I'm <span className="text-blue-500 font-semibold">Yara Dawa</span>, an Informatics Engineer specialized in <span className="text-blue-500 font-semibold">Software Engineering</span> and passionate about building modern and scalable web applications.

I specialize in developing robust backend systems with <span className="text-blue-500">Laravel</span> and creating dynamic user interfaces with <span className="text-blue-500">React</span>.

My focus is on building secure APIs, integrating external services, and delivering high-quality full-stack solutions.

</p>

</motion.div>


{/* SKILL CARDS */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">

{skills.map((skill,i)=>(
<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.1}}
whileHover={{scale:1.05}}
className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
>

<div className="text-blue-500 mb-4">
{skill.icon}
</div>

<h3 className="text-xl font-semibold mb-2">
{skill.title}
</h3>

<p className="text-gray-500 dark:text-gray-400 text-sm">
{skill.desc}
</p>

</motion.div>
))}

</div>


{/* WHAT I DO */}

<motion.div
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:1}}
className="mb-24"
>

<h3 className="text-3xl font-semibold mb-10 text-center">
What I Do
</h3>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{whatIDo.map((item,i)=>(
<motion.div
key={i}
whileHover={{scale:1.03}}
className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg text-gray-600 dark:text-gray-300"
>

{item}

</motion.div>
))}

</div>

</motion.div>


{/* TECH STACK */}

<motion.div
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:1}}
className="flex flex-wrap justify-center gap-12 text-blue-500"
>

{tech.map((icon,i)=>(
<motion.div
key={i}
animate={{y:[0,-10,0]}}
transition={{
duration:3,
repeat:Infinity,
delay:i*0.3
}}
className="opacity-80 hover:opacity-100 transition"
>

{icon}

</motion.div>
))}

</motion.div>

</section>

)

}

export default About