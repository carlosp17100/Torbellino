"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const FASES = [
  {
    id: 0,
    titulo: "Introducción a las fases",
    categoria: "Fundamentación",
    texto: (
      <div className="space-y-6">
        <p className="text-lg md:text-xl font-medium text-[#1D2757] leading-snug">
          El proyecto se enmarca en un enfoque cualitativo, específicamente bajo la modalidad de <span className="text-[#C5A059] font-bold">investigación-creación</span>.
        </p>
        <div className="p-6 md:p-8 bg-[#F3F4F6] rounded-[2rem] shadow-inner border border-gray-100">
          <p className="text-[#1D2757]/80 text-base md:text-lg font-medium leading-relaxed">
            "Este enfoque parte de una idea central: la práctica artística es una forma legítima de producir conocimiento."
          </p>
        </div>
      </div>
    ),
    img: "/introduccion.png",
  },
  {
    id: 1,
    titulo: "Fase 1. Revisión y contextualización",
    categoria: "Metodología",
    texto: <p className="text-lg md:text-xl font-medium text-[#1D2757]">Revisión documental histórica, musical, coreográfica y sociocultural del torbellino, con análisis de registros audiovisuales para fundamentar el proceso creativo.</p>,
    img: "/fase1.jpg",
  },
  {
    id: 2,
    titulo: "Fase 2. Laboratorios de investigación–creación",
    categoria: "Metodología",
    texto: (
      <div className="space-y-4">
        <p className="text-lg md:text-xl font-medium text-[#1D2757]">
          Laboratorios prácticos con exploración corporal e improvisación del torbellino mediante diálogo de saberes.
        </p>
      </div>
    ),
    img: "/fase2.jpg",
  },
  {
    id: 3,
    titulo: "Fase 3. Sistematización y creación escénica",
    categoria: "Metodología",
    texto: (
      <div className="space-y-5 text-[#1D2757]">
        <section>
          <p className="text-lg font-black mb-1">3.1 Sistematización de hallazgos</p>
          <ul className="pl-6 space-y-1 text-base md:text-lg">
            <li>• Registros Audiovisuales</li>
            <li>• Bitácoras reflexivas</li>
          </ul>
        </section>
        <section>
          <p className="text-lg font-black mb-1">3.2 Acompañamiento</p>
          <ul className="pl-6 space-y-1 text-base md:text-lg">
            <li>• Orientación dramatúrgica</li>
            <li>• Consolidación conceptual</li>
          </ul>
        </section>
        <section>
          <p className="text-lg font-black mb-1">3.3 Creación escénica</p>
          <ul className="pl-6 space-y-1 text-base md:text-lg">
            <li>• Propuesta escénica vinculada al territorio.</li>
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
  const [isZoomed, setIsZoomed] = useState(false);

  // Modificado para dirigir siempre a tecnicas
  const handleNext = () => {
    router.push("/topics/tecnicas");
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-[#1D2757]">
      
      <nav className="w-full p-4 md:px-12 flex justify-between items-center bg-white shadow-sm border-b border-gray-100 z-50">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/umng-logo.png" alt="UMNG" width={45} height={45} priority />
          <div className="border-l border-gray-200 pl-4">
            <span className="text-[#1D2757] font-bold text-[10px] md:text-xs uppercase tracking-tighter block leading-tight">
              Universidad Militar <br /> Nueva Granada
            </span>
          </div>
        </div>
        <button 
          onClick={() => router.push("/topics")}
          className="bg-[#1D2757] text-white px-6 py-2 rounded-md font-bold text-[10px] uppercase tracking-widest hover:bg-[#C5A059] transition-all shadow-md"
        >
          Volver
        </button>
      </nav>

      <div className="flex-1 flex flex-col py-8 px-4 md:px-12 items-center justify-center gap-8">
        
        <div className="flex flex-wrap justify-center gap-3">
          {FASES.map((fase, index) => (
            <button
              key={fase.id}
              onClick={() => setActiveStep(index)}
              className={`px-8 py-3 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all border-2 ${
                activeStep === index 
                ? "bg-[#1D2757] border-[#1D2757] text-white shadow-lg scale-105" 
                : "bg-white border-transparent text-gray-400 hover:border-[#C5A059]/30"
              }`}
            >
              {index === 0 ? "Intro" : `Fase ${fase.id}`}
            </button>
          ))}
        </div>

        <motion.div 
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[1300px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-gray-50 overflow-hidden flex flex-col lg:flex-row min-h-[600px] md:min-h-[650px]"
        >
          <div className="flex-1 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white order-2 lg:order-1 relative">
             <div className="absolute top-0 left-0 w-full h-1 lg:w-1.5 lg:h-full bg-[#C5A059]" />
             <div className="flex items-center gap-4 mb-4">
                <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.4em]">
                  {FASES[activeStep].categoria}
                </span>
             </div>
             
             <h3 className="text-[#1D2757] text-2xl md:text-5xl font-black uppercase mb-8 leading-[1.15] tracking-tight">
               {FASES[activeStep].titulo}
             </h3>

             <div className="text-[#1D2757]/90 leading-relaxed">
               {FASES[activeStep].texto}
             </div>
          </div>

          <div className="flex-1 bg-[#F8F9FA] p-6 md:p-12 flex flex-col justify-between items-center border-l border-gray-100 order-1 lg:order-2">
            
            <motion.div 
              whileHover={{ scale: 1.01 }}
              onClick={() => setIsZoomed(true)}
              className="relative w-full h-[350px] lg:h-[450px] cursor-zoom-in group shadow-xl rounded-2xl overflow-hidden bg-white"
            >
              <Image 
                src={FASES[activeStep].img}
                alt={FASES[activeStep].titulo}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white/90 px-6 py-2.5 rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                  <span className="text-[#1D2757] font-black text-[10px] uppercase tracking-widest">
                    Click para ampliar
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="w-full flex justify-end mt-8 z-20">
                <button 
                  onClick={handleNext}
                  className="bg-[#1D2757] hover:bg-[#C5A059] text-white px-8 py-3 md:px-10 md:py-4 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-4 shadow-lg group"
                >
                  Siguiente Parte
                  <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="w-full bg-[#1D2757] py-5 border-t border-[#C5A059]">
          <p className="text-[#C5A059] text-[9px] font-bold tracking-[0.5em] uppercase text-center">
              • Proyecto UMNG •
          </p>
      </footer>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-[100] bg-[#1D2757]/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-6xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={FASES[activeStep].img} alt="Zoom" fill className="object-contain" unoptimized />
              <button 
                onClick={() => setIsZoomed(false)}
                className="absolute -top-12 right-0 text-white flex items-center gap-2 group"
              >
                <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-[#C5A059] transition-colors">Cerrar</span>
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-[#C5A059] transition-colors">
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
    </main>
  );
}