import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const experiences = [
  {
    year: "Jan 2024 - May 2025",
    role: "Laravel Backend Developer",
    company: "SCIT – Dubai UAE (CIC Saudi Arabia)",
    companyLink: "https://scit.ae/",
    type: "Remote",
    description:
      "Developed scalable Laravel backend systems, secure REST APIs, and integrated Firebase services and AI-powered automation.",
    technologies: ["Laravel", "REST APIs", "Firebase", "MySQL", "AI Integration"]
  },
  {
    year: "2023 - Present",
    role: "Freelance Software Engineer",
    company: "Full-Stack Development",
    type: "Remote",
    description:
      "Delivered full-stack applications using Laravel & React. Integrated APIs, payment systems, and modern backend architectures.",
    technologies: ["Laravel", "React", "APIs", "Payment Integration", "Full-Stack"]
  }
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Work <span className="ml-3 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Experience</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
          My professional journey and experience
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* Vertical Line (desktop only) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-1/2 px-2 md:px-6">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition">

                  {/* Role */}
                  <h3 className="text-lg sm:text-xl font-bold text-blue-500 mb-2">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <p className="text-xs sm:text-sm text-gray-500 mb-2 flex flex-wrap items-center gap-1">
                    {exp.companyLink ? (
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1"
                      >
                        {exp.company} <FiExternalLink />
                      </a>
                    ) : (
                      exp.company
                    )}
                    • {exp.type}
                  </p>

                  {/* Date */}
                  <p className="text-xs sm:text-sm mb-3 text-gray-400">
                    {exp.year}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 break-words">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs sm:text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;