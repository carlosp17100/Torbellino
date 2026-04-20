"use client";

import { useMemo } from "react";
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

const TOPICS: Topic[] = [
  // --- LADO IZQUIERDO (6 temas) ---
  { id: "justificacion", label: "Justificación", emoji: "📋", x: 20, y: 25 },
  { id: "obj-especificos", label: "Objetivos Específicos", emoji: "📌", x: 12, y: 48 },
  { id: "origen", label: "Origen Territorial", emoji: "🗺️", x: 18, y: 72 },
  { id: "instrumentos", label: "Instrumentación", emoji: "🎸", x: 8, y: 90 },
  { id: "vestuario", label: "Vestuario del Torbellino", emoji: "👗", x: 28, y: 92 },
  { id: "hallazgos", label: "Discusión y Hallazgos", emoji: "📊", x: 42, y: 88 },

  // --- EJE CENTRAL ---
  { id: "pregunta", label: "Pregunta Problema", emoji: "❓", x: 50, y: 14 },
  { id: "metodologia", label: "Diseño Metodológico", emoji: "🔬", x: 50, y: 52, isCenter: true },

  // --- LADO DERECHO (7 temas) ---
  { id: "obj-general", label: "Objetivo General", emoji: "🎯", x: 80, y: 25 },
  { id: "tecnicas", label: "Técnicas e Instrumentos", emoji: "🛠️", x: 92, y: 48 },
  { id: "escena", label: "Puesta en Escena", emoji: "🎭", x: 82, y: 70 },
  { id: "melodia", label: "Melodía y Danza", emoji: "🎵", x: 62, y: 90 },
  { id: "multimedia", label: "Multimedia", emoji: "🎬", x: 94, y: 75 },
  { id: "bibliografia", label: "Bibliografía", emoji: "📚", x: 84, y: 94 },
  // ID cambiado a "contexto" para que la URL sea /topics/contexto
  { id: "contexto", label: "Contexto Coreográfico", emoji: "🩰", x: 72, y: 82 },
];

const CONNECTIONS: [number, number][] = [
  // Conexiones desde el centro (metodología - Index 7)
  [7, 0], [7, 1], [7, 2], [7, 5], [7, 6], [7, 8], [7, 9], [7, 10], [7, 11], [7, 14],
  // Conexiones periféricas
  [0, 6], [6, 8], [1, 0], [9, 8], [2, 1], [3, 4], [4, 5], [10, 9], [12, 10], [12, 13], [13, 11], [5, 11],
  [14, 11], [14, 10]
];

export default function TopicsPage() {
  const router = useRouter();

  const memoizedConnections = useMemo(() => {
    return CONNECTIONS.map(([startIdx, endIdx], i) => {
      const start = TOPICS[startIdx];
      const end = TOPICS[endIdx];
      if (!start || !end) return null;

      return (
        <motion.line
          key={`line-${start.id}-${end.id}`}
          x1={`${start.x}%`}
          y1={`${start.y}%`}
          x2={`${end.x}%`}
          y2={`${end.y}%`}
          stroke="#C5A059"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: i * 0.05 }}
        />
      );
    });
  }, []);

  const memoizedNodes = useMemo(() => {
    return TOPICS.map((topic, index) => (
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
          whileTap={{ scale: 0.95 }}
          // Al ser el id "contexto", esto navegará a /topics/contexto
          onClick={() => router.push(`/topics/${topic.id}`)}
          className={`
            flex flex-col items-center justify-center transition-all duration-300
            ${topic.isCenter 
              ? "w-28 h-28 md:w-44 md:h-44 bg-[#1D2757] border-[2px] md:border-4 border-[#C5A059] shadow-2xl" 
              : "w-20 h-20 md:w-28 md:h-28 bg-[#1D2757] border-[1px] md:border-2 border-white/20 hover:border-[#C5A059] shadow-lg"
            }
            rounded-full text-white p-2 md:p-4 group
          `}
        >
          <span className={`${topic.isCenter ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"} mb-1 group-hover:scale-110 transition-transform`}>
            {topic.emoji}
          </span>
          <span className={`
            text-center font-bold uppercase leading-tight tracking-tighter
            ${topic.isCenter ? "text-[8px] md:text-[11px]" : "text-[7px] md:text-[9px]"}
            max-w-[90%]
          `}>
            {topic.label}
          </span>
        </motion.button>
      </motion.div>
    ));
  }, [router]);

  return (
    <main className="min-h-screen bg-[#f8f9fa] relative flex flex-col items-center overflow-x-hidden">
      
      {/* NAVBAR */}
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

        <button 
          onClick={() => router.push("/")}
          className="bg-[#1D2757] text-white p-2 md:px-4 md:py-2 rounded-full md:rounded-md font-bold text-[10px] md:text-xs hover:bg-[#C5A059] transition-all shrink-0"
        >
          <span className="hidden md:inline">VOLVER</span>
          <svg className="w-4 h-4 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </nav>

      {/* MAPA MENTAL */}
      <div className="w-full flex-1 overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing scrollbar-hide">
        <div className="relative min-w-[1100px] md:min-w-full h-[800px] md:h-[85vh] mx-auto">
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {memoizedConnections}
          </svg>
          {memoizedNodes}
        </div>
      </div>

      {/* MOBILE HINT */}
      <div className="md:hidden fixed bottom-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce">
        <span className="text-[10px] font-bold text-[#1D2757]">↔ Desliza para navegar</span>
      </div>
    </main>
  );
}