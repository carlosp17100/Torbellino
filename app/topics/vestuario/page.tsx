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
    titulo: "Etapa Tradicional",
    imagen: "/tradicional.jpg",
  },
  {
    id: "institucional",
    titulo: "Institucionalización",
    imagen: "/institucionalizacion.jpg",
  },
  {
    id: "contemporanea",
    titulo: "Etapa Contemporánea",
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
        className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-6 cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 transition-all group flex flex-col items-center justify-between"
        whileHover={{ y: -10, scale: 1.02 }}
      >
        <motion.div
          layoutId={`image-${etapa.id}`}
          className="relative w-full aspect-[3/4] rounded-[1.5rem] md:rounded-[1.8rem] overflow-hidden mb-4 md:mb-6 bg-gray-50"
        >
          <Image
            src={etapa.imagen}
            alt={etapa.titulo}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </motion.div>

        <div className="flex flex-col items-center w-full">
          <motion.h3
            layoutId={`title-${etapa.id}`}
            className="text-[#1D2757] text-sm md:text-lg font-black uppercase text-center w-full px-2 leading-tight"
          >
            {etapa.titulo}
          </motion.h3>

          <div className="mt-4 md:mt-6 bg-[#1D2757] text-white px-6 md:px-8 py-2 rounded-full font-bold text-[10px] md:text-xs uppercase group-hover:bg-[#C5A059] transition-colors">
            Explorar
          </div>
        </div>
      </motion.div>
    ));
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans relative overflow-x-hidden">
      {/* NAVEGACIÓN */}
      <nav className="w-full p-4 md:px-12 md:py-8 flex justify-between items-center bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-3 md:gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/umng-logo.png" alt="UMNG" width={40} height={40} className="md:w-[50px] md:height-[50px]" />
          <span className="text-[#1D2757] font-bold text-[10px] sm:text-sm uppercase leading-tight border-l-2 pl-3 md:pl-4 border-gray-200">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>

        <button
          onClick={() => router.push("/topics")}
          className="bg-[#1D2757] text-white px-6 md:px-10 py-2.5 md:py-3.5 rounded-full font-black text-[10px] md:text-sm uppercase hover:bg-[#C5A059] transition-all shadow-md active:scale-95"
        >
          Volver
        </button>
      </nav>

      {/* TÍTULO PRINCIPAL */}
      <header className="py-10 md:py-16 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#1D2757] text-3xl md:text-6xl font-black uppercase tracking-tighter"
        >
          Evolución del Vestuario
        </motion.h1>
        <div className="h-1 w-16 md:h-1.5 md:w-24 bg-[#C5A059] mx-auto mt-4 md:mt-6" />
      </header>

      {/* GRID */}
      <section className="max-w-6xl mx-auto w-full px-6 pb-24 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 items-stretch justify-center">
          {GridCards}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#1D2757] py-8 md:py-12 px-6 mt-auto border-t border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
          <div className="hidden lg:block h-[1px] flex-grow bg-[#C5A059]/30" />
          <p className="text-[#C5A059] text-[9px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-center">
            IDENTIDAD Y MOVIMIENTO • PROYECTO UMNG
          </p>
          <div className="hidden lg:block h-[1px] flex-grow bg-[#C5A059]/30" />
        </div>
      </footer>

      {/* MODAL EXPANDIDO */}
      <AnimatePresence>
        {selectedId && selectedEtapa && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-[#0A0F1E]/95 backdrop-blur-md"
            />

            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative bg-white w-full max-w-6xl overflow-y-auto md:overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-30 bg-white/80 backdrop-blur-sm text-[#1D2757] p-2 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors shadow-md"
              >
                <X size={24} />
              </button>

              {/* LADO IMAGEN (Ahora más grande: 60%) */}
              <motion.div
                layoutId={`image-${selectedId}`}
                className="w-full md:w-[60%] bg-gray-50 relative h-[350px] sm:h-[450px] md:h-auto flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={selectedEtapa.imagen}
                  alt={selectedEtapa.titulo}
                  fill
                  className="object-cover md:object-contain" // Cover en móvil, contain en desktop para no cortar
                  priority
                />
              </motion.div>

              {/* LADO TEXTO (Ahora más pequeño: 40%) */}
              <div className="w-full md:w-[40%] p-8 md:p-10 lg:p-12 flex flex-col justify-center items-center md:items-start bg-white">
                <motion.h2
                  layoutId={`title-${selectedId}`}
                  /* Letra más pequeña para evitar cortes raros */
                  className="text-[#1D2757] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-4 leading-tight tracking-tight text-center md:text-left w-full break-words"
                >
                  {selectedEtapa.titulo}
                </motion.h2>

                <div className="h-1.5 w-16 bg-[#C5A059] mb-8 md:mb-10" />

                <button
                  onClick={() => setSelectedId(null)}
                  className="w-full md:w-auto bg-[#1D2757] text-white px-12 py-4 rounded-full font-extrabold text-sm md:text-base uppercase hover:bg-[#C5A059] transition-all shadow-lg active:scale-95"
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