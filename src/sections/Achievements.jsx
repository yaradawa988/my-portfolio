import { motion } from "framer-motion"

function Achievements() {
  const projects = [
    {
      img: "/projects/project1.png",
      title: "Portfolio Website",
      description: "A modern responsive portfolio built with React and Tailwind CSS."
    },
    {
      img: "/projects/project2.png",
      title: "E-commerce Platform",
      description: "Full-featured Laravel e-commerce system with secure payment integration."
    },
    {
      img: "/projects/project3.png",
      title: "Chat App",
      description: "Real-time chat application with React, Node.js, and Socket.io."
    },
  ]

  const testimonials = [
    {
      img: "/testimonials/client1.png",
      text: "Yara delivered our project on time with amazing quality! Highly recommended."
    },
    {
      img: "/testimonials/client2.png",
      text: "Professional, efficient, and creative. Our backend system has never been better."
    }
  ]

  return (
    <section id="achievements" className="py-32  dark:bg-gray-900">
      <h2 className="text-5xl font-bold text-center mb-20">
        Achievements & Testimonials
      </h2>

      {/* GitHub Stats */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl flex flex-col items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=yaradawa988&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
            className="rounded-lg"
          />
          <h3 className="mt-4 font-semibold text-lg">GitHub Contributions</h3>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl flex flex-col items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=yaradawa988&layout=compact&theme=tokyonight"
            alt="Top Languages"
            className="rounded-lg"
          />
          <h3 className="mt-4 font-semibold text-lg">Top Languages</h3>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl flex flex-col items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=yaradawa988&theme=tokyo-night"
            alt="Activity Graph"
            className="rounded-lg"
          />
          <h3 className="mt-4 font-semibold text-lg">Activity Graph</h3>
        </motion.div>
      </div>

     

    
    </section>
  )
}

export default Achievements