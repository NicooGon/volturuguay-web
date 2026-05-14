import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Home, LayoutGrid, Sun, Car, Cpu, Lightbulb } from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const services = [
  {num: "01 · Residencial", icon: Home, title: "Instalaciones Residenciales", desc: "Electricidad completa para casas y apartamentos. Tableros, circuitos y puesta a tierra bajo normas UTE.",},
  {num: "02 · Comercial", icon: LayoutGrid, title: "Proyectos Comerciales", desc: "Alta y baja tensión para locales, hoteles y oficinas. Certificaciones MTOP y habilitaciones oficiales.",},
  {num: "03 · Solar", icon: Sun, title: "Energía Solar", desc: "Paneles fotovoltaicos con conexión a red UTE. Instalación y gestión de trámites incluidos.",},
  {num: "04 · Movilidad", icon: Car, title: "Cargadores para Autos EV", desc: "Estaciones de carga en garajes privados, edificios y estacionamientos comerciales.",},
  {num: "05 · Smart", icon: Cpu, title: "Automatización", desc: "Domótica, alarmas, cámaras IP y sistemas de control inteligente para hogares modernos.",},
  {num: "06 · Iluminación", icon: Lightbulb, title: "Iluminación Exterior", desc: "Diseño e instalación de iluminación arquitectónica y de jardín para proyectos residenciales y comerciales.",},
];

export default function Services() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="servicios" className="relative overflow-hidden bg-[#F7F9FC] py-28 px-[6vw]">
      
      <div className="absolute top-0 left-0 w-full h-[500px] md:h-[600px]">
        <svg 
          className="w-[120%] md:w-[80%] h-full opacity-[0.06] blur-[1px] -translate-x-[37%] -translate-y-[10%] rotate-[-2deg]" 
          viewBox="0 0 900 220" 
          preserveAspectRatio="xMinYMin slice"
        >
          <path 
            d="M 10 110 C 30 70, 60 40, 120 55 C 200 75, 280 35, 380 50 C 480 65, 560 30, 660 48 C 740 62, 820 40, 890 58 L 890 145 C 820 128, 740 155, 660 140 C 560 122, 480 158, 380 142 C 280 126, 200 162, 120 145 C 60 132, 30 155, 10 135 Z" 
            fill="#1A3D6B" 
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-[500px] md:h-[600px]">
        <svg 
          className="w-[120%] md:w-[80%] h-full opacity-[0.06] blur-[1px] translate-x-[40%] translate-y-[15%] rotate-[-2deg]" 
          viewBox="0 0 700 180" 
          preserveAspectRatio="xMaxYMax slice" 
        >
          <path 
            d="M 5 85 C 25 55, 70 35, 140 48 C 230 65, 310 28, 400 42 C 490 56, 570 25, 650 40 C 685 47, 698 60, 695 90 L 695 118 C 698 135, 685 148, 650 142 C 570 128, 490 158, 400 145 C 310 132, 230 165, 140 150 C 70 138, 25 155, 5 128 Z" 
            fill="#F5C518" 
          />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-10 lg:gap-16 mb-20">
          <div className="relative" data-aos="fade-up">
            <div className="inline-flex items-center gap-3 text-[0.7rem] font-bold tracking-[0.14em] uppercase text-[#2F7FD8] mb-4">
              <span className="w-6 h-[2px] bg-[#2F7FD8] rounded-full" />
              Servicios
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-[#0B1F3A] leading-[1.1] tracking-tighter">
              Soluciones Eléctricas<br />Integrales
            </h2>
          </div>
          
          <div className="lg:text-right lg:justify-self-end" data-aos="fade-left" data-aos-delay="200">
            <p className="text-base md:text-[1rem] text-[#6B7E96] leading-relaxed lg:max-w-[45ch]">
              Servicios profesionales para propiedades residenciales, edificios y
              establecimientos comerciales en la Costa de Oro. Habilitado,
              garantizado y con documentación en regla.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, index) => (
            <div 
              key={svc.num} 
              data-aos="fade-up" 
              data-aos-delay={index * 150}
            >
              <ServiceCard {...svc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}