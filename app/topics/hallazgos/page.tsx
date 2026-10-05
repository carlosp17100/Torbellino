"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HALLAZGOS = [
  {
    id: "tradicion-diversa",
    categoria: "Hallazgo 1",
    titulo: "Tradición Diversa",
    frase: "“El torbellino es una tradición diversa, no una manifestación homogénea.”",
    icon: "🌍",
  },
  {
    id: "complejidad-ritmica",
    categoria: "Hallazgo 2",
    titulo: "Complejidad del Torbellino",
    frase: "“La complejidad del torbellino no depende únicamente de su velocidad.”",
    icon: "🌀",
  },
  {
    id: "elementos-creativos",
    categoria: "Hallazgo 3",
    titulo: "Posibilidades de Creación",
    frase: "“Los elementos tradicionales pueden convertirse en posibilidades de creación.”",
    icon: "✨",
  },
  {
    id: "investigacion-corporal",
    categoria: "Hallazgo 4",
    titulo: "Investigación desde el Cuerpo",
    frase: "“Investigar desde el cuerpo transforma la relación con la tradición.”",
    icon: "🎭",
  }
];

export default function HallazgosPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans">
      
      {/* NAVEGACIÓN */}
      <nav className="w-full p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b sticky top-0">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/umng-logo.png" alt="UMNG" width={45} height={45} priority />
          <span className="text-[#1D2757] font-bold text-xs uppercase leading-tight border-l pl-4 border-gray-200">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>
        <h2 className="hidden md:block text-[#1D2757] font-black text-xl tracking-widest uppercase">
          Discusiones y Hallazgos
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

      <div className="flex-1 max-w-7xl mx-auto w-full p-6 md:p-12 lg:p-16">
        
        {/* ENCABEZADO */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[#C5A059] font-black text-sm uppercase tracking-[0.4em] mb-4 block">
            Resultados de Investigación
          </span>
          <h3 className="text-[#1D2757] text-4xl md:text-6xl font-black uppercase leading-tight">
            Síntesis del Proceso
          </h3>
        </motion.div>

        {/* GRID DE CARDS (4 HALLAZGOS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HALLAZGOS.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 cursor-pointer group flex flex-col items-center justify-between text-center h-[360px] relative overflow-hidden"
            >
              <span className="text-5xl my-4 block group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <div>
                <h4 className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-2">
                  {item.categoria}
                </h4>
                <h5 className="text-[#1D2757] text-xl font-black uppercase leading-snug">
                  {item.titulo}
                </h5>
              </div>
              
              <p className="mt-4 text-[#1D2757]/40 text-[9px] font-black uppercase tracking-[0.2em] group-hover:text-[#C5A059] transition-colors">
                Haz clic para explorar
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </div>

        {/* PREGUNTA PROBLEMA (REEMPLAZA A CONCLUSIÓN FINAL) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="mt-16 md:mt-24 bg-[#1D2757] p-10 md:p-20 rounded-[3.5rem] text-center relative overflow-hidden shadow-[0_35px_60px_-15px_rgba(29,39,87,0.3)]"
        >
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          
          <span className="text-[#C5A059] font-black text-xs md:text-sm uppercase tracking-[0.6em] mb-8 block relative z-10">
            Conclusión Final
          </span>
          
          <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-medium leading-[1.4] italic relative z-10 max-w-4xl mx-auto">
            “¿Cómo puede la <strong className="text-[#C5A059] font-bold not-italic">investigación-creación</strong> contribuir a comprender y resignificar el <strong className="text-[#C5A059] font-bold not-italic">torbellino</strong> desde la práctica corporal y artística en el contexto universitario?”
          </h4>
        </motion.div>

        {/* BOTÓN SIGUIENTE PARTE */}
        <div className="w-full flex justify-center mt-16 md:mt-24 z-20">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/topics/bibliografia")}
            className="bg-[#1D2757] hover:bg-[#C5A059] text-white px-10 py-4 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-4 shadow-lg group"
          >
            Siguiente Parte
            <svg className="group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </motion.button>
        </div>

      </div>

      {/* MODAL PARA DETALLES */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1D2757]/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedId(null)}
          >
            {HALLAZGOS.filter(h => h.id === selectedId).map(h => (
              <motion.div
                key={h.id}
                layoutId={h.id}
                className="bg-white rounded-[3rem] p-8 md:p-16 max-w-2xl w-full shadow-2xl text-center relative border-t-8 border-[#C5A059]"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-8 right-8 text-gray-300 hover:text-[#C5A059] transition-colors"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>

                <span className="text-7xl mb-6 block">{h.icon}</span>
                <h3 className="text-[#1D2757] text-2xl md:text-3xl font-black uppercase mb-8 leading-tight">
                  {h.titulo}
                </h3>
                <p className="text-[#1D2757] text-lg md:text-2xl font-medium italic leading-relaxed px-2">
                  {h.frase}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="w-full bg-[#1D2757] p-6 border-t border-[#C5A059] mt-20">
        <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase text-center">
         • Proyecto UMNG •
        </p>
      </footer>
    </main>
  );
}