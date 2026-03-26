"use client";

import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

// 1. Interfaces para TypeScript
interface Instrumento {
  id: number;
  src: string;
  alt: string;
  name: string;
  functionTitle: string;
  functionDesc: string;
  roleIcon: string;
}

// 2. Datos de Instrumentación
const INSTRUMENTOS_PRINCIPALES: Instrumento[] = [
  { 
    id: 1, 
    src: "/instrumento1.jpg", 
    alt: "Tiple Colombiano", 
    name: "El Tiple", 
    functionTitle: "Base Armónica y Rítmica", 
    functionDesc: "Sostiene el pulso constante y la riqueza armónica necesaria para la velocidad del baile.",
    roleIcon: "🎸"
  },
  { 
    id: 2, 
    src: "/instrumento2.jpg", 
    alt: "Guitarra y Requinto", 
    name: "Guitarra y Requinto", 
    functionTitle: "Dualidad Melodía-Armonía", 
    functionDesc: "El requinto lidera la melodía ágil, mientras la guitarra refuerza la base armónica.",
    roleIcon: "✨"
  },
];

const PERCUSION_MENOR = [
  { id: 1, name: "Chucho", icon: "🥁" },
  { id: 2, name: "Esterilla", icon: "🎋" },
  { id: 3, name: "Triángulo", icon: "📐" },
];

// 3. Variantes de Animación Framer Motion

// Animación de aparición secuencial (Stagger)
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

// Animación de revelado desde el lado con desenfoque (In Crescendo)
const crescendoVariants: Variants = {
  hidden: { x: -30, opacity: 0, filter: "blur(5px)" },
  visible: { 
    x: 0, 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 80, damping: 18, duration: 1 } 
  },
};

// Animación de flotación infinita para percusión
const floatingPercusion: Variants = {
  animate: {
    y: [0, -15, 0],
    rotateZ: [0, 3, 0, -3, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function InstrumentacionPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans overflow-x-hidden relative">
      
      {/* NAVEGACIÓN INSTITUCIONAL */}
      <nav className="w-full p-4 md:p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b sticky top-0 shrink-0">
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
          Soporte <span className="hidden sm:inline">Instrumental</span>
        </h2>

        <button 
          onClick={() => router.push("/topics")}
          className="bg-[#1D2757] text-white px-3 py-1.5 md:px-6 md:py-2 rounded-md font-bold text-[9px] md:text-xs hover:bg-[#C5A059] transition-all flex items-center gap-1 md:gap-2 uppercase tracking-widest shadow-sm shrink-0"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span className="hidden xs:inline">Volver</span>
        </button>
      </nav>

      {/* CONTENIDO PRINCIPAL - EXPERIENCIA ORQUESTAL */}
      <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-20 relative">
        
        {/* FONTO DECORATIVO (ONDAS SONORAS SUTILES CSS) */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex flex-col justify-center">
            <div className="h-0.5 bg-[#C5A059] w-full my-6 transform rotate-3" />
            <div className="h-0.5 bg-[#1D2757] w-full my-6 transform -rotate-3" />
            <div className="h-0.5 bg-[#C5A059] w-full my-6 transform rotate-3" />
            <div className="h-0.5 bg-[#1D2757] w-full my-6 transform -rotate-3" />
        </div>

        {/* SECCIÓN 1: INTRODUCCIÓN ESTRUCTURAL (Nota alta) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl mx-auto mb-16 lg:self-start z-10"
        >
      
        </motion.div>

        {/* SECCIÓN 2: LOS SOLISTAS (Galería Asimétrica) */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row gap-12 z-10 mb-20"
        >
          {INSTRUMENTOS_PRINCIPALES.map((inst) => (
            <motion.div
              key={inst.id}
              variants={crescendoVariants}
              className="flex-1 flex flex-col gap-6"
            >
              {/* Tarjeta de Imagen Asimétrica */}
              <div className="relative bg-white p-3 rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden" style={{ borderRadius: inst.id % 2 === 0 ? "3rem 1rem 3rem 1rem" : "1rem 3rem 1rem 3rem" }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059]" />
                <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden rounded-2xl">
                  <Image 
                    src={inst.src}
                    alt={inst.alt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Superposición con Nombre (Nota musical style) */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center z-10">
                    <p className="text-white text-3xl md:text-5xl font-black uppercase tracking-widest backdrop-blur-sm px-6 py-3 rounded-full inline-block bg-white/5 border border-white/20">
                      {inst.name}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Tarjeta de Función Técnica */}
              <motion.div 
                whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 relative text-center items-center flex flex-col"
              >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#1D2757]" />
                  <span className="text-5xl mb-4">{inst.roleIcon}</span>
                  <h4 className="text-[#1D2757] text-xl font-black uppercase tracking-widest">{inst.functionTitle}</h4>
                  <div className="h-0.5 w-16 bg-[#C5A059] my-3" />
                  <p className="text-[#1D2757]/80 text-sm md:text-base font-medium leading-relaxed italic">{inst.functionDesc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* SECCIÓN 3: PERCUSIÓN VERNÁCULA (Notas rítmicas flotantes) */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center z-10"
        >
          {/* LADO IZQUIERDO: Imagen Percusión */}
          <motion.div variants={crescendoVariants} className="flex-1 relative bg-white p-3 rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col w-full">
            <div className="absolute top-0 left-0 w-1 lg:w-full h-full lg:h-1 bg-[#1D2757]" />
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl mb-4">
              <Image 
                src="/instrumento4.jpg" // Imagen de detalles percusión menor
                alt="Percusión Menor"
                fill
                className="object-cover"
                unoptimized
              />
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center z-10">
                <p className="text-white text-base md:text-xl font-medium leading-relaxed italic backdrop-blur-sm px-4 py-2 rounded-xl inline-block bg-white/5">
                  Complementos rítmicos de carácter vernáculo.
                </p>
              </div>
            </div>
            <p className="text-[#1D2757] text-sm md:text-base font-black uppercase tracking-widest text-center px-4 py-2">
                Acompañamiento Vernáculo • Investigación–Creación
            </p>
          </motion.div>

          {/* LADO DERECHO: Íconos Flotantes */}
          <div className="flex flex-row flex-wrap gap-6 lg:gap-8 justify-center shrink-0">
            {PERCUSION_MENOR.map((perc) => (
              <motion.div
                key={perc.id}
                variants={floatingPercusion}
                initial="initial"
                animate="animate"
                transition={{ delay: perc.id * 0.4 }}
                whileHover={{ scale: 1.1, rotateZ: perc.id % 2 === 0 ? 5 : -5 }}
                className="bg-white p-8 rounded-full shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center backdrop-blur-sm cursor-pointer"
                style={{ width: "160px", height: "160px" }}
              >
                <span className="text-6xl mb-3">{perc.icon}</span>
                <p className="text-[#1D2757] text-xs font-bold uppercase tracking-wider">{perc.name}</p>
                <div className="h-0.5 w-10 bg-[#C5A059] mt-2" />
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>

      {/* FOOTER */}
      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059] mt-20">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/50" />
          <p className="text-[#C5A059] text-[8px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-center">
            Identidad y Movimiento • Proyecto UMNG
          </p>
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/50" />
        </div>
      </footer>
    </main>
  );
}