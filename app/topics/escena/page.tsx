"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CONTENIDO_MOMENTOS = [
  {
    titulo: "Procesión",
    descripcion: "Primer momento : Ritual, origen, conexión y espiritualidad.",
    conceptos: "Ritual • Origen • Espiritualidad"
  },
  {
    titulo: "Cintas",
    descripcion: "Segundo momento : Tensión, diálogo, equilibrio y relación.",
    conceptos: "Tensión • Diálogo • Equilibrio"
  },
  {
    titulo: "Hilada",
    descripcion: "Tercer momento : Construcción, unión, compromiso y futuro.",
    conceptos: "Construcción • Unión • Futuro"
  },
  {
    titulo: "Fiesta",
    descripcion: "Cuarto momento : Fiesta, comunidad, tradición y celebración.",
    conceptos: "Fiesta • Comunidad • Celebración"
  }
];

const ESCENA_IMAGES = [
  { src: "/momento1.jpg", momentId: 0 },
  { src: "/momento1-2.jpg", momentId: 0 },
  { src: "/cintas.jpg", momentId: 1 },
  { src: "/momento3.jpg", momentId: 2 },
  { src: "/momento3-1.jpg", momentId: 2 },
  { src: "/momento4.jpg", momentId: 3 },
  { src: "/momento4-1.jpg", momentId: 3 },
];

export default function EscenaPage() {
  const router = useRouter();
  const [imgIndex, setImgIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const nextImg = () => setImgIndex((prev) => (prev + 1) % ESCENA_IMAGES.length);
  const prevImg = () => setImgIndex((prev) => (prev - 1 + ESCENA_IMAGES.length) % ESCENA_IMAGES.length);

  const currentMoment = CONTENIDO_MOMENTOS[ESCENA_IMAGES[imgIndex].momentId];

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
          Propuesta <span className="hidden sm:inline">Artística</span>
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
      <div className="flex-1 flex flex-col p-4 md:p-12 items-center justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-7xl bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[auto] md:min-h-[600px]"
        >
          {/* LADO IZQUIERDO: TEXTO DESCRIPTIVO */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white order-2 lg:order-1">
            <div className="absolute top-0 left-0 w-full h-1 lg:w-2 lg:h-full bg-[#C5A059]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={ESCENA_IMAGES[imgIndex].momentId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-[#1D2757] text-2xl md:text-5xl font-black uppercase mb-4 md:mb-8 leading-tight">
                  Puesta en <br className="hidden md:block" /> {currentMoment.titulo}
                </h3>

                <div className="relative">
                   <span className="text-4xl md:text-6xl font-serif text-[#C5A059]/30 absolute -top-4 -left-2 md:-top-6 md:-left-4 select-none">&ldquo;</span>
                   <p className="text-[#1D2757] text-base md:text-2xl leading-relaxed text-justify font-medium italic relative z-10">
                     {currentMoment.descripcion}
                   </p>
                </div>

                <div className="mt-6 md:mt-10 flex gap-3 md:gap-4 items-center">
                    <div className="h-[1px] w-12 md:w-20 bg-[#1D2757]/20" />
                    <p className="text-[8px] md:text-[10px] text-[#C5A059] font-bold uppercase tracking-widest">
                      {currentMoment.conceptos}
                    </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* LADO DERECHO: CARRUSEL E IMAGEN */}
          <div className="flex-1 relative bg-[#F8F9FA] flex flex-col items-center justify-center p-4 md:p-8 border-b lg:border-l border-gray-50 order-1 lg:order-2">
            
            <div 
              className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] group overflow-hidden rounded-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={imgIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full cursor-zoom-in relative"
                  onClick={() => setIsZoomed(true)}
                >
                  <Image 
                    src={ESCENA_IMAGES[imgIndex].src}
                    alt={`Registro ${imgIndex + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    priority
                    unoptimized
                  />

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="absolute inset-0 bg-black/20 flex items-center justify-center"
                  >
                    <div className="bg-white px-6 py-3 rounded-full shadow-xl">
                      <span className="text-[#1D2757] font-black text-[10px] md:text-xs uppercase tracking-widest">
                        Click para ampliar
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <button 
                onClick={(e) => { e.stopPropagation(); prevImg(); }} 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full text-[#1D2757] shadow-lg z-20 active:scale-95 transition-all hover:bg-[#C5A059] hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextImg(); }} 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full text-[#1D2757] shadow-lg z-20 active:scale-95 transition-all hover:bg-[#C5A059] hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>

            {/* INDICADOR Y BOTÓN SIGUIENTE */}
            <div className="mt-6 w-full flex flex-col items-center">
              <div className="flex flex-col items-center gap-2 mb-4">
                <span className="text-[9px] md:text-[10px] font-black text-[#1D2757] uppercase tracking-tighter">Registro 0{imgIndex + 1} / 0{ESCENA_IMAGES.length}</span>
                <div className="flex gap-1.5">
                  {ESCENA_IMAGES.map((_, i) => (
                    <div key={i} className={`h-1 rounded-full transition-all duration-300 ${imgIndex === i ? "w-6 md:w-8 bg-[#C5A059]" : "w-1.5 md:w-2 bg-gray-200"}`} />
                  ))}
                </div>
              </div>

              {/* BOTÓN CON ESTILO DE JUSTIFICACIÓN E INTERACCIÓN DORADA */}
              <div className="w-full flex justify-center z-20">
                <button 
                  onClick={() => router.push("/topics/origen")}
                  className="bg-[#1D2757] hover:bg-[#C5A059] text-white px-8 py-3 md:px-10 md:py-4 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-4 shadow-lg group"
                >
                  Siguiente Parte
                  <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* MODAL ZOOM CON BOTÓN DE CERRAR DORADO */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1D2757]/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* BOTÓN CERRAR CON INTERACCIÓN DORADA */}
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 text-white hover:text-[#C5A059] transition-colors z-[110] flex items-center gap-2 group"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Cerrar</span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-6xl flex items-center justify-center"
            >
              <Image
                src={ESCENA_IMAGES[imgIndex].src}
                alt="Vista ampliada"
                fill
                className="object-contain"
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
          <p className="text-[#C5A059] text-[8px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-center">
            • Proyecto UMNG
          </p>
        </div>
      </footer>
    </main>
  );
}