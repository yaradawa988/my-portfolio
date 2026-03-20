import { motion } from "framer-motion"
import { useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaDownload, FaSpinner } from "react-icons/fa"
import avatar from "../assets/avatar.jpg"

function Hero() {
  const particles = Array.from({ length: 10 })
  const [loading, setLoading] = useState(false)

  const handleOpenCV = () => {
    setLoading(true)
    setTimeout(() => {
      window.open("/Yara-Dawa-Software-Engineer-cv.pdf", "_blank")
      setLoading(false)
    }, 800)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-start max-w-7xl mx-auto px-4 sm:px-8 py-24 md:py-32 relative"
    >
      <div className="w-full flex flex-col items-center md:items-start">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-fit mb-10 md:mb-16"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 animate-pulse"></div>

          {particles.map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                x: [0, Math.random() * 80 - 40],
                y: [0, Math.random() * 80 - 40],
                opacity: [0.2, 1, 0.2]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "mirror"
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
            />
          ))}

          <img
            src={avatar}
            alt="avatar"
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.7)]"
          />
        </motion.div>

        {/* Texts below avatar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left w-full md:max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Hi, I'm
            <span className="ml-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(99,102,241,0.7)]">
              Yara Dawa
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-300">
            Software Engineer
            <span className="ml-4 text-blue-500">—</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed">
            Software Engineer, building modern and efficient web and mobile solutions.
            <span className="text-blue-400"> Creativity and precision</span> guide every project I deliver.
          </p>

          {/* CV BUTTON */}
          <div className="mb-8 flex justify-center md:justify-start">
            <motion.button
              onClick={handleOpenCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 rounded-xl
                bg-gradient-to-r from-blue-500/10 to-purple-500/10
                border border-blue-500/30
                text-blue-500 font-semibold
                backdrop-blur-md
                shadow-[0_0_20px_rgba(59,130,246,0.2)]
                hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]
                transition-all duration-300"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Opening...
                </>
              ) : (
                <>
                  <FaDownload />
                  Open My CV
                </>
              )}
            </motion.button>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-6 text-xl sm:text-2xl justify-center md:justify-start">
            <a href="https://linkedin.com/in/yara-dawa-9090ab296" className="group p-3 rounded-full bg-gray-900 dark:bg-gray-800 transition duration-300 shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:bg-blue-500 hover:scale-110">
              <FaLinkedin className="text-blue-500 group-hover:text-white transition" />
            </a>
            <a href="https://github.com/yaradawa988" className="group p-3 rounded-full bg-gray-900 dark:bg-gray-800 transition duration-300 shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:bg-purple-500 hover:scale-110">
              <FaGithub className="text-purple-500 group-hover:text-white transition" />
            </a>
            <a href="mailto:yara.mas484@gmail.com" className="group p-3 rounded-full bg-gray-900 dark:bg-gray-800 transition duration-300 shadow-[0_0_15px_rgba(239,68,68,0.6)] hover:bg-red-500 hover:scale-110">
              <FaEnvelope className="text-red-500 group-hover:text-white transition" />
            </a>
            <a href="https://wa.me/963997737851" className="group p-3 rounded-full bg-gray-900 dark:bg-gray-800 transition duration-300 shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:bg-green-500 hover:scale-110">
              <FaWhatsapp className="text-green-500 group-hover:text-white transition" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero