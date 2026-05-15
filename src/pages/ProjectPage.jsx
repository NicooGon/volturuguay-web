import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import ProjectCard from "../components/ProjectCard";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

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

const FILTERS = ["Todos", "Infraestructura", "Comercial", "Obra Nueva", "Iluminación Exterior", "Industrial"];

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [index, setIndex] = useState(-1); 

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const filtered = activeFilter === "Todos" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tag === activeFilter);

  return (
    <div className="bg-[#EFEDE5] min-h-screen font-sans overflow-x-hidden">
      
      <section className="bg-[#0B141E] pt-32 pb-16 px-[6vw] relative text-left">
        <h1 
          className="text-white md:text-[70px] font-black tracking-tighter leading-[0.8] mb-8" 
          style={{ fontSize: "clamp(3.5rem, 8vw, 5.5rem)" }}
          data-aos="fade-right"
        >
          Todos los proyectos
        </h1>
        <p 
          className="text-white/50 text-[11px] max-w-sm font-bold uppercase tracking-widest border-l-2 border-[#2F7FD8] pl-5"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Instalaciones residenciales, comerciales e industriales en Maldonado.
        </p>
      </section>

      <div className="sticky top-[65px] z-40 bg-[#EFEDE5]/95 backdrop-blur-md border-b border-black/10 py-6 px-[6vw]">
        <div className="relative flex items-center">
          
          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1 pr-10">
            {FILTERS.map((f, i) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                data-aos="fade-down"
                data-aos-delay={i * 50}
                className={`px-5 py-2 rounded-full text-[12px] font-bold transition-all border-2 whitespace-nowrap ${
                  activeFilter === f 
                    ? "bg-[#2F7FD8] border-[#2F7FD8] text-white shadow-md" 
                    : "border-black/10 text-black/70 hover:border-black/30 hover:text-black bg-white/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="absolute right-0 h-full w-12 bg-gradient-to-l from-[#EFEDE5] to-transparent pointer-events-none md:hidden flex items-center justify-end">
            <svg 
              className="h-4 w-4 text-[#2F7FD8] animate-pulse" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>

        </div>
      </div>

      <main className="px-[4vw] py-10 pb-32">
        <div 
          key={activeFilter}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {filtered.map((project, i) => (
            <div 
              key={project.id} 
              onClick={() => setIndex(i)} 
              className="cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={(i % 6) * 50} 
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={filtered.map((p) => ({ 
            src: p.img, 
            title: p.title, 
            description: p.tag 
        }))}
      />
    </div>
  );
}