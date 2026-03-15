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

<section id="contact" className="py-32">

<h2 className="text-5xl font-bold text-center mb-16">
Contact Me
</h2>

<div className="max-w-xl mx-auto">

<form
onSubmit={handleSubmit}
className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 space-y-4"
>

<input
type="text"
placeholder="Your Name"
className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800"
/>

<input
type="email"
placeholder="Email"
className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800"
/>

<textarea
placeholder="Message"
rows="4"
className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800"
/>

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="w-full py-3 bg-blue-600 text-white rounded-lg"
>

Send Message

</motion.button>

{sent && (

<p className="text-green-500 text-sm mt-2">
Message sent successfully!
</p>

)}

</form>

{/* Social Icons */}

<div className="flex justify-center gap-8 mt-10 text-3xl">

<a
href="mailto:yara.mas484@gmail.com"
className="hover:text-blue-500"
>
<MdEmail/>
</a>

<a
href="https://github.com/yaradawa988"
target="_blank"
className="hover:text-blue-500"
>
<FaGithub/>
</a>

<a
href="https://linkedin.com/in/yara-dawa-9090ab296"
target="_blank"
className="hover:text-blue-500"
>
<FaLinkedin/>
</a>

<a
href="https://wa.me/963997737851"
target="_blank"
className="hover:text-green-500"
>
<FaWhatsapp/>
</a>

</div>

</div>

</section>

)

}

export default Contact