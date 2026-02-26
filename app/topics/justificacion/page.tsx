"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const JUSTIFICACION_IMAGES = [
  { src: "/justi1.jpg", alt: "Evidencia de Justificación 1" },
  { src: "/justi2.jpg", alt: "Evidencia de Justificación 2" },
  { src: "/justi3.jpg?v=2", alt: "Evidencia de Justificación 3" },
];

export default function JustificacionPage() {
  const router = useRouter();
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = () => setImgIndex((prev) => (prev + 1) % JUSTIFICACION_IMAGES.length);
  const prevImg = () => setImgIndex((prev) => (prev - 1 + JUSTIFICACION_IMAGES.length) % JUSTIFICACION_IMAGES.length);

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans">
      
      {/* NAVEGACIÓN REPLICADA */}
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
      <div className="flex-1 flex flex-col md:flex-row p-6 md:p-12 gap-12 items-center justify-center">
        
        {/* Lado Izquierdo: Icono */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-64 h-64 bg-white rounded-[2rem] border-2 border-gray-100 flex items-center justify-center text-8xl shadow-xl relative"
        >
          <span className="relative z-10">📋</span>
          <div className="absolute top-0 right-0 w-12 h-12 bg-[#C5A059] rounded-tr-[2rem] rounded-bl-full opacity-80" />
        </motion.div>

        {/* Lado Derecho: Recuadro con Contenido Actualizado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 w-full max-w-5xl bg-white rounded-[1.5rem] shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
        >
          <div className="bg-[#1D2757] p-5 flex justify-between items-center">
            <h3 className="text-white text-2xl font-bold uppercase tracking-widest">Justificación</h3>
            <span className="bg-[#C5A059] text-[#1D2757] px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter">
              Fase 1
            </span>
          </div>

          <div className="flex flex-col lg:flex-row min-h-[400px]">
            {/* TEXTO REEMPLAZADO */}
            <div className="flex-1 p-10 border-r border-gray-100">
              <p className="text-[#1D2757] text-lg leading-relaxed text-justify font-medium">
                <span className="text-5xl font-bold float-left mr-3 leading-none text-[#1D2757]">L</span>
                a investigación y reactivación del <strong className="text-[#C5A059]">torbellino</strong> en ámbitos académicos y artísticos contemporáneos preserva, resignifica y proyecta el patrimonio inmaterial andino colombiano, articulando tradición, crítica, transmisión intergeneracional y creación innovadora.
              </p>
            </div>

            {/* CARRUSEL DE IMÁGENES */}
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
                      src={JUSTIFICACION_IMAGES[imgIndex].src}
                      alt={JUSTIFICACION_IMAGES[imgIndex].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>

                <button onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full text-[#1D2757] hover:bg-[#C5A059] transition-all shadow-md z-10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full text-[#1D2757] hover:bg-[#C5A059] transition-all shadow-md z-10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
              <p className="mt-4 text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em]">
                 Fotografía {imgIndex + 1} de {JUSTIFICACION_IMAGES.length}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/50" />
          <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase whitespace-nowrap">
            Identidad y Movimiento • Proyecto UMNG
          </p>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/50" />
        </div>
      </footer>
    </main>
  );
}