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

// 2. Datos (image_1.png a image_8.png)
const TRIO_PRINCIPAL: Instrumento[] = [
  { 
    id: 1, 
    src: "/image_1.png", 
    name: "El Tiple", 
    functionTitle: "Base Armónica", 
    functionDesc: "Sostiene el pulso constante y la riqueza rítmica del torbellino.",
    roleIcon: "🎸"
  },
  { 
    id: 2, 
    src: "/image_2.png", 
    name: "La Guitarra", 
    functionTitle: "Soporte Rítmico", 
    functionDesc: "Refuerza la estructura armónica y el tempo de la obra.",
    roleIcon: "🎸"
  },
  { 
    id: 3, 
    src: "/image_3.png", 
    name: "El Requinto", 
    functionTitle: "Voz Melódica", 
    functionDesc: "Lidera las melodías ágiles y los punteos característicos.",
    roleIcon: "✨"
  },
];

const GALERIA_VERNACULA: Instrumento[] = [
  {
    id: 4,
    src: "/image_4.png", 
    name: "Guacharaca",
    functionTitle: "Textura Rítmica",
    functionDesc: "Acompañamiento tímbrico esencial festivo.",
    roleIcon: "🎋"
  },
  {
    id: 5,
    src: "/image_5.png", 
    name: "Esterilla",
    functionTitle: "Fricción de Caña",
    functionDesc: "Sonoridad vernácula por frotación.",
    roleIcon: "🎋"
  },
  {
    id: 6,
    src: "/image_6.png", 
    name: "Quiribillo",
    functionTitle: "Brillo Tímbrico",
    functionDesc: "Percusión menor de carácter tradicional.",
    roleIcon: "🎋"
  },
  {
    id: 7,
    src: "/image_7.png", 
    name: "La Puerca",
    functionTitle: "Base Grave",
    functionDesc: "Tambor de fricción con sonido vibrante.",
    roleIcon: "🥁"
  },
  {
    id: 8,
    src: "/image_8.png", 
    name: "Flauta de Caña",
    functionTitle: "Matiz de Viento",
    functionDesc: "Aporta colores melódicos ancestrales.",
    roleIcon: "🎶"
  },
];

// 3. Animaciones
const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVars: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

export default function InstrumentacionPage() {
  const router = useRouter();
  
  // ESTADO PARA LA IMAGEN AMPLIADA
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans relative">
      
      {/* NAV */}
      <nav className="w-full p-6 flex justify-between items-center bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/umng-logo.png" alt="UMNG" width={45} height={45} />
          <span className="text-[#1D2757] font-bold text-xs uppercase leading-tight border-l pl-4 border-gray-200">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>
        <h2 className="hidden md:block text-[#1D2757] font-black text-xl tracking-widest uppercase">Soporte Instrumental</h2>
        <button onClick={() => router.push("/topics")} className="bg-[#1D2757] text-white px-6 py-2 rounded-md font-bold text-xs uppercase hover:bg-[#C5A059] transition-all">
          Volver
        </button>
      </nav>

      <div className="max-w-7xl mx-auto w-full p-6 md:p-12">
        
        {/* TRIO PRINCIPAL (3 Columnas) */}
        <motion.section variants={containerVars} initial="hidden" animate="visible" className="mb-20">
          <h3 className="text-[#C5A059] text-center text-sm font-bold uppercase tracking-[0.4em] mb-10">Instrumentos Solistas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRIO_PRINCIPAL.map((inst) => (
              <motion.div 
                key={inst.id} 
                variants={itemVars} 
                onClick={() => setSelectedImage(inst.src)} // ACTIVAR ZOOM
                className="flex flex-col h-full bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow group"
              >
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                  <Image src={inst.src} alt={inst.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-6 text-center">
                    <p className="text-white font-black uppercase tracking-widest text-xl">{inst.name}</p>
                  </div>
                </div>
                <div className="p-8 text-center flex-1 flex flex-col justify-center">
                  <span className="text-4xl mb-3 block">{inst.roleIcon}</span>
                  <h4 className="text-[#1D2757] font-black uppercase text-lg mb-2">{inst.functionTitle}</h4>
                  <p className="text-[#1D2757]/70 text-sm italic">{inst.functionDesc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* GALERÍA VERNÁCULA (5 Columnas) */}
        <motion.section variants={containerVars} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-[#C5A059] text-center text-sm font-bold uppercase tracking-[0.4em] mb-10">Acompañamiento Vernáculo</h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {GALERIA_VERNACULA.map((perc) => (
              <motion.div 
                key={perc.id} 
                variants={itemVars} 
                whileHover={{ y: -5 }} 
                onClick={() => setSelectedImage(perc.src)} // ACTIVAR ZOOM
                className="bg-white p-4 rounded-[2rem] shadow-lg border border-gray-100 flex flex-col h-full cursor-pointer hover:shadow-xl transition-all group"
              >
                <div className="relative h-32 w-full rounded-xl overflow-hidden mb-4 shrink-0">
                  <Image src={perc.src} alt={perc.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" unoptimized />
                </div>
                <div className="text-center flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-2xl mb-1 block">{perc.roleIcon}</span>
                    <h4 className="text-[#1D2757] text-[10px] md:text-xs font-black uppercase mb-1">{perc.name}</h4>
                    <div className="h-0.5 w-6 bg-[#C5A059] mx-auto mb-2" />
                  </div>
                  <p className="text-[#1D2757]/80 text-[10px] leading-tight px-1">{perc.functionDesc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>

      <footer className="w-full bg-[#1D2757] p-6 mt-auto">
        <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase text-center">
          Identidad y Movimiento • Proyecto UMNG
        </p>
      </footer>

      {/* --- MODAL PARA VER IMAGEN GRANDE --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[80vh]"
              onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic en la foto
            >
              <Image
                src={selectedImage}
                alt="Instrumento ampliado"
                fill
                className="object-contain"
                unoptimized
              />
              
              {/* Botón de cerrar (X) */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 md:-right-10 text-white hover:text-[#C5A059] transition-colors"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}