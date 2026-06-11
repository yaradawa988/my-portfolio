import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa"
import logo from "../assets/logo.png"

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 mt-16">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* About */}
        <div className="space-y-3 text-center md:text-left">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full object-cover 
            border-2 border-blue-500 
            shadow-[0_0_15px_rgba(59,130,246,0.6)]
            hover:scale-110 transition duration-300 mx-auto md:mx-0"
          />
          <h3 className="text-xl font-semibold">Yara Dawa</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Software Engineer & Laravel Developer passionate about building modern, scalable web applications and secure backend systems.
          </p>
        </div>
{/* Social Media */}
<div className="text-center">
  <h3 className="text-xl font-semibold mb-5">
    Connect With Me
  </h3>

  <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-6 md:gap-8">

    <a
      href="https://linkedin.com/in/yara-dawa-9090ab296"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#0A66C2]
      text-2xl
      transition-all duration-300
      hover:scale-125 hover:-translate-y-1"
    >
      <FaLinkedin />
    </a>

    <a
      href="https://github.com/yaradawa988"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-700 dark:text-gray-300
      text-2xl
      transition-all duration-300
      hover:scale-125 hover:-translate-y-1"
    >
      <FaGithub />
    </a>

    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=yara.mas484@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
      className="text-red-500
      text-2xl
      transition-all duration-300
      hover:scale-125 hover:-translate-y-1"
    >
      <FaEnvelope />
    </a>

    <a
      href="https://wa.me/963997737851"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500
      text-2xl
      transition-all duration-300
      hover:scale-125 hover:-translate-y-1"
    >
      <FaWhatsapp />
    </a>

    <a
      href="https://www.facebook.com/share/188w4ZZ6Fb"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600
      text-2xl
      transition-all duration-300
      hover:scale-125 hover:-translate-y-1"
    >
      <FaFacebook />
    </a>

    <a
      href="https://www.instagram.com/yaraadawa"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-500
      text-2xl
      transition-all duration-300
      hover:scale-125 hover:-translate-y-1"
    >
      <FaInstagram />
    </a>

  </div>
</div>

        {/* Contact Info */}
        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-xl font-semibold"></h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Tartous, Syria
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            <a href="mailto:yara.mas484@gmail.com" className="hover:underline">
              yara.mas484@gmail.com
            </a>
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            +963 997 737 851
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 py-4 text-center text-sm text-gray-500 dark:text-gray-400 px-4">
        &copy; {new Date().getFullYear()} Yara Dawa. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer