import { motion } from "framer-motion"

const skills = [

{
title:"Backend Engineering",
items:["Laravel","PHP 8+","REST APIs","Queues & Scheduling"]
},

{
title:"Authentication & Security",
items:["JWT","OAuth2","Sanctum","Spatie Permissions"]
},

{
title:"API Integrations",
items:["Google APIs","Firebase","Keycloak","Payment Gateways"]
},

{
title:"Frontend Development",
items:["React.js","Tailwind CSS","Bootstrap","Responsive UI"]
},

{
title:"Database Engineering",
items:["MySQL","PostgreSQL","SQL Server","Query Optimization"]
},

{
title:"Architecture & Quality",
items:["OOP","SOLID","Clean Code","Design Patterns"]
}

]

function Skills(){

return(

<section  id="skills" className="py-32">

<h2 className="text-5xl font-bold text-center mb-20">

Core Technical Skills

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

{skills.map((skill,index)=>(

<motion.div
key={index}
whileHover={{rotateY:10,rotateX:10,scale:1.05}}
transition={{type:"spring",stiffness:200}}
className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 cursor-pointer"
>

<h3 className="text-xl font-semibold mb-4 text-blue-500">

{skill.title}

</h3>

<div className="flex flex-wrap gap-2">

{skill.items.map((item,i)=>(

<span
key={i}
className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
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