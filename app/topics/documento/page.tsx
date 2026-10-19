
"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Download, FileText, ExternalLink } from "lucide-react";

const PdfViewer = dynamic(
  () => import("../../components/PdfViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] flex items-center justify-center">
        Cargando visor PDF...
      </div>
    ),
  }
);

export default function DocumentoPage() {
  const router = useRouter();
  const pdfPath = "/Proyecto%20de%20investigacion%20UMNG.pdf";
  return (
    <main className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans overflow-x-hidden">
      <nav className="w-full p-4 md:p-6 flex justify-between items-center bg-white shadow-sm border-b sticky top-0 z-50">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 md:gap-4"
        >
          <div className="relative w-8 h-8 md:w-12 md:h-12">
            <Image
              src="/umng-logo.png"
              alt="UMNG"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>

          <span className="text-[#1D2757] font-bold text-[9px] md:text-xs uppercase leading-tight border-l pl-2 md:pl-4 border-gray-200 text-left">
            Universidad Militar
            <br />
            Nueva Granada
          </span>
        </button>

        <h2 className="text-[#1D2757] font-black text-[10px] md:text-xl tracking-widest uppercase text-center px-2">
          Documento
          <span className="hidden sm:inline"> de Investigación</span>
        </h2>

        <button
          onClick={() => router.push("/topics")}
          className="bg-[#1D2757] text-white px-3 md:px-6 py-2 rounded-md font-bold text-xs hover:bg-[#C5A059] transition-all flex items-center gap-2 uppercase"
        >
          <span>‹</span> Volver
        </button>
      </nav>

      <div className="flex-1 flex flex-col items-center p-4 md:p-12 lg:p-20 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <span className="text-4xl mb-3 inline-block">📜</span>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1D2757] uppercase">
            Documento de Investigación
          </h1>
        </motion.div>

        <motion.div
          className="w-20 h-[3px] bg-[#C5A059] mb-6"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        <p className="text-xs md:text-sm text-gray-500 max-w-2xl text-center mb-8 uppercase tracking-widest leading-relaxed font-semibold">
          Proyecto de Investigación UMNG • Universidad Militar Nueva Granada
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href={pdfPath}
            download="Proyecto-de-investigacion-UMNG.pdf"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#1D2757] text-white rounded-xl text-xs tracking-widest uppercase font-bold hover:bg-[#C5A059] transition-all"
          >
            <Download className="w-4 h-4" />
            Descargar PDF
          </a>

          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#1D2757] text-[#1D2757] rounded-xl text-xs tracking-widest uppercase font-bold hover:bg-[#1D2757] hover:text-white transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Abrir en pestaña nueva
          </a>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full border border-gray-200 rounded-2xl md:rounded-[2rem] shadow-lg overflow-hidden bg-white"
        >
          <div className="bg-[#1D2757] px-4 md:px-6 py-3 flex items-center justify-between text-white text-xs uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#C5A059]" />
              Visualizador de documento
            </span>
            <span className="text-gray-300">PDF.js</span>
          </div>

          <PdfViewer file={pdfPath} />
        </motion.section>
      </div>

      <footer className="w-full bg-[#1D2757] p-4 border-t border-[#C5A059]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/50" />
          <p className="text-[#C5A059] text-[8px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-center">
            • Proyecto UMNG •
          </p>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/50" />
        </div>
      </footer>
    </main>
  );
}
