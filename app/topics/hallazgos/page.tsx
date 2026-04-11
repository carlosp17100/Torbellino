"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HALLAZGOS = [
  {
    id: "cultural",
    categoria: "Culturales",
    titulo: "Memoria y Territorio",
    frase: "“El patrimonio cultural es una práctica viva que se resignifica en el presente a través de la memoria, el territorio y la comunidad.”",
    icon: "🌍",
  },
  {
    id: "pedagogico",
    categoria: "Pedagógicos",
    titulo: "Cuerpo y Comprensión",
    frase: "“El torbellino, como dispositivo pedagógico, integra análisis crítico y experiencia corporal, transformando la danza en un proceso de comprensión y no solo de ejecución.”",
    icon: "🎓",
  },
  {
    id: "creativo",
    categoria: "Creativas",
    titulo: "Tradición e Innovación",
    frase: "“La tradición, comprendida críticamente, se convierte en motor de creación contemporánea sin perder su identidad cultural.”",
    icon: "✨",
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
          className="bg-[#1D2757] text-white px-6 py-2 rounded-md font-bold text-xs hover:bg-[#C5A059] transition-all uppercase tracking-widest shadow-sm"
        >
          Volver
        </button>
      </nav>

      <div className="flex-1 max-w-7xl mx-auto w-full p-6 md:p-12 lg:p-20">
        
        {/* ENCABEZADO */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-[#C5A059] font-black text-sm uppercase tracking-[0.4em] mb-4 block">Resultados de Investigación</span>
          <h3 className="text-[#1D2757] text-4xl md:text-6xl font-black uppercase leading-tight">Síntesis del Proceso</h3>
        </motion.div>

        {/* GRID DE CARDS (HALLAZGOS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HALLAZGOS.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 cursor-pointer group flex flex-col items-center justify-center text-center h-[380px] relative overflow-hidden"
            >
              <span className="text-6xl mb-6 block group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
              <h4 className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-3">{item.categoria}</h4>
              <h5 className="text-[#1D2757] text-2xl font-black uppercase leading-tight">{item.titulo}</h5>
              
              <p className="mt-8 text-[#1D2757]/30 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-[#C5A059] transition-colors">
                Haz clic para explorar
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </div>

        {/* --- SEPARACIÓN AQUÍ (Margin Top) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="mt-20 md:mt-32 bg-[#1D2757] p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-[0_35px_60px_-15px_rgba(29,39,87,0.3)]"
        >
          {/* Adorno visual de fondo */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          
          <span className="text-[#C5A059] font-black text-xs md:text-sm uppercase tracking-[0.6em] mb-10 block relative z-10">
            Conclusión Final
          </span>
          
          <h4 className="text-white text-3xl md:text-5xl font-black uppercase leading-[1.15] italic relative z-10">
            “La tradición no es pasado: <br className="hidden md:block" /> 
            <span className="text-[#C5A059] not-italic mt-4 block md:inline"> es materia viva para crear el futuro.”</span>
          </h4>
        </motion.div>

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
                className="bg-white rounded-[3.5rem] p-10 md:p-20 max-w-3xl w-full shadow-2xl text-center relative border-t-8 border-[#C5A059]"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-10 right-10 text-gray-300 hover:text-[#C5A059] transition-colors"
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>

                <span className="text-8xl mb-8 block">{h.icon}</span>
                <h3 className="text-[#1D2757] text-3xl md:text-4xl font-black uppercase mb-10 leading-tight">{h.titulo}</h3>
                <p className="text-[#1D2757] text-xl md:text-2xl font-medium italic leading-relaxed px-4">
                  {h.frase}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="w-full bg-[#1D2757] p-6 border-t border-[#C5A059] mt-20">
        <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase text-center">
          Identidad y Movimiento • Investigación UMNG
        </p>
      </footer>
    </main>
  );
}