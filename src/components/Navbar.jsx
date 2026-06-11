import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import logo from "../assets/logo.png"
import { FaMoon, FaSun, FaDownload, FaBars, FaTimes } from "react-icons/fa"

function Navbar(){

  const [dark,setDark] = useState(false)
  const [menuOpen,setMenuOpen] = useState(false)
  const [active,setActive] = useState("home")

  // Progress Bar
  const { scrollYProgress } = useScroll()

  // Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    
    if(savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else if(savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if(prefersDark){
        document.documentElement.classList.add("dark");
        setDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setDark(false);
      }
    }
  }, []);

  
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight){
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if(dark){
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme","light")
    }else{
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme","dark")
    }
    setDark(!dark)
  }

  // Nav Link Component
  const NavLink = ({href, label}) => (
    <li className="relative">
      <a
        href={href}
        className={`transition duration-300 ${
          active === href.replace("#","")
            ? "text-blue-500"
            : "hover:text-blue-500"
        }`}
      >
        {label}
      </a>

      {/* Animated underline */}
      {active === href.replace("#","") && (
        <motion.span
          layoutId="activeLink"
          className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-500 rounded"
        />
      )}
    </li>
  )

  return(
    <>
      {/* Progress Bar Top */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-blue-500 origin-left z-[60]"
      />

      <motion.nav
        initial={{y:-100}}
        animate={{y:0}}
        transition={{duration:0.6}}
        className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow z-50"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-full object-cover 
              border-2 border-blue-500 
              shadow-[0_0_15px_rgba(59,130,246,0.6)]
              hover:scale-110 transition duration-300"
            />
            <span className="text-2xl font-bold text-blue-500">&lt;Yara.dev/&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            <NavLink href="#home" label="Home" />
            <NavLink href="#about" label="About" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#experience" label="Experience" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#achievements" label="Achievements" />
            <NavLink href="#contact" label="Contact" />
          </ul>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">

            <a
              href="/Yara-Dawa-Software-Engineer-cv.pdf"
              download
              className="p-3 rounded-full bg-blue-500 text-white hover:scale-110 transition shadow-lg"
              title="Download My CV"
            >
              <FaDownload/>
            </a>

            <button
              onClick={toggleTheme}
              className="text-xl text-blue-500 hover:scale-110 transition"
            >
              {dark ? <FaSun/> : <FaMoon/>}
            </button>

            {/* Mobile Menu */}
            <button
              className="md:hidden text-2xl text-blue-500 hover:scale-110 transition"
              onClick={()=>setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes/> : <FaBars/>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.ul
          initial={{height:0, opacity:0}}
          animate={menuOpen ? {height:"auto", opacity:1} : {height:0, opacity:0}}
          transition={{duration:0.3}}
          className="overflow-hidden md:hidden bg-white dark:bg-black/90 flex flex-col gap-4 px-6 pb-4 text-center font-medium"
        >
          <NavLink href="#home" label="Home" />
          <NavLink href="#about" label="About" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#achievements" label="Achievements" />
          <NavLink href="#contact" label="Contact" />
        </motion.ul>
      </motion.nav>
    </>
  )
}

export default Navbar