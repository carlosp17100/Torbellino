"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Topic {
  id: string;
  label: string;
  emoji: string;
  x: number;
  y: number;
  isCenter?: boolean;
}

const topics: Topic[] = [
  { id: "justificacion", label: "Justificación", emoji: "📋", x: 20, y: 20 },
  { id: "pregunta", label: "Pregunta Problema", emoji: "❓", x: 50, y: 15 },
  { id: "obj-general", label: "Objetivo General", emoji: "🎯", x: 80, y: 20 },
  { id: "obj-especificos", label: "Objetivos Específicos", emoji: "📌", x: 15, y: 45 },
  { id: "metodologia", label: "Diseño Metodológico (3 Fases)", emoji: "🔬", x: 50, y: 50, isCenter: true },
  { id: "escena", label: "Puesta en Escena", emoji: "🎭", x: 85, y: 45 },
  { id: "origen", label: "Origen Territorial", emoji: "🗺️", x: 20, y: 75 },
  { id: "contexto", label: "Contexto Coreográfico", emoji: "💃", x: 50, y: 85 },
  { id: "melodia", label: "Melodía y Danza", emoji: "🎵", x: 80, y: 75 },
  { id: "instrumentos", label: "Instrumentación", emoji: "🎸", x: 10, y: 90 },
  { id: "vestuario", label: "Vestuario del Torbellino", emoji: "👗", x: 35, y: 95 },
  { id: "hallazgos", label: "Discusión y Hallazgos", emoji: "📊", x: 65, y: 95 },
  { id: "bibliografia", label: "Bibliografía", emoji: "📚", x: 90, y: 90 },
];

const connections: [number, number][] = [
  [4, 0], [4, 1], [4, 2], [4, 3], [4, 5], [4, 6], [4, 7], [4, 8],
  [0, 1], [1, 2], [3, 0], [5, 2], [6, 7], [8, 7], [9, 10], [10, 11], [11, 12]
];

export default function TopicsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#f8f9fa] relative flex flex-col items-center overflow-x-hidden">
      
      {/* NAVEGACIÓN RESPONSIVE: No oculta contenido */}
      <nav className="w-full p-4 md:p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b sticky top-0">
        <div className="flex items-center gap-2 md:gap-4 cursor-pointer shrink-0" onClick={() => router.push("/")}>
          <div className="relative w-8 h-8 md:w-12 md:h-12">
            <Image src="/umng-logo.png" alt="UMNG" fill className="object-contain" priority />
          </div>
          <span className="text-[#1D2757] font-bold text-[9px] md:text-xs tracking-tighter uppercase leading-tight">
            Universidad Militar <br /> <span className="hidden xs:inline">Nueva Granada</span>
          </span>
        </div>
        
        <h2 className="text-[#1D2757] font-black text-[10px] sm:text-lg md:text-2xl uppercase tracking-widest text-center px-2 flex-1">
          Contenido <span className="hidden sm:inline">del Proyecto</span>
        </h2>

        {/* Botón Volver compacto para móvil */}
        <button 
          onClick={() => router.push("/")}
          className="bg-[#1D2757] text-white p-2 md:px-4 md:py-2 rounded-full md:rounded-md font-bold text-[10px] md:text-xs hover:bg-[#C5A059] transition-all shrink-0"
        >
          <span className="hidden md:inline">VOLVER</span>
          <svg className="w-4 h-4 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
        </button>
      </nav>

      {/* CONTENEDOR DEL MAPA MENTAL: Permite scroll lateral en móviles muy pequeños */}
      <div className="w-full flex-1 overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing scrollbar-hide">
        <div className="relative min-w-[800px] md:min-w-full h-[700px] md:h-[85vh] mx-auto mt-4 md:mt-0">
          
          {/* SVG Conexiones */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map(([startIdx, endIdx], i) => {
              const start = topics[startIdx];
              const end = topics[endIdx];
              if (!start || !end) return null;

              return (
                <motion.line
                  key={`line-${i}`}
                  x1={`${start.x}%`}
                  y1={`${start.y}%`}
                  x2={`${end.x}%`}
                  y2={`${end.y}%`}
                  stroke="#C5A059"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 1.5, delay: i * 0.05 }}
                />
              );
            })}
          </svg>

          {/* Renderizado de Nodos */}
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 150, delay: index * 0.05 }}
              style={{ left: `${topic.x}%`, top: `${topic.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <motion.button
                whileHover={{ scale: 1.1, zIndex: 50 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => router.push(`/topics/${topic.id}`)}
                className={`
                  flex flex-col items-center justify-center transition-all duration-300
                  ${topic.isCenter 
                    ? "w-28 h-28 md:w-48 md:h-48 bg-[#1D2757] border-[3px] md:border-4 border-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.3)]" 
                    : "w-20 h-20 md:w-32 md:h-32 bg-[#1D2757] border-2 border-white/20 hover:border-[#C5A059] shadow-lg"
                  }
                  rounded-full text-white p-2 md:p-4 group
                `}
              >
                <span className={`${topic.isCenter ? "text-3xl md:text-5xl" : "text-xl md:text-3xl"} mb-1 group-hover:scale-110 transition-transform`}>
                  {topic.emoji}
                </span>
                <span className={`
                  text-center font-black uppercase leading-none tracking-tighter
                  ${topic.isCenter ? "text-[8px] md:text-[11px]" : "text-[7px] md:text-[9px]"}
                  max-w-[80%]
                `}>
                  {topic.label}
                </span>
                
                {/* Glow decorativo al hover */}
                <div className="absolute inset-0 rounded-full bg-[#C5A059]/0 group-hover:bg-[#C5A059]/10 transition-colors" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Indicador de Ayuda para móvil */}
      <div className="md:hidden fixed bottom-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce">
        <span className="text-[10px] font-bold text-[#1D2757]">↔ Desliza para explorar temas</span>
      </div>
    </main>
  );
}