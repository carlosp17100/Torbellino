"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const TECNICAS = [
  { id: "entrevistas", title: "Entrevistas Semiestructuradas", emoji: "🎤" },
  { id: "laboratorios", title: "Laboratorios de Investigación-Creación", emoji: "💃" },
  { id: "diarios", title: "Diarios de Campo / Bitácoras", emoji: "📓" },
  { id: "registro", title: "Registro Audiovisual", emoji: "🎥" },
];

export default function TecnicasPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans overflow-x-hidden">
      
      {/* NAVEGACIÓN */}
      <nav className="w-full p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image src="/umng-logo.png" alt="UMNG" fill className="object-contain" priority />
          </div>
          <span className="text-[#1D2757] font-bold text-[10px] md:text-xs tracking-tighter uppercase leading-tight">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>

        <h2 className="hidden md:block text-[#1D2757] font-black text-xl tracking-[0.2em] uppercase">
          Metodología
        </h2>

        <button 
          onClick={() => router.push("/topics")}
          className="bg-[#1D2757] text-white px-6 py-2 rounded-md font-bold text-[10px] md:text-xs hover:bg-[#C5A059] transition-all flex items-center gap-2 uppercase tracking-widest shadow-sm"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Volver
        </button>
      </nav>

      {/* CONTENIDO CENTRADO */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 w-full max-w-4xl mx-auto">
        
        {/* ENCABEZADO CENTRADO */}
        <div className="mb-12 text-center">
           <h3 className="text-[#1D2757] font-black text-3xl md:text-5xl uppercase tracking-tighter mb-2">
             Instrumentos de Investigación
           </h3>
           <div className="w-24 h-2 bg-[#C5A059] mx-auto rounded-full" />
        </div>

        {/* LISTA DE TÍTULOS CENTRADA */}
        <div className="w-full max-w-md flex flex-col gap-4">
          {TECNICAS.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveTab(index)}
              className={`relative p-6 rounded-2xl text-center transition-all duration-300 flex items-center justify-center gap-4 overflow-hidden border shadow-sm group ${
                activeTab === index 
                ? "border-[#1D2757] shadow-xl scale-105" 
                : "bg-white text-[#1D2757] border-transparent hover:border-gray-200"
              }`}
            >
              {activeTab === index && (
                <motion.div 
                  layoutId="activeTabBG"
                  className="absolute inset-0 bg-[#1D2757] -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="text-3xl md:text-4xl">{item.emoji}</span>
              <span className={`font-black uppercase text-xs md:text-sm tracking-widest leading-tight ${activeTab === index ? "text-white" : "text-[#1D2757]"}`}>
                {item.title}
              </span>
            </motion.button>
          ))}
        </div>

      </div>

      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059]">
        <p className="text-[#C5A059] text-[9px] font-bold tracking-[0.4em] uppercase text-center">
          Proyecto Investigación-Creación • Universidad Militar Nueva Granada
        </p>
      </footer>
    </main>
  );
}