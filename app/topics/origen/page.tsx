"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TERRITORIOS_DATA = [
  {
    id: 1,
    titulo: "Danza de Cintas",
    ubicacion: "Boyacá / Santander",
    descripcion: "Representación coreográfica del tejido social a través del baile y la música del requinto.",
    imagen: "/territorio2.png",
    tag: "Coreografía"
  },
  {
    id: 2,
    titulo: "Raíces Campesinas",
    ubicacion: "Vélez, Santander",
    descripcion: "El torbellino como eje de la vida agrícola, artesanal y la identidad regional.",
    imagen: "/territorio4.png",
    tag: "Cultura"
  },
  {
    id: 3,
    titulo: "Festivales Nacionales",
    ubicacion: "Ibagué, Tolima",
    descripcion: "El brillo de la danza en las grandes plataformas del folclor andino colombiano.",
    imagen: "/territorio3.png",
    tag: "Espectáculo"
  },
  {
    id: 4,
    titulo: "Semilleros de Tradición",
    ubicacion: "Tabio, Cundinamarca",
    descripcion: "El legado del torbellino en manos de las nuevas generaciones.",
    imagen: "/territorio5.png",
    tag: "Relevo"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  hover: { y: -10, transition: { duration: 0.3 } }
};

export default function TerritorioPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedItem = TERRITORIOS_DATA.find(item => item.id === selectedId);

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
      <section className="p-6 md:p-12 lg:p-20 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-square bg-white p-6 rounded-[2.5rem] shadow-xl order-2 md:order-1">
           <img src="/territorio1.png" alt="Mapa" className="w-full h-full object-contain" />
        </div>
        <div className="space-y-6 text-center md:text-left order-1 md:order-2">
          <span className="inline-block bg-[#C5A059] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">Núcleo Andino</span>
          <h3 className="text-[#1D2757] text-4xl md:text-6xl font-black uppercase">Origen <br/> Territorial</h3>
          <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed">
            El Torbellino tiene su epicentro en el Altiplano Cundiboyacense y Santander.
          </p>
        </div>
      </section>

      {/* GRID DE TARJETAS */}
      <section className="p-6 md:p-12 max-w-7xl mx-auto w-full mb-20">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
          {TERRITORIOS_DATA.map((card) => (
            <motion.div
              key={card.id}
              layoutId={`card-${card.id}`}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedId(card.id)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group cursor-pointer"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img src={card.imagen} alt={card.titulo} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1D2757]/90 text-[#C5A059] px-3 py-1.5 rounded-xl text-[9px] font-black uppercase">{card.tag}</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-2">{card.ubicacion}</p>
                <h4 className="text-[#1D2757] font-black text-xl uppercase mb-4">{card.titulo}</h4>
                <p className="text-gray-500 text-sm italic line-clamp-3 mb-4">"{card.descripcion}"</p>
                <div className="mt-auto text-[#1D2757] font-bold text-[10px] uppercase">Explorar Detalles →</div>
              </div>
              <div className="h-2 w-full bg-[#C5A059]" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* MODAL CORREGIDO */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-[#0A0F1E]/95 backdrop-blur-md"
            />
            
            <motion.div 
              layoutId={`card-${selectedId}`}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col w-full max-w-4xl max-h-[90vh] relative z-10"
            >
              {/* Botón Cerrar */}
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-30 bg-white text-[#1D2757] p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>

              <div className="flex flex-col md:flex-row overflow-y-auto">
                {/* CONTENEDOR DE IMAGEN CORREGIDO */}
                <div className="relative h-48 sm:h-64 md:h-auto md:w-1/2 bg-gray-100 shrink-0 overflow-hidden">
                  <img 
                    src={selectedItem.imagen} 
                    alt={selectedItem.titulo} 
                    className="w-full h-full object-cover object-top" 
                  />
                </div>

                {/* TEXTO */}
                <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center bg-white">
                  <p className="text-[#C5A059] text-xs font-bold uppercase mb-2 tracking-widest">{selectedItem.ubicacion}</p>
                  <h4 className="text-[#1D2757] font-black text-3xl md:text-5xl uppercase mb-6 leading-tight">
                    {selectedItem.titulo}
                  </h4>
                  <div className="h-1.5 w-16 bg-[#C5A059] mb-8" />
                  <p className="text-gray-600 text-lg italic text-justify leading-relaxed">
                    {selectedItem.descripcion}
                  </p>
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="mt-10 w-full md:w-auto bg-[#1D2757] text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-all"
                  >
                    Regresar
                  </button>
                </div>
              </div>
              <div className="h-3 w-full bg-[#1D2757] shrink-0" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="w-full bg-[#1D2757] py-10 text-center mt-auto">
        <p className="text-[#C5A059] text-[9px] font-bold tracking-[0.4em] uppercase">Identidad y Movimiento • UMNG</p>
      </footer>
    </main>
  );
}