
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import type { PDFDocumentProxy } from "pdfjs-dist";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfViewer({ file }: { file: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(700);
  const [numPages, setNumPages] = useState(0);
  const [error, setError] = useState("");

  const updateWidth = useCallback(() => {
    if (containerRef.current) {
      setWidth(Math.max(250, containerRef.current.clientWidth - 32));
    }
  }, []);

  useEffect(() => {
    updateWidth();

    const element = containerRef.current;
    if (!element) return;

    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);

    return () => observer.disconnect();
  }, [updateWidth]);

  function onLoadSuccess(pdf: PDFDocumentProxy) {
    setNumPages(pdf.numPages);
    setError("");
  }

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[500px] bg-gray-100 p-4 overflow-auto"
    >
      <Document
        file={file}
        onLoadSuccess={onLoadSuccess}
        onLoadError={(err) => {
          console.error("Error al cargar PDF:", err);
          setError("No se pudo cargar el PDF. Verifica la ruta y el archivo.");
        }}
        loading={<p className="p-8 text-center">Cargando PDF...</p>}
        error={<p className="p-8 text-center text-red-600">Error al abrir el PDF.</p>}
        className="flex flex-col items-center gap-4"
      >
        {Array.from({ length: numPages }, (_, index) => (
          <div key={index} className="bg-white shadow-md">
            <Page
              pageNumber={index + 1}
              width={width}
              renderTextLayer
              renderAnnotationLayer
            />
          </div>
        ))}
      </Document>

      {error && (
        <p role="alert" className="p-4 text-center text-red-600">
          {error}
        </p>
      )}

      {numPages > 0 && (
        <p className="text-center text-xs text-gray-500 py-4">
          Documento completo · {numPages} páginas
        </p>
      )}
    </div>
  );
}
