"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

// 1. Definición de la Interfaz
interface ContextoImage {
  id: number;
  src: string;
  alt: string;
  description: string;
}

// 2. Datos de los contextos
const CONTEXTO_IMAGES: ContextoImage[] = [
  { 
    id: 1, 
    src: "/contexto3.jpg", 
    alt: "ORIGEN Y MOVIMIENTO", 
    description: "· Nace en el Altiplano cundiboyacense y Santander.\n· Baile en círculo continuo: giros, cruces y desplazamientos.\n· Ritmo ternario: 3/4 o 6/8." 
  },
  { 
    id: 2, 
    src: "/contexto6.jpg", 
    alt: "RAÍZ Y FUNCIÓN SOCIAL", 
    description: "· Mestizaje: herencia indígena, española y campesina.\n· Práctica festiva y comunitaria.\n· Textos picarescos, amorosos o satíricos." 
  },
  { 
    id: 3, 
    src: "/contexto2.jpg", 
    alt: "ESTRUCTURA MUSICAL", 
    description: "· Forma breve y reiterativa.\n· Alterna coplas (versos cantados) con interludios instrumentales." 
  },
];

// 3. Variantes de animación
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: {
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 12 
    },
  },
};

export default function ContextoPage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<ContextoImage | null>(null);

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans overflow-x-hidden">
      
      {/* NAVEGACIÓN INSTITUCIONAL */}
      <nav className="w-full p-4 md:px-12 md:py-6 flex justify-between items-center z-50 bg-white shadow-sm border-b sticky top-0">
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
          Contexto <span className="hidden sm:inline">Cultural</span>
        </h2>

        <button 
          onClick={() => router.push("/topics")}
          className="bg-[#1D2757] text-white px-3 py-1.5 md:px-6 md:py-2.5 rounded-full font-bold text-[9px] md:text-xs hover:bg-[#C5A059] transition-all flex items-center gap-1 md:gap-2 uppercase tracking-widest shadow-sm shrink-0"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span>Volver</span>
        </button>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-20">
        
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl mx-auto mb-12 md:mb-16 text-center"
        >
          <h3 className="text-[#1D2757] text-3xl md:text-6xl font-black uppercase leading-tight mb-4 md:mb-6 tracking-tighter">
            Identidad y <br className="hidden md:block" /> Territorio
          </h3>
          <p className="text-[#1D2757]/80 text-base md:text-2xl font-medium leading-relaxed italic max-w-3xl mx-auto">
            Raíces andinas que definen nuestro movimiento. Haz clic sobre cada imagen para explorar nuestra tradición.
          </p>
        </motion.header>

        {/* GRID INTERACTIVO */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full"
        >
          {CONTEXTO_IMAGES.map((img) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-white p-3 rounded-[2rem] shadow-xl border border-gray-100 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-[1.5rem]">
                <Image 
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-[#1D2757]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </div>
                </div>
              </div>
              
              <div className="p-4 text-center">
                <p className="text-[#1D2757] text-xs md:text-base font-black uppercase tracking-widest">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL LIGHTBOX CORREGIDO */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0F1E]/95 z-[100] flex items-center justify-center p-4 md:p-8 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            {/* Botón de Cerrar */}
            <button 
              className="absolute top-6 right-6 z-[110] bg-white/10 p-2 rounded-full text-white hover:text-[#C5A059] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>

            {/* Contenedor del Modal con Scroll */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col items-center custom-scrollbar bg-white rounded-[2.5rem] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagen en el Modal */}
              <div className="relative w-full h-[35vh] md:h-[55vh] shrink-0 bg-gray-100">
                <Image 
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover md:object-contain" 
                  priority
                  unoptimized
                />
              </div>
              
              {/* Texto Descriptivo */}
              <div className="p-8 md:p-12 text-center w-full">
                <h4 className="text-[#1D2757] text-2xl md:text-4xl font-black uppercase tracking-tight mb-6">
                  {selectedImage.alt}
                </h4>
                <div className="h-1.5 w-16 bg-[#C5A059] mx-auto mb-8" />
                <p className="text-[#1D2757] text-lg md:text-2xl font-medium leading-relaxed italic whitespace-pre-line text-justify md:text-center max-w-2xl mx-auto">
                  {selectedImage.description}
                </p>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="mt-10 bg-[#1D2757] text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-all"
                >
                  Regresar
                </button>
              </div>
              
              <div className="h-2 w-full bg-[#1D2757] shrink-0" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="w-full bg-[#1D2757] py-8 px-6 border-t border-[#C5A059]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/50" />
          <p className="text-[#C5A059] text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-center">
            Identidad y Movimiento • Proyecto UMNG
          </p>
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/50" />
        </div>
      </footer>
    </main>
  );
}