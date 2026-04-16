"use client";

import { motion, Variants, AnimatePresence } from "framer-motion"; // Añadido AnimatePresence
import { useRouter } from "next/navigation";
import { useState } from "react"; // Añadido useState

// 1. Estructura de Datos (Sin cambios)
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

// 2. Variantes de Animación
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100, damping: 12 } 
  },
  hover: { 
    y: -10, 
    transition: { duration: 0.3 } 
  }
} as const;

export default function TerritorioPage() {
  const router = useRouter();
  // Estado para manejar qué card está expandida
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Encontrar la data del elemento seleccionado
  const selectedItem = TERRITORIOS_DATA.find(item => item.id === selectedId);

  return (
    <main className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans overflow-x-hidden">
      
      {/* NAVEGACIÓN */}
      <nav className="w-full p-4 md:p-6 flex justify-between items-center z-50 bg-white shadow-sm sticky top-0">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <div className="relative w-10 h-10">
            <img src="/umng-logo.png" alt="UMNG" className="object-contain w-full h-full" />
          </div>
          <span className="text-[#1D2757] font-bold text-[10px] md:text-xs uppercase leading-tight border-l pl-4 border-gray-200">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>
        <h2 className="text-[#1D2757] font-black text-sm md:text-xl tracking-widest uppercase">
          Territorios <span className="text-[#C5A059]">del Torbellino</span>
        </h2>
        <button 
          onClick={() => router.push("/topics")} 
          className="bg-[#1D2757] text-white px-4 py-2 rounded-md font-bold text-xs hover:bg-[#C5A059] transition-all uppercase tracking-widest"
        >
          Volver
        </button>
      </nav>

      {/* SECCIÓN 1: MAPA */}
      <section className="p-6 md:p-12 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square bg-white p-4 rounded-3xl shadow-xl border border-gray-100"
        >
           <img 
             src="/territorio1.png" 
             alt="Mapa Origen Torbellino" 
             className="object-contain w-full h-full p-4 md:p-8" 
           />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="bg-[#C5A059] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            Núcleo Andino
          </span>
          <h3 className="text-[#1D2757] text-4xl md:text-6xl font-black leading-none uppercase">
            Origen <br/> Territorial
          </h3>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify italic">
            El Torbellino tiene su epicentro en el <b>Altiplano Cundiboyacense</b> y las montañas de <b>Santander</b>. Es una danza que respira la identidad del campesino, consolidándose como el eje cultural de la región centro-oriental de Colombia.
          </p>
        </motion.div>
      </section>

      {/* SECCIÓN 2: GRID DE CARDS */}
      <section className="p-6 md:p-12 max-w-7xl mx-auto w-full mb-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {TERRITORIOS_DATA.map((card) => (
            <motion.div
              key={card.id}
              layoutId={`card-${card.id}`} // ID único para la transición
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedId(card.id)} // Activa el despliegue
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group h-[28rem] md:h-[29rem] cursor-pointer"
            >
              <motion.div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img 
                  src={card.imagen} 
                  alt={card.titulo} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1D2757]/90 backdrop-blur-md text-[#C5A059] px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter">
                    {card.tag}
                  </span>
                </div>
              </motion.div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-1">{card.ubicacion}</p>
                  <h4 className="text-[#1D2757] font-black text-lg leading-tight mb-3 uppercase">{card.titulo}</h4>
                </div>
                <p className="text-gray-500 text-xs italic leading-relaxed line-clamp-3">"{card.descripcion}"</p>
              </div>
              <div className="h-2 w-full bg-[#C5A059]" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ANIMACIÓN DE DESPLIEGUE (MODAL EXPANDIDO) */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Overlay oscuro de fondo */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Card Expandida */}
            <motion.div 
              layoutId={`card-${selectedId}`}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col w-full max-w-4xl max-h-[90vh] relative z-10"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>

              <div className="flex flex-col md:flex-row h-full">
                <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden">
                  <img 
                    src={selectedItem.imagen} 
                    alt={selectedItem.titulo} 
                    className="object-cover w-full h-full" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#1D2757] text-[#C5A059] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl">
                      {selectedItem.tag}
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center bg-white">
                  <p className="text-[#C5A059] text-xs font-bold uppercase mb-2 tracking-[0.2em]">{selectedItem.ubicacion}</p>
                  <h4 className="text-[#1D2757] font-black text-3xl md:text-4xl leading-tight mb-6 uppercase">{selectedItem.titulo}</h4>
                  <div className="h-1 w-20 bg-[#C5A059] mb-6" />
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic text-justify">
                    {selectedItem.descripcion}
                  </p>
                </div>
              </div>
              <div className="h-3 w-full bg-[#1D2757]" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="w-full bg-[#1D2757] p-8 text-center mt-auto">
        <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase">
          Identidad y Movimiento • Revitalización Universitaria UMNG
        </p>
      </footer>
    </main>
  );
}