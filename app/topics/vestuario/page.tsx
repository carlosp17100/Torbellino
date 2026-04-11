"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

// 1. Configuración de datos de vestuario (Rutas Corregidas a .png)
const VESTUARIO_DETALLE = {
  femenino: {
    titulo: "Indumentaria Femenina",
    imagen: "/mujer.png", // CORREGIDO: Extension .png para coincidir con tu archivo físico
    items: [
      { p: "Falda amplia", d: "Larga, de colores vivos o florales, permite el movimiento circular." },
      { p: "Blusa blanca", d: "Manga larga o 3/4 con encajes o bordados tradicionales." },
      { p: "Delantal", d: "Referencia al trabajo doméstico y campesino decorado." },
      { p: "Pañolón", d: "Mantilla sobre los hombros para protección térmica." },
      { p: "Sombrero", d: "Trenzas adornadas y sombrero de copa baja." }
    ]
  },
  masculino: {
    titulo: "Indumentaria Masculina",
    imagen: "/hombre.png", // CORREGIDO: Extension .png para coincidir con tu archivo físico
    items: [
      { p: "Ruana / Poncho", d: "Prenda emblemática del altiplano, herencia indígena Muisca." },
      { p: "Camisa blanca", d: "Manga larga, representación del trabajo rural andino." },
      { p: "Pantalón", d: "De paño oscuro o blanco según la región." },
      { p: "Sombrero", d: "Campesino de paño o fique, fundamental para la identidad." },
      { p: "Pañuelo Rojo", d: "Asociado a la tradición mestiza y festiva." }
    ]
  }
};

const ETAPAS_EVOLUCION = [
  { id: "tradicional", titulo: "Etapa Tradicional", sub: "Contexto rural y festivo", texto: "El vestuario respondía a la vida cotidiana campesina. No existía un 'traje escénico'; las personas bailaban con su ropa habitual de domingo." },
  { id: "institucional", titulo: "Institucionalización", sub: "Siglo XX - Folclorismo", texto: "Estandarización para grupos folclóricos. Se amplió el vuelo de las faldas y se incorporaron colores más vivos para el escenario teatral." },
  { id: "contemporanea", titulo: "Etapa Contemporánea", sub: "Investigación – Creación", texto: "Reinterpretación simbólica. Se experimenta con materiales livianos y nuevas paletas sin perder elementos identitarios como la ruana." }
];

export default function VestuarioPage() {
  const router = useRouter();
  const [genero, setGenero] = useState<"femenino" | "masculino">("femenino");

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans">
      
      {/* NAVEGACIÓN INSTITUCIONAL */}
      <nav className="w-full p-6 flex justify-between items-center bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/umng-logo.png" alt="UMNG" width={45} height={45} priority />
          <span className="text-[#1D2757] font-bold text-xs uppercase leading-tight border-l pl-4 border-gray-200">
            Universidad Militar <br /> Nueva Granada
          </span>
        </div>
        <h2 className="hidden md:block text-[#1D2757] font-black text-xl tracking-widest uppercase">Vestuario y Evolución</h2>
        <button onClick={() => router.push("/topics")} className="bg-[#1D2757] text-white px-6 py-2 rounded-md font-bold text-xs uppercase hover:bg-[#C5A059] transition-all">
          Volver
        </button>
      </nav>

      {/* SECCIÓN 1: INTRODUCCIÓN */}
      <section className="max-w-7xl mx-auto w-full p-8 md:p-16 text-center mt-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[#C5A059] font-black text-sm uppercase tracking-[0.4em] mb-4 block">Identidad Visual</span>
          <h3 className="text-[#1D2757] text-4xl md:text-6xl font-black uppercase mb-8">Elementos Esenciales</h3>
          <p className="max-w-3xl mx-auto text-[#1D2757]/70 text-lg leading-relaxed italic">
            "Raíces en la indumentaria campesina del altiplano cundiboyacense, influenciada por la herencia indígena muisca-guane y los aportes coloniales."
          </p>
        </motion.div>
      </section>

      {/* SECCIÓN 2: VENTANA INTERACTIVA */}
      <section className="max-w-7xl mx-auto w-full p-6 mb-20">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[650px] border border-gray-100">
          
          {/* Lado Imagen */}
          <div className="flex-1 bg-[#F9FAFB] flex flex-col items-center justify-center p-12 border-r border-gray-50 min-h-[500px]">
             {/* Selectores de género con z-index alto */}
             <div className="mb-8 flex gap-3 z-30">
                <button 
                  onClick={() => setGenero("femenino")}
                  className={`px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest transition-all ${genero === "femenino" ? "bg-[#1D2757] text-white shadow-lg" : "bg-white text-gray-400 border"}`}
                > Mujer </button>
                <button 
                  onClick={() => setGenero("masculino")}
                  className={`px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest transition-all ${genero === "masculino" ? "bg-[#1D2757] text-white shadow-lg" : "bg-white text-gray-400 border"}`}
                > Hombre </button>
             </div>

             <AnimatePresence mode="wait">
               <motion.div 
                 key={genero}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 1.05 }}
                 className="relative w-full h-[550px] flex items-center justify-center"
               >
                 {/* Contenedor con tamaño definido para que la imagen aparezca correctamente. */}
                 <div className="w-full h-full relative">
                    <Image 
                      src={VESTUARIO_DETALLE[genero].imagen} 
                      alt={`Traje ${genero}`} 
                      width={640}
                      height={550}
                      className="object-contain w-full h-full" 
                      priority
                    />
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>

          {/* Lado Detalle de Prendas */}
          <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
            <h4 className="text-[#C5A059] font-black text-xs uppercase tracking-[0.3em] mb-2">Desglose de prendas</h4>
            <h5 className="text-[#1D2757] text-3xl font-black uppercase mb-10">{VESTUARIO_DETALLE[genero].titulo}</h5>
            
            <div className="space-y-8">
              {VESTUARIO_DETALLE[genero].items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <p className="text-[#1D2757] font-black text-sm uppercase tracking-widest mb-1 group-hover:text-[#C5A059] transition-colors">• {item.p}</p>
                  <p className="text-[#1D2757]/60 text-sm leading-relaxed pl-4">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: EVOLUCIÓN HISTÓRICA */}
      <section className="bg-[#1D2757] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-white text-4xl font-black uppercase">Evolución Histórica</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ETAPAS_EVOLUCION.map((etapa) => (
              <motion.div 
                key={etapa.id}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 flex flex-col"
              >
                <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-widest mb-4 block">{etapa.sub}</span>
                <h5 className="text-white text-2xl font-black uppercase mb-6 leading-tight">{etapa.titulo}</h5>
                <p className="text-white/70 text-sm leading-relaxed text-justify">
                  {etapa.texto}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#1D2757] p-6 mt-auto border-t border-[#C5A059]">
        <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase text-center">
          Identidad y Movimiento • Proyecto UMNG
        </p>
      </footer>
    </main>
  );
}