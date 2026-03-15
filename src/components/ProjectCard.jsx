import { motion } from "framer-motion"
import { FaGithub, FaLaravel, FaReact } from "react-icons/fa"
import { SiMysql, SiTailwindcss, SiJavascript } from "react-icons/si"
import { BiCodeAlt } from "react-icons/bi"

function ProjectCard({project}){



/* تحديد أيقونة المشروع */

const getProjectIcon = () => {

if(project.name.includes("api"))
return <BiCodeAlt size={22}/>

if(project.name.includes("react"))
return <FaReact size={22} className="text-cyan-500"/>

return <FaLaravel size={22} className="text-red-500"/>

}

/* التقنيات */

const techIcons = [
<FaLaravel className="text-red-500"/>,
<SiMysql className="text-blue-500"/>,
<SiTailwindcss className="text-sky-400"/>,
<SiJavascript className="text-yellow-400"/>
]

return(

<motion.div
initial={{opacity:0, scale:0.85}}
whileInView={{opacity:1, scale:1}}
transition={{duration:0.5}}
viewport={{once:true}}
whileHover={{scale:1.05}}
className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
>

{/* Project Image */}



<div className="p-6">

{/* Title */}

<div className="flex items-center gap-2 mb-2">

{getProjectIcon()}

<h3 className="text-xl font-bold">
{project.name}
</h3>

</div>

{/* Description */}

<p className="text-gray-600 dark:text-gray-300 text-sm mb-5">
{project.description || "Modern web application project"}
</p>

{/* Tech icons */}

<div className="flex gap-3 mb-5 text-xl">

{techIcons.map((icon,index)=>(
<span key={index}>{icon}</span>
))}

</div>

{/* Bottom row */}

<div className="flex justify-between items-center">

<a
href={project.html_url}
target="_blank"
className="text-2xl hover:text-blue-500 transition"
>
<FaGithub/>
</a>



</div>

</div>

</motion.div>

)

}

export default ProjectCard