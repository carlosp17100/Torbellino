"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const videoContainerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};

export default function MultimediaPage() {
  const router = useRouter();
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  
  // Referencias para los reproductores de video nativos (Normal y Modo Cine)
  const videoRef = useRef<HTMLVideoElement>(null);
  const zoomedVideoRef = useRef<HTMLVideoElement>(null);

  // Guardar el timeline de reproducción para evitar que se reinicie al agrandar
  const currentTimeRef = useRef<number>(0);

  // OPTIMIZACIÓN useMemo: Apunta directamente a tu archivo con la máxima calidad disponible en public/
  const videoSource = useMemo(() => {
    return {
      src: "/video1.mp4",
      qualityLabel: "4K (Ultra HD) Nativo"
    };
  }, []);

  // Sincronizar y pausar video de fondo al abrir el Zoom
  const handleOpenZoom = () => {
    if (videoRef.current) {
      currentTimeRef.current = videoRef.current.currentTime;
      videoRef.current.pause();
    }
    setIsZoomed(true);
  };

  // Sincronizar y restaurar reproducción al cerrar el Zoom
  const handleCloseZoom = () => {
    if (zoomedVideoRef.current && videoRef.current) {
      currentTimeRef.current = zoomedVideoRef.current.currentTime;
    }
    setIsZoomed(false);
  };

  // Efecto de transferencia de tiempos en el ciclo de vida del Lightbox
  useEffect(() => {
    if (isZoomed && zoomedVideoRef.current) {
      zoomedVideoRef.current.currentTime = currentTimeRef.current;
      zoomedVideoRef.current.play().catch(() => {});
    } else if (!isZoomed && videoRef.current) {
      videoRef.current.currentTime = currentTimeRef.current;
    }
  }, [isZoomed]);

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans overflow-x-hidden relative">
      
      {/* NAVEGACIÓN INSTITUCIONAL */}
      <nav className="w-full p-4 md:p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b sticky top-0">
        <div className="flex items-center gap-2 md:gap-4 cursor-pointer shrink-0" onClick={() => router.push("/")}>
          <div className="relative w-8 h-8 md:w-12 md:h-12">
            <Image src="/umng-logo.png" alt="UMNG" fill className="object-contain" priority />
          </div>
          <span className="text-[#1D2757] font-bold text-[9px] md:text-xs tracking-tighter uppercase leading-tight border-l pl-2 md:pl-4 border-gray-200">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>

        <h2 className="text-[#1D2757] font-black text-[10px] md:text-xl tracking-[0.1em] md:tracking-[0.2em] uppercase text-center px-2">
          Archivo <span className="text-[#C5A059]">Multimedia 4K</span>
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

      {/* CONTENIDO CENTRALIZADO: SOLO EL VIDEO */}
      <div className="flex-1 flex flex-col p-4 md:p-10 lg:p-12 items-center justify-center max-w-6xl w-full mx-auto z-10">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={videoContainerVariants}
          className="w-full bg-white p-3 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 relative group"
        >
          {/* Contenedor del Reproductor de Video */}
          <div className="relative w-full aspect-video bg-black rounded-xl md:rounded-[1.8rem] overflow-hidden shadow-inner">
            
            <video 
              ref={videoRef}
              src={videoSource.src} 
              controls
              className="w-full h-full object-cover"
              playsInline
            /> 

            {/* Botón Flotante Superior: Agrandar (Aparece en Hover) */}
            <button
              onClick={handleOpenZoom}
              className="absolute top-4 right-4 bg-black/75 hover:bg-[#C5A059] text-white px-4 py-2.5 rounded-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl z-20 flex items-center gap-2 text-xs font-black uppercase tracking-wider cursor-pointer border border-white/10"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
              Modo Cine
            </button>

            {/* Etiqueta Técnica Superior de Calidad */}
            <span className="absolute top-4 left-4 bg-[#1D2757]/80 backdrop-blur-md text-[#C5A059] text-[10px] uppercase font-black tracking-widest px-3 py-1.5 rounded-lg border border-[#C5A059]/30 pointer-events-none z-20">
              {videoSource.qualityLabel}
            </span>

          </div>
        </motion.div>
      </div>

      {/* MODAL LIGHTBOX / MODO CINE EN PANTALLA COMPLETA */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-[100] flex flex-col items-center justify-center p-2 md:p-12 backdrop-blur-lg"
            onClick={handleCloseZoom}
          >
            {/* Botón de salida (X) */}
            <button 
              onClick={handleCloseZoom}
              className="absolute top-6 right-6 text-white/70 hover:text-[#C5A059] bg-white/10 p-3 rounded-full transition-all active:scale-90 z-50 cursor-pointer hover:bg-white/20" 
              aria-label="Cerrar Modo Cine"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Canvas Expandido del Video */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-7xl aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                ref={zoomedVideoRef}
                src={videoSource.src} 
                controls 
                className="w-full h-full object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/50" />
          <p className="text-[#C5A059] text-[8px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-center">
            • Proyecto UMNG •
          </p>
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/50" />
        </div>
      </footer>
    </main>
  );
}