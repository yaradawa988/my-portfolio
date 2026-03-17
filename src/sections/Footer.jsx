import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa"
import logo from "../assets/logo.png"
function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* About */}
        <div className="space-y-3">
          <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-full object-cover 
              border-2 border-blue-500 
              shadow-[0_0_15px_rgba(59,130,246,0.6)]
              hover:scale-110 transition duration-300"
            />
          <h3 className="text-xl font-semibold">Yara Dawa</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Software Engineer & Laravel Developer passionate about building modern, scalable web applications and secure backend systems.
          </p>
        </div>

        {/* Social Media */}
        <div className="space-y-3 text-center">
          <h3 className="text-xl font-semibold">Connect with me</h3>

          <div className="flex justify-center gap-6 mt-4 text-2xl">

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/yara-dawa-9090ab296"
              className="p-3 rounded-full transition duration-300 
              hover:scale-110 hover:-translate-y-1
              hover:shadow-[0_0_20px_#0A66C2]">
              <FaLinkedin className="text-[#0A66C2]" />
            </a>

            {/* GitHub */}
            <a href="https://github.com/yaradawa988"
              className="p-3 rounded-full transition duration-300 
              hover:scale-110 hover:-translate-y-1
              hover:shadow-[0_0_20px_#6e5494]">
              <FaGithub className="text-[#6e5494]" />
            </a>

            {/* Email */}
            <a href="mailto:yara.mas484@gmail.com"
              className="p-3 rounded-full transition duration-300 
              hover:scale-110 hover:-translate-y-1
              hover:shadow-[0_0_20px_#EA4335]">
              <FaEnvelope className="text-[#EA4335]" />
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/963997737851"
              className="p-3 rounded-full transition duration-300 
              hover:scale-110 hover:-translate-y-1
              hover:shadow-[0_0_20px_#25D366]">
              <FaWhatsapp className="text-[#25D366]" />
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/share/188w4ZZ6Fb"
              className="p-3 rounded-full transition duration-300 
              hover:scale-110 hover:-translate-y-1
              hover:shadow-[0_0_20px_#1877F2]">
              <FaFacebook className="text-[#1877F2]" />
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/yaraadawa?igsh=MW1pdnJja2JuZWJhcg=="
              className="p-3 rounded-full transition duration-300 
              hover:scale-110 hover:-translate-y-1
              hover:shadow-[0_0_20px_#E1306C]">
              <FaInstagram className="text-[#E1306C]" />
            </a>

          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-right md:text-left">
          <h3 className="text-xl font-semibold">Contact</h3>
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
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Yara Dawa. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer