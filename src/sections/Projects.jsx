import { useEffect, useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import {   FaGithub,
  FaTimes,
  FaCode,
  FaStar,
  FaCalendarAlt,
  FaExternalLinkAlt} from "react-icons/fa";

const placeholderImages = [
  "/projects/project1.png",
  "/projects/project2.jpg",
  "/projects/project3.png",
  "/projects/project4.jpg",
  "/projects/project5.png",
  "/projects/gobus-home.png",
  "/projects/project6.png",
  "/projects/project7.png",
  "/projects/project8.png",
  "/projects/project9.png",
  "/projects/project10.png",
  "/projects/project11.jpeg",
  "/projects/project13.jpg",
   "/projects/project12.jpg",
  
];

function ProjectCard({ project, index, onViewDetails }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl cursor-pointer overflow-hidden"
      onClick={() => onViewDetails(project, index)}
    >
      <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-3xl">
        <motion.img
          src={placeholderImages[index % placeholderImages.length]}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover rounded-3xl transition-transform duration-500 ease-in-out"
          whileHover={{ scale: 1.1 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4 gap-3"
        >
          <h3 className="text-white text-lg md:text-xl font-bold">{project.name}</h3>
          <p className="text-gray-200 text-sm md:text-base mt-1">Click to view details</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const [projectLanguages, setProjectLanguages] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/yaradawa988/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setProjects(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

 const openModal = async (project, index) => {

  setModalProject(project);
  setModalIndex(index);
  setModalOpen(true);

  try {

    const response = await fetch(
      project.languages_url
    );

   const languages = await response.json();

if (
  languages &&
  typeof languages === "object" &&
  !languages.message
) {
  setProjectLanguages(
    Object.keys(languages)
  );
} else {
  setProjectLanguages([]);
}

  } catch (error) {

    console.error(error);

    setProjectLanguages([]);

  }
};

 const closeModal = () => {
  setModalOpen(false);
  setModalProject(null);
  setProjectLanguages([]);
};

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

      {/* Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          My<span className="ml-3 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Projects</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
          Click on any project to see more details
        </p>
      </div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto"
      >
        {displayedProjects.map((project, idx) => (
          <ProjectCard
           key={project.id || project.name}
            project={project}
            index={idx}
            onViewDetails={openModal}
          />
        ))}
      </motion.div>

      {/* See More Button */}
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

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && modalProject && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-200 shadow-md transition"
              >
                <FaTimes />
              </button>

              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden flex-shrink-0"
              >
               <img
  src={
    placeholderImages[
      Math.abs(modalIndex) %
      placeholderImages.length
    ]
  }
  alt={modalProject?.name || "Project"}
  className="
    w-full
    h-full
    object-cover
    rounded-t-3xl
    md:rounded-l-3xl"
/>
              </motion.div>

              {/* Right: Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="w-full md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto max-h-[80vh]"
              >
                <div>

  <div className="flex items-center gap-3 mb-4">

    <div
      className="
      w-12
      h-12
      rounded-xl
      bg-gradient-to-r
      from-blue-500
      to-purple-500
      flex
      items-center
      justify-center
      text-white"
    >
      <FaCode />
    </div>

    <div>

      <h3 className="text-2xl font-bold">
        {modalProject.name}
      </h3>

      <p className="text-sm text-gray-500">
        GitHub Repository
      </p>

    </div>

  </div>

  <p
    className="
    text-gray-700
    dark:text-gray-300
    leading-relaxed
    mb-6"
  >
    {
      modalProject.description ||
      "Professional software project available on GitHub."
    }
  </p>

  {/* Stats */}

  <div
    className="
    grid
    grid-cols-2
    gap-4
    mb-6"
  >

    <div
      className="
      bg-gray-100
      dark:bg-gray-800
      rounded-xl
      p-4"
    >
      <p className="text-xs text-gray-500">
        Stars
      </p>

      <p className="font-bold text-lg flex items-center gap-2">
        <FaStar className="text-yellow-500" />

        {modalProject.stargazers_count}
      </p>
    </div>

    <div
      className="
      bg-gray-100
      dark:bg-gray-800
      rounded-xl
      p-4"
    >
      <p className="text-xs text-gray-500">
        Created
      </p>

      <p className="font-semibold text-sm flex items-center gap-2">
        <FaCalendarAlt />

        {new Date(
          modalProject.created_at
        ).toLocaleDateString()}
      </p>
    </div>

  </div>

  {/* Technologies */}

  <div className="mb-6">

    <h4
      className="
      font-bold
      mb-3
      text-lg"
    >
      Technologies
    </h4>

    <div className="flex flex-wrap gap-2">

      {projectLanguages.length > 0 ? (

        projectLanguages.map((tech) => (

          <span
            key={tech}
            className="
            px-3
            py-1.5
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-purple-500
            text-white
            text-xs
            font-semibold
            shadow"
          >
            {tech}
          </span>

        ))

      ) : (

        <span
          className="
          text-gray-500
          text-sm"
        >
          No technologies available
        </span>

      )}

    </div>

  </div>

</div>

                {/* GitHub Button */}
              <motion.a
  href={modalProject.html_url}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.04 }}
  className="
  w-full
  bg-gradient-to-r
  from-blue-600
  to-purple-600
  hover:from-blue-700
  hover:to-purple-700
  text-white
  rounded-xl
  py-3
  font-semibold
  flex
  items-center
  justify-center
  gap-3
  shadow-lg"
>

  <FaGithub />

  View Source Code

  <FaExternalLinkAlt />

</motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;