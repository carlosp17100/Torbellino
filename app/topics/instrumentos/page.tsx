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

// 2. Datos constantes (Afuera del componente para evitar recreación)
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

  // 3. OPTIMIZACIÓN: useMemo para el cálculo del instrumento seleccionado
  const selectedInstrumento = useMemo(() => 
    LISTA_INSTRUMENTOS.find(i => i.id === selectedId), 
  [selectedId]);

  // 4. OPTIMIZACIÓN: useMemo para renderizar la lista de tarjetas
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
             <div className="overflow-hidden">
                <h4 className="text-[#1D2757] font-black uppercase text-sm sm:text-base md:text-lg leading-tight truncate">
                  {inst.tipo}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm italic mt-1 line-clamp-2 md:line-clamp-none">
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
      
      {/* NAVEGACIÓN RESPONSIVE */}
      <nav className="w-full px-6 py-4 md:px-12 md:py-6 flex justify-between items-center bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/umng-logo.png" alt="UMNG" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
          <span className="hidden xs:block text-[#1D2757] font-bold text-[10px] md:text-xs uppercase leading-tight border-l pl-3">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>
        
        <h2 className="text-[#1D2757] font-black text-[10px] md:text-sm lg:text-lg uppercase tracking-[0.2em]">
            Soporte Instrumental
        </h2>

        <button 
          onClick={() => router.push("/topics")}
          className="bg-[#1D2757] text-white px-4 py-2 md:px-8 md:py-2.5 rounded-lg font-bold text-[10px] md:text-xs uppercase hover:bg-[#C5A059] transition-all flex items-center gap-2"
        >
          <X size={14} className="hidden sm:block" /> Volver
        </button>
      </nav>

      {/* GRID OPTIMIZADO: 1 col móvil, 2 col tablet, 3 col laptop, 4 col desktop XL */}
      <section className="max-w-[1440px] mx-auto w-full px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          {InstrumentCards}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#1D2757] py-8 px-6 mt-auto border-t border-[#C5A059]/30">
        <p className="text-[#C5A059] text-[9px] md:text-xs font-bold tracking-[0.3em] uppercase text-center">
          Identidad y Movimiento • Proyecto UMNG • 2026
        </p>
      </footer>

      {/* MODAL RESPONSIVE */}
      <AnimatePresence>
        {selectedId && selectedInstrumento && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
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
                className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-gray-100/80 backdrop-blur-md text-[#1D2757] p-2 md:p-3 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-auto bg-gray-50">
                <Image
                  src={selectedInstrumento.imagen}
                  alt={selectedInstrumento.nombre}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white overflow-y-auto">
                <motion.h2 
                  layoutId={`title-${selectedId}`}
                  className="text-[#1D2757] text-3xl md:text-5xl font-black uppercase italic mb-2 md:mb-4 leading-tight"
                >
                  {selectedInstrumento.nombre}
                </motion.h2>
                <span className="text-[#C5A059] font-bold uppercase tracking-widest text-xs md:text-sm mb-6 pb-2 border-b border-gray-100">
                    {selectedInstrumento.tipo}
                </span>
                
                <p className="text-gray-600 leading-relaxed mb-8 md:mb-12 text-sm md:text-lg">
                  {selectedInstrumento.descripcion}
                </p>

                <button 
                  onClick={() => setSelectedId(null)}
                  className="bg-[#1D2757] text-white w-full md:w-fit px-12 py-4 rounded-full font-bold uppercase text-[10px] md:text-xs hover:bg-[#C5A059] transition-all shadow-lg active:scale-95"
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