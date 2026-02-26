"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#f2f2f2] flex flex-col items-center justify-center text-center px-6">
      {/* Logo UMNG con corrección de contraste */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 mix-blend-multiply" // Elimina el fondo blanco del logo
      >
        <Image
          src="/umng-logo.png"
          alt="Universidad Militar Nueva Granada"
          width={140}
          height={140}
          priority
        />
      </motion.div>

      {/* Nombre Universidad */}
      <motion.p
        className="tracking-[0.4em] text-sm text-[#1e2a4a] mb-10 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        UNIVERSIDAD MILITAR <br /> NUEVA GRANADA
      </motion.p>

      {/* Título Principal */}
      <motion.h1
        className="text-6xl md:text-8xl font-serif font-bold text-[#111827] mb-6 tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        EL TORBELLINO
      </motion.h1>

      {/* Línea dorada basada en el color del escudo */}
      <motion.div
        className="w-24 h-[3px] bg-[#c9a227] mb-6 mx-auto"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ delay: 1 }}
      />

      {/* Subtítulo */}
      <motion.p
        className="tracking-[0.4em] text-sm text-gray-500 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        IDENTIDAD Y MOVIMIENTO
      </motion.p>

      {/* Botón de navegación */}
      <motion.button
        onClick={() => router.push("/topics")}
        className="px-10 py-3 border-2 border-[#1e2a4a] text-[#1e2a4a] rounded-full text-sm tracking-[0.3em] uppercase font-semibold hover:bg-[#1e2a4a] hover:text-white transition-all duration-300 shadow-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        Explora Más
      </motion.button>
    </main>
  );
}