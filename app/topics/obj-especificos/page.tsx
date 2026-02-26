"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Corregido a framer-motion
import { useRouter } from "next/navigation";
import Image from "next/image";

// Configurado para solo 2 imágenes
const ESPECIFICOS_IMAGES = [
  { src: "/especifico1.jpg", alt: "Identificación Cultural" },
  { src: "/especifico2.jpg", alt: "Examen Pedagógico" },
];

const OBJETIVOS = [
  "Identificar las implicaciones culturales de la activación patrimonial del torbellino en el contexto universitario, considerando su aporte a la visibilización del patrimonio cultural inmaterial.",
  "Examinar las implicaciones pedagógicas que surgen al integrar el torbellino en procesos académicos contemporáneos, en relación con la formación crítica e investigativa de los estudiantes.",
  "Valorar las implicaciones creativas derivadas de la revitalización del torbellino en la construcción de propuestas escénicas contemporáneas basadas en la tradición."
];

export default function ObjetivosEspecificosPage() {
  const router = useRouter();
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = () => setImgIndex((prev) => (prev + 1) % ESPECIFICOS_IMAGES.length);
  const prevImg = () => setImgIndex((prev) => (prev - 1 + ESPECIFICOS_IMAGES.length) % ESPECIFICOS_IMAGES.length);

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans">
      
      {/* NAVEGACIÓN */}
      <nav className="w-full p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/umng-logo.png" alt="UMNG" width={50} height={50} priority />
          <span className="text-[#1D2757] font-bold text-xs tracking-tighter uppercase leading-tight">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>

        <h2 className="hidden md:block text-[#1D2757] font-bold text-xl tracking-[0.2em] uppercase">
          Contenido del Proyecto
        </h2>

        <button 
          onClick={() => router.push("/topics")}
          className="bg-[#1D2757] text-white px-6 py-2 rounded-md font-bold text-xs hover:bg-[#C5A059] transition-all flex items-center gap-2 uppercase tracking-widest shadow-sm"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Volver
        </button>
      </nav>

      {/* CUERPO CENTRAL */}
      <div className="flex-1 flex flex-col md:flex-row p-6 md:p-12 gap-8 items-center justify-center">
        
        {/* Lado Izquierdo: Icono */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-48 h-48 bg-white rounded-[2rem] border-2 border-gray-100 flex items-center justify-center text-7xl shadow-xl relative"
        >
          <span className="relative z-10">📌</span>
          <div className="absolute top-0 right-0 w-10 h-10 bg-[#C5A059] rounded-tr-[2rem] rounded-bl-full opacity-80" />
        </motion.div>

        {/* Lado Derecho: Recuadro de Contenido */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 w-full max-w-6xl bg-white rounded-[1.5rem] shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
        >
          <div className="bg-[#1D2757] p-5 flex justify-between items-center">
            <h3 className="text-white text-2xl font-bold uppercase tracking-widest">Objetivos Específicos</h3>
            <span className="bg-[#C5A059] text-[#1D2757] px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter">
              Investigación
            </span>
          </div>

          <div className="flex flex-col lg:flex-row min-h-[450px]">
            {/* Lista de Objetivos */}
            <div className="flex-1 p-8 border-r border-gray-100 bg-white">
              <div className="space-y-6">
                {OBJETIVOS.map((obj, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-4 items-start"
                  >
                    <span className="bg-[#C5A059] text-[#1D2757] w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 shadow-sm text-xs">
                      {index + 1}
                    </span>
                    <p className="text-[#1D2757] text-sm md:text-[15px] leading-relaxed text-justify">
                      {obj}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Carrusel de Imágenes (Solo 2 fotos) */}
            <div className="flex-1 p-8 bg-[#F8F9FA] flex flex-col items-center justify-center">
              <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    <Image 
                      src={ESPECIFICOS_IMAGES[imgIndex].src}
                      alt={ESPECIFICOS_IMAGES[imgIndex].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Botones de control */}
                <button onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full text-[#1D2757] hover:bg-[#C5A059] transition-all shadow-md z-10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full text-[#1D2757] hover:bg-[#C5A059] transition-all shadow-md z-10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
              <p className="mt-4 text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em]">
                Fotografía {imgIndex + 1} de {ESPECIFICOS_IMAGES.length}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase">
            Identidad y Movimiento • Proyecto UMNG
          </p>
        </div>
      </footer>
    </main>
  );
}