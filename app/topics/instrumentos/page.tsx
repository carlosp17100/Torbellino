"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

// 1. Interfaces
interface Instrumento {
  id: number;
  src: string;
  name: string;
  functionTitle: string;
  functionDesc: string;
  roleIcon: string;
}

// 2. Datos
const TODOS_LOS_INSTRUMENTOS: Instrumento[] = [
  { id: 1, src: "/image_1.png", name: "El Tiple", functionTitle: "Base Armónica", functionDesc: "Sostiene el pulso constante y la riqueza rítmica del torbellino.", roleIcon: "🎸" },
  { id: 2, src: "/image_2.png", name: "La Guitarra", functionTitle: "Soporte Rítmico", functionDesc: "Refuerza la estructura armónica y el tempo de la obra.", roleIcon: "🎸" },
  { id: 3, src: "/image_3.png", name: "El Requinto", functionTitle: "Voz Melódica", functionDesc: "Lidera las melodías ágiles y los punteos característicos.", roleIcon: "✨" },
  { id: 4, src: "/image_4.png", name: "Guacharaca", functionTitle: "Textura Rítmica", functionDesc: "Acompañamiento tímbrico esencial festivo.", roleIcon: "🎋" },
  { id: 5, src: "/image_5.png", name: "Esterilla", functionTitle: "Fricción de Caña", functionDesc: "Sonoridad vernácula por frotación.", roleIcon: "🎋" },
  { id: 6, src: "/image_6.png", name: "Quiribillo", functionTitle: "Brillo Tímbrico", functionDesc: "Percusión menor de carácter tradicional.", roleIcon: "🎋" },
  { id: 7, src: "/image_7.png", name: "La Puerca", functionTitle: "Base Grave", functionDesc: "Tambor de fricción con sonido vibrante.", roleIcon: "🥁" },
  { id: 8, src: "/image_8.png", name: "Flauta de Caña", functionTitle: "Matiz de Viento", functionDesc: "Aporta colores melódicos ancestrales.", roleIcon: "🎶" },
];

const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVars: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 20 } }
};

export default function InstrumentacionPage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
      
      {/* NAV */}
      <nav className="w-full p-6 flex justify-between items-center bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/umng-logo.png" alt="UMNG" width={40} height={40} />
          <span className="text-[#1D2757] font-bold text-[10px] uppercase leading-tight border-l pl-4 border-gray-200">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>
        <h2 className="hidden md:block text-[#1D2757] font-black text-lg tracking-[0.2em] uppercase">Soporte Instrumental</h2>
        
        {/* BOTÓN ACTUALIZADO SEGÚN IMAGEN */}
        <button 
          onClick={() => router.push("/topics")} 
          className="bg-[#1D2757] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#25316d] transition-all group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span className="font-bold text-[11px] uppercase tracking-widest">
            Volver
          </span>
        </button>
      </nav>

      {/* CONTENIDO */}
      <div className="max-w-3xl mx-auto w-full p-6 py-12 md:py-20">
        
        <header className="text-center mb-16">
          <h3 className="text-[#C5A059] text-xs font-black uppercase tracking-[0.5em] mb-4">Catálogo de Instrumentación</h3>
          <div className="h-1 w-20 bg-[#1D2757] mx-auto"></div>
        </header>

        <motion.div 
          variants={containerVars} 
          initial="hidden" 
          animate="visible"
          className="flex flex-col gap-12"
        >
          {TODOS_LOS_INSTRUMENTOS.map((inst) => (
            <motion.div 
              key={inst.id} 
              variants={itemVars}
              onClick={() => setSelectedImage(inst.src)}
              className="group bg-white rounded-[2.5rem] shadow-md border border-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col">
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                  <Image 
                    src={inst.src} 
                    alt={inst.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    unoptimized 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D2757]/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                    <p className="text-white font-black uppercase tracking-[0.3em] text-2xl">{inst.name}</p>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
                  <div className="text-5xl shrink-0 opacity-80 group-hover:scale-110 transition-transform">
                    {inst.roleIcon}
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-[#1D2757] font-black uppercase text-lg mb-2 tracking-tight">
                      {inst.functionTitle}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed italic max-w-md">
                      {inst.functionDesc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <footer className="w-full bg-[#1D2757] p-8 mt-20">
        <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase text-center opacity-80">
          Identidad y Movimiento • Proyecto UMNG
        </p>
      </footer>

      {/* MODAL ZOOM */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-[#1D2757]/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Zoom" fill className="object-contain" unoptimized />
              <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors">
                <span className="text-xs uppercase tracking-widest font-bold">Cerrar [X]</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}