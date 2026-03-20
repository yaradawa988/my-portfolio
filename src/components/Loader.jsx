import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-950"
    >
      
      <motion.div
  className="w-24 h-24 rounded-full bg-blue-500 blur-2xl"
  animate={{
    scale: [1, 1.3, 1],
    opacity: [0.6, 1, 0.6]
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity
  }}
/>

      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute mt-24 text-gray-400 text-sm"
      >
        Yara Dawa portfolio
      </motion.p>
    </motion.div>
  );
}

export default Loader;