"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

// 1. Interfaces para TypeScript
interface MusicConcept {
  id: number;
  icon: string;
  title: string;
  concept: string;
  description: string;
}

interface MelodiaImage {
  id: number;
  src: string;
  alt: string;
  technicalText: string;
}

// Datos de los Conceptos Clave
const MUSIC_CONCEPTS: MusicConcept[] = [
  { 
    id: 1, 
    icon: "🥁", 
    title: "Ritmo Repetitivo", 
    concept: "Estructura Ternaria", 
    description: "La base rítmica constante del torbellino guía el paso escobillado y facilita el complejo trenzado de cintas." 
  },
  { 
    id: 2, 
    icon: "✨", 
    title: "Momentos Simbólicos", 
    concept: "Acento Expresivo", 
    description: "Los cambios sutiles en la melodía marcan los puntos de mayor conexión y expresión corporal entre la pareja." 
  },
  { 
    id: 3, 
    icon: "🪗", 
    title: "Merengue Carranguero", 
    concept: "Contrapunto Festivo", 
    description: "La aceleración del ritmo hacia la carranga transforma la danza en una celebración colectiva, dinámica y festiva." 
  },
];

// Datos de la Galería "Visualizer"
const MELODIA_IMAGES: MelodiaImage[] = [
  { 
    id: 1, 
    src: "/melodia1.jpg", 
    alt: "Frase Corta y Coordinación", 
    technicalText: "Melodía de frases cortas que permiten una respuesta coreográfica inmediata." 
  },
  { 
    id: 2, 
    src: "/melodia2.jpg", 
    alt: "Estructura rítmica y Danza", 
    technicalText: "La sincronía perfecta entre el pulso del requinto y el zapateo campesino." 
  },
  { 
    id: 3, 
    src: "/melodia3.jpg", 
    alt: "Ritmo y celebración colectiva", 
    technicalText: "La transición rítmica que invita a la comunidad a sumarse a la fiesta." 
  },
];

// 2. Variantes de Animación
const floatingVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const conceptCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(29, 39, 87, 0.1)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

const staggerContainer: Variants = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function MelodiaPage() {
  const router = useRouter();
  
  const [selectedMelodia, setSelectedMelodia] = useState<MelodiaImage>(MELODIA_IMAGES[0]);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans overflow-x-hidden relative">
      
      {/* NAVEGACIÓN INSTITUCIONAL */}
      <nav className="w-full p-4 md:p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b sticky top-0">
        <div 
          className="flex items-center gap-2 md:gap-4 cursor-pointer shrink-0" 
          onClick={() => router.push("/")}
        >
          <div className="relative w-8 h-8 md:w-12 md:h-12">
            <Image src="/umng-logo.png" alt="UMNG" fill className="object-contain" priority />
          </div>
          <span className="text-[#1D2757] font-bold text-[9px] md:text-xs tracking-tighter uppercase leading-tight border-l pl-2 md:pl-4 border-gray-200">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>

        <h2 className="text-[#1D2757] font-black text-[10px] md:text-xl tracking-[0.1em] md:tracking-[0.2em] uppercase text-center px-2">
          Melodía y <span className="hidden sm:inline">Danza</span>
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

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-20 relative">
        
        {/* LAS LÍNEAS NEGRAS HAN SIDO ELIMINADAS DE AQUÍ */}

        {/* TARJETAS DE CONCEPTO CLAVE */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10 mb-20"
        >
          {MUSIC_CONCEPTS.map((concept) => (
            <motion.div
              key={concept.id}
              variants={conceptCardVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col gap-5 text-center items-center backdrop-blur-sm"
            >
              <motion.span 
                animate={{ rotateZ: concept.id % 2 === 0 ? [0, 5, 0] : [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl"
              >
                {concept.icon}
              </motion.span>
              <div className="h-0.5 w-16 bg-[#C5A059]" />
              <h4 className="text-[#1D2757] text-xl font-black uppercase tracking-widest">{concept.title}</h4>
              <p className="text-[#C5A059] text-xs font-bold uppercase tracking-tighter bg-[#F3F4F6] px-3 py-1 rounded-full">{concept.concept}</p>
              <p className="text-[#1D2757]/80 text-sm md:text-base font-medium leading-relaxed">{concept.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* SECCIÓN "VISUALIZER" */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center z-10">
          
          {/* LADO IZQUIERDO: Imagen Principal Interactiva */}
          <motion.div 
            key={selectedMelodia.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="flex-1 relative bg-white p-3 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col cursor-pointer group"
            onClick={() => setIsZoomed(true)}
          >
            <div className="absolute top-0 left-0 w-1 lg:w-full h-full lg:h-1 bg-[#C5A059]" />
            <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-2xl mb-4">
              <Image 
                src={selectedMelodia.src}
                alt={selectedMelodia.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
                priority
                unoptimized
              />
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="bg-white/20 p-4 rounded-full border border-white/30">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center z-10">
                <p className="text-white text-base md:text-xl font-medium leading-relaxed italic backdrop-blur-sm px-4 py-2 rounded-xl inline-block bg-white/5">
                  {selectedMelodia.technicalText}
                </p>
              </div>
            </div>
            <p className="text-[#1D2757] text-sm md:text-base font-black uppercase tracking-widest text-center px-4 py-2">
                Registro 0{selectedMelodia.id} • {selectedMelodia.alt}
            </p>
          </motion.div>

          {/* LADO DERECHO: Miniaturas Asimétricas */}
          <div className="flex lg:flex-col flex-wrap gap-4 lg:gap-6 justify-center shrink-0">
            {MELODIA_IMAGES.map((img) => (
              <motion.div
                key={img.id}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: img.id * 0.3 }}
                className={`relative cursor-pointer overflow-hidden rounded-2xl border-2 shadow-lg transition-all duration-300 ${
                  selectedMelodia.id === img.id 
                    ? "border-[#C5A059] scale-105" 
                    : "border-white hover:border-gray-200"
                }`}
                style={{ 
                    width: selectedMelodia.id === img.id ? "110px" : "100px", 
                    height: selectedMelodia.id === img.id ? "110px" : "100px",
                }}
                onClick={() => setSelectedMelodia(img)}
              >
                <Image 
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`object-cover ${selectedMelodia.id !== img.id ? "grayscale opacity-70" : ""}`}
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* MODAL LIGHTBOX / ZOOM */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1D2757]/95 z-[100] flex flex-col items-center justify-center p-4 md:p-12 backdrop-blur-md"
            onClick={() => setIsZoomed(false)}
          >
            <button className="absolute top-8 right-8 text-white/70 hover:text-[#C5A059] transition-colors active:scale-95" aria-label="Cerrar">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full h-[60vh] md:h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedMelodia.src}
                alt={selectedMelodia.alt}
                fill
                className="object-contain drop-shadow-2xl" 
                priority
                unoptimized
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-3xl text-center bg-white p-6 md:p-10 rounded-[2rem] shadow-2xl border-t-4 border-[#C5A059]"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-[#1D2757] text-2xl md:text-3xl font-black uppercase tracking-wider mb-4">
                {selectedMelodia.alt}
              </h4>
              <p className="text-[#1D2757] text-lg md:text-2xl font-medium leading-relaxed italic">
                {selectedMelodia.technicalText}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059] mt-20">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/50" />
          <p className="text-[#C5A059] text-[8px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-center">
            • Proyecto UMNG
          </p>
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/50" />
        </div>
      </footer>
    </main>
  );
}