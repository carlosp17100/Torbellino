"use client";

import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

// 1. Interfaces para TypeScript
interface HistoriaHito {
  id: number;
  siglo: string;
  hitos: string[];
  icon: string;
}

// 2. Datos de Origen Territorial
const HISTORIA_TIMELINE: HistoriaHito[] = [
  { 
    id: 1, 
    siglo: "XVIII", 
    hitos: ["Registros históricos de presencia temprana", "Consolidación en el núcleo andino"], 
    icon: "📜" 
  },
  { 
    id: 2, 
    siglo: "XIX", 
    hitos: ["Danza suelta en pareja", "Giros rápidos y zapateo", "Juego de evasión", "Coplas improvisadas"], 
    icon: "💃" 
  },
  { 
    id: 3, 
    siglo: "Actualidad", 
    hitos: ["Cohesión en festividades religiosas", "Saberes intergeneracionales", "Revitalización Universitaria"], 
    icon: "🎓" 
  },
];

// 3. Variantes de Animación
const revealVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 70, damping: 15, duration: 0.8 } 
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function TerritorioPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans overflow-x-hidden relative">
      
      {/* NAVEGACIÓN INSTITUCIONAL */}
      <nav className="w-full p-4 md:p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b sticky top-0 shrink-0">
        <div className="flex items-center gap-2 md:gap-4 cursor-pointer shrink-0" onClick={() => router.push("/")}>
          <div className="relative w-8 h-8 md:w-12 md:h-12">
            <Image src="/umng-logo.png" alt="UMNG" fill className="object-contain" priority />
          </div>
          <span className="text-[#1D2757] font-bold text-[9px] md:text-xs tracking-tighter uppercase leading-tight border-l pl-2 md:pl-4 border-gray-200">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>

        <h2 className="text-[#1D2757] font-black text-[10px] md:text-xl tracking-[0.1em] md:tracking-[0.2em] uppercase text-center px-2">
          Origen <span className="hidden sm:inline">Territorial</span>
        </h2>

        <button 
          onClick={() => router.push("/topics")}
          className="bg-[#1D2757] text-white px-3 py-1.5 md:px-6 md:py-2 rounded-md font-bold text-[9px] md:text-xs hover:bg-[#C5A059] transition-all flex items-center gap-1 md:gap-2 uppercase tracking-widest shadow-sm"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="hidden xs:inline">Volver</span>
        </button>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-20 relative">
        
        {/* SECCIÓN 1: EL CORAZÓN ANDINO (territorio1.png) - RECUADRO COMPLETO APLICADO */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="w-full max-w-7xl mx-auto z-10 mb-32 bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100 relative"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-[#C5A059]" />
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div variants={revealVariants} className="flex-1 relative bg-white p-3 rounded-3xl shadow-2xl border border-gray-100">
              <div className="absolute top-0 left-0 w-full lg:w-1 h-1 lg:h-full bg-[#C5A059]" />
              <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-2xl">
                <Image src="/territorio1.png" alt="Altiplano" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div variants={revealVariants} className="flex-1 text-center md:text-left">
              <h3 className="text-[#1D2757] text-4xl md:text-6xl font-black uppercase mb-6">El Corazón Andino</h3>
              <p className="text-[#1D2757]/80 text-lg md:text-2xl font-medium leading-relaxed italic border-l-4 border-[#C5A059] pl-6 text-justify">
                El torbellino nace en el <strong>altiplano cundiboyacense</strong>, con raíces profundas en Boyacá y Cundinamarca. Es una práctica cultural situada donde la música y la danza convergen como reflejo del mundo campesino.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* SECCIÓN 2: ENCUENTRO MESTIZO (territorio2.png) */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full max-w-7xl mx-auto z-10 mb-32 bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100 relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1D2757] via-[#C5A059] to-[#1D2757]" />
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <motion.div variants={revealVariants} className="flex-1">
              <h3 className="text-[#1D2757] text-4xl md:text-5xl font-black uppercase mb-6">Esencia Híbrida</h3>
              <p className="text-[#1D2757]/80 text-lg md:text-xl font-medium leading-relaxed italic text-justify">
                Como señala la tradición mestiza, aquí confluyen prácticas indígenas cordilleranas con influencias españolas coloniales. Un proceso de <strong>apropiación y resignificación cultural</strong> que define nuestra identidad folclórica.
              </p>
            </motion.div>
            <motion.div variants={revealVariants} className="flex-1 relative bg-white p-3 rounded-3xl shadow-2xl border border-gray-100">
                <div className="absolute top-0 left-0 w-full lg:w-1 h-1 lg:h-full bg-[#1D2757]" />
                <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden rounded-2xl">
                    <Image src="/territorio2.png" alt="Mestizaje" fill className="object-cover" />
                </div>
            </motion.div>
          </div>
        </motion.section>

        {/* SECCIÓN 3: LA DANZA EN EL TIEMPO (territorio3.png) */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <motion.div variants={revealVariants} className="flex-1 relative bg-white p-3 rounded-3xl shadow-2xl border border-gray-100 lg:sticky lg:top-32">
            <div className="absolute top-0 left-0 w-full lg:w-1 h-1 lg:h-full bg-[#C5A059]" />
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
              <Image src="/territorio3.png" alt="Danza Histórica" fill className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
                <p className="text-white text-base md:text-lg italic px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm inline-block">
                  Desde el Siglo XVIII, un espacio de interacción social y códigos simbólicos.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col gap-10">
            {HISTORIA_TIMELINE.map((item) => (
              <motion.div
                key={item.id}
                variants={item.id === 2 ? floatingVariants : revealVariants}
                animate={item.id === 2 ? "animate" : "visible"}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col gap-4 text-center items-center relative"
              >
                <div className="absolute -top-6 -left-6 text-5xl md:text-6xl">{item.icon}</div>
                <h4 className="text-[#C5A059] text-2xl font-black uppercase tracking-widest bg-[#F3F4F6] px-4 py-1 rounded-full">
                  {item.siglo === "Actualidad" ? item.siglo : `Siglo ${item.siglo}`}
                </h4>
                <div className="h-0.5 w-16 bg-[#1D2757]" />
                <ul className="text-[#1D2757]/90 text-sm md:text-lg font-medium italic list-none flex flex-wrap gap-3 justify-center">
                  {item.hitos.map((hito, index) => (
                    <li key={index} className="before:content-['•'] before:text-[#C5A059] before:mr-2">{hito}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>

      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059] mt-20 text-center">
          <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase">
            Identidad y Movimiento • Revitalización Universitaria UMNG
          </p>
      </footer>
    </main>
  );
}