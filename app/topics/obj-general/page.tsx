"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ObjetivoGeneralPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans">
      
      {/* NAVEGACIÓN */}
      <nav className="w-full p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/umng-logo.png" alt="UMNG" width={50} height={50} priority />
          <span className="text-[#1D2757] font-bold text-xs tracking-tighter uppercase leading-tight">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>

        <h2 className="hidden md:block text-[#1D2757] font-bold text-xl tracking-[0.2em] uppercase">
          Contenido del Proyecto
        </h2>

        {/* Botón Volver con logo UMNG */}
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
      <div className="flex-1 flex flex-col md:flex-row p-6 md:p-12 gap-12 items-center justify-center">
        
        {/* REEMPLAZO: Ícono lateral por logo UMNG */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-64 h-64 bg-white rounded-[2rem] border-2 border-gray-100 flex items-center justify-center shadow-xl relative"
        >
          <div className="relative w-40 h-40">
            <Image 
              src="/umng-logo.png" 
              alt="Logo UMNG Lateral" 
              fill 
              className="object-contain" 
            />
          </div>
          <div className="absolute top-0 right-0 w-12 h-12 bg-[#C5A059] rounded-tr-[2rem] rounded-bl-full opacity-80" />
        </motion.div>

        {/* Tarjeta de Contenido */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 w-full max-w-5xl bg-white rounded-[1.5rem] shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
        >
          {/* Cabecera de la tarjeta */}
          <div className="bg-[#1D2757] p-5 flex justify-between items-center">
            <h3 className="text-white text-2xl font-bold uppercase tracking-widest">Objetivo General</h3>
            <span className="bg-[#C5A059] text-[#1D2757] px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter">
              Meta
            </span>
          </div>

          <div className="flex flex-col lg:flex-row min-h-[400px]">
            {/* Sección de Texto */}
            <div className="flex-1 p-10 border-r border-gray-100 flex flex-col justify-center">
              <p className="text-[#1D2757] text-xl md:text-2xl leading-relaxed text-justify font-medium">
                <span className="text-6xl font-bold float-left mr-3 leading-none text-[#C5A059]">A</span>
                nalizar las implicaciones culturales, pedagógicas y creativas de la reactivación del <strong className="text-[#C5A059]">torbellino</strong> en procesos académicos y artísticos contemporáneos dentro del contexto universitario.
              </p>
            </div>

            {/* REEMPLAZO: Imagen única de Heritmo (Sin carrusel) */}
            <div className="flex-1 p-8 bg-[#F8F9FA] flex flex-col items-center justify-center">
              <div className="relative w-full aspect-square bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-100">
                <Image 
                  src="/obj1.jpg"
                  alt="Logo Heritmo"
                  fill
                  className="object-contain p-6" // El padding asegura que el logo circular no toque los bordes
                  priority
                />
              </div>
              
              <p className="mt-4 text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em]">
                Identidad Visual • Heritmo
              </p>
            </div>
          </div>
        </motion.div>
      </div>
       <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
          <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase whitespace-nowrap">
           • Proyecto UMNG
          </p>
        </div>
      </footer>
    </main>
  );
}