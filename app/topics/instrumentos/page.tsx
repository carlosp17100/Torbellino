"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { X, Music } from "lucide-react"; 

// 1. Definición de la estructura de datos
interface Instrumento {
  id: string;
  nombre: string;
  tipo: string;
  descripcion: string;
  imagen: string;
}

// 2. Datos constantes
const LISTA_INSTRUMENTOS: Instrumento[] = [
  { id: "tiple", nombre: "El Tiple", tipo: "Base Armónica", descripcion: "Sostiene el pulso constante y la riqueza rítmica del torbellino.", imagen: "/instrumento1.jpg" },
  { id: "requinto", nombre: "El Requinto", tipo: "Melódico / Armónico", descripcion: "Encargado de las melodías principales y bordoneos vibrantes.", imagen: "/instrumento2.jpg" },
  { id: "guitarra", nombre: "Guitarra", tipo: "Base Rítmica / Armónica", descripcion: "Proporciona el soporte tonal y la profundidad rítmica necesaria.", imagen: "/instrumento3.jpg" },
  { id: "guacharaca", nombre: "Guacharaca", tipo: "Base Rítmica", descripcion: "Aporta el brillo y la síncopa característica del ensamble.", imagen: "/instrumento4.jpg" },
  { id: "esterilla", nombre: "Esterilla", tipo: "Percusión de Idiofono", descripcion: "Instrumento de caña que genera un sonido rasposo rítmico esencial.", imagen: "/instrumento5.jpg" },
  { id: "quiribillo", nombre: "Quiribillo", tipo: "Percusión Rítmica", descripcion: "Conjunto de canutillos de caña que producen un sonido seco y festivo.", imagen: "/instrumento6.jpg" },
  { id: "puerca", nombre: "Puerca", tipo: "Percusión de Fricción", descripcion: "Membranófono frotado que produce un sonido ronco y rústico tradicional.", imagen: "/instrumento7.jpg" },
  { id: "flauta", nombre: "Flauta de Caña", tipo: "Viento / Aerófono", descripcion: "Aporta melodías dulces y pastoriles que evocan el origen del campo.", imagen: "/instrumento8.jpg" }
];

export default function SoporteInstrumental() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedInstrumento = useMemo(() => 
    LISTA_INSTRUMENTOS.find(i => i.id === selectedId), 
  [selectedId]);

  const InstrumentCards = useMemo(() => {
    return LISTA_INSTRUMENTOS.map((inst) => (
      <motion.div
        key={inst.id}
        layoutId={`card-${inst.id}`}
        onClick={() => setSelectedId(inst.id)}
        className="bg-white rounded-[2.5rem] overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all group border border-gray-100 flex flex-col h-full"
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="relative w-full aspect-square sm:aspect-video md:aspect-[4/5] overflow-hidden">
          <Image
            src={inst.imagen}
            alt={inst.nombre}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority={inst.id === "tiple"} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <motion.h3 
            layoutId={`title-${inst.id}`}
            className="absolute bottom-6 left-6 right-6 text-white text-xl sm:text-2xl md:text-3xl font-black uppercase italic tracking-tighter"
          >
            {inst.nombre}
          </motion.h3>
        </div>

        <div className="p-6 md:p-8 flex flex-col gap-3 flex-grow justify-center">
          <div className="flex items-start gap-4">
             <div className="bg-pink-50 p-3 rounded-2xl shrink-0">
                <Music className="text-pink-500" size={20} />
             </div>
             <div>
                <h4 className="text-[#1D2757] font-black uppercase text-sm sm:text-base md:text-lg leading-tight">
                  {inst.tipo}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm italic mt-1 line-clamp-2">
                  {inst.descripcion}
                </p>
             </div>
          </div>
        </div>
      </motion.div>
    ));
  }, []);

  return (
    <main className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans relative overflow-x-hidden">
      
      {/* NAVEGACIÓN */}
      <nav className="w-full p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/umng-logo.png" alt="UMNG" width={50} height={50} priority />
          <span className="text-[#1D2757] font-bold text-xs tracking-tighter uppercase leading-tight">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>

        <h2 className="hidden md:block text-[#1D2757] font-bold text-xl tracking-[0.2em] uppercase">
          Soporte Instrumental
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
      

      {/* GRID INSTRUMENTOS */}
      <section className="max-w-[1440px] mx-auto w-full px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          {InstrumentCards}
        </div>
      </section>

      {/* BOTÓN SIGUIENTE PARTE */}
      <div className="w-full flex justify-center pb-20 z-20">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/topics/vestuario")}
          className="bg-[#1D2757] hover:bg-[#C5A059] text-white px-8 py-3 md:px-12 md:py-4 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-4 shadow-lg group"
        >
          Siguiente Parte
          <svg className="group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </motion.button>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-[#1D2757] py-8 px-6 mt-auto border-t border-[#C5A059]/30">
        <p className="text-[#C5A059] text-[9px] md:text-xs font-bold tracking-[0.3em] uppercase text-center">
          • Proyecto UMNG 
        </p>
      </footer>

      {/* MODAL */}
      <AnimatePresence>
        {selectedId && selectedInstrumento && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-[#0A0F1E]/95 backdrop-blur-md"
            />

            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative bg-white w-full max-w-5xl rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-gray-100/80 backdrop-blur-md text-[#1D2757] p-2 md:p-3 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={selectedInstrumento.imagen}
                  alt={selectedInstrumento.nombre}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
                <motion.h2 
                  layoutId={`title-${selectedId}`}
                  className="text-[#1D2757] text-3xl md:text-5xl font-black uppercase italic mb-4"
                >
                  {selectedInstrumento.nombre}
                </motion.h2>
                <span className="text-[#C5A059] font-bold uppercase tracking-widest text-xs md:text-sm mb-6 pb-2 border-b">
                    {selectedInstrumento.tipo}
                </span>
                
                <p className="text-gray-600 leading-relaxed mb-8 md:mb-12 text-sm md:text-lg">
                  {selectedInstrumento.descripcion}
                </p>

                <button 
                  onClick={() => setSelectedId(null)}
                  className="bg-[#1D2757] text-white w-full md:w-fit px-12 py-4 rounded-full font-bold uppercase text-[10px] md:text-xs hover:bg-[#C5A059] transition-all shadow-lg"
                >
                  Regresar a Galería
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}