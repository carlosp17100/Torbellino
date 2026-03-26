"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

// 1. Definición de la Interfaz para evitar errores de tipo 'never'
interface ContextoImage {
  id: number;
  src: string;
  alt: string;
  description: string;
}

// 2. Datos de los contextos con tipado explícito
const CONTEXTO_IMAGES: ContextoImage[] = [
  { 
    id: 1, 
    src: "/contexto1.jpg", 
    alt: "Fiesta de Torbellino", 
    description: "El Torbellino como tradición viva que une cultura, territorio y comunidad de los Andes colombianos. Una expresión de identidad que trasciende generaciones." 
  },
  { 
    id: 2, 
    src: "/contexto2.jpg", 
    alt: "Música y Ritmo", 
    description: "Estructura ternaria (3/4 o 6/8). El ritmo andino del altiplano ejecutado con tiple, requinto y chucho, marcando el pulso del corazón campesino." 
  },
  { 
    id: 3, 
    src: "/contexto3.jpg", 
    alt: "Danza Circular", 
    description: "Danza con giros, cruces y movimientos circulares que simbolizan el cosmos y el eterno retorno. La coreografía dibuja figuras en el suelo que evocan la espiral." 
  },
  { 
    id: 4, 
    src: "/contexto4.jpg", 
    alt: "Función Social", 
    description: "Práctica festival y campesina de integración comunitaria. Un espacio donde el baile permite el encuentro, la ayuda mutua y el fortalecimiento de lazos sociales." 
  },
  { 
    id: 5, 
    src: "/contexto5.jpg", 
    alt: "Torbellino de quererse", 
    description: "Entre pasos y miradas, el amor se juega bailando. El galanteo es sutil: un juego de persecución y recato donde el pañuelo y la mirada lo dicen todo." 
  },
  { 
    id: 6, 
    src: "/contexto6.jpg", 
    alt: "Origen Mestizo", 
    description: "Herencia indígena, española y campesina. Una amalgama cultural que funde la solemnidad de los rituales nativos con la rítmica y los instrumentos europeos." 
  },
];

// 3. Variantes de animación con tipado 'Variants' para evitar errores de asignación
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
  
  // 4. Estado con tipo Genérico <ContextoImage | null>
  const [selectedImage, setSelectedImage] = useState<ContextoImage | null>(null);

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans overflow-x-hidden">
      
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
          Contexto <span className="hidden sm:inline">Cultural</span>
        </h2>

        <button 
          onClick={() => router.push("/topics")}
          className="bg-[#1D2757] text-white px-3 py-1.5 md:px-6 md:py-2 rounded-md font-bold text-[9px] md:text-xs hover:bg-[#C5A059] transition-all flex items-center gap-1 md:gap-2 uppercase tracking-widest shadow-sm shrink-0"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span className="hidden xs:inline">Volver</span>
        </button>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-20">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl mx-auto mb-16 text-center"
        >
          <h3 className="text-[#1D2757] text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
            Identidad y <br className="hidden md:block" /> Territorio
          </h3>
          <p className="text-[#1D2757]/80 text-lg md:text-2xl font-medium leading-relaxed italic">
            Raíces andinas que definen nuestro movimiento. Haz clic sobre cada imagen para explorar el significado profundo de nuestra tradición.
          </p>
        </motion.div>

        {/* GRID INTERACTIVO */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CONTEXTO_IMAGES.map((img) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-white p-3 rounded-3xl shadow-xl border border-gray-100 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-2xl">
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
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </div>
                </div>
              </div>
              
              <div className="p-4 text-center">
                <p className="text-[#1D2757] text-sm md:text-base font-black uppercase tracking-widest">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL LIGHTBOX / ZOOM */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1D2757]/95 z-[100] flex flex-col items-center justify-center p-4 md:p-12 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            {/* Botón de Cerrar */}
            <button className="absolute top-8 right-8 text-white/70 hover:text-[#C5A059] transition-colors" aria-label="Cerrar">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>

            {/* Imagen Alargada */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full h-[55vh] md:h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain drop-shadow-2xl" 
                priority
                unoptimized
              />
            </motion.div>
            
            {/* Texto Descriptivo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-3xl text-center bg-white p-6 md:p-10 rounded-[2rem] shadow-2xl border-t-4 border-[#C5A059]"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-[#1D2757] text-2xl md:text-3xl font-black uppercase tracking-wider mb-4">
                {selectedImage.alt}
              </h4>
              <p className="text-[#1D2757] text-lg md:text-2xl font-medium leading-relaxed italic">
                {selectedImage.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/50" />
          <p className="text-[#C5A059] text-[8px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-center">
            Identidad y Movimiento • Proyecto UMNG
          </p>
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/50" />
        </div>
      </footer>
    </main>
  );
}