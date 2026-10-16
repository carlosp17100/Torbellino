"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TerritorioPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans overflow-x-hidden">
      
      {/* NAVEGACIÓN */}
      <nav className="w-full p-4 md:px-12 md:py-6 flex justify-between items-center z-50 bg-white shadow-sm sticky top-0">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
          <img src="/umng-logo.png" alt="UMNG" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span className="text-[#1D2757] font-bold text-[9px] md:text-xs uppercase leading-tight border-l pl-3 border-gray-200">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>
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

      {/* CONTENIDO PRINCIPAL (MAPA) */}
      <section className="p-6 md:p-12 lg:p-20 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center flex-1">
        <div className="relative aspect-square bg-white p-6 rounded-[2.5rem] shadow-xl order-2 md:order-1">
            <img src="/territorio1.png" alt="Mapa" className="w-full h-full object-contain" />
        </div>
        <div className="space-y-6 text-center md:text-left order-1 md:order-2">
          <span className="inline-block bg-[#C5A059] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">Núcleo Andino</span>
          <h3 className="text-[#1D2757] text-4xl md:text-6xl font-black uppercase">Origen <br/> Territorial</h3>
          <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed">
            El torbellino es una manifestación cultural presente en Cundinamarca, Boyacá y Santander
          </p>
        </div>
      </section>

      {/* BOTÓN SIGUIENTE PARTE */}
      <div className="w-full flex justify-center pb-20 z-20">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => router.push("/topics/melodia")}
          className="bg-[#1D2757] hover:bg-[#C5A059] text-white px-8 py-3 md:px-12 md:py-4 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-4 shadow-lg group"
        >
          Siguiente Parte
          <svg className="group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </motion.button>
      </div>

      <footer className="w-full bg-[#1D2757] py-10 text-center mt-auto">
        <p className="text-[#C5A059] text-[9px] font-bold tracking-[0.4em] uppercase">Proyecto UMNG •</p>
      </footer>
    </main>
  );
}