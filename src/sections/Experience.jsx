import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi"; // أيقونة رابط خارجي

const experiences = [
  {
    year: "Jan 2024 - May 2025",
    role: "Laravel Backend Developer",
    company: "SCIT – Dubai UAE (CIC Saudi Arabia)",
    companyLink: "https://scit.ae/",
    type: "Remote",
    description:
      "Developed scalable Laravel backend systems, secure REST APIs, and integrated Firebase services and AI-powered automation."
  },
  {
    year: "2023 - Present",
    role: "Freelance Software Engineer",
    company: "Full-Stack Development",
    type: "Remote",
    description:
      "Delivered full-stack applications using Laravel & React. Integrated APIs, payment systems, and modern backend architectures."
  }
];

function Experience() {
  return (
    <section id="experience" className="py-32">
      <h2 className="text-5xl font-bold text-center mb-20">
        Work Experience
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={`mb-16 flex ${isLeft ? "justify-start" : "justify-end"}`}
            >
              <div className="w-1/2 px-6">
                <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-blue-500">
                    {exp.role}
                  </h3>

                  <p className="text-sm text-gray-500 mb-2 flex items-center space-x-2">
                    {exp.companyLink ? (
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1"
                      >
                        {exp.company} <FiExternalLink className="inline" />
                      </a>
                    ) : (
                      exp.company
                    )}
                    • {exp.type}
                  </p>

                  <p className="text-sm mb-3">{exp.year}</p>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;