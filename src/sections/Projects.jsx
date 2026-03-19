import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaStar } from "react-icons/fa";

const placeholderImages = [
  "/projects/project1.jpg",
  "/projects/project2.png",
  "/projects/project3.jpg",
  "/projects/project4.jpg",
  "/projects/project5.png",
  "/projects/project6.png",
  "/projects/project7.png",
  "/projects/project8.png",
  "/projects/project9.png",
  "/projects/project10.png",
  "/projects/project11.jpeg",
  "/projects/project13.jpg",
  "/projects/project12.jpg",
]; 

function ProjectCard({ project, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl cursor-pointer overflow-hidden"
    >
      {/* 🔹 GitHub Icon Fixed */}
      <a
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 hover:text-blue-500 text-xl z-10"
      >
        <FaGithub />
      </a>

      {/* 🔹 Project Image */}
      <div className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden rounded-2xl">
        <img
          src={placeholderImages[index % placeholderImages.length]}
          alt={project.name}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-300"
        />

        {/* 🔹 Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-4"
        >
          <h3 className="text-white text-xl font-bold">{project.name}</h3>
          <p className="text-gray-200 text-sm mt-2">
            {project.description || "No description available."}
          </p>
          <div className="flex items-center gap-2 mt-2 text-yellow-400 font-semibold">
            <FaStar /> {project.stargazers_count}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/yaradawa988/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setProjects(sorted); 
      })
      .catch((err) => console.error(err));
  }, []);

  // Projects to display
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-32 px-6 relative">
      {/* 🔹 Background Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

      <h2 className="text-5xl font-bold text-center mb-16">
        Projects
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {displayedProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </motion.div>
{/* 🔹 See More Button */}
{projects.length > 6 && (
  <div className="flex justify-center mt-10">
    <motion.button
      onClick={() => setShowAll(!showAll)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 text-blue-500 font-semibold text-lg transition-all duration-300"
    >
      {showAll ? "Show Less" : "See More"}
      <motion.span
        animate={{ x: 0 }}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="inline-block"
      >
        ➔
      </motion.span>
    </motion.button>
  </div>
)}
    </section>
  );
}

export default Projects;