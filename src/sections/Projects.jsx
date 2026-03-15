import {useEffect,useState} from "react"
import ProjectCard from "../components/ProjectCard"
import { motion } from "framer-motion"

function Projects(){

const [projects,setProjects] = useState([])

useEffect(()=>{

fetch("https://api.github.com/users/yaradawa988/repos")
.then(res=>res.json())
.then(data=>{

const sorted = data
.sort((a,b)=>b.stargazers_count-a.stargazers_count)
.slice(0,6)

setProjects(sorted)

})

},[])

return(

<section id="projects" className="py-32">

<h2 className="text-5xl font-bold text-center mb-16">
Projects
</h2>

<motion.div
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:1}}
className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
>

{projects.map(project=>(

<ProjectCard
key={project.id}
project={project}
/>

))}

</motion.div>

</section>

)

}

export default Projects