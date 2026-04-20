"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Definición de las 4 escenas con sus textos dinámicos
const ESCENA_IMAGES = [
  { 
    src: "/escena2.jpg", 
    alt: "Procesión",
    titulo: "Procesión",
    descripcion: "Primer momento : Ritual, origen, conexión y espiritualidad.",
    conceptos: "Ritual • Origen • Espiritualidad"
  },
  { 
    src: "/escena1.jpg", 
    alt: "Cintas",
    titulo: "Cintas",
    descripcion: "Segundo momento : Tensión, diálogo, equilibrio y relación.",
    conceptos: "Tensión • Diálogo • Equilibrio"
  },
  { 
    src: "/escena3.jpg", 
    alt: "Hilada",
    titulo: "Hilada",
    descripcion: "Tercer momento : Construcción, unión, compromiso y futuro.",
    conceptos: "Construcción • Unión • Futuro"
  },
  { 
    src: "/escena4.jpg", 
    alt: "Merengue Carranguero",
    titulo: "Fiesta",
    descripcion: "Cuarto momento : Fiesta, comunidad, tradición y celebración.",
    conceptos: "Fiesta • Comunidad • Celebración"
  },
];

export default function EscenaPage() {
  const router = useRouter();
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = () => setImgIndex((prev) => (prev + 1) % ESCENA_IMAGES.length);
  const prevImg = () => setImgIndex((prev) => (prev - 1 + ESCENA_IMAGES.length) % ESCENA_IMAGES.length);

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
          className="bg-[#1D2757] text-white px-3 py-1.5 md:px-6 md:py-2 rounded-md font-bold text-[9px] md:text-xs hover:bg-[#C5A059] transition-all flex items-center gap-1 md:gap-2 uppercase tracking-widest shadow-sm shrink-0"
        >
          <svg width="12" height="12" className="md:w-3 md:h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span className="hidden xs:inline">Volver</span>
        </button>
      </nav>

      {/* CUERPO CENTRAL */}
      <div className="flex-1 flex flex-col p-4 md:p-12 items-center justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-7xl bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[auto] md:min-h-[500px]"
        >
          {/* LADO IZQUIERDO: TEXTO DESCRIPTIVO DINÁMICO */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white order-2 lg:order-1">
            <div className="absolute top-0 left-0 w-full h-1 lg:w-2 lg:h-full bg-[#C5A059]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={imgIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-[#1D2757] text-2xl md:text-5xl font-black uppercase mb-4 md:mb-8 leading-tight">
                  Puesta en <br className="hidden md:block" /> {ESCENA_IMAGES[imgIndex].titulo}
                </h3>

                <div className="relative">
                   <span className="text-4xl md:text-6xl font-serif text-[#C5A059]/30 absolute -top-4 -left-2 md:-top-6 md:-left-4 select-none">&ldquo;</span>
                   <p className="text-[#1D2757] text-base md:text-2xl leading-relaxed text-justify font-medium italic relative z-10">
                     {ESCENA_IMAGES[imgIndex].descripcion}
                   </p>
                </div>

                <div className="mt-6 md:mt-10 flex gap-3 md:gap-4 items-center">
                    <div className="h-[1px] w-12 md:w-20 bg-[#1D2757]/20" />
                    <p className="text-[8px] md:text-[10px] text-[#C5A059] font-bold uppercase tracking-widest">
                      {ESCENA_IMAGES[imgIndex].conceptos}
                    </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* LADO DERECHO: CARRUSEL */}
          <div className="flex-1 relative bg-[#F8F9FA] flex flex-col items-center justify-center p-4 md:p-8 border-b lg:border-l border-gray-50 order-1 lg:order-2">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={imgIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image 
                    src={ESCENA_IMAGES[imgIndex].src}
                    alt={ESCENA_IMAGES[imgIndex].alt}
                    fill
                    className="object-contain" 
                    priority
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>

              {/* CONTROLES DEL CARRUSEL */}
              <button 
                onClick={prevImg} 
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-3 md:p-4 rounded-full text-[#1D2757] shadow-lg z-20 active:scale-95 transition-transform"
              >
                <svg width="18" height="18" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              
              <button 
                onClick={nextImg} 
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-3 md:p-4 rounded-full text-[#1D2757] shadow-lg z-20 active:scale-95 transition-transform"
              >
                <svg width="18" height="18" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>

            {/* INDICADOR DE FOTOGRAFÍA */}
            <div className="mt-4 md:mt-6 flex flex-col items-center gap-2 md:gap-4">
               <span className="text-[9px] md:text-[10px] font-black text-[#1D2757] uppercase tracking-tighter">Registro 0{imgIndex + 1} / 0{ESCENA_IMAGES.length}</span>
               <div className="flex gap-1.5">
                 {ESCENA_IMAGES.map((_, i) => (
                   <div key={i} className={`h-1 rounded-full transition-all duration-300 ${imgIndex === i ? "w-6 md:w-8 bg-[#C5A059]" : "w-1.5 md:w-2 bg-gray-200"}`} />
                 ))}
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER ADAPTATIVO */}
      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/50" />
          <p className="text-[#C5A059] text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.5em] uppercase text-center">
            Identidad y Movimiento • Proyecto UMNG
          </p>
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/50" />
        </div>
      </footer>
    </main>
  );
}