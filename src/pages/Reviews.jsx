import { useEffect } from "react";
import ReviewCard from "../components/ReviewCard";

const REVIEWS = [
  { name: "Marcela Rodríguez", location: "Punta del Este", review: "Realizaron la instalación eléctrica completa de nuestra casa de veraneo. Trabajo impecable, presupuesto exacto y certificación UTE sin inconvenientes." },
  { name: "Javier Pereira", location: "San Rafael, PDE", review: "Ejecutaron toda la infraestructura eléctrica de nuestro local gastronómico. Cumplieron los plazos, habilitaron ante UTE sin inconvenientes y el resultado fue excelente." },
  { name: "Sofía Garmendia", location: "Manantiales", review: "Instalaron los paneles solares y gestionaron todo el trámite con UTE. Desde el primer mes notamos la reducción en la factura. Profesionalismo de principio a fin." }
];

export default function ReviewSection() {

  return (
    <section id="reseñas" className="relative py-28 px-[6vw] bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          <div className="max-w-xl" data-aos="fade-right">
            <span className="text-[#2F7FD8] text-[0.7rem] font-bold uppercase tracking-[0.2em] flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[#2F7FD8]" /> Testimonios
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-[#0B1F3A] leading-[1.1] tracking-tighter">
              Lo que dicen <br /> nuestros clientes.
            </h2>
          </div>
          <p className="text-[#6B7E96] max-w-sm text-base lg:text-right" data-aos="fade-left">
            La confianza de nuestros clientes es el reflejo de años de trabajo profesional y comprometido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {REVIEWS.map((r, i) => <div key={i} data-aos="fade-up" data-aos-delay={i * 100}><ReviewCard {...r} /></div>)}
        </div>
      </div>
    </section>
  );
}