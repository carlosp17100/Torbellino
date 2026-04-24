"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function JustificacionPage() {
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
          Justificación
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
      <div className="flex-1 flex flex-col p-6 md:p-12 gap-8 items-center justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-6xl bg-white rounded-[1.5rem] shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
        >
          {/* CABECERA */}
          <div className="bg-[#1D2757] p-5 flex justify-between items-center">
            <h3 className="text-white text-2xl font-bold uppercase tracking-widest">Justificación</h3>
            <span className="bg-[#C5A059] text-[#1D2757] px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter">
              Patrimonio Inmaterial
            </span>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* TEXTO Y PILARES */}
            <div className="flex-[1.2] p-10 border-r border-gray-100">
              <p className="text-[#1D2757] text-lg leading-relaxed text-justify font-medium mb-8">
                <span className="text-5xl font-bold float-left mr-3 leading-none text-[#1D2757]">L</span>
                a investigación y reactivación del <strong className="text-[#C5A059]">torbellino</strong> en ámbitos académicos y artísticos contemporáneos preserva, resignifica y proyecta el patrimonio inmaterial andino colombiano, articulando tradición, crítica, transmisión intergeneracional y creación innovadora.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#C5A059]">
                  <h4 className="text-[#1D2757] font-bold text-sm uppercase mb-1">Académico</h4>
                  <p className="text-gray-600 text-sm italic">Enfoque en la Comprensión profunda del legado.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#1D2757]">
                  <h4 className="text-[#1D2757] font-bold text-sm uppercase mb-1">Contemporáneo</h4>
                  <p className="text-gray-600 text-sm italic">Participación activa y nuevas narrativas.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span className="text-[#1D2757] font-black text-sm uppercase tracking-widest">
                  “Apropiación cultural consciente”
                </span>
              </div>
            </div>

            {/* IMAGEN ÚNICA */}
            <div className="flex-1 p-8 bg-[#F8F9FA] flex flex-col items-center justify-center">
              <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <Image 
                  src="/justi1.jpg" 
                  alt="Investigación del Torbellino"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-4 text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em]">
                Registro Fotográfico • Fase de Investigación
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/50" />
          <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase whitespace-nowrap">
           • Proyecto UMNG
          </p>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/50" />
        </div>
      </footer>
    </main>
  );
}