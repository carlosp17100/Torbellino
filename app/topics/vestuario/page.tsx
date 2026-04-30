"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";

interface Etapa {
  id: string;
  titulo: string;
  imagen: string;
}

const ETAPAS_EVOLUCION: Etapa[] = [
  {
    id: "tradicional",
    titulo: "Etapa tradicional",
    imagen: "/tradicional.jpg",
  },
  {
    id: "institucional",
    titulo: "Institucionalización",
    imagen: "/institucionalizacion.jpg",
  },
  {
    id: "contemporanea",
    titulo: "Etapa contemporánea",
    imagen: "/contemporaneo.jpg",
  },
];

export default function EvolucionVestuario() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedEtapa = useMemo(
    () => ETAPAS_EVOLUCION.find((e) => e.id === selectedId),
    [selectedId]
  );

  const GridCards = useMemo(() => {
    return ETAPAS_EVOLUCION.map((etapa) => (
      <motion.div
        key={etapa.id}
        layoutId={`card-${etapa.id}`}
        onClick={() => setSelectedId(etapa.id)}
        className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-6 cursor-pointer shadow-lg border border-gray-100 transition-all group flex flex-col items-center"
        whileHover={{ y: -10, scale: 1.02 }}
      >
        <motion.div
          layoutId={`image-${etapa.id}`}
          className="relative w-full aspect-[3/4] rounded-[1.5rem] overflow-hidden mb-4 bg-gray-50"
        >
          <Image
            src={etapa.imagen}
            alt={etapa.titulo}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </motion.div>

        <motion.h3
          layoutId={`title-${etapa.id}`}
          className="text-[#1D2757] text-sm md:text-lg font-black uppercase text-center leading-tight"
        >
          {etapa.titulo}
        </motion.h3>

        <div className="mt-4 bg-[#1D2757] text-white px-6 py-2 rounded-full font-bold text-[10px] md:text-xs uppercase group-hover:bg-[#C5A059] transition-colors">
          Ver detalle
        </div>
      </motion.div>
    ));
  }, []);

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans relative overflow-x-hidden">
      
      {/* NAVEGACIÓN */}
      <nav className="w-full p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b sticky top-0">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image src="/umng-logo.png" alt="UMNG" fill className="object-contain" priority />
          </div>
          <span className="text-[#1D2757] font-bold text-[10px] md:text-xs tracking-tighter uppercase leading-tight border-l pl-4 border-gray-200">
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

      {/* CABECERA */}
      <header className="py-12 px-6 text-center">
        <h1 className="text-[#1D2757] text-3xl md:text-6xl font-black uppercase tracking-tighter">
          Evolución del Vestuario
        </h1>
        <div className="h-1.5 w-24 bg-[#C5A059] mx-auto mt-6" />
      </header>

      {/* GRID DE TARJETAS */}
      <section className="max-w-6xl mx-auto w-full px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {GridCards}
        </div>
      </section>

      {/* BOTÓN SIGUIENTE PARTE */}
      <div className="w-full flex justify-center pb-20 z-20">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/topics/hallazgos")}
          className="bg-[#1D2757] hover:bg-[#C5A059] text-white px-10 py-4 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-4 shadow-lg group"
        >
          Siguiente Parte
          <svg className="group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </motion.button>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-[#1D2757] py-8 px-6 mt-auto border-t border-[#C5A059]/20">
        <p className="text-[#C5A059] text-[9px] md:text-xs font-bold tracking-[0.4em] uppercase text-center">
          • PROYECTO UMNG
        </p>
      </footer>

      {/* MODAL CORREGIDO */}
      <AnimatePresence>
        {selectedId && selectedEtapa && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-[#0A0F1E]/95 backdrop-blur-md"
            />

            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative bg-white w-full max-w-6xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[75vh]"
            >
              {/* Botón Cierre */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-50 bg-[#1D2757] text-white p-2 rounded-full hover:bg-[#C5A059] transition-colors shadow-lg"
              >
                <X size={24} />
              </button>

              {/* LADO IMAGEN */}
              <motion.div
                layoutId={`image-${selectedId}`}
                className="w-full md:w-[55%] bg-[#F8F9FA] relative h-[450px] md:h-full flex items-center justify-center p-6"
              >
                <Image
                  src={selectedEtapa.imagen}
                  alt={selectedEtapa.titulo}
                  fill
                  className="object-contain p-4 md:p-8" 
                  priority
                />
              </motion.div>

              {/* LADO TEXTO CORREGIDO: Ajuste de tamaño y padding para títulos largos */}
              <div className="w-full md:w-[45%] p-8 md:px-10 md:py-16 flex flex-col justify-center bg-white border-l border-gray-50">
                <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.3em] mb-4">Registro Histórico</span>
                
                <motion.h2
                  layoutId={`title-${selectedId}`}
                  className="text-[#1D2757] text-2xl md:text-4xl lg:text-5xl font-black uppercase mb-6 leading-[1.1] tracking-tighter break-words"
                >
                  {selectedEtapa.titulo}
                </motion.h2>

                <div className="h-1.5 w-20 bg-[#C5A059] mb-12" />

                <button
                  onClick={() => setSelectedId(null)}
                  className="bg-[#1D2757] text-white px-10 py-4 rounded-xl font-extrabold text-xs uppercase hover:bg-[#C5A059] transition-all shadow-xl w-fit"
                >
                  Regresar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}