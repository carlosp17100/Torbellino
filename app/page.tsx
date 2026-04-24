"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    // Fondo totalmente blanco
    <main className="relative min-h-screen bg-white flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* QR Code - Tamaño extra grande */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute top-6 right-6 md:top-10 md:right-10"
      >
        <div className="p-4 border border-gray-100 rounded-2xl shadow-md bg-white">
          <Image
            src="/qr.png"
            alt="QR Code"
            width={240} // Aumentado a 240 para mayor visibilidad
            height={240}
            className="opacity-100"
          />
        </div>
      </motion.div>

      {/* LOGO UMNG */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <Image
          src="/umng-logo.png"
          alt="Universidad Militar Nueva Granada"
          width={140}
          height={140}
          priority
          className="mix-blend-multiply" 
        />
      </motion.div>

      {/* University title */}
      <motion.p
        className="tracking-[0.4em] text-sm text-[#1e2a4a] mb-12 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        UNIVERSIDAD MILITAR <br /> NUEVA GRANADA
      </motion.p>

      {/* Title */}
      <motion.h1
        className="text-6xl md:text-8xl font-serif font-bold text-[#111827] mb-6 tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        TORBELLINO
      </motion.h1>

      {/* Line */}
      <motion.div
        className="w-24 h-[3px] bg-[#c9a227] mb-8 mx-auto"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ delay: 1 }}
      />

      {/* Subtitle */}
      <motion.p
        className="tracking-[0.4em] text-sm text-gray-400 mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        AMOR QUE SE TEJE
      </motion.p>

      {/* Button navigation */}
      <motion.button
        onClick={() => router.push("/topics")}
        className="px-12 py-4 border-2 border-[#1e2a4a] text-[#1e2a4a] rounded-full text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#1e2a4a] hover:text-white transition-all duration-300 shadow-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        Explora Más
      </motion.button>
    </main>
  );
}