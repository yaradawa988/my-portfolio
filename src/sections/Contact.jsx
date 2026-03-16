import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

function Contact(){

const [sent,setSent] = useState(false)

function handleSubmit(e){
e.preventDefault()
setSent(true)
}

return(

<section id="contact" className="py-32 px-6">

{/* Title */}

<div className="text-center mb-16">

<h2 className="text-5xl font-bold">

Get In

<span className="ml-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

Touch

</span>

</h2>

<p className="text-gray-500 dark:text-gray-400 mt-4">

Feel free to reach out for collaborations or project discussions.

</p>

</div>

<div className="max-w-xl mx-auto">

{/* Contact Form */}

<form
onSubmit={handleSubmit}
className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 space-y-5"
>

<input
type="text"
placeholder="Your Name"
required
className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
/>

<input
type="email"
placeholder="Email Address"
required
className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
/>

<textarea
placeholder="Your Message"
rows="4"
required
className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
/>

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg"
>

Send Message

</motion.button>

{sent && (

<motion.p
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
className="text-green-500 text-sm mt-2 text-center"
>

Message sent successfully 🚀

</motion.p>

)}

</form>


{/* Social Links */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">

<a
href="mailto:yara.mas484@gmail.com"
className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl hover:scale-105 transition shadow"
>
<MdEmail className="text-3xl mx-auto mb-2 text-blue-500"/>
<span className="text-sm">Email</span>
</a>

<a
href="https://github.com/yaradawa988"
target="_blank"
className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl hover:scale-105 transition shadow"
>
<FaGithub className="text-3xl mx-auto mb-2"/>
<span className="text-sm">GitHub</span>
</a>

<a
href="https://linkedin.com/in/yara-dawa-9090ab296"
target="_blank"
className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl hover:scale-105 transition shadow"
>
<FaLinkedin className="text-3xl mx-auto mb-2 text-blue-500"/>
<span className="text-sm">LinkedIn</span>
</a>

<a
href="https://wa.me/963997737851"
target="_blank"
className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl hover:scale-105 transition shadow"
>
<FaWhatsapp className="text-3xl mx-auto mb-2 text-green-500"/>
<span className="text-sm">WhatsApp</span>
</a>

</div>

</div>

</section>

)

}

export default Contact