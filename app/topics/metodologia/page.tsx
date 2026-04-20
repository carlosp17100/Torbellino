"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const FASES = [
  {
    id: 0,
    titulo: "Introducción a las fases",
    texto: (
      <div className="space-y-6">
        <p className="text-lg md:text-xl font-bold text-[#1D2757] leading-relaxed">
          El proyecto se enmarca en un enfoque cualitativo, específicamente bajo la modalidad de <span className="text-[#C5A059]">investigación-creación</span>.
        </p>
        <div className="relative p-6 bg-[#F3F4F6] rounded-2xl border-l-8 border-[#C5A059] shadow-inner">
          <p className="italic text-[#1D2757]/90 text-lg">
            "Este enfoque parte de una idea central: la práctica artística no es solo un medio para crear algo bello, sino que es, en sí misma una forma legítima de producir conocimiento."
          </p>
          <svg className="absolute -top-2 -right-2 text-[#C5A059]/20 w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.899 14.899 16 16 16L18 16L18 14L15 14C13.899 14 13 13.101 13 12L13 9C13 7.899 13.899 7 15 7L18 7C19.101 7 20 7.899 20 9L20 12C20 13.101 19.101 14 18 14L18 16C19.101 16 20 16.899 20 18L20 21L14.017 21ZM4 21L4 18C4 16.899 4.899 16 6 16L8 16L8 14L5 14C3.899 14 3 13.101 3 12L3 9C3 7.899 3.899 7 5 7L8 7C9.101 7 10 7.899 10 9L10 12C10 13.101 9.101 14 8 14L8 16C9.101 16 10 16.899 10 18L10 21L4 21Z" />
          </svg>
        </div>
      </div>
    ),
    img: "/introduccion.jpg", 
  },
  {
    id: 1,
    titulo: "Fase 1. Revisión y contextualización",
    texto: <p>Revisión documental histórica, musical, coreográfica y sociocultural del torbellino, con análisis de registros audiovisuales y referentes académicos para fundamentar críticamente el proceso creativo.</p>,
    img: "/fase1.jpg",
  },
  {
    id: 2,
    titulo: "Fase 2. Laboratorios de investigación–creación",
    texto: <p>Laboratorios prácticos con exploración corporal, improvisación, reconstrucción y experimentación dramatúrgica del torbellino, mediante observación participante, diálogo de saberes y reflexión colectiva sobre resignificación contemporánea.</p>,
    img: "/fase2.jpg",
  },
  {
    id: 3,
    titulo: "Fase 3. Sistematización y creación escénica",
    texto: (
      <div className="space-y-5 text-left">
        <section>
          <p className="font-black text-[#1D2757] mb-1">3.1 Sistematización de hallazgos</p>
          <ul className="pl-4 space-y-1">
            <li>• Registros Audiovisuales</li>
            <li>• Bitácoras reflexivas</li>
          </ul>
        </section>

        <section>
          <p className="font-black text-[#1D2757] mb-1">3.2 Acompañmiento </p>
          <ul className="pl-4 space-y-1">
            <li>• Orientación dramatúrgica</li>
            <li>• Consolodicación conceptual </li>
            <li>• Articulación de la propuesta escénica</li>
          </ul>
        </section>

        <section>
          <p className="font-black text-[#1D2757] mb-1">3.3 Creación escénica</p>
          <ul className="pl-4 space-y-1">
            <li>• Estructurar una propuesta escénica</li>
            <li>• Dialoga con la tradición del torbellino</li>
            <li>• Vinculado al contexto histórico y territorial</li>
          </ul>
        </section>
      </div>
    ),
    img: "/fase3.jpg",
  }
];

export default function MetodologiaPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans text-[#1D2757]">
      
      {/* NAVEGACIÓN */}
      <nav className="w-full p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/umng-logo.png" alt="UMNG" width={50} height={50} priority />
          <span className="text-[#1D2757] font-bold text-xs tracking-tighter uppercase leading-tight border-l pl-4 border-gray-200">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>

        <h2 className="hidden md:block text-[#1D2757] font-bold text-xl tracking-[0.2em] uppercase">
          Diseño Metodológico
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
      <div className="flex-1 flex flex-col p-6 md:p-12 items-center justify-center gap-8">
        
        {/* Selector de Fases */}
        <div className="flex flex-wrap justify-center gap-3">
          {FASES.map((fase, index) => (
            <button
              key={fase.id}
              onClick={() => setActiveStep(index)}
              className={`px-6 py-3 rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all border-2 ${
                activeStep === index 
                ? "bg-[#1D2757] border-[#1D2757] text-white shadow-lg scale-105" 
                : "bg-white border-gray-200 text-gray-400 hover:border-[#C5A059]"
              }`}
            >
              {index === 0 ? "Introducción" : `Fase ${fase.id}`}
            </button>
          ))}
        </div>

        {/* Card Contenedora */}
        <motion.div 
          key={activeStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-7xl bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[600px]"
        >
          {/* Lado Texto */}
          <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center bg-white z-10">
             <span className="text-[#C5A059] font-black text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <span className="w-10 h-[2px] bg-[#C5A059]" /> {activeStep === 0 ? "Fundamentación" : "Metodología"}
             </span>
             
             <motion.h3 
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-[#1D2757] text-2xl md:text-4xl font-black uppercase mb-8 leading-tight"
             >
               {FASES[activeStep].titulo}
             </motion.h3>

             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-[#1D2757]/80 text-base md:text-lg leading-relaxed font-medium"
             >
               {FASES[activeStep].texto}
             </motion.div>
          </div>

          {/* Lado Imagen */}
          <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden border-l border-gray-100 min-h-[300px] lg:min-h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full p-8 md:p-12"
              >
                <Image 
                  src={FASES[activeStep].img}
                  alt={FASES[activeStep].titulo}
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-tl-full" />
            <div className="absolute top-0 left-0 w-16 h-16 bg-[#1D2757]/5 rounded-br-full" />
          </div>
        </motion.div>

        {/* Indicadores visuales */}
        <div className="flex gap-3">
          {FASES.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 rounded-full transition-all duration-700 ${activeStep === index ? "w-12 bg-[#C5A059]" : "w-3 bg-gray-300"}`} 
            />
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-[#1D2757] p-6 border-t border-[#C5A059]">
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