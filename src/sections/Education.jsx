import { motion } from "framer-motion"
import { FaUniversity } from "react-icons/fa"

function Education(){

return(

<section  id="education" className="py-32">

<h2 className="text-5xl font-bold text-center mb-16">
Education
</h2>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
>

<div className="flex items-center gap-4 mb-4">

<FaUniversity className="text-3xl text-blue-500"/>

<h3 className="text-xl font-semibold">
Bachelor of Informatics Engineering
</h3>

</div>

<p className="text-gray-600 dark:text-gray-300">
Software & Information Systems
</p>

<p className="text-gray-500 text-sm mt-2">
Lattakia University
</p>

</motion.div>

</section>

)

}

export default Education