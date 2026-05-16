import { useState } from "react";
import ContactInfoCard from "../components/ContactInfoCard";
import Particles from "../components/Particles";
import ContactForm from "../components/ContactForm";
import SuccessAlert from "../components/SuccessAlert";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);

  const contactItems = [
    { label: "WhatsApp", val: "+598 93 966 957", icon: "💬", href: "https://wa.me/59893966957" },
    { label: "Email", val: "volturuguay@gmail.com", icon: "✉️", href: "https://mail.google.com/mail/?view=cm&fs=1&to=volturuguay@gmail.com" },
    { label: "Cobertura", val: "Maldonado, Punta del Este y zonas aledañas", icon: "📍" }
  ];

  return (
    <section id="contacto" className="relative py-28 px-4 sm:px-8 md:px-[6vw] bg-[#050A18] overflow-hidden">
      <Particles/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#2F7FD8]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />


      <div className="container mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full min-w-0">
          
          <div data-aos="fade-right">
            <span className="text-[#2F7FD8] text-[0.7rem] font-bold uppercase tracking-[0.3em] flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[#2F7FD8]" /> Contactanos
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-white leading-[1] tracking-tighter mb-8">
              Consultanos sin <br /> compromiso
            </h2>
            <p className="text-slate-400 max-w-sm text-base leading-relaxed mb-12">
              Estamos en Maldonado y Punta del Este para asesorarte. Presupuestos cerrados y sin sorpresas.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {contactItems.map((item, i) => (
                <ContactInfoCard key={i} {...item} />
              ))}
            </div>
          </div>

          <div className="relative group w-full min-w-0" data-aos="fade-left">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2F7FD8] to-blue-600 rounded-[1.5rem] md:rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

            <div className="relative bg-[#0A1124] p-6 md:p-10 lg:p-14 rounded-[1.5rem] md:rounded-[3rem] border border-white/10 shadow-2xl w-full min-w-0">

              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Formulario de Consulta</h3>
              <p className="text-slate-400 text-sm mb-10">Completá los datos y te contactamos en el día.</p>
              
              <ContactForm onSuccess={() => setIsOpen(true)} />
            </div>
          </div>
        </div>
      </div>

      <SuccessAlert isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}