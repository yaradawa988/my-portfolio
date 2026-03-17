// src/components/CartoonEngineer.jsx
import { motion } from "framer-motion";

function CartoonEngineer({ sending }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={sending ? { scale: 1.08, rotate: 1 } : { scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="relative w-80 h-80 flex flex-col items-center justify-center"
    >
      {/* 🌟 Glow خلف الشخصية */}
      <motion.div
        animate={
          sending
            ? { scale: [1, 1.8, 1], opacity: [0.3, 0.7, 0.3], rotate: [0, 5, -5, 0] }
            : { scale: [1, 1.3, 1] }
        }
        transition={{ duration: 1.5, repeat: Infinity }}
        className={`absolute w-64 h-64 rounded-full blur-3xl ${
          sending
            ? "bg-gradient-to-r from-blue-400 to-purple-500 opacity-50"
            : "bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"
        }`}
      />

      {/* 👩‍💻 الجسم + الرأس */}
      <div className="relative w-36 h-48 flex flex-col items-center">
        {/* الشعر الطويل */}
        <motion.div
          animate={
            sending
              ? { y: [0, -3, 0], rotate: [0, 1, -1, 0] }
              : { y: 0, rotate: 0 }
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute -top-8 w-36 h-40 bg-gradient-to-b from-yellow-200 to-pink-300 rounded-t-full z-0"
        />

        {/* الرأس */}
        <div className="relative w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center z-10 shadow-xl">
          {/* النظارة */}
          <div className="absolute top-6 flex gap-2">
            <div className="w-6 h-2 bg-black rounded-sm"></div>
            <div className="w-6 h-2 bg-black rounded-sm"></div>
          </div>

          {/* العيون */}
          <div className="flex gap-2 mb-1 mt-2">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>

          {/* الفم - يتغير حسب حالة sending */}
          <div
            className={`w-5 h-1 rounded-full mt-1 ${
              sending ? "bg-green-400 w-6" : "bg-black"
            }`}
          ></div>
        </div>

        {/* الملابس: تيشيرت + سترة */}
        <motion.div
          animate={
            sending
              ? { y: [0, -2, 0], rotate: [0, 2, -2, 0] }
              : { y: 0, rotate: 0 }
          }
          transition={{ duration: 1.2, repeat: Infinity }}
          className="absolute bottom-0 w-28 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
        ></motion.div>
      </div>

      {/* 💻 اللابتوب */}
      <motion.div
        animate={sending ? { y: [-2, -5, -2], rotate: [0, 3, -3, 0] } : { y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 w-40 h-18 bg-gray-900 rounded-lg shadow-xl flex items-center justify-center"
      >
        {/* keyboard typing effect */}
        <div className="flex gap-1">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 bg-white rounded"
            />
          ))}
        </div>
      </motion.div>

      {/* ✋ اليدين تتحرك */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="absolute bottom-16 w-22 h-6 bg-pink-300 rounded-full"
      />
    </motion.div>
  );
}

export default CartoonEngineer;