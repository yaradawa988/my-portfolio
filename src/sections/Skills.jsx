import { motion } from "framer-motion"

import {
FaServer,
FaShieldAlt,
FaPlug,
FaReact,
FaDatabase,
FaCubes
} from "react-icons/fa"

const skills = [

{
icon:<FaServer size={26}/>,
title:"Backend Engineering",
items:["Laravel","PHP 8+","REST APIs","Queues & Scheduling"]
},

{
icon:<FaShieldAlt size={26}/>,
title:"Authentication & Security",
items:["JWT","OAuth2","Sanctum","Breez","Spatie Permissions"]
},

{
icon:<FaPlug size={26}/>,
title:"API Integrations",
items:["Google APIs","Firebase","Keycloak","Payment Gateways"]
},

{
icon:<FaReact size={26}/>,
title:"Frontend Development",
items:["React.js","Tailwind CSS","Bootstrap","Responsive UI"]
},

{
icon:<FaDatabase size={26}/>,
title:"Database Engineering",
items:["MySQL","PostgreSQL","SQL Server","Query Optimization"]
},

{
icon:<FaCubes size={26}/>,
title:"Architecture & Quality",
items:["OOP","SOLID","Clean Code","Design Patterns"]
}

]

function Skills(){

return(

<section id="skills" className="py-32 px-6">

{/* Section Title */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-center mb-20"
>

<h2 className="text-5xl font-bold mb-4">

Core Technical

<span className="ml-3 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">

Skills

</span>

</h2>

<p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">

Technologies and engineering practices I use to build modern,
scalable and high-performance applications.

</p>

</motion.div>


{/* Skill Cards */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

{skills.map((skill,index)=>(

<motion.div
key={index}

initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}

whileHover={{
scale:1.05,
rotateX:6,
rotateY:6
}}

transition={{type:"spring",stiffness:180}}

className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 cursor-pointer relative overflow-hidden"
>

{/* Glow Effect */}

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>

{/* Icon */}

<div className="text-blue-500 mb-4 text-2xl">

{skill.icon}

</div>

{/* Title */}

<h3 className="text-xl font-semibold mb-4 text-blue-500">

{skill.title}

</h3>

{/* Items */}

<div className="flex flex-wrap gap-2">

{skill.items.map((item,i)=>(

<span
key={i}
className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full transition group-hover:scale-105"
>

{item}

</span>

))}

</div>

</motion.div>

))}

</div>

</section>

)

}

export default Skills