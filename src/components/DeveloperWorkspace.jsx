import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function DeveloperWorkspace({ sending }) {
  const codeLines = [
    "const developer = {",
    '  name: "Yara Dawa",',
    '  role: " Software Engineer",',
    '  passion: "Backend Systems|laravel & php developer|React.js|AI-Powered Web Applications",',
    "};",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="relative"
    >
      {/* Glow */}
      <motion.div
        animate={{
          scale: sending ? [1, 1.3, 1] : [1, 1.1, 1],
          opacity: sending ? [0.3, 0.8, 0.3] : [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"
      />

      {/* Laptop */}
      <div className="relative w-full max-w-[420px]">
        
        {/* Screen */}
        <div
          className="
          bg-[#111827]
          rounded-t-2xl
          border border-gray-700
          overflow-hidden
          shadow-2xl
        "
        >
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1f2937]">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span className="text-xs text-gray-400 ml-3">
              developer.js
            </span>
          </div>

          {/* Code */}
          <div className="p-6 font-mono text-sm">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                animate={
                  sending
                    ? {
                        x: [0, 5, 0],
                        opacity: [0.5, 1, 0.5],
                      }
                    : {}
                }
                transition={{
                  duration: 0.8,
                  repeat: sending ? Infinity : 0,
                  delay: index * 0.1,
                }}
                className="text-green-400 mb-2"
              >
                {line}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Laptop Base */}
        <div
          className="
          h-4
          bg-gradient-to-r
          from-gray-400
          via-gray-200
          to-gray-400
          rounded-b-xl
          shadow-lg
        "
        />

        {/* Success */}
        <AnimatePresence>
          {sending && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0 }}
              className="
              absolute
              -top-6
              -right-6
              text-green-400
              text-6xl
              drop-shadow-lg
            "
            >
              <FaCheckCircle />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default DeveloperWorkspace;