import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

function Achievements() {
  const projects = [
    {
      img: "/projects/add2.jpg",
      title: "Tharaa-App-Backend",
      description: "Backend API built with Laravel for a personal budget tracking app.",
      link: "https://github.com/yaradawa988/Tharaa-App-Backend.git"
    },
   
    {
      img: "/projects/add3.PNG",
      title: "ExamFlow",
      description: "A complete Online Examination Management System.",
      link: "https://github.com/yaradawa988/ExamFlow.git"
    },
     {
      img: "/projects/add1.jpg",
      title: "HalalFood-backend",
      description: "Backend API built with Laravel for a Flutter-based restaurant app",
      link: " https://github.com/yaradawa988/HalalFood-backend.git"
    },
  ];

  const testimonials = [
    {
      img: "/testimonials/client1.jpg",
      name: "Customer Feedback" 
    },
    {
      img: "/testimonials/client2.jpg",
      name: "Customer Feedback"
    }
  ];

  const [testIndex, setTestIndex] = useState(0);

  useEffect(() => {
    const testInterval = setInterval(() => {
      setTestIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(testInterval);
  }, []);

  return (
 <section id="achievements" className="py-20 md:py-32 px-4 sm:px-6 relative">
  {/* 🔹 Background Blobs */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

      {/*  Styled Section  */}
<div className="text-center mb-20">
 <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="text-3xl sm:text-4xl md:text-5xl font-bold"
>
    Selected <span className="ml-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Work
    </span> & Client Feedback
  </motion.h2>
  <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm sm:text-base md:text-lg">
    Showcasing snapshots of my projects and what clients have loved about them
  </p>
</div>

      {/* 🔹 Projects & Feedback */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 px-12">
        
       {/* Projects Section */}
<div className="flex-1 flex flex-col md:flex-row justify-center items-center md:items-end h-auto md:h-[400px] relative gap-6 md:gap-0">
  {projects.map((proj, idx) => (
    <motion.div
      key={proj.title}
      whileHover={{ scale: 1.05, y: -10, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative md:absolute w-[180px] sm:w-[220px] md:w-[280px] bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-4 md:p-5 cursor-pointer mx-auto overflow-hidden"
      style={{ left: `${idx * 40 - 40}px` }}
    >
      {/* Image Container */}
      <div className="overflow-hidden rounded-3xl w-full h-56">
        <motion.img
          src={proj.img}
          alt={proj.title}
          className="w-full h-full object-cover rounded-3xl transition-transform duration-500 ease-in-out"
          whileHover={{ scale: 1.1 }}
        />
      </div>

      {/* Title & Description */}
      <h3 className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200 text-center">
        {proj.title}
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm text-center">
        {proj.description}
      </p>

      {/* Links */}
      <div className="mt-4 flex gap-4 justify-center">
        <a
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition text-lg"
        >
          <FaExternalLinkAlt />
        </a>
        <button className="text-red-500 hover:text-red-400 transition text-lg">
          <FaHeart />
        </button>
      </div>
    </motion.div>
  ))}
</div>

{/* Testimonials Section */}
<div className="flex-1 flex flex-col items-center justify-center min-h-[350px] md:min-h-[400px] px-2">
  <div className="w-full flex justify-center">
    <AnimatePresence mode="wait">
      <motion.div
        key={testIndex}
        initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-4 md:p-5 flex flex-col items-center w-full max-w-[95%] sm:max-w-[80%] md:max-w-md overflow-hidden"
      >
        {/* Image Container */}
        <div className="overflow-hidden rounded-3xl w-full h-64 relative">
          <motion.img
            src={testimonials[testIndex].img}
            alt={`Client ${testIndex + 1}`}
            className="w-full h-full object-cover rounded-3xl transition-transform duration-500 ease-in-out"
            whileHover={{ scale: 1.1 }}
          />

          {/* ⭐ Star Animation */}
          <motion.div
            className="absolute top-2 right-2"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1], rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-blue-400 to-gray-300 rounded-full shadow-md flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Name */}
        <h4 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200 text-center">
          {testimonials[testIndex].name}
        </h4>
      </motion.div>
    </AnimatePresence>
  </div>
</div>
      </div>
    </section>
  );
}

export default Achievements;