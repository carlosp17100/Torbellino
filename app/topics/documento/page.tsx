"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Download, FileText, ExternalLink, Eye, Smartphone, Monitor } from "lucide-react";

export default function DocumentoPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detección precisa de dispositivos móviles para adaptar la experiencia de lectura
    const checkMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent || navigator.vendor || (window as any).opera
    );
    setIsMobile(checkMobile);
  }, []);

  const pdfPath = "/investigacion.pdf";

  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans overflow-x-hidden relative">
      
      {/* NAVEGACIÓN INSTITUCIONAL */}
      <nav className="w-full p-4 md:p-6 flex justify-between items-center z-50 bg-white shadow-sm border-b sticky top-0">
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
          Documento <span className="hidden sm:inline">de Investigación</span>
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

      {/* CONTENIDO PRINCIPAL EXTRA ANCHO */}
      <div className="flex-1 flex flex-col items-center p-4 md:p-8 lg:p-12 relative max-w-7xl mx-auto w-full">
        
        {/* TÍTULO CON EMOJI */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <span className="text-4xl mb-3 inline-block">📜</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1D2757] tracking-tight uppercase">
            DOCUMENTO DE INVESTIGACIÓN
          </h1>
        </motion.div>

        {/* LÍNEA DORADA */}
        <motion.div
          className="w-20 h-[3px] bg-[#C5A059] mb-6"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        {/* SUBTÍTULO / DESCRIPCIÓN */}
        <motion.p
          className="text-xs md:text-sm text-gray-500 max-w-2xl text-center mb-8 uppercase tracking-widest leading-relaxed font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Proyecto de Investigación UMNG • Universidad Militar Nueva Granada
        </motion.p>

        {/* BOTONES DE ACCIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href={pdfPath}
            download="investigacion.pdf"
            className="inline-flex items-center gap-3 px-8 py-3 bg-[#1D2757] text-white rounded-xl text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#C5A059] transition-all duration-300 shadow-sm"
          >
            <Download className="w-4 h-4" /> Descargar PDF
          </a>

          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-[#C5A059] text-white rounded-xl text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#1D2757] transition-all duration-300 shadow-sm"
          >
            <Eye className="w-4 h-4" /> Ver en Pantalla Completa
          </a>
        </motion.div>

        {/* VISOR ADAPTATIVO INTELIGENTE (MÓVIL VS ESCRITORIO) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full border border-gray-200 rounded-[2rem] shadow-2xl overflow-hidden bg-white flex flex-col"
          style={{ height: isMobile ? "650px" : "1350px" }}
        >
          <div className="w-full bg-[#1D2757] px-6 py-4 flex items-center justify-between text-white text-xs tracking-widest uppercase shrink-0">
            <span className="flex items-center gap-2 font-medium">
              <FileText className="w-4 h-4 text-[#C5A059]" /> investigacion.pdf
            </span>
            <span className="text-gray-300">
              {isMobile ? "Modo Lectura Móvil" : "Desplazamiento Vertical Extendido"}
            </span>
          </div>

          {mounted ? (
            <div className="w-full bg-white flex-1 relative" style={{ height: isMobile ? "calc(650px - 56px)" : "calc(1350px - 56px)" }}>
              {isMobile ? (
                // Panel optimizado para móviles con acceso directo instantáneo y visor táctil
                <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-gradient-to-b from-gray-50 to-white gap-6">
                  <div className="w-20 h-20 bg-[#1D2757]/10 rounded-full flex items-center justify-center text-[#1D2757] shadow-inner">
                    <Smartphone className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-[#1D2757] font-bold text-lg mb-2 uppercase tracking-wide">
                      Documento de Investigación UMNG
                    </h3>
                    <p className="text-gray-500 text-xs max-w-sm mx-auto mb-4 leading-relaxed">
                      Para garantizar una lectura fluida, nítida y sin recortes en tu celular, abre el visor interactivo oficial.
                    </p>
                  </div>
                  <div className="flex flex-col w-full max-w-xs gap-3">
                    <a
                      href={pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-[#1D2757] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Abrir Visor en Móvil
                    </a>
                    <a
                      href={pdfPath}
                      download="investigacion.pdf"
                      className="w-full py-3 bg-gray-100 text-[#1D2757] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center justify-center gap-2 border border-gray-200"
                    >
                      <Download className="w-4 h-4" /> Descargar Archivo
                    </a>
                  </div>
                </div>
              ) : (
                // Visor optimizado para Computadora / Desktop
                <iframe
                  src={`${pdfPath}#view=FitH`}
                  title="Investigación UMNG"
                  className="w-full h-full border-0 block"
                />
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center p-20 text-[#1D2757] font-semibold text-sm bg-white flex-1">
              Cargando documento...
            </div>
          )}
        </motion.div>

      </div>

      {/* FOOTER */}
      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/50" />
          <p className="text-[#C5A059] text-[8px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-center">
            • Proyecto UMNG •
          </p>
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/50" />
        </div>
      </footer>

    </main>
  );
}