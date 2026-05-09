"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const OBJETIVOS = [
  "Identificar las implicaciones culturales de la activación patrimonial del torbellino en el contexto universitario, considerando su aporte a la visibilización del patrimonio cultural inmaterial.",
  "Examinar las implicaciones pedagógicas que surgen al integrar el torbellino en procesos académicos contemporáneos, en relación con la formación crítica e investigativa de los estudiantes.",
  "Valorar las implicaciones creativas derivadas de la revitalización del torbellino en la construcción de propuestas escénicas contemporáneas basadas en la tradición."
];

export default function ObjetivosEspecificosPage() {
  const router = useRouter();
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans text-[#1D2757]">
      
      {/* NAVEGACIÓN */}
      <nav className="w-full p-4 md:p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/umng-logo.png" alt="UMNG" width={40} height={40} className="md:w-[50px] md:h-[50px]" priority />
          <span className="text-[#1D2757] font-bold text-[10px] md:text-xs tracking-tighter uppercase leading-tight">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>

        <h2 className="hidden lg:block text-[#1D2757] font-bold text-xl tracking-[0.2em] uppercase">
          Objetivos
        </h2>

        <button 
          onClick={() => router.push("/topics")}
          className="bg-[#1D2757] text-white px-4 md:px-6 py-2 rounded-md font-bold text-[10px] md:text-xs hover:bg-[#C5A059] transition-all flex items-center gap-2 uppercase tracking-widest shadow-sm"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Volver
        </button>
      </nav>

      {/* CUERPO CENTRAL */}
      <div className="flex-1 flex flex-col md:flex-row p-4 md:p-8 lg:p-12 gap-8 items-center justify-center">
        
        {/* LOGO INSTITUCIONAL LATERAL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hidden lg:flex w-64 h-64 bg-white rounded-[2rem] border-2 border-gray-100 items-center justify-center shadow-xl relative shrink-0 p-12"
        >
          <div className="relative w-full h-full">
            <Image 
              src="/umng-logo.png" 
              alt="Logo Institucional UMNG" 
              fill 
              className="object-contain z-10"
              priority
            />
          </div>
          <div className="absolute top-0 right-0 w-12 h-12 bg-[#C5A059] rounded-tr-[2rem] rounded-bl-full opacity-80" />
        </motion.div>

        {/* CONTENEDOR PRINCIPAL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 w-full max-w-7xl bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[600px]"
        >
          {/* LADO IZQUIERDO: LISTA DE OBJETIVOS */}
          <div className="flex-[1.1] p-8 md:p-12 lg:p-14 flex flex-col justify-center bg-white border-b lg:border-b-0 lg:border-r border-gray-100">
             <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                <span className="w-10 h-[2px] bg-[#C5A059]" /> Investigación
             </span>
             
             <div className="space-y-8 md:space-y-10">
                {OBJETIVOS.map((obj, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-5 items-start group"
                  >
                    <span className="bg-[#C5A059] text-[#1D2757] w-10 h-10 rounded-full flex items-center justify-center font-black shrink-0 shadow-lg text-sm transition-transform group-hover:scale-110">
                      {index + 1}
                    </span>
                    {/* Quitada la negrita (font-bold), mantenemos el italic y tracking suave */}
                    <p className="text-[#1D2757] text-lg md:text-xl leading-snug italic tracking-tight group-hover:text-[#C5A059] transition-colors">
                      {obj}
                    </p>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* LADO DERECHO: IMAGEN */}
          <div className="flex-[0.9] p-6 md:p-10 bg-[#F8F9FA] flex flex-col items-center justify-center relative">
            
            <motion.div 
              whileHover={{ scale: 0.99 }}
              onClick={() => setIsZoomed(true)}
              className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white cursor-zoom-in group"
            >
              <Image 
                src="/obj2.jpg"
                alt="Objetivos Fase Creativa"
                fill
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                priority
              />

              <div className="absolute inset-0 bg-[#C5A059]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                 <motion.div 
                  initial={{ scale: 0.8 }}
                  className="bg-white px-6 py-2.5 rounded-full shadow-2xl"
                 >
                   <span className="text-[#1D2757] font-black text-[10px] uppercase tracking-widest">
                     Click para ampliar
                   </span>
                 </motion.div>
              </div>
            </motion.div>
            
            <p className="mt-6 text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">
              Visualización de Objetivos • Fase Creativa
            </p>

            {/* BOTÓN SIGUIENTE */}
            <div className="w-full flex justify-end mt-10">
              <button 
                onClick={() => router.push("/topics/metodologia")}
                className="bg-[#1D2757] hover:bg-[#C5A059] text-white px-8 py-3 md:px-10 md:py-4 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-4 shadow-lg hover:shadow-xl group active:scale-95"
              >
                Siguiente Parte
                <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ZOOM MODAL */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-[100] bg-[#1D2757]/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src="/obj2.jpg" 
                alt="Zoom Objetivos" 
                fill 
                className="object-contain" 
                unoptimized 
              />

              <button 
                onClick={() => setIsZoomed(false)} 
                className="absolute -top-12 right-0 md:-top-10 md:-right-4 text-white hover:text-[#C5A059] transition-all flex items-center gap-2 group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">Cerrar</span>
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059]">
          <p className="text-[#C5A059] text-[8px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-center">
              • Proyecto UMNG •
          </p>
      </footer>
    </main>
  );
}