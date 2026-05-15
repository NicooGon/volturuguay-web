import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import ProjectCard from "../components/ProjectCard";

import img2 from "../images/img2.jpeg";
import img5 from "../images/img5.jpeg";
import img10 from "../images/img10.jpeg";
import img12 from "../images/img12.jpeg";
import img14 from "../images/img14.jpeg";

const PROJECTS = [
  { id: 1, tag: "Infraestructura", title: "Bodega Oceánica", loc: "José Ignacio · Maldonado", img: img2, tall: true },
  { id: 2, tag: "Comercial", title: "Iluminación Estación DISA", loc: "Parada 24 · Playa Mansa", img: img5 },
  { id: 3, tag: "Obra Nueva", title: "Hotel Enjoy (Conrad)", loc: "Parada 4 · Playa Mansa", img: img10 },
  { id: 4, tag: "Iluminación Exterior", title: "Diseño lumínico de accesos", loc: "Residencia privada · Manantiales", img: img12 },
  { id: 5, tag: "Industrial", title: "Tablero de distribución 400V", loc: "Planta de servicios · Maldonado", img: img14 },
];

export default function GallerySection() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="galeria" className="relative py-12 md:py-20 px-[6vw] bg-white overflow-hidden">
      <div className="container mx-auto">

        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.07]">
          <div className="absolute top-5 md:top-10 right-0 w-[300px] md:w-[620px] overflow-hidden">
            <svg 
              viewBox="0 0 620 140" 
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-auto translate-x-10 md:translate-x-0"
            >
              <path d="M0 60 Q80 18 160 60 Q240 102 320 60 Q400 18 480 60 Q550 95 620 60" fill="none" stroke="#1A3D6B" strokeWidth="2.5" />
              <path d="M0 75 Q80 33 160 75 Q240 117 320 75 Q400 33 480 75 Q550 110 620 75" fill="none" stroke="#2F7FD8" strokeWidth="2" />
              <path d="M0 40 Q80 0 160 40 Q240 80 320 40 Q400 0 480 40 Q550 68 620 40" fill="none" stroke="#2F7FD8" strokeWidth="1" strokeDasharray="4 7" />
            </svg>
          </div>

          <svg width="80%" height="2" className="absolute bottom-10 left-[10%] md:left-1/4 md:w-1/2" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="#0B1F3A" strokeWidth="2" strokeDasharray="8 12" />
          </svg>
            
          <div className="absolute bottom-20 left-1/4 w-1/2 h-[1px] border-b border-dashed border-[#0B1F3A] opacity-20"></div>
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16" data-aos="fade-up">
          <div className="max-w-xl">
            <span className="text-[#2F7FD8] text-[0.7rem] font-bold uppercase tracking-widest flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#2F7FD8]" /> Galería
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1F3A] leading-tight">Proyectos <br className="hidden md:block" /> Realizados</h2>
          </div>
          <p className="text-[#6B7E96]  max-w-sm text-base lg:text-right ">Selección de trabajos eléctricos en Punta del Este y Maldonado.</p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[275px] items-stretch">
          {PROJECTS.map((p, i) => (
            <div 
              key={p.id} 
              className={`relative w-full h-[400px] 
                ${p.tall ? 'md:row-span-2 md:h-full' : 'md:h-full'}`} 
              data-aos="fade-up"
            >
              <ProjectCard 
                project={p} 
                variant="hero"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:justify-end">
          <Link 
            to="/galeria" 
            className="px-10 py-3 rounded-full border border-slate-200 font-bold text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white transition-all text-sm tracking-wide"
          >
            Explorar toda la galería →
          </Link>
        </div>
      </div>
    </section>
  );
}