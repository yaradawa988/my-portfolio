import { motion } from "framer-motion"
import { FaUniversity } from "react-icons/fa"

function Education(){

return(

<section  id="education" className="py-32 px-6 relative">
 <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

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
          Specialized in <span className="font-semibold">Software Engineering</span> | Started in <span className="font-semibold">2017</span>
        </p>

<p className="text-gray-500 text-sm mt-2">
Lattakia University |Syria
</p>

</motion.div>

</section>

)

}

export default Education