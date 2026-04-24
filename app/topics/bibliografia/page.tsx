"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

// 1. Estructura de Datos de la Bibliografía
interface Referencia {
  id: number;
  autor: string;
  año: string;
  titulo: string;
  datos: string;
  tipo: "Libro" | "Artículo" | "Institucional" | "Web";
}

const BIBLIOGRAFIA_DATA: Referencia[] = [
  { id: 1, autor: "Abadía Morales, G.", año: "1983", titulo: "Compendio general del folclor colombiano", datos: "(4ª ed.). Instituto Colombiano de Cultura.", tipo: "Libro" },
  { id: 2, autor: "Bermúdez, E.", año: "1995", titulo: "La música tradicional andina colombiana", datos: "A Contratiempo, (9), 5–24. Biblioteca Nacional de Colombia.", tipo: "Artículo" },
  { id: 3, autor: "Castillo, O.", año: "2012", titulo: "Patrimonio cultural inmaterial: reflexiones desde la región andina colombiana", datos: "Universidad Nacional de Colombia.", tipo: "Institucional" },
  { id: 4, autor: "García Canclini, N.", año: "1990", titulo: "Culturas híbridas: estrategias para entrar y salir de la modernidad", datos: "Grijalbo.", tipo: "Libro" },
  { id: 5, autor: "Langebaek Rueda, C. H.", año: "2005", titulo: "Los muiscas: La historia milenaria de un pueblo chibcha", datos: "Instituto Colombiano de Antropología e Historia (ICANH).", tipo: "Libro" },
  { id: 6, autor: "Miñana Blasco, C.", año: "2000", titulo: "Entre el folklore y la etnomusicología: 60 años de estudios sobre la música tradicional en Colombia", datos: "Universidad Nacional de Colombia.", tipo: "Artículo" },
  { id: 7, autor: "Ministerio de Cultura de Colombia.", año: "2010", titulo: "Política para la salvaguardia del patrimonio cultural inmaterial", datos: "Ministerio de Cultura.", tipo: "Institucional" },
  { id: 8, autor: "Triana y Antorveza, H.", año: "1992", titulo: "El campesino cundiboyacense: cultura y tradición", datos: "Instituto Caro y Cuervo.", tipo: "Libro" },
  { id: 9, autor: "UNESCO.", año: "2003", titulo: "Convención para la salvaguardia del patrimonio cultural inmaterial", datos: "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura.", tipo: "Institucional" },
];

// 2. Animaciones
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function BibliografiaPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<string>("Todas");

  const categorias = ["Todas", "Libro", "Artículo", "Institucional"];
  const filteredData = filter === "Todas" 
    ? BIBLIOGRAFIA_DATA 
    : BIBLIOGRAFIA_DATA.filter(ref => ref.tipo === filter);

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      
      {/* NAVEGACIÓN INSTITUCIONAL (Consistente con tu estilo) */}
      <nav className="w-full p-4 md:px-12 md:py-6 flex justify-between items-center z-50 bg-white shadow-sm border-b sticky top-0">
        <div 
          className="flex items-center gap-2 md:gap-4 cursor-pointer shrink-0" 
          onClick={() => router.push("/")}
        >
          <div className="relative w-8 h-8 md:w-12 md:h-12">
            <Image src="/umng-logo.png" alt="UMNG" fill className="object-contain" priority />
          </div>
          <span className="text-[#1D2757] font-bold text-[9px] md:text-xs tracking-tighter uppercase leading-tight border-l pl-2 md:pl-4 border-gray-200">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>

        <h2 className="text-[#1D2757] font-black text-[10px] md:text-xl tracking-[0.1em] md:tracking-[0.2em] uppercase text-center px-2">
          Bibliografía <span className="hidden sm:inline">y Fuentes</span>
        </h2>

        <button 
          onClick={() => router.push("/topics")}
          className="bg-[#1D2757] text-white px-3 py-1.5 md:px-6 md:py-2.5 rounded-full font-bold text-[9px] md:text-xs hover:bg-[#C5A059] transition-all flex items-center gap-1 md:gap-2 uppercase tracking-widest shadow-sm"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span>Volver</span>
        </button>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 max-w-6xl mx-auto w-full p-6 md:p-12">
        
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#C5A059]/10 text-[#C5A059] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4">
            Investigación y Soporte
          </div>
          <h3 className="text-[#1D2757] text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            Fuentes <br className="md:hidden" /> Documentales
          </h3>
          <div className="h-1.5 w-24 bg-[#C5A059] mx-auto rounded-full" />
        </motion.header>

        {/* FILTROS INNOVADORES */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 md:px-8 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                  ? "bg-[#1D2757] text-white shadow-lg scale-105" 
                  : "bg-white text-[#1D2757] border border-gray-200 hover:border-[#C5A059]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID DE BIBLIOGRAFÍA */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredData.map((ref) => (
            <motion.div
              key={ref.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-xl hover:border-[#C5A059]/30 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest bg-[#C5A059]/5 px-3 py-1 rounded-full">
                    {ref.tipo}
                  </span>
                  <span className="text-[#1D2757]/30 font-black text-xl">0{ref.id}</span>
                </div>
                
                <h4 className="text-[#1D2757] font-bold text-lg md:text-xl mb-2 group-hover:text-[#C5A059] transition-colors leading-tight">
                  {ref.autor} ({ref.año})
                </h4>
                
                <p className="text-[#1D2757] text-base md:text-lg italic font-medium leading-relaxed mb-4">
                  {ref.titulo}
                </p>
                
                <p className="text-gray-500 text-sm font-normal">
                  {ref.datos}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-50 flex justify-end">
                <button className="text-[#1D2757]/40 hover:text-[#1D2757] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FOOTER INSTITUCIONAL */}

      <footer className="w-full bg-[#1D2757] p-6 border-t border-[#C5A059] mt-20">
        <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase text-center">
         • Proyecto UMNG
        </p>
      </footer>
    </main>
  );
}