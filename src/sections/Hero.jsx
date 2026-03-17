import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import avatar from "../assets/avatar.jpg"

function Hero() {
  const particles = Array.from({ length: 10 })

  return (
    <section
      id="home"
      className="min-h-screen flex items-center max-w-7xl mx-auto px-6 py-20"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Avatar + Particles */}
          <div className="relative w-fit mb-10">
            {/* glowing circle */}
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 animate-pulse"></div>

            {/* particles */}
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
              className="relative w-40 h-40 rounded-full border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.7)]"
            />
          </div>

          {/* Text */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Hi, I'm
            <span className="ml-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(99,102,241,0.7)]">
              Yara Dawa
            </span>
          </h1>

          <h2 className="text-3xl font-semibold mb-6 text-gray-300">
            Informatics Engineer
            <span className="ml-4 text-blue-500">—</span>
          </h2>
<p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
  Software Engineer, building modern and efficient web and mobile solutions.
  <span className="text-blue-400"> Creativity and precision</span> guide every project I deliver.
</p>    <div className="flex gap-8 text-2xl">

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/yara-dawa-9090ab296"
    className="group p-3 rounded-full bg-gray-900 dark:bg-gray-800 
    transition duration-300 shadow-[0_0_15px_rgba(59,130,246,0.6)]
    hover:bg-blue-500 hover:scale-110"
  >
    <FaLinkedin className="text-blue-500 group-hover:text-white transition" />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/yaradawa988"
    className="group p-3 rounded-full bg-gray-900 dark:bg-gray-800 
    transition duration-300 shadow-[0_0_15px_rgba(139,92,246,0.6)]
    hover:bg-purple-500 hover:scale-110"
  >
    <FaGithub className="text-purple-500 group-hover:text-white transition" />
  </a>

  {/* Email */}
  <a
    href="mailto:yara.mas484@gmail.com"
    className="group p-3 rounded-full bg-gray-900 dark:bg-gray-800 
    transition duration-300 shadow-[0_0_15px_rgba(239,68,68,0.6)]
    hover:bg-red-500 hover:scale-110"
  >
    <FaEnvelope className="text-red-500 group-hover:text-white transition" />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/963997737851"
    className="group p-3 rounded-full bg-gray-900 dark:bg-gray-800 
    transition duration-300 shadow-[0_0_15px_rgba(34,197,94,0.6)]
    hover:bg-green-500 hover:scale-110"
  >
    <FaWhatsapp className="text-green-500 group-hover:text-white transition" />
  </a>

</div>
        </motion.div>

        {/* RIGHT SIDE (animation space) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >
          <div className="w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-3xl absolute"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero