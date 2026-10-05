"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";


const PILARES = [
  {
    titulo: "Torbellino y raíces indígenas",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A1E1B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-4a6 6 0 100-12 6 6 0 000 12zm0-4a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    )
  },
  {
    titulo: "Investigación",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A1E1B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    )
  },
  {
    titulo: "Amor como proceso",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A1E1B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    )
  },
  {
    titulo: "Encuentro, dificultades, unión y celebración",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A1E1B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  }
];


const CUATRO_MOMENTOS = [
  {
    id: 1,
    titulo: "Procesión",
    descripcion: "Atmósfera ritual que representa el encuentro y el nacimiento del vínculo entre los personajes.",
    imagen: "/momento1.jpg"
  },
  {
    id: 2,
    titulo: "Cintas",
    descripcion: "Los personajes se cruzan, se acercan y se alejan, representando las dificultades, los encuentros y las reconciliaciones de la relación.",
    imagen: "/cintas.jpg"
  },
  {
    id: 3,
    titulo: "Hilada",
    descripcion: "El acto de tejer representa la construcción de un proyecto de vida juntos, hasta llegar a la propuesta de matrimonio.",
    imagen: "/momento3.jpg"
  },
  {
    id: 4,
    titulo: "Merengue carranguero",
    descripcion: "La escena se transforma en una celebración colectiva, donde la pareja y la comunidad festejan la unión.",
    imagen: "/momento4.jpg"
  }
];

export default function EscenaPage() {
  const router = useRouter();
  const fotoBRef = useRef<HTMLDivElement>(null);

  const scrollToFotoB = () => {
    fotoBRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#F7F2ED] text-[#4A1E1B] font-serif overflow-x-hidden flex flex-col">
      
      {/* NAVEGACIÓN INSTITUCIONAL */}
      <nav className="w-full px-4 py-3 sm:px-6 sm:py-4 md:py-6 flex justify-between items-center z-50 bg-white border-b border-gray-200 sticky top-0 font-sans shadow-sm">
        <div 
          className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0" 
          onClick={() => router.push("/")}
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10">
            <Image src="/umng-logo.png" alt="UMNG" fill className="object-contain" priority />
          </div>
          <span className="text-[#1D2757] font-bold text-[8px] sm:text-[9px] md:text-xs uppercase leading-tight border-l pl-2 sm:pl-3 border-gray-300">
            UNIVERSIDAD MILITAR <br /> NUEVA GRANADA
          </span>
        </div>

        <h2 className="text-[#1D2757] font-black text-[10px] sm:text-xs md:text-xl uppercase tracking-[0.15em] sm:tracking-[0.25em] text-center px-1 sm:px-2">
          PROPUESTA ESCÉNICA
        </h2>

        <button 
          onClick={() => router.push("/topics")}
          className="bg-[#1D2757] text-white px-3 py-1.5 sm:px-6 sm:py-2 rounded-full font-bold text-[10px] sm:text-xs hover:bg-[#C5A059] transition-all flex items-center gap-1.5 sm:gap-2 uppercase tracking-widest shadow-md shrink-0"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span className="hidden xs:inline">VOLVER</span>
        </button>
      </nav>

      {

      }
      <section className="flex flex-col justify-between items-center px-4 sm:px-6 py-8 md:py-12 max-w-7xl mx-auto w-full relative">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 my-auto">
          
          {/* LADO IZQUIERDO: TEXTO E ÍCONOS */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#4A1E1B] leading-tight mb-3 sm:mb-4">
              Nuestra <br />
              <span className="font-semibold italic">propuesta escénica</span>
            </h1>

            {/* SEPARADOR DECORATIVO */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8 w-28 sm:w-32">
              <div className="h-[1px] bg-[#4A1E1B]/30 flex-1" />
              <div className="w-2 h-2 rotate-45 border border-[#4A1E1B]" />
              <div className="h-[1px] bg-[#4A1E1B]/30 flex-1" />
            </div>

            {/* 4 PILARES EN GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full">
              {PILARES.map((pilar, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EFE8E1] border border-[#4A1E1B]/20 flex items-center justify-center mb-2 sm:mb-3 shadow-inner group-hover:scale-105 transition-transform shrink-0">
                    {pilar.icon}
                  </div>
                  <p className="text-[11px] sm:text-xs md:text-sm text-[#4A1E1B] font-serif leading-tight sm:leading-snug">
                    {pilar.titulo}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* LADO DERECHO: FOTO PRINCIPAL (CORREGIDA LA ALTURA) */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-xl aspect-[4/3] min-h-[260px] sm:min-h-[360px] lg:min-h-[420px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-2 border-[#4A1E1B]/20 shadow-2xl">
              <Image 
                src="/momento4-1.jpg" 
                alt="Propuesta escénica"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* BOTÓN INFERIOR DE DESPLAZAMIENTO HACIA FOTO B */}
        <div className="pt-8 pb-4 flex flex-col items-center">
          <button 
            onClick={scrollToFotoB}
            className="bg-[#1D2757] text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-[#C5A059] transition-all flex items-center gap-2.5 sm:gap-3 shadow-lg group"
          >
            Ver los 4 Momentos
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {
        
      }
      <section ref={fotoBRef} className="min-h-screen bg-[#4A1E1B] text-[#F7F2ED] py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t-2 border-[#C5A059]/40 flex flex-col justify-center items-center relative">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
          
          {/* ENCABEZADO */}
          <div className="text-center mb-8 sm:mb-12 md:mb-14">
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal mb-2 sm:mb-3 tracking-wide text-[#F7F2ED]">
              La historia en cuatro momentos
            </h2>
            
            <div className="flex items-center justify-center gap-2 my-3 sm:my-4">
              <div className="h-[1px] w-8 sm:w-12 bg-[#C5A059]/60" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 border border-[#C5A059]" />
              <div className="h-[1px] w-8 sm:w-12 bg-[#C5A059]/60" />
            </div>

            <p className="text-[#E2D8CE] text-xs sm:text-sm md:text-base max-w-2xl font-serif italic px-2">
              Nuestra puesta en escena cuenta una historia de amor a través de cuatro momentos inspirados en el torbellino.
            </p>
          </div>

          {/* GRID DE TARJETAS TIPO ARCO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-8 sm:mb-12">
            {CUATRO_MOMENTOS.map((momento) => (
              <motion.div 
                key={momento.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F7F2ED] text-[#4A1E1B] rounded-t-[3rem] sm:rounded-t-[3.5rem] rounded-b-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-2xl border border-[#C5A059]/30 relative group overflow-hidden max-w-sm sm:max-w-none mx-auto w-full"
              >
                {/* MARCO ARCO CON NÚMERO BADGE */}
                <div className="relative w-full h-48 sm:h-56 rounded-t-[2.5rem] sm:rounded-t-[3rem] rounded-b-xl overflow-hidden mb-5 sm:mb-6 shadow-md border-2 border-white">
                  <Image 
                    src={momento.imagen} 
                    alt={momento.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  
                  {/* NUMERACIÓN INFERIOR DE LA FOTO */}
                  <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#4A1E1B] text-[#F7F2ED] border-2 border-[#C5A059] flex items-center justify-center font-sans font-bold text-xs shadow-md">
                    {momento.id}
                  </div>
                </div>

                {/* TÍTULO DEL MOMENTO */}
                <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2 text-[#4A1E1B]">
                  {momento.titulo}
                </h3>

                {/* ADORNO */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="h-[1px] w-4 sm:w-5 bg-[#C5A059]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <div className="h-[1px] w-4 sm:w-5 bg-[#C5A059]" />
                </div>

                {/* DESCRIPCIÓN */}
                <p className="text-[#624643] text-xs md:text-sm font-sans leading-relaxed font-normal">
                  {momento.descripcion}
                </p>
              </motion.div>
            ))}
          </div>

          {/* BOTÓN "SIGUIENTE PARTE" (Navega a /topics/origen) */}
          <div className="w-full flex justify-center mt-2 sm:mt-4">
            <button 
              onClick={() => router.push("/topics/origen")}
              className="bg-[#2D3452] hover:bg-[#1D2757] text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-sans font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all flex items-center gap-2.5 sm:gap-3 shadow-xl active:scale-95 group"
            >
              SIGUIENTE PARTE
              <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* BANNER FOOTER */}
      <footer className="w-full bg-[#1A2242] py-4 px-4 sm:px-6 md:px-12 flex items-center justify-between border-t border-[#C5A059]/30 font-sans relative">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#11162A] border border-gray-600/50 flex items-center justify-center shrink-0">
          <span className="text-[#F7F2ED] font-black text-[10px] sm:text-xs font-serif italic">N</span>
        </div>

        <div className="flex-1 flex items-center justify-center mx-2 sm:mx-6 md:mx-12">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C5A059]/50 to-[#C5A059]" />
          <span className="text-[#C5A059] text-[8px] sm:text-[9px] md:text-xs font-bold tracking-[0.25em] sm:tracking-[0.4em] uppercase whitespace-nowrap px-2 sm:px-4">
            • PROYECTO UMNG •
          </span>
          <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-[#C5A059]/50 to-[#C5A059]" />
        </div>
      </footer>
    </main>
  );
}