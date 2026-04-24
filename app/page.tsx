"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    // bg-white garantiza el fondo blanco puro. flex-col e items-center centran todo.
    <main className="relative min-h-screen bg-white flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* QR CODE - Posicionado absolutamente para no desplazar el contenido central */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute top-10 right-10 hidden xl:block z-10"
      >
        <div className="p-5 border border-gray-100 rounded-[2rem] shadow-sm bg-white">
          <Image
            src="/qr.png"
            alt="QR Code"
            width={260} // Tamaño agrandado para alta visibilidad
            height={260}
            className="opacity-100"
          />
        </div>
      </motion.div>

      {/* CONTENEDOR CENTRAL - Encapsula todo para asegurar alineación vertical perfecta */}
      <div className="flex flex-col items-center w-full max-w-4xl z-20">
        
        {/* LOGO UMNG */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-[160px] h-[160px] flex justify-center items-center">
            <Image
              src="/umng-logo.png"
              alt="Universidad Militar Nueva Granada"
              width={160}
              height={160}
              priority
              className="mix-blend-multiply object-contain" 
            />
          </div>
        </motion.div>

        {/* NOMBRE UNIVERSIDAD - Con indent para compensar el tracking */}
        <motion.p
          className="tracking-[0.4em] indent-[0.4em] text-sm text-[#1e2a4a] mb-10 font-medium uppercase leading-relaxed text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          UNIVERSIDAD MILITAR <br /> NUEVA GRANADA
        </motion.p>

        {/* TÍTULO PRINCIPAL - TORBELLINO */}
        <motion.h1
          className="text-6xl md:text-8xl font-serif font-bold text-[#111827] mb-6 tracking-tight text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          TORBELLINO
        </motion.h1>

        {/* LÍNEA DORADA CENTRADA */}
        <motion.div
          className="w-24 h-[3px] bg-[#c9a227] mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 1 }}
        />

        {/* SUBTÍTULO */}
        <motion.p
          className="tracking-[0.5em] indent-[0.5em] text-sm text-gray-400 mb-14 uppercase text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          AMOR QUE SE TEJE
        </motion.p>

        {/* BOTÓN EXPLORA MÁS - Centrado corregido ópticamente */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center w-full"
        >
          <button
            onClick={() => router.push("/topics")}
            // 'indent' compensa el espacio extra de la última letra para un centrado real
            className="px-14 py-4 border-2 border-[#1e2a4a] text-[#1e2a4a] rounded-full text-xs tracking-[0.3em] indent-[0.3em] uppercase font-bold hover:bg-[#1e2a4a] hover:text-white transition-all duration-300 shadow-sm"
          >
            Explora Más
          </button>
        </motion.div>
      </div>
      
    </main>
  );
}