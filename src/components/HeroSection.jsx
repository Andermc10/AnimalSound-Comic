import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <motion.h1
        className="text-6xl md:text-7xl font-bold text-yellow-400 drop-shadow-[0_0_25px_rgba(255,255,0,0.9)]"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ¿Puede la IA hablar con los animales? 🐋🤖
      </motion.h1>
      <motion.p
        className="mt-8 text-2xl md:text-3xl text-gray-200 bg-black bg-opacity-40 p-6 rounded-2xl border-4 border-yellow-400 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Una historia tipo cómic sobre cómo la inteligencia artificial intenta
        descifrar los misterios del lenguaje animal.  
      </motion.p>
    </div>
  );
}
